import React, { useState } from "react";

export default function FormUsuario() {
  const [form, setForm] = useState({ nome: "", usuario: "", cidade: "" });
  const [loading, setLoading] = useState(false);
  const [resposta, setResposta] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResposta(null);
    try {
      const resp = await fetch("http://localhost:8000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await resp.json();
      setResposta(data);
    } catch (err) {
      setResposta({ erro: "Falha ao enviar dados!" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "2rem", border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input name="nome" value={form.nome} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Usuário:
          <input name="usuario" value={form.usuario} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Cidade:
          <input name="cidade" value={form.cidade} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
      </form>
      {resposta && (
        <pre style={{ background: "#f8f8f8", marginTop: 16, padding: 10 }}>
          {JSON.stringify(resposta, null, 2)}
        </pre>
      )}
    </div>
  );
}