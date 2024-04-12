import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageLayout from './components/layout/PageLayout'
import LostPage from './pages/LostPage'
import { TaskInterface } from './interface/interface'

const App = () => {

  const [tasks, setTasks] = useState<TaskInterface[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task: TaskInterface) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={ <HomePage tasks={tasks} setTasks={setTasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} /> } />
        <Route path="*" element={ <LostPage /> } />
      </Routes>
    </PageLayout>
  )
}

export default App
