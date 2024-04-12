interface ContentListProps {
    children : React.ReactNode;
}

const ContentList = ({ children }: ContentListProps) => {
  return (
    <ul className='flex flex-col gap-3 mt-10 w-full'>
      {children}
    </ul>
  )
}

export default ContentList