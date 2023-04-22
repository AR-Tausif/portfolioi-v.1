import { useState } from 'react'
import Banner from './components/Header/Banner'
import Navbar from './components/Navbar/Navbar'
import Workprocess from './components/WorkProcess/Workprocess'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css';
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App
