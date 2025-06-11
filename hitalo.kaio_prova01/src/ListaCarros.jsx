import React from "react";
import { carros } from "./dados_carros.js";

export default function ListaCarros() {
  return (
    <div style={{ margin: 32 }}>
      <h2>Todos os carros (modelo e cor):</h2>
      <ul>
        {carros.map((carro, idx) => (
          <li key={idx}>
            {carro.modelo} - {carro.cor}
          </li>
        ))}
      </ul>
{/* A PARTIR DAQUI É A SEGUNDA LISTA  */}
      <h2>Carros vermelhos (modelo e ano):</h2>
      <ul>
        {carros
          .filter((carro) => carro.ano > "2019")
          .map((carro, idx) => (
            <li key={idx}>
              {carro.modelo} - {carro.ano}
            </li>
          ))}
      </ul>
    </div>
  );
}