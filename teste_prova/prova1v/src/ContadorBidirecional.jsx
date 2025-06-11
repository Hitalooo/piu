import React, { useState, useEffect } from "react";

// Definição do componente funcional
export default function ContadorBidirecional() {
  // Declara um estado chamado 'contador', inicializado em 0
  const [contador, setContador] = useState(0);

  // useEffect roda apenas ao montar o componente, zerando o contador
  useEffect(() => {
    setContador(0);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: 32 }}>
      <h2>Contador: {contador}</h2>
      <button
        style={{
          margin: 8,
          padding: "8px 24px",
          background: contador > 10 ? "#4caf50" : "#e0e0e0", // muda cor se contador > 10
          color: contador > 10 ? "white" : "black",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => setContador(contador + 1)} // Incrementa ao clicar
      >
        Incrementar
      </button>
      <button
        style={{
          margin: 8,
          padding: "8px 24px",
          background: contador < 0 ? "#ef5350" : "#e0e0e0", // muda cor se contador < 0
          color: contador < 0 ? "white" : "black",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => setContador(contador - 1)} // Decrementa ao clicar
      >
        Decrementar
      </button>
    </div>
  );
}