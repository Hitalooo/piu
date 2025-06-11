import React, { useState, useEffect } from "react";
import "./TaskForm.css";

export default function TaskForm({ onSubmit, initialValue, onCancel }) {
  const [title, setTitle] = useState(initialValue?.title || "");
  const [description, setDescription] = useState(initialValue?.description || "");

  useEffect(() => {
    setTitle(initialValue?.title || "");
    setDescription(initialValue?.description || "");
  }, [initialValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      onSubmit({ title: title.trim(), description: description.trim() });
      setTitle("");
      setDescription("");
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form-title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Título da tarefa"
        required
        autoFocus
      />
      <textarea
        className="task-form-desc"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Descrição (opcional)"
        rows={2}
      />
      <div className="task-form-actions">
        <button type="submit">Salvar</button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}