interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        {children}
      </div>
    </div>
  )
}

export default PageLayout