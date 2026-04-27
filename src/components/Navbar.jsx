import React, { use } from 'react'
import { useState, useEffect } from "react";


// NavLinks array to store the navigation links and their corresponding paths
const NavLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
]


const Navbar = () => {
    // State to track whether the user has scrolled down the page
    const [Scroll, setScroll] = useState(false);
    // State to track whether the mobile menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    // useEffect to add a scroll event listener to the window
    useEffect(() =>{
        const handleScroll = () =>{
            // If the user has scrolled down more than 100 pixels, set Scroll to true, otherwise set it to false
            if(window.scrollY > 100){
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <> 
   <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ Scroll? "bg-[#0a0e1a]/90 backdrop-blur-md border-b border-orange-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
        {/* Navigation links will be rendered here */}
        <div className="flex justify-between items-center max-w-[1200px] mx-auto  h-16">
            {/* Logo */}
            <a href="" className="font-bold text-xl text-orange-500 tracking-tight flex items-center"> Portfolio <span className='text-white'>Alishba</span>       </a>
            {/* links */}
            <ul className='hidden md:flex list-none gap-6 items-center'>
                {NavLinks.map((link, index) => (
                    <li key={link.href} className='flex  px-4 py-2 cursor-pointer hover:text-gray-400'>
                        <a href={link.href} className='hover:text-orange-500 text-bold'>
                            {link.name}
                            {/* Underline effect */}
                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                        </a>
                    </li>
                ))} 

            </ul>

                {/* HIRE ME BUTTON */}
        <a href='#contact' className='hidden md:block text-white  bg-orange-500 hover:bg-orange-500 text-base font-bold px-4 py-1 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30'>
          Hire Me
        </a>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none  text-3xl flex items-center">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-[#0a0e1a]/90 backdrop-blur-md border-b border-orange-500/20 shadow-lg`}>
            <ul className="flex flex-col items-center gap-6 py-4">
                {NavLinks.map((link, index) => (
                    <li key={link.href} className="flex px-4 py-2 cursor-pointer hover:text-gray-400">
                        <a href={link.href} onClick={() => setMenuOpen(false)} 
                   className="text-lg">{link.name}</a>
                    </li>
                ))}
                <a href="#contact" nClick={() => setMenuOpen(false)} className="bg-orange-500 text-white text-center font-bold px-6 w-full py-2 rounded-lg mt-2">
            Hire Me
          </a>
            </ul>
        </div>
    </nav>
    
     </>
  )
}

export default Navbar