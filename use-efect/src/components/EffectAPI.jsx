import React, { useState, useEffect } from "react";
import "./EffectAPI.css";

export default function EffectAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  // Busca os dados quando o botão é clicado (fetchTrigger muda)
  useEffect(() => {
    if (fetchTrigger === 0) return; // ignora no mount inicial
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => alert("Erro ao buscar usuários!"))
      .finally(() => setLoading(false));
  }, [fetchTrigger]);

  const handleFetch = () => setFetchTrigger((n) => n + 1);

  return (
    <div className="tables-container">
      <div className="table-block name-table">
        <h2>Nomes</h2>
        <button onClick={handleFetch} disabled={loading}>
          Buscar nomes
        </button>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-block username-table">
        <h2>Usuários</h2>
        <button onClick={handleFetch} disabled={loading}>
          Buscar usuários
        </button>
        <table>
          <thead>
            <tr>
              <th>Nome de Usuário</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-block city-table">
        <h2>Cidades</h2>
        <button onClick={handleFetch} disabled={loading}>
          Buscar cidades
        </button>
        <table>
          <thead>
            <tr>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}