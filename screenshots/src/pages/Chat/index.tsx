import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { useNavigate } from "react-router-dom";

import { Body } from "./components/Body";

import { SocketService } from "../../services/SocketService";
import { Message } from "../../types/message";


export function Chat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate()
  const socketService = SocketService.getInstance();


  function sendMessage(e: React.FormEvent) {
    e.preventDefault();

    if (!socket) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const value = (form[0] as HTMLInputElement).value.trim(); // handles the .value error

    const messageDate = new Date();
    const messageId = socket.id! + messageDate.getTime();

    const newMessage: Message = {
      id: messageId,
      user: username,
      content: value,
      date: messageDate,
    };
    socket?.emit("messages@new", newMessage);

    setMessages(prevState => {
      return [...prevState, newMessage]
    })
  }

  useEffect(() => {
    const user = localStorage.getItem("username")
    if (!user) {
      navigate("/")
      return
    }

    setUsername(user)
  }, [navigate])

  useEffect(() => {
    socketService.connect();
    const currentSocket = socketService.getSocket();
    setSocket(currentSocket);

    // Socket Listeners
    const getMessages = (data: Message[]) => {
      const formattedData = data.map((message: Message) => {
        message.date = new Date(message.date);

        return message;
      });
      setMessages(formattedData);
      console.log(data);
    };

    const getNewMessage = (data: Message) => {
      setMessages((prevState) => {
        data.date = new Date(data.date);
        return [...prevState, data];
      });
    };

    currentSocket?.on("getMessages", getMessages);
    currentSocket?.on("messages@new", getNewMessage);

    return () => {
      socketService.disconnect();
    };
  }, [socketService]);


  return (
    <Body messages={messages} socket={socket} handleFormSubmit={sendMessage} />
  );
}
