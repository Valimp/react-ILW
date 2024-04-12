import Typo from "./Typo";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";

interface TaskProps {
  taskContent: string;
  id: number;
  onDelete: () => void;
}

const Task = ({ taskContent, onDelete, id }: TaskProps) => {
  return (
    <li className="flex justify-start items-center bg-zinc-200 shadow-lg rounded-xl p-3 gap-5 w-full">
      <Typo type='p'>Tâche n°{id+1}</Typo>
      <Typo type="h3">{taskContent}</Typo>
      <div className="ml-auto">
        <Button use="delete" onClick={onDelete}>
          <FaTrash />
          <span className="font-semibold lowercase">supprimer</span>
        </Button>
      </div>
    </li>
  );
};

export default Task;