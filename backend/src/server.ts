import express from 'express';
import needle from 'needle';
import http from 'http';
import io from 'socket.io';
import cors from 'cors';
import 'dotenv/config';
import routes from './shared/infra/http/routes';
import axios from 'axios';

axios.defaults.headers = {
  Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
};

const token = process.env.TWITTER_TOKEN;

const streamURL = process.env.TWITTER_STREAM_URL;
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

const stream = needle.get(`${process.env.TWITTER_STREAM_URL}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const socket = io(server);
let num = 0;
// socket.on('connection', conn => {
//   console.log(conn.id);
//   stream
//     .on('data', data => {
//       try {
//         const json: ITweet = JSON.parse(data);
//         conn.emit('tweets', json);
//       } catch (e) {
//         console.log(e);
//       }
//     })
//     .on('error', error => {
//       console.log(error);
//     });
// });

server.listen(3333, () => console.log('..🚀Server is running on port 3333 '));
