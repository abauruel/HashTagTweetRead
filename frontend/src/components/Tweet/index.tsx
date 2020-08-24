import React from "react";

import { Container, Header, Info, TweetContent, TweetImage } from "./styles";
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
  media?: IMedia[];
}

interface ITweet {
  data: {
    id?: string;
    text: string;
  };
  includes: IIncludes;
}

const Tweet: React.FC<ITweet> = ({ ...tweet }) => {
  console.log(tweet);
  return (
    <Container>
      <Header>
        <img
          src={tweet.includes.users[0].profile_image_url}
          alt={tweet.includes.users[0]?.name}
        />
        <Info>
          <strong>{tweet.includes.users[0].name}</strong>
          <span>{tweet.includes.users[0].username}</span>
        </Info>
      </Header>
      <TweetContent>{tweet.data.text}</TweetContent>
      {tweet.includes.media?.map((media) => (
        <TweetImage src={media.url} alt={media.url} />
      ))}
    </Container>
  );
};

export default Tweet;
