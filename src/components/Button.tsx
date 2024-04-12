import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  use: 'add' | 'delete';
}

const Button = ({ children, type, onClick, use }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`text-white ${use==='add' ? 'bg-green-600' : 'bg-red-500'} px-4 py-3 rounded-lg shadow-lg flex justify-around gap-2 items-center ${use==='add' ? 'hover:bg-green-700' : 'hover:bg-red-700'} duration-300`} type={type}>
        {children}
    </button>
  )
}

export default Button