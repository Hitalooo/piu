import React from "react";

export default function UserHome({ username, onLogout }) {
  return (
    <div className="app-center-container">
      <div className="glass-card" style={{ textAlign: "center" }}>
        <h2>Bem-vindo, {username}!</h2>
        <button
          onClick={onLogout}
          style={{
            marginTop: 24,
            width: "100%",
            padding: 10,
            border: "none",
            borderRadius: 7,
            background: "#dc2626",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1.04rem"
          }}
        >
          Voltar para o Login
        </button>
      </div>
    </div>
  );
}