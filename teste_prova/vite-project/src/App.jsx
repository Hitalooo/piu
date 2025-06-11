import React, { useState } from "react";
import tasksData from "./tasks";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleTask(id) {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleAddTask({ title, description }) {
    setTasks(tasks => [
      ...tasks,
      { id: Date.now(), title, description, done: false }
    ]);
  }

  function handleEditTask(id, title, description) {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, title, description } : task
      )
    );
  }

  function handleToggleTheme() {
    setDarkMode(dark => !dark);
    document.body.classList.toggle("dark", !darkMode);
  }

  return (
    <div className="app">
      <button className="theme-btn" onClick={handleToggleTheme}>
        {darkMode ? "Light mode" : "Dark mode"}
      </button>
      <TaskForm onSubmit={handleAddTask} />
      <Dashboard>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onEdit={handleEditTask}
          />
        ))}
      </Dashboard>
    </div>
  );
}

export default App;