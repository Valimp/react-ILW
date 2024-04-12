import { useState } from 'react';
import Typo from './Typo';
import Task from './Task';
import FormInput from './FormInput';
import Button from './Button';
import Form from './Form';
import ContentList from './ContentList';
import { MdAdd } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

interface FormData {
  taskContent: string;
}

interface TaskListProps {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
  handleAddTask: (taskContent: string) => void;
  handleDeleteTask: (index: number) => void;
}

const TaskList = ({ tasks, handleAddTask, handleDeleteTask, setTasks }: TaskListProps) => {
  const [formData, setFormData] = useState<FormData>({ taskContent: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ taskContent: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.taskContent) return;
    if (tasks.includes(formData.taskContent)) return;
    if (formData.taskContent.length > 80) return;
    // format the taskContent
    const formattedTaskContent = formData.taskContent.trim().toLowerCase();
    handleAddTask(formattedTaskContent);
    setFormData({ taskContent: '' });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <FormInput value={formData.taskContent} onChange={handleChange} />
        <Button use='add' type='submit'>
          <MdAdd size='1.5em' className='' />
          <span className='font-semibold lowercase lg:inline-block hidden'>ajouter</span>
        </Button>
        <Button use='delete' onClick={() => setTasks([])}>
          <TiDelete size='1.5em' className='' />
          <span className='font-semibold lowercase whitespace-nowrap lg:inline-block hidden'>supprimer tout</span>
        </Button>
      </Form>
      <ContentList>
        {tasks.length > 0 ? (
          tasks.map((taskContent, index) => (
            <Task taskContent={taskContent} key={index} id={index} onDelete={() => handleDeleteTask(index)} />
          ))
        ) : (
          <Typo type='p' >
            Aucune tâche à afficher
          </Typo>
        )}
      </ContentList>
    </>
  );
};

export default TaskList;
