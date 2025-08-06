import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Details />} />
    </Routes>
  )
}

export default App
