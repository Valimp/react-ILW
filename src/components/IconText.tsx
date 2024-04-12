import { ReactNode } from 'react';

interface IconTextProps {
    children: ReactNode;
}

const IconText = ({ children }: IconTextProps) => {
  return (
    <div className='flex justify-between items-center gap-3'>
        { children }
    </div>
  )
}

export default IconText