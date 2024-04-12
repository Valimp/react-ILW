import TaskList from '../components/TaskList';
import Typo from '../components/Typo';
import IconText from '../components/IconText';
import TaskCounter from '../components/TaskCounter';
import { TaskInterface } from '../interface/task';

import { RiTodoFill } from "react-icons/ri";

interface HomePageProps {
  tasks: TaskInterface[];
  setTasks: (tasks: TaskInterface[]) => void;
  handleAddTask: (tasks: TaskInterface) => void;
  handleDeleteTask: (id: number) => void;
}

const HomePage = ({ tasks, setTasks, handleAddTask, handleDeleteTask}: HomePageProps) => {

  return (
    <div className='h-screen flex flex-col items-center pt-5'>
      <TaskCounter tasksNumber={tasks.length} />
      <IconText>
        <RiTodoFill size='2em' className='text-zinc-900' />
        <Typo type='h1' >
          Gestionnaire de tâches by Valimp
        </Typo>
      </IconText>
      <TaskList tasks={tasks} setTasks={setTasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default HomePage;
