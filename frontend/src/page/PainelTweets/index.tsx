import React, { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

import { Container, Content, PaginationContainer } from "./styles";
import Tweet from "../../components/Tweet";
interface ITweet {
  id?: string;
  name: string;
  username: string;
  profile_image_url: string;
  text: string;
}

const PainelTweets: React.FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:3333");
    socket.on("newTweet", (newTweet: any) => {
      const tweet: ITweet = JSON.parse(newTweet);
      setTweets((state) => [...state, tweet]);
    });
  }, []);

  return (
    <Container>
      <Content>
        {tweets?.map((tweet) => {
          return <Tweet key={tweet.id} {...tweet} />;
        })}
      </Content>
    </Container>
  );
};

export default PainelTweets;
