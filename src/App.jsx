import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>  
    <div className="relative bg-[#0f172a]  text-white overflow-x-hidden">
      
      {/* 1. TechOrbit background in bottom */}
      <TechOrbit />

      {/* 2.other content */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/about" element={<MainLayout />} />
            <Route path="/skills" element={<MainLayout />} />
            <Route path="/projects" element={<MainLayout />} />
            <Route path="/contact" element={<MainLayout />} />
          </Routes>
        {/* <Hero /> */}
        
        {/* <About />
        <Skills />
        <Project />
        <Contact /> */}
        <Footer />
        {/* <About /> */}
        {/* <Projects /> */}
      </div>
      <Custompointer />
    </div>
    {/* <div className="min-h-screen bg-[#0a0e1a] text-white font-sans overflow-x-hidden">

      
    </div> */}
    </Router>
    </>
  )
}


const MainLayout = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
  </>
)



export default App
