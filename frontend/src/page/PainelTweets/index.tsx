import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import { Container } from "./styles";
import Tweet from "../../components/Tweet";
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

interface ITweet {
  data: {
    id?: string;
    text: string;
  };
  includes: IIncludes;
}
const staticTweet = [
  {
    data: {
      id: "1",
      text:
        "RT @Dc_da_depressao: 🚨🚨Zack Snyder Divulgou o pr…!!!↵#SnyderCut↵#DCFanDome https://t.co/LwuLgsEtPB",
    },
    includes: {
      users: [
        {
          name: "𝕽 𝖊 𝖓 ツ #DcFanDome",
          username: "_Rennan_Macena_",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1296923984714510336/4v8h4LvE_normal.jpg",
        },
      ],
      media: [
        {
          url: "https://pbs.twimg.com/media/EgHXtiaXYAAMmCl.jpg",
          media_key: "1",
          type: "photo",
        },
      ],
    },
  },
  {
    data: {
      id: "1",
      text:
        "RT @Dc_da_depressao: 🚨🚨Zack Snyder Divulgou o pr…!!!↵#SnyderCut↵#DCFanDome https://t.co/LwuLgsEtPB",
    },
    includes: {
      users: [
        {
          name: "𝕽 𝖊 𝖓 ツ #DcFanDome",
          username: "_Rennan_Macena_",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1296923984714510336/4v8h4LvE_normal.jpg",
        },
      ],
      media: [
        {
          url: "https://pbs.twimg.com/media/EgHXtiaXYAAMmCl.jpg",
          media_key: "1",
          type: "photo",
        },
      ],
    },
  },
  {
    data: {
      id: "1",
      text:
        "RT @Dc_da_depressao: 🚨🚨Zack Snyder Divulgou o pr…!!!↵#SnyderCut↵#DCFanDome https://t.co/LwuLgsEtPB",
    },
    includes: {
      users: [
        {
          name: "𝕽 𝖊 𝖓 ツ #DcFanDome",
          username: "_Rennan_Macena_",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1296923984714510336/4v8h4LvE_normal.jpg",
        },
      ],
      media: [
        {
          url: "https://pbs.twimg.com/media/EgHXtiaXYAAMmCl.jpg",
          media_key: "1",
          type: "photo",
        },
      ],
    },
  },
  {
    data: {
      id: "1",
      text:
        "RT @Dc_da_depressao: 🚨🚨Zack Snyder Divulgou o pr…!!!↵#SnyderCut↵#DCFanDome https://t.co/LwuLgsEtPB",
    },
    includes: {
      users: [
        {
          name: "𝕽 𝖊 𝖓 ツ #DcFanDome",
          username: "_Rennan_Macena_",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1296923984714510336/4v8h4LvE_normal.jpg",
        },
      ],
      media: [
        {
          url: "https://pbs.twimg.com/media/EgHXtiaXYAAMmCl.jpg",
          media_key: "1",
          type: "photo",
        },
      ],
    },
  },
  {
    data: {
      id: "1",
      text:
        "RT @Dc_da_depressao: 🚨🚨Zack Snyder Divulgou o pr…!!!↵#SnyderCut↵#DCFanDome https://t.co/LwuLgsEtPB",
    },
    includes: {
      users: [
        {
          name: "𝕽 𝖊 𝖓 ツ #DcFanDome",
          username: "_Rennan_Macena_",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1296923984714510336/4v8h4LvE_normal.jpg",
        },
      ],
      media: [
        {
          url: "https://pbs.twimg.com/media/EgHXtiaXYAAMmCl.jpg",
          media_key: "1",
          type: "photo",
        },
      ],
    },
  },
];

const PainelTweets: React.FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>(staticTweet);
  // useEffect(() => {
  //   const socket = io("http://localhost:3333");
  //   socket.on("tweets", (data: ITweet) => {
  //     setTweets((state) => [...state, data]);
  //   });
  // }, []);

  return (
    <Container>
      {tweets.map((tweet, idx) => {
        console.log(idx);
        if (idx > tweets.length - 10) return <Tweet {...tweet} />;
      })}
    </Container>
  );
};

export default PainelTweets;
