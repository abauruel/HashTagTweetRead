import io from 'socket.io';
import needle from 'needle';
import { Server } from 'http';

const token = process.env.TWITTER_TOKEN;

const stream = needle.get(`${process.env.TWITTER_STREAM_URL}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default function SocketTweet(server: Server) {
  const socket = io(server);
  console.log('hello');
  socket.on('connection', conn => {
    const { tweet } = conn.handshake.query;
    conn.on('tweetApproved', tweet => {
      conn.broadcast.emit('newTweet', tweet);
    });

    stream
      .on('data', data => {
        try {
          if (data.length > 2) {
            const json = JSON.parse(data);
            conn.emit('tweets', json);
          }
        } catch (e) {
          console.log(e);
        }
      })
      .on('error', error => {
        console.log(error);
      });
  });
}
