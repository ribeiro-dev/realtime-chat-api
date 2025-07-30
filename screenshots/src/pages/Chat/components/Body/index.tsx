import { useEffect, useRef } from "react";
import { Socket } from "socket.io-client";

import { Message } from "./components/Message";
import { MessageForm } from "./components/MessageForm";
import { Loading } from "./components/Loading";

import { Container, MessagesContainer, MessagesWrapper } from "./styles";

interface BodyProps {
  messages: Message[];
  socket: Socket | null;
  handleFormSubmit: (e: React.FormEvent) => void;
}

interface Message {
  id: string;
  user: string;
  content: string;
  date: Date;
}

export function Body({ messages, socket, handleFormSubmit }: BodyProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const username = localStorage.getItem("username");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      {!socket?.connected ? (
        <Loading />
      ) : (
        <MessagesContainer>
          <MessagesWrapper>
            {messages.map(({ id, user, content, date }) => (
              <Message
                key={id}
                user={user}
                content={content}
                date={date.toLocaleString()}
                owner={user == username}
              />
            ))}

            {/* Only to scroll reference */}
            <div ref={messagesEndRef} />
          </MessagesWrapper>
        </MessagesContainer>
      )}

      <MessageForm onSubmit={handleFormSubmit} />
    </Container>
  );
}
