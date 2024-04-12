import TaskList from '../components/TaskList';
import Typo from '../components/Typo';
import IconText from '../components/IconText';
import TaskCounter from '../components/TaskCounter';
import { TaskInterface } from '../interface/task';

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
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Yawning%20Face.png" alt="Yawning Face" width="40" height="40" />
        <Typo type='h1' >
          Listes des corvées..
        </Typo>
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="Thinking Face" width="40" height="40" />
      </IconText>
      <TaskList tasks={tasks} setTasks={setTasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default HomePage;
