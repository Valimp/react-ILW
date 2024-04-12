import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageLayout from './components/layout/PageLayout'
import LostPage from './pages/LostPage'

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="*" element={ <LostPage /> } />
      </Routes>
    </PageLayout>
  )
}

export default App
