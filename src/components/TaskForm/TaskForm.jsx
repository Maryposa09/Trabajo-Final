import React, { useState } from 'react';

const TaskForm = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = taskName.trim();
    if (!name) return;
    onTaskAdded({ id: crypto.randomUUID(), name, completed: false });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="Nombre de la tarea"
        placeholder="Escriba una tarea"
        maxLength={200}
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
