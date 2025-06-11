import React, { useState, useEffect } from "react";

// Definição inicial do contador
export default function ContadorBidirecional() {
  // declara um estado chamado 'contador', que começa em 0
  const [contador, setContador] = useState(0);

  // useeffect só vai roda apenas ao montar o componente pra zerar o contador
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
          width: "40px",
          height: "40px",
          width: contador > 10 ? "95px" : "", // muda tamanho se contador > 10
          height: contador > 10 ? "50px" : "", // muda tamanho se contador > 10
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => setContador(contador + 1)} // Incrementa ao clicar
      >
        +
      </button>
      <button
        style={{
          margin: 8,
        //   padding: "8px 24px",
          width: "40px",
          height: "40px",
          width: contador < 0 ? "20px" : "", // diminui tamanho se contador < 0
          height: contador < 0 ? "20px" : "", // muda tamanho se contador > 10
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => setContador(contador - 1)} // Decrementa ao clicar
      >
        -
      </button>
    </div>
  );
}