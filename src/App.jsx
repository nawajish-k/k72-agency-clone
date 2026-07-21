import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FullScreenNav from './components/navbar/FullScreenNav'
import Navbar from './components/navbar/Navbar'
import Agence from './pages/Agence'
import Home from './pages/Home'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div>
      {/* <FullScreenNav/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App