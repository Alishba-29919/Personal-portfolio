import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ICONS = [
  { icon: 'fa-html5', color: 'text-[#e34f26]', name: 'HTML' },
  { icon: 'fa-css3-alt', color: 'text-[#1572b6]', name: 'CSS' },
  { icon: 'fa-js', color: 'text-[#f7df1e]', name: 'JS' },
  { icon: 'fa-react', color: 'text-[#61dafb]', name: 'React' },
  { icon: 'fa-github', color: 'text-white', name: 'GitHub' },
  { icon: 'fa-tailwind', color: 'text-[#38bdf8]', name: 'Tailwind' },
  { icon: 'fa-bootstrap', color: 'text-[#7952b3]', name: 'Bootstrap' },
  { icon: 'fa-sass', color: 'text-[#cc6699]', name: 'Sass' },
  { icon: 'fa-npm', color: 'text-[#cb3837]', name: 'NPM' },
  { icon: 'fa-node-js', color: 'text-[#339933]', name: 'Node' },
  { icon: 'fa-figma', color: 'text-[#F24E1E]', name: 'Figma' },
  { icon: 'fa-git-alt', color: 'text-[#f05032]', name: 'Git' },
  { icon: 'fa-vscode', color: 'text-[#007acc]', name: 'VSCode' },
  { icon: 'fa-linux', color: 'text-white', name: 'Linux' },
  { icon: 'fa-wordpress', color: 'text-[#21759b]', name: 'WordPress' },
  { icon: 'fa-php', color: 'text-[#777bb4]', name: 'PHP' },
  { icon: 'fa-python', color: 'text-[#306998]', name: 'Python' },
  { icon: 'fa-aws', color: 'text-[#ff9900]', name: 'AWS' },
  { icon: 'fa-vercel', color: 'text-white', name: 'Vercel' }
];

const TechOrbit = () => {
  // 1. Galaxy Particles (Background Stars)
  const stars = useMemo(() => [...Array(80)].map((_, i) => ({
    id: i,
    size: Math.random() *9 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  })), []);

  // 2. Icons Logic: Center ko 60% khali rakhna hai
  const randomIcons = useMemo(() => ICONS.map((item) => {
    const side = Math.floor(Math.random() * 4);
    let x, y;

    // Har icon ko screen ke edges (0-20% ya 80-100%) par bhej rahe hain
    if (side === 0) { // Left
      x = Math.random() * 20; 
      y = Math.random() * 100;
    } else if (side === 1) { // Right
      x = Math.random() * 20 + 80; 
      y = Math.random() * 100;
    } else if (side === 2) { // Top
      x = Math.random() * 100;
      y = Math.random() * 20; 
    } else { // Bottom
      x = Math.random() * 100;
      y = Math.random() * 20 + 80; 
    }

    return {
      ...item,
      x, y,
      z: Math.random() * 200 - 100,
      moveX: Math.random() * 60 - 30, // Choti movement taake center mein na ghusein
      moveY: Math.random() * 60 - 30,
      duration: Math.random() * 15 + 20,
    };
  }), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050816]">
      
      {/* LAYER 1: Background Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: star.size, height: star.size,
            left: `${star.x}%`, top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            y: [0, -50],
          }}
          transition={{ duration: star.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* LAYER 2: 3D Icons on Sides */}
      <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
        {randomIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center justify-center"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{
              x: [0, item.moveX, 0],
              y: [0, item.moveY, 0],
              z: [item.z, item.z + 50, item.z],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="p-3 md:p-4 flex flex-col items-center  hover:opacity-100 transition-opacity duration-500">
              <i className={`fa-brands ${item.icon} text-3xl md:text-5xl ${item.color}`}></i>
              <span className="text-[9px] mt-2 text-gray-500 font-bold uppercase tracking-tighter">
                {item.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LAYER 3: Center Glow Gradient (Text read-ability ke liye) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050816_80%)] opacity-70"></div>
    </div>
  );
};

export default TechOrbit;