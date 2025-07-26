import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HeroPage'

import './index.css'
import Nav from './Components/Header'

function App() {
  

  return (
     
     <div>
       <Nav/>
      <HomePage/>
     </div>
    
  )
}

export default App
