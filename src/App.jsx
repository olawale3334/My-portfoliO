import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HeroPage'
import './index.css'
import Nav from './Components/Header'
import Expertise from './Components/MyExpertise'


function App() {
  

  return (
     
     <div>
       <Nav/>
      <HomePage/>
      <Expertise />
     </div>
    
  )
}

export default App
