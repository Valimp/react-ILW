import Typo from "./Typo";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
  taskTitle: string;
  taskContent: string;
  isCompleted: boolean;
  id: number;
  onDelete: () => void;
}

const Task = ({ taskTitle, taskContent, onDelete, id }: TaskProps) => {

  return (
    <li className="flex justify-start items-center bg-zinc-200 shadow-lg rounded-xl p-3 gap-5 w-full">
      <div className="">
        <Typo type='p'>n°{id+1}</Typo>
      </div>
      <div className="flex flex-col mr-auto gap-3">
        <div className="w-full overflow-auto">
          <Typo type="h3">{taskTitle}</Typo>
        </div>
        <div className="w-full overflow-auto">
          <Typo type="p">{taskContent}</Typo>
        </div>
      </div>
      <div className="flex flex-col ml-auto gap-1">
        <Button use="validate" onClick={onDelete}>
          <FaCheck />
          <span className="font-semibold lowercase lg:inline-block hidden">valider</span>
        </Button>
        <Button use="delete" onClick={onDelete}>
          <FaRegTrashAlt />
          <span className="font-semibold lowercase lg:inline-block hidden">supprimer</span>
        </Button>
      </div>
    </li>
  );
};

export default Task;