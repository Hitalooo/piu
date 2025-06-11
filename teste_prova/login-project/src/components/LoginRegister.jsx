import React, { useState } from "react";

// Mock "banco de dados" em localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}
function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export default function LoginRegister({ onLogin }) {
  const [mode, setMode] = useState("login"); // 'login' ou 'register'
  const [fields, setFields] = useState({
    username: "",
    password: "",
    email: "",
    birth: ""
  });
  const [error, setError] = useState("");

  // Limpa campos ao alternar modo
  function switchMode(newMode) {
    setMode(newMode);
    setFields({ username: "", password: "", email: "", birth: "" });
    setError("");
  }

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      if (!fields.username || !fields.password) {
        setError("Preencha usuário e senha.");
        return;
      }
      const users = getUsers();
      const user = users.find(
        u => u.username === fields.username && u.password === fields.password
      );
      if (!user) {
        setError("Usuário ou senha inválidos.");
        return;
      }
      onLogin(user.username);
    } else {
      // Cadastro
      if (
        !fields.username ||
        !fields.password ||
        !fields.email ||
        !fields.birth
      ) {
        setError("Preencha todos os campos.");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(fields.email)) {
        setError("E-mail inválido.");
        return;
      }
      if (fields.password.length < 5) {
        setError("Senha deve ter pelo menos 5 caracteres.");
        return;
      }
      const users = getUsers();
      if (users.find(u => u.username === fields.username)) {
        setError("Usuário já existe.");
        return;
      }
      users.push({
        username: fields.username,
        password: fields.password,
        email: fields.email,
        birth: fields.birth
      });
      setUsers(users);
      onLogin(fields.username);
    }
  }

  return (
    <div className="app-center-container">
      <form className="glass-card" onSubmit={handleSubmit} autoComplete="off">
        <h2>{mode === "login" ? "Login" : "Cadastro"}</h2>
        <label>
          Usuário:
          <input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            required
          />
        </label>
        {mode === "register" && (
          <>
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </label>
            <label>
              Data de Nascimento:
              <input
                type="date"
                name="birth"
                value={fields.birth}
                onChange={handleChange}
                required
                max={new Date().toISOString().split("T")[0]}
              />
            </label>
          </>
        )}
        {error && <div className="error-msg">{error}</div>}
        <button type="submit">
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <div style={{ marginTop: 16, textAlign: "center" }}>
          {mode === "login" ? (
            <>
              Não tem conta?{" "}
              <button
                type="button"
                className="secondary-btn"
                onClick={() => switchMode("register")}
              >
                Cadastrar
              </button>
            </>
          ) : (
            <>
              Já tem conta?{" "}
              <button
                type="button"
                className="secondary-btn"
                onClick={() => switchMode("login")}
              >
                Login
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}