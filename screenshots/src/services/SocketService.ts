import { io, Socket } from "socket.io-client";

export class SocketService {
  private static instance: SocketService;
  private socket: Socket | null = null;
  private readonly host = import.meta.env.VITE_WEBSOCKET_HOST;

  private constructor() {}

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }

    return SocketService.instance;
  }

  public connect() {
    if (!this.socket) {
      this.socket = io(this.host, {
        transports: ["websocket"],
      });

      this.socket.on("connect", () => {
        console.log("Socket connected:", this.socket?.id);
      });
    }
  }

  public disconnect() {
    this.socket?.disconnect();
    this.socket?.offAny(); // removes any listener
    this.socket = null;
  }

  public getSocket(): Socket | null {
    return this.socket;
  }

}
