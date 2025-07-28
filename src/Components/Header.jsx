 import { Link, useNavigate } from "react-router-dom"
 import { HashLink } from 'react-router-hash-link';
 import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';


function Nav() {
  const [toggle,setToggle] = useState(false)
   const mytoggle = ()=>{
     setToggle(!toggle)
     
   }
    return(
        <>
        <header class="bg-[#2eb2d3] shadow-2xl text-white fixed top-0 right-0 left-0 z-10 p-3">
        <nav class="flex justify-between items-center mx-5 md:mx-32">
            <div>
                <span>DOLAPO</span>
            </div>
            <div class="hidden md:block">
            <div className="flex gap-5">
              <HashLink smooth to="/#home" className="text-white hover:text-yellow-400 ">Home</HashLink>
              <HashLink smooth to="/#about" className="text-white hover:text-[#2eb2d3]">About Me</HashLink>
              <HashLink smooth to="/#services" className="text-white hover:text-[#2eb2d3]">Services</HashLink>
              <HashLink smooth to="/#contact" className="text-white hover:text-[#2eb2d3]">Contact</HashLink>
            </div>
            
            </div>
            {/* mobile */}
            <div  class="flex items-center md:hidden">
          <button
            onClick={mytoggle}
            class="inline-flex items-center justify-center p-2 rounded-md text-lime-50 hover:text-lime-200 focus:text-lime-300 z-[100] relative"
          >
           {toggle ? <FaTimes  className="text-2xl"/> : <FaBars  className="text-2xl"/>}
          </button>
        </div>
        <div
            className={`fixed top-[3rem] right-0 left-32 rounded-b-lg shadow-md bg-[#2eb2d3] z-10 pt-16 transition-transform duration-300 ease-in-out md:hidden ${
            toggle ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`} 
         >
          <div className="flex flex-col gap-4 px-6 pb-6">
              <HashLink onClick={() => mytoggle(false)} smooth to="/#home" className="text-white hover:text-yellow-400 ">Home</HashLink>
              <HashLink onClick={() => mytoggle(false)} smooth to="/#about" className="text-white hover:text-yellow-400">About Me</HashLink>
              <HashLink onClick={() => mytoggle(false)} smooth to="/#services" className="text-white hover:text-yellow-400">Services</HashLink>
              <HashLink onClick={() => mytoggle(false)} smooth to="/#contact" className="text-white hover:text-yellow-400">Contact</HashLink>
          </div>
        </div>
        </nav>
    </header> 
        </>
    )
}
export default Nav