import React from "react";
import { carros } from "./dados_carro";

export default function ListaCarros() {
  return (
    <div style={{ margin: 32 }}>
      <h2>Todos os carros (modelo e ano):</h2>
      <ul>
        {carros.map((carro, idx) => (
          <li key={idx}>
            {carro.modelo} - {carro.ano}
          </li>
        ))}
      </ul>

      <h2>Carros vermelhos (modelo e ano):</h2>
      <ul>
        {carros
          .filter((carro) => carro.cor.toLowerCase() === "vermelha")
          .map((carro, idx) => (
            <li key={idx}>
              {carro.modelo} - {carro.ano}
            </li>
          ))}
      </ul>
    </div>
  );
}