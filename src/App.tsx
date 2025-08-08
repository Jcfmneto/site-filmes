import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Favorites from './pages/Favorites/Favorites'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default App
