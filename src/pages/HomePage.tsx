import { useState } from 'react';

import TaskList from '../components/TaskList';
import Typo from '../components/Typo';
import IconText from '../components/IconText';

import { RiTodoFill } from "react-icons/ri";

const HomePage = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (taskContent: string) => {
    setTasks([...tasks, taskContent]);
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className='h-screen flex flex-col items-center pt-5'>
      <IconText>
        <RiTodoFill size='2em' className='text-zinc-900' />
        <Typo type='h1' >
          Check my tasks
        </Typo>
      </IconText>
      <TaskList tasks={tasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default HomePage;
