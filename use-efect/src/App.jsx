import React from "react";
import EffectAPI from "./components/EffectAPI.jsx";
import EnviarDados from "./components/EnviarDados";
import FormUsuario from "./components/FormUsuario.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Exemplo EffectAPI e EnviarDados</h1>
      <EffectAPI />
      <EnviarDados />
      <FormUsuario />
    </div>
  );
}

export default App;