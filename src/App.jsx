import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Pressence from './pages/Pressence'
import Profile from './pages/Profile'
import Schedule from './pages/Schedule'
import Teacher from './pages/Teacher'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/report" element={<Pressence/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/teacher" element={<Teacher/>} />
      </Routes>
    </Router>
  )
}

export default App
