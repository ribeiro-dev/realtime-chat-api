import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useViewportHeight } from "./hooks/useViewportHeight";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";

function App() {
  useViewportHeight();

  return (
    <>
      <GlobalStyles />

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
