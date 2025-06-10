import express from 'express';
import http from 'node:http'

import { router, setupSocketListeners } from './router';
import { Server } from 'socket.io';


const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server)

setupSocketListeners(io)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});
app.use(router);

server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
})
