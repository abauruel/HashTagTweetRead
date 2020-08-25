import 'dotenv/config';

import express from 'express';

import http from 'http';
import cors from 'cors';
import routes from './shared/infra/http/routes';
import axios from 'axios';
import socket from './modules/Tweet/infra/http/socket';

axios.defaults.headers = {
  Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
};

interface ITweet {
  data: {
    id: string;
    text: string;
  };
  includes: {
    users: [{ profile_image_url: string; name: string; username: string }];
    media?: [{ url: string; type: string }];
  };
}
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
const server = http.createServer(app);
socket(server);

server.listen(3333, () => console.log('..🚀Server is running on port 3333 '));
