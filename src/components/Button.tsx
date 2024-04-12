import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  use: 'add' | 'delete' | 'validate';
}

const Button = ({ children, type, onClick, use }: ButtonProps) => {
  return (
    <>
      {use==='add' &&
        <button onClick={onClick} className={`text-white bg-gradient-to-tr from-green-600 to-green-700 px-4 py-3 rounded-lg shadow-lg flex justify-around gap-2 items-center hover:rounded-2xl duration-300`} type={type}>
          {children}
        </button>
      }
      {
        use==='delete' &&
        <button onClick={onClick} className={`text-white bg-gradient-to-tr from-red-600 to-red-700 px-4 py-3 rounded-lg shadow-lg flex justify-around gap-2 items-center hover:rounded-2xl duration-300`} type={type}>
          {children}
        </button>
      }
      {
        use==='validate' &&
        <button onClick={onClick} className={`text-white bg-gradient-to-tr from-blue-600 to-blue-700 px-4 py-3 rounded-lg shadow-lg flex justify-around gap-2 items-center hover:rounded-2xl duration-300`} type={type}>
          {children}
        </button>
      }
    </>
  )
}

export default Button