import React, { useState } from 'react';
import './TelaLogin.css';

function TelaLogin() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [acessoPermitido, setAcessoPermitido] = useState(false);

  const verificarSenha = (e) => {
    e.preventDefault();
    if (senha === 'AlunoPIU') {
      setAcessoPermitido(true);
    } else {
      alert('senha incorreta');
      setAcessoPermitido(false);
    }
  };

  const estiloTela = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: acessoPermitido ? '#88e688' : '#ffffff',
    transition: 'background-color 0.5s',
  };

  const estiloFormulario = {
    padding: '2rem',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  //por algum motivo não carregou o CSS e fiiz em javascript mesmo
  return (
    <div style={estiloTela}>
      <form onSubmit={verificarSenha} style={estiloFormulario}>
        <label>
          login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}/>
        </label>
        <label>
          Palavra-passe:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default TelaLogin;
