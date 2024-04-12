import { useState } from 'react';
import Typo from './Typo';
import Task from './Task';
import FormInput from './FormInput';
import Button from './Button';
import Form from './Form';
import ContentList from './ContentList';
import { MdAdd } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { TaskInterface } from '../interface/interface';

interface FormData {
  taskTitle: string;
  taskContent: string;
}

interface TaskListProps {
  tasks: TaskInterface[];
  setTasks: (tasks: TaskInterface[]) => void;
  handleAddTask: (taskContent: TaskInterface) => void;
  handleDeleteTask: (index: number) => void;
}

const TaskList = ({ tasks, handleAddTask, handleDeleteTask, setTasks }: TaskListProps) => {
  const [formData, setFormData] = useState<FormData>({ taskTitle: '', taskContent: ''});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.taskTitle) return;
    if (formData.taskTitle.length > 80) return;
    const formattedTaskTitle = formData.taskTitle.trim().toLowerCase();
    const formattedTaskContent = formData.taskContent.trim();
    const newTask: TaskInterface = { content: formattedTaskContent, title: formattedTaskTitle, isCompleted: false};
    handleAddTask(newTask);
    setFormData({ taskTitle: '', taskContent: ''});
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, taskTitle: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, taskContent: e.target.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <FormInput value={formData.taskTitle} onChange={handleTitleChange} placeholder='Titre...'/>
        <FormInput value={formData.taskContent} onChange={handleContentChange} placeholder='Contenu...' />
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
          tasks.map((task, index) => (
            <Task taskTitle={task.title} taskContent={task.content} isCompleted={task.isCompleted} key={index} id={index} onDelete={() => handleDeleteTask(index)} />
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
