import React, { useState } from "react";
import FormUsuario from "./components/FormUsuario";
import EffectAPI from "./components/EffectAPI";
import "./App.css";

function App() {
  const [trigger, setTrigger] = useState(0);

  function handleAdd() {
    setTrigger(t => t + 1);
  }

  return (
    <div style={{ maxWidth: 800, margin: "2em auto" }}>
      <h1>Cadastro e Consulta de Usuários</h1>
      <FormUsuario onAdd={handleAdd} />
      <EffectAPI trigger={trigger} />
    </div>
  );
}

export default App;