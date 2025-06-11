import React, { useState } from "react";
import LoginRegister from "./components/LoginRegister";
import UserHome from "./components/UserHome";

function App() {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");

  const handleLogin = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
  };

  const handleLogout = () => {
    setUsername("");
    localStorage.removeItem("username");
  };

  return (
    username
      ? <UserHome username={username} onLogout={handleLogout} />
      : <LoginRegister onLogin={handleLogin} />
  );
}

export default App;