import { useState, useEffect } from 'react';

const STORAGE_KEY = 'tasks';

function readStoredTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(task => task && typeof task.id === 'string' && typeof task.name === 'string' && typeof task.completed === 'boolean');
  } catch (error) {
    console.warn('No se pudieron recuperar las tareas:', error);
    return [];
  }
}

const useTaskData = () => {
  const [tasks, setTasks] = useState(readStoredTasks);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.warn('No se pudieron guardar las tareas:', error);
    }
  }, [tasks]);

  return { tasks, setTasks };
};

export default useTaskData;
