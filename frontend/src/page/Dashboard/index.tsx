import React, { useEffect, useState, useMemo } from "react";
import { FiXSquare } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

import io from "socket.io-client";

import {
  Container,
  ContainerInputHashTag,
  ContainerHashTag,
  ContainerTweetToApprove,
  ContainerContentTweet,
  TweetHeader,
  ContainerAction,
  ButtonContainerAction,
} from "./styles";

import api from "../../services/api";

interface IRules {
  id: string;
  value: string;
}

interface User {
  profile_image_url: string;
  name: string;
  username: string;
}
interface IMedia {
  url: string;
  type: string;
  media_key: string;
}

interface IIncludes {
  users: User[];
  media: IMedia[];
}

interface ITweetResponse {
  data: {
    id?: string;
    text: string;
  };
  includes: IIncludes;
}

const Dashboard: React.FC = () => {
  const [rules, setRules] = useState<IRules[]>([]);
  const [hashtag, setHashtag] = useState("");
  const [tweetsToApprove, setTweetToApprove] = useState<ITweetResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      api.get("tweetrules").then((response) => {
        setRules(response.data.data);
      });
    } catch (e) {
      console.log("Unable to get rules");
    }
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:3333");
    socket.on("tweets", (data: ITweetResponse) => {
      const newTweetToApprove: ITweetResponse = data;
      setTweetToApprove((state) => [...state, newTweetToApprove]);
    });
  }, []);

  async function handleAddHashTag() {
    setLoading(true);
    const addHashTag = `${hashtag}`;
    try {
      const response = await api.post("/tweetrules", {
        value: addHashTag,
      });

      const newRule = response.data.data;

      rules.length > 0
        ? setRules((state) => [...state, newRule])
        : setRules([...newRule]);
    } catch (erro) {
      console.log(erro);
    }
    setHashtag("");
    setLoading(false);
  }

  async function handleRemoveHashTag(id: string) {
    try {
      await api.delete(`tweetrules/${id}`);
      const rulesUpdated = rules.filter((rule) => rule.id !== id);
      setRules(rulesUpdated);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleApproveTweet(tweet: ITweetResponse) {
    try {
      const { id, text } = tweet.data;
      const { profile_image_url, name, username } = tweet.includes.users[0];
      const newTweet = { id, name, username, profile_image_url, text };
      const socket = io("http://localhost:3333");
      socket.emit("tweetApproved", JSON.stringify(newTweet));

      const tweetsToApproveUpdated = tweetsToApprove.filter(
        (tweetToApprove) => tweetToApprove.data.id !== tweet.data.id
      );
      setTweetToApprove([...tweetsToApproveUpdated]);
    } catch (error) {
      console.log("Unable to approve tweet, try again");
    }
  }
  async function handleRejectTweet(tweet: ITweetResponse) {
    const tweetsToApproveUpdated = tweetsToApprove.filter(
      (tweetToApprove) => tweetToApprove.data.id !== tweet.data.id
    );
    setTweetToApprove([...tweetsToApproveUpdated]);
  }
  const rulesList = useMemo(() => {
    return rules;
  }, [rules]);
  return (
    <Container>
      <ContainerInputHashTag loading={loading}>
        <input
          type="text"
          placeholder="adicione uma hashtag a monitorar"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />

        <button type="button" onClick={handleAddHashTag}>
          {loading ? <FaSpinner /> : "Adicionar"}
        </button>
      </ContainerInputHashTag>
      <ContainerHashTag>
        {rules?.map((rule) => (
          <div key={rule.id}>
            <span>{rule.value}</span>
            <button onClick={(e) => handleRemoveHashTag(rule.id)}>
              <FiXSquare color="#fff" size={20} />
            </button>
          </div>
        ))}
      </ContainerHashTag>
      <ContainerTweetToApprove>
        {tweetsToApprove.map((tweet) => (
          <ContainerContentTweet key={tweet.data.id}>
            <TweetHeader>
              <img
                src={tweet.includes.users[0].profile_image_url}
                alt={tweet.includes.users[0].username}
              />
              <div>
                <strong>{tweet.includes.users[0].name}</strong>
                <span>{tweet.includes.users[0].username}</span>
              </div>
            </TweetHeader>
            <p>{tweet.data.text}</p>
            <ContainerAction>
              <ButtonContainerAction
                type="submit"
                accept={false}
                onClick={() => handleRejectTweet(tweet)}
              >
                Rejeitar
              </ButtonContainerAction>
              <ButtonContainerAction
                type="submit"
                accept={true}
                onClick={() => handleApproveTweet(tweet)}
              >
                Aprovar
              </ButtonContainerAction>
            </ContainerAction>
          </ContainerContentTweet>
        ))}
      </ContainerTweetToApprove>
    </Container>
  );
};

export default Dashboard;
