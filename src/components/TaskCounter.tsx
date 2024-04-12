import Typo from "./Typo";

interface TaskCounterProps {
    tasksNumber : number;
}

const TaskCounter = ({ tasksNumber }: TaskCounterProps) => {
  return (
    <div className='w-fit px-4 py-3 rounded-lg shadow-lg bg-zinc-200 fixed top-3 right-3'>
        <Typo type='p'>
          <div className="flex gap-1">
            {
              tasksNumber === 0 ? 
              <span className="font-semibold">Vous avez aucune corvée</span> 
              : 
              <span className="font-semibold">Vous avez {tasksNumber} à faire</span>
            }
            {tasksNumber === 0 ? 
              <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears" width="25" height="25" />
              : 
              <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Enraged%20Face.png" alt="Enraged Face" width="25" height="25" />
            }
          </div>
        </Typo>
    </div>
  )
}

export default TaskCounter