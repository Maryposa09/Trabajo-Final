import React from 'react';

const TaskItem = ({ task, onTaskCompleted, onTaskDeleted }) => (
  <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
    {task.name}
    <button type="button" onClick={() => onTaskCompleted(task.id)}>
      {task.completed ? 'Marcar pendiente' : 'Completar'}
    </button>
    <button type="button" onClick={() => onTaskDeleted(task.id)}>Borrar</button>
  </li>
);

export default TaskItem;
