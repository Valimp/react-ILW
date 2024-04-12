import Typo from "./Typo";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";

interface TaskProps {
  taskTitle: string;
  taskContent: string;
  isCompleted: boolean;
  id: number;
  onDelete: () => void;
}

const Task = ({ taskTitle, taskContent, onDelete, id, isCompleted }: TaskProps) => {

  return (
    <li className="flex justify-start items-center bg-zinc-200 shadow-lg rounded-xl p-3 gap-5 w-full">
      <div className="mr-auto">
        <Typo type='p'>n°{id+1}</Typo>
      </div>
      <div className="w-full overflow-auto">
        <Typo type="h3">{taskTitle}</Typo>
      </div>
      <div className="w-full overflow-auto">
        <Typo type="p">{taskContent}</Typo>
      </div>
      <div className="w-full">
        {
          isCompleted ? <Typo type="p" >Terminée</Typo> : <Typo type="p">En cours</Typo>
        }
      </div>
      <div className="flex flex-col ml-auto gap-1">
        <Button use="delete" onClick={onDelete}>
          <FaTrash />
          <span className="font-semibold lowercase lg:inline-block hidden">supprimer</span>
        </Button>
      </div>
    </li>
  );
};

export default Task;