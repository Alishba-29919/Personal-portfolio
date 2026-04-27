import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="relative bg-[#0f172a] text-white overflow-x-hidden">
        <TechOrbit />
        
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/about" element={<MainLayout />} />
            <Route path="/skills" element={<MainLayout />} />
            <Route path="/projects" element={<MainLayout />} />
            <Route path="/contact" element={<MainLayout />} />
          </Routes>
          <Footer />
        </div>
        
        <Custompointer />
      </div>
    </Router>
  )
}

const MainLayout = () => (
  <>
    <div id="hero"><Hero /></div>
    <div id="about"><About /></div>
    <div id="skills"><Skills /></div>
    <div id="projects"><Project /></div>
    <div id="contact"><Contact /></div>
  </>
)

export default App