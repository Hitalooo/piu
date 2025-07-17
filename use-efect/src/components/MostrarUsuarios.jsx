import React, { useState } from "react";

export default function MostrarUsuarios({ trigger }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  async function buscarUsuarios() {
    setLoading(true);
    try {
      const resp = await fetch("http://localhost:8000/usuarios");
      const data = await resp.json();
      setUsuarios(data);
    } catch {
      alert("Erro ao buscar usuários!");
      setUsuarios([]);
    } finally {
      setLoading(false);
    }
  }

  // Atualiza lista de usuários quando trigger muda (após cadastro)
  React.useEffect(() => {
    if (trigger > 0) buscarUsuarios();
  }, [trigger]);

  return (
    <div style={{ marginTop: "2em" }}>
      <button onClick={buscarUsuarios} disabled={loading} style={{ marginBottom: "1em" }}>
        {loading ? "Carregando..." : "Mostrar todos os usuários"}
      </button>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>Nenhum usuário encontrado</td>
            </tr>
          ) : (
            usuarios.map((u, i) => (
              <tr key={i}>
                <td>{u.nome}</td>
                <td>{u.usuario}</td>
                <td>{u.cidade}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}