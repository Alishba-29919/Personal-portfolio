import React from 'react'
import TechOrbit from '../components/TechOrbit'
import { useEffect, useRef } from 'react'



// social links data
const SocialLinks = [
    { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/alishba-abbas-9a1b4b1b3/", color: "hover:border-white hover:text-white" },
    { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/alishba-abbas", color: "hover:border-pink-500 hover:text-white" },
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/alishba_abbas_/", color: "hover:border-pink-500 hover:text-white" },
    { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/alishba.abbas.5", color: "hover:border-pink-500 hover:text-white" }
];

  //  right side floating badges avatar

  const FloatingBadge  = [
  { text: "💻 HTML Expert",  pos: "top-8 -left-4",   anim: "animate-[floatUp_4s_ease-in-out_infinite]" },
  { text: "🎨 CSS & Design", pos: "bottom-16 -right-4", anim: "animate-[floatDown_5s_ease-in-out_infinite]" },
  { text: "⚡ Clean Code",   pos: "top-1/2 -left-8",  anim: "animate-[floatUp_3.5s_ease-in-out_infinite]" },
];



  // Function to handle smooth scroll
  const scrollToAbout = () => {
    // Ye window ko batata hai ke "About" section tak scroll kare
    const aboutSection = document.getElementById('about'); // Ya jo bhi agla section ho
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


const Hero = () => {


 



  return (
    <>
     <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-20 lg:px-24 bg-[#050816]">
      <div className="grid lg:grid-cols-2  gap-12 lg:gap-20 lg:text-left relative    z-10 mx-auto max-w-[1200px] ">

        {/* left  content */}
        <div className="space-y-6 text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-6xl  text-orange-500 mb-4  leading-tight"><span className="text-orange-500 text-base">Hi, I'm</span> <br /> <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
             Alishba Abbas
            </span>
            <br />
            <span className="text-white">Frontend</span>
            <br />
            <span className="text-[#8892a4]">Developer</span></h1>

            {/* para */}
          <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A passionate Frontend Developer. I love turning complex problems into beautiful, responsive, and user-friendly websites. Currently focused on building clean interfaces with React and Tailwind CSS.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="bg-orange-500 hover:bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30"
            >
              Download Resume 
            </a>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30"
            >
              Contact Me
            </a>
          </div>

          {/* social links */}
          <div className="flex gap-3 pt-2">
            {SocialLinks.map((s) => (
              <a key={index} href={s.url} target="_blank"
              
                key={s.name}
                href={s.url}
                
                icon={s.icon}
                color={s.color}

               
                className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-[#8892a4] text-xs font-bold transition-all duration-200 ${s.color} hover:bg-white/5`}
              
                > 
                <i className={`fa-brands ${s.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* right content */}
 
        <div className='flex justify-center items-center'>
         <div className="relative">

           {/* Outer ring */}
    <div className="w-[300px] h-[300px] md:w-[465px] md:h-[465px] rounded-full border-2 border-orange-500/20 flex items-center justify-center relative bg-gradient-to-br from-orange-500/10 to-transparent">
      
      {/* Inner avatar circle */}
      <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[#1a2235] border-2 border-orange-500/10 flex items-center justify-center overflow-hidden">
                {/* Initials or replace with <img> */}
                <span className="font-black text-6xl text-orange-500 font-['Syne',sans-serif]">
                  <img src="/profile-picPM.jpeg" alt="Alishba Abbas" className='rounded-full' />
                </span>
              </div>

            </div>

            {/* floating badge   */}
             {FloatingBadge.map((b) => (
                <div
                  key={b.text}
                  className={`absolute ${b.pos} ${b.anim} bg-[#111827] border border-orange-500/20 rounded-xl px-3 py-2 text-xs font-semibold whitespace-nowrap shadow-lg`}
                >
                  {b.text}
                </div>
              ))}


            

              {/* Rotating ring decoration */}
            <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/10 animate-spin [animation-duration:20s]" />
          </div>
        </div>
</div>


      {/* SCROLL DOWN INDICATOR */}
      <div 
        onClick={scrollToAbout} // Click event add kiya
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8892a4] text-xs cursor-pointer group"
      >
        <span className="group-hover:text-orange-500 transition-colors">Scroll Down</span>
        <span className="animate-bounce text-orange-500 text-lg">↓</span>
      </div>
      

     </section>

    </>
  )
}

export default Hero