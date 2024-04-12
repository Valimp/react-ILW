import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageLayout from './components/layout/PageLayout'

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </PageLayout>
  )
}

export default App
