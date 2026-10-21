import './App.css';
import React from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import useTaskData from './components/TaskData/TaskData';

function App() {
  const { tasks, setTasks } = useTaskData();

  const handleAddTask = (newTask) => {
    setTasks((current) => [...current, newTask]);
  };

  const handleTaskCompleted = (taskId) => {
    setTasks((current) => current.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleTaskDeleted = (taskId) => {
    setTasks((current) => current.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Organizador de tareas</h1>
      <TaskForm onTaskAdded={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskCompleted={handleTaskCompleted}
        onTaskDeleted={handleTaskDeleted}
      />
    </>
  );
}

export default App;
