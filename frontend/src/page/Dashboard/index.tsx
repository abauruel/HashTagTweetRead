import React, { useEffect, useState } from "react";
import { FiXSquare } from "react-icons/fi";

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
const Dashboard: React.FC = () => {
  const [rules, setRules] = useState<IRules[]>([]);
  const [hashtag, setHashtag] = useState("");

  useEffect(() => {
    api.get("tweetrules").then((response) => {
      setRules(response.data.data);
    });
  }, []);
  async function handleAddHashTag() {
    const addHashTag = `${hashtag} lang:pt`;
    try {
      const response = await api.post("/tweetrules", {
        value: addHashTag,
      });

      const newRule = response.data.data;
      setRules((state) => [...state, ...newRule]);
      setHashtag("");
    } catch (erro) {
      console.log("erro");
      console.log(erro);
    }
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
  return (
    <Container>
      <ContainerInputHashTag>
        <input
          type="text"
          placeholder="adicione uma hashtag"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />

        <button type="button" onClick={handleAddHashTag}>
          Adicionar
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
        <ContainerContentTweet>
          <TweetHeader>
            <img
              src="https://api.adorable.io/avatars/100/abott@adorable.png"
              alt="image profile"
            />
            <div>
              <strong>Nome</strong>
              <span>username</span>
            </div>
          </TweetHeader>
          <p>conteudo do twittado</p>
          <ContainerAction>
            <ButtonContainerAction type="submit" accept={false}>
              Rejeitar
            </ButtonContainerAction>
            <ButtonContainerAction type="submit" accept={true}>
              Aprovar
            </ButtonContainerAction>
          </ContainerAction>
        </ContainerContentTweet>
      </ContainerTweetToApprove>
    </Container>
  );
};

export default Dashboard;
