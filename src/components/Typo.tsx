import { ReactNode } from "react";

interface TaskProps {
    children: ReactNode;
    type: 'h1' | 'h2' | 'h3' | 'p';
}

const Typo = ({ children, type }: TaskProps) => {
  return (
    <>
      {type === 'h1' && <h1 className="text-2xl text-zinc-900 font-extrabold break-words w-3/4">{children}</h1>}
      {type === 'h2' && <h2 className="text-xl text-zinc-800 font-bold break-words w-3/4">{children}</h2>}
      {type === 'h3' && <h3 className="text-lg text-zinc-700 font-semibold break-words w-3/4">{children}</h3>}
      {type === 'p' && <p className="text-base text-zinc-600 font-normal break-words w-3/4">{children}</p>}
    </>
  )
}

export default Typo