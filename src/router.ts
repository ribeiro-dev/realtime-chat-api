import { Router } from 'express';
import { Server, Socket } from 'socket.io';

import { messages } from './mocks/messages';

export const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

const allMessages = messages


export function setupSocketListeners(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log("Socket connected: ", socket.id)
    socket.emit('getMessages', allMessages)

    socket.on('messages@new', (data) => {
      console.log('Mensagem Novas:')
      allMessages.push(data)
      console.log(allMessages)

      data.user = socket.id

      socket.broadcast.emit('messages@new', data);
    });


    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  })
}
