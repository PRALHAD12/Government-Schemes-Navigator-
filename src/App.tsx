import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingPage from './pages/landingpage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<LandingPage/> }/>
        <Route path ="/dashboard" element={<Dashboard/> }/>
        <Route path ="/login" element={<Login/> }/>
        <Route path ="/signup" element={<Signup/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
