import React from 'react'
// import ParticleBackground from './components/ParticleBackground'
import TechOrbit from './components/TechOrbit'


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Custompointer from './components/Custompointer'

const App = () => {
  return (
    <>    
    <div className="relative bg-[#0f172a]  text-white overflow-x-hidden">
      
      {/* 1. TechOrbit background mein sabse niche */}
      <TechOrbit />

      {/* 2. Baaki saara content iske upar */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Custompointer />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        {/* <About /> */}
        {/* <Projects /> */}
      </div>

    </div>
    {/* <div className="min-h-screen bg-[#0a0e1a] text-white font-sans overflow-x-hidden">

      
    </div> */}
    </>
  )
}

export default App
