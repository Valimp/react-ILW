import { ReactNode } from "react";

interface TaskProps {
    children: ReactNode;
    type: 'h1' | 'h2' | 'h3' | 'p';
}

const Typo = ({ children, type }: TaskProps) => {
  return (
    <>
      {type === 'h1' && <h1 className="text-2xl font-black bg-gradient-to-r from-zinc-900 to-zinc-700 inline-block bg-clip-text text-transparent">{children}</h1>}
      {type === 'h2' && <h2 className="text-xl font-extrabold bg-gradient-to-r from-zinc-800 to-zinc-600 inlineblock bg-clip-text text-transparent">{children}</h2>}
      {type === 'h3' && <h3 className="text-lg font-bold bg-gradient-to-r from-zinc-700 to-zinc-500 inlineblock bg-clip-text text-transparent">{children}</h3>}
      {type === 'p' && <p className="text-base font-semibold bg-gradient-to-r from-zinc-600 to-zinc-400 inlineblock bg-clip-text text-transparent">{children}</p>}
    </>
  )
}

export default Typo