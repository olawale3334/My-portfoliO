import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './Components/HeroPage'
import './index.css'
import Nav from './Components/Header'
import Expertise from './Components/MyExpertise'
import Contacts from './Components/Contacts';
function App() {
   useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // If you want the animation to run every time the element scrolls into view
    });
  }, []);

  return (
     
     <div>
       <Nav/>
      <HomePage/>
      <Expertise />
      <Contacts/>
     </div>
    
  )
}

export default App
