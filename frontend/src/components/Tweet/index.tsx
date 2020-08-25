import React from "react";

import { Container, Header, Info, TweetContent, TweetImage } from "./styles";

interface ITweet {
  id?: string;
  name: string;
  username: string;
  profile_image_url: string;
  text: string;
}

const Tweet: React.FC<ITweet> = ({ ...tweet }) => {
  return (
    <Container>
      <Header>
        <img src={tweet.profile_image_url} alt={tweet.name} />
        <Info>
          <strong>{tweet.name}</strong>
          <span>{tweet.username}</span>
        </Info>
      </Header>
      <TweetContent>{tweet.text}</TweetContent>
      {/* {tweet.includes.media?.map((media) => (
        <TweetImage src={media.url} alt={media.url} />
      ))} */}
    </Container>
  );
};

export default Tweet;
