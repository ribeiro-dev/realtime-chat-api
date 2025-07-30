import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";

export function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user = username.trim()
    if (!user.length) return

    localStorage.setItem("username", username)
    navigate('/chat')
  }

  return (
    <>
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h1>Bem vindo!</h1>
        <form
          name="user"
          style={{
            width: "100%",
            maxWidth: "500px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            name="username"
            style={{
              backgroundColor: "#293038",
              border: "none",
              borderRadius: 6,
              margin: "20px 0",
              height: "40px",
              width: "100%",
              fontSize: "14px",
              padding: "10px",
              color: "white",
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu nome"
            autoComplete="off"
            type="text"
          />
          <Button handleClick={e => handleSubmit(e)}>
            Continuar
          </Button>
        </form>
      </div>
    </>
  );
}
