import React, { useState } from 'react';
import Galeria from './components/Galeria';
import Detalhes from './components/Detalhes';
import TemaButton from './components/TemaButton';

import styles from './App.module.css';
import { personagens } from './theme';

export default function App() {
  const [tema, setTema] = useState('light');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  function alternarTema() {
    setTema(tema === 'light' ? 'dark' : 'light');
  }

  function selecionarPersonagem(personagem) {
    setPersonagemSelecionado(personagem);
  }

  function fecharDetalhes() {
    setPersonagemSelecionado(null);
  }

  return (
    <div className={`${styles.app} ${styles[tema]}`}>
      <header className={styles.header}>
        <h1>Galeria de Personagens</h1>
        <TemaButton tema={tema} alternarTema={alternarTema} />
      </header>
      <Galeria
        personagens={personagens}
        onSelecionar={selecionarPersonagem}
      />
      {personagemSelecionado && (
        <Detalhes
          personagem={personagemSelecionado}
          onClose={fecharDetalhes}
          tema={tema}
        />
      )}
    </div>
  );
}