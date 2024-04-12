import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({children, onSubmit}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className='flex justify-center items-center gap-5 mt-10'>
      {children}
    </form>
  )
}

export default Form