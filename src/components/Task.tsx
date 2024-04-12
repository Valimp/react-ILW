import Typo from "./Typo";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";

interface TaskProps {
  taskContent: string;
  onDelete: () => void;
}

const Task = ({ taskContent, onDelete }: TaskProps) => {
  return (
    <li className="flex justify-between items-center bg-zinc-200 shadow-lg rounded-xl p-3 gap-5 w-full">
      <Typo type="h3">{taskContent}</Typo>
      <Button use="delete" onClick={onDelete}>
        <FaTrash />
        <span className="font-semibold lowercase">supprimer</span>
      </Button>
    </li>
  );
};

export default Task;