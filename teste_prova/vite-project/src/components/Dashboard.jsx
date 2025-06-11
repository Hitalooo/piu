import React from "react";

export default function Dashboard({ children }) {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {children}
    </div>
  );
}