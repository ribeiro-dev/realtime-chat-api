import socketIo from "socket.io-client";

const websocketHost = import.meta.env.VITE_WEBSOCKET_HOST

export const socket = socketIo(`${websocketHost}`, {
  transports: ["websocket"],
});
