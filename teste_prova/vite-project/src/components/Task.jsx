import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./Task.css";

export default function Task({ task, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);

  function handleEdit(data) {
    onEdit(task.id, data.title, data.description);
    setEditing(false);
  }

  if (editing) {
    return (
      <div className="task editing">
        <TaskForm
          initialValue={task}
          onSubmit={handleEdit}
          onCancel={() => setEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className={`task${task.done ? " done" : ""}`}>
      <div className="task-body">
        <strong className="task-title">{task.title}</strong>
        {task.description && (
          <p className="task-desc">{task.description}</p>
        )}
      </div>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.done ? "Desfazer" : "Concluir"}
        </button>
        <button onClick={() => setEditing(true)}>
          Editar
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          Excluir
        </button>
      </div>
    </div>
  );
}