import React, { useState } from 'react';

function TelaLogin() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [acessoPermitido, setAcessoPermitido] = useState(false);

  const verificarSenha = (e) => {
    e.preventDefault();
    if (senha === 'AlunoPIU') {
      setAcessoPermitido(true);
    } else {
      alert('Senha incorreta!');
      setAcessoPermitido(false);
    }
  };

  const estiloTela = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: acessoPermitido ? '#90ee90' : '#f0f0f0',
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

  return (
    <div style={estiloTela}>
      <form onSubmit={verificarSenha} style={estiloFormulario}>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
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
