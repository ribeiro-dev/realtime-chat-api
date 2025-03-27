import express from 'express';
import http from 'node:http'

import { router } from './router';


const PORT = 3000;
const app = express();
const server = http.createServer(app);

app.use(router);

server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
})
