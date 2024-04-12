import Typo from "./Typo";

interface TaskCounterProps {
    tasksNumber : number;
}

const TaskCounter = ({ tasksNumber }: TaskCounterProps) => {
  return (
    <div className='w-fit px-4 py-3 rounded-lg shadow-lg bg-zinc-900 fixed top-3 right-3'>
        <Typo type='p'>Nombre de tâches : {tasksNumber}</Typo>
    </div>
  )
}

export default TaskCounter