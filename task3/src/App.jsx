import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="main-content">
          <div className="div">
            <div className="div3">
              <img src="sdm.jpg" alt="download.jpg" />
              <h2 className="div3h2">SDM</h2>
            
            </div>
            <div className="div2">
              <nav><Link to='/'>Home</Link></nav>
              <nav><Link to='/about'>About</Link></nav>
              <nav><Link to='/dashboard'>Dashboard</Link></nav>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <br></br>
        <footer>
          Copyright claim by Mithun
        </footer>
      </Router>
    </>
  )
}

export default App
