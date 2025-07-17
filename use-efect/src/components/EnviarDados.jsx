import React, { useState } from "react";

export default function EnviarDados() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const enviarDados = async () => {
    setLoading(true);
    const novoPost = {
      id: 1,
      title: "Conteúdo do novo post"
    };

    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoPost)
      });
      const data = await resp.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Enviar Dados (POST)</h2>
      <button onClick={enviarDados} disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
      {response && (
        <pre style={{ background: "#eee", padding: "1em", marginTop: "1em" }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}