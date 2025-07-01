import { Router } from 'express';
import { Server, Socket } from 'socket.io';

import { messages } from './mocks/messages';
import { Message } from './types/message';

export const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

const allMessages: Message[] = messages


export function setupSocketListeners(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log("Socket connected: ", socket.id)
    socket.emit('getMessages', allMessages)

    socket.on('messages@new', (data: Message) => {
      console.log('Mensagem Novas:')
      allMessages.push(data)
      console.log(allMessages)

      data.user = socket.id
      data.owner = false
      data.date = new Date()

      socket.broadcast.emit('messages@new', data);
    });


    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  })
}
