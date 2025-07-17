import React, { useState, useEffect } from "react";

export default function EffectAPI({ trigger }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterLoading, setFilterLoading] = useState(false);

  // Busca todos ao montar e a cada novo cadastro (trigger)
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/usuarios")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, [trigger]);

  const handleFetch = () => {
    setLoading(true);
    fetch("http://localhost:8000/usuarios")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  };

  async function handleSearch(e) {
    e.preventDefault();
    setFilterLoading(true);
    try {
      const resp = await fetch(
        `http://localhost:8000/usuarios?termo=${encodeURIComponent(search)}`
      );
      const data = await resp.json();
      setUsers(data);
    } finally {
      setFilterLoading(false);
    }
  }

  return (
    <div className="tables-container">
      {/* Tabela de nomes */}
      <div>
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
            {users.length === 0 ? (
              <tr>
                <td>Nenhum usuário encontrado</td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={i}>
                  <td>{u.nome}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Tabela de usuários */}
      <div>
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
            {users.length === 0 ? (
              <tr>
                <td>Nenhum usuário encontrado</td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={i}>
                  <td>{u.usuario}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Tabela de cidades */}
      <div>
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
            {users.length === 0 ? (
              <tr>
                <td>Nenhuma cidade encontrada</td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={i}>
                  <td>{u.cidade}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Filtro abaixo das tabelas */}
      <div style={{ marginTop: "2em" }}>
        <form onSubmit={handleSearch} style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            placeholder="Filtrar por nome, usuário ou cidade"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, padding: "0.5em" }}
          />
          <button type="submit" disabled={filterLoading || !search}>
            {filterLoading ? "Buscando..." : "Filtrar"}
          </button>
        </form>
        <small>Digite um termo para filtrar no banco de dados.</small>
      </div>
    </div>
  );
}