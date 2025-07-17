import React, { useState } from "react";

export default function FormUsuario({ onAdd }) {
  const [form, setForm] = useState({ nome: "", usuario: "", cidade: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("http://localhost:8000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (onAdd) onAdd(); // Notifica para atualizar lista de usuários
      setForm({ nome: "", usuario: "", cidade: "" });
    } catch {
      alert("Erro ao cadastrar!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2em" }}>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
      <input name="usuario" placeholder="Usuário" value={form.usuario} onChange={handleChange} required />
      <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} required />
      <button type="submit" disabled={loading}>Cadastrar</button>
    </form>
  );
}