import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Project = () => {
  const projectList = [
    { 
      title: "Portfolio Website", 
      tech: ["React", "Framer Motion", "Tailwind"], 
      desc: "My personal professional portfolio showcasing my UI/UX skills.",
      img: "/src/assets/portfolio img7-17 111629.png",
      link: "https://alishba-abbas-personal-portfolio.netlify.app/",
      github: "https://github.com/Alishba-29919/Personal-portfolio"
    },
    { 
      title: "Dashboard", 
      tech: ["React", " React Icons (Lucide, Bi)", "Tailwind"], 
      desc: " A modern, responsive, and secure Admin Dashboard built with React and Tailwind CSS. It  providing a premium and professional user experience.",
      img: "/src/assets/Dashboard-project-img.png", 
      link: "https://your-live-link.com",
      github: "https://github.com/yourusername/vocaldine"
    },
    { 
      title: "Job Board Website", 
      tech: ["React.js (Vite)" ,"CSS3 ", "Vercel"], 
      desc: "A premium, responsive job board built with React for the top 1% of industry leaders.",
      img: "/src/assets/job-board.png",
      link: "https://archtype-job-board.vercel.app/",
      github: "https://github.com/Alishba-29919/job-board-web"
    },
    
  ];

  return (
    <section id="projects" className="py-24 px-10 lg:px-24 bg-slate-950 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-white italic underline underline-offset-8 decoration-orange-400">Selected Work</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden p-4 hover:border-orange-400/50 transition-all"
          >
            {/* Card Header with Image */}
            <div className="h-48 rounded-[2rem] mb-6 relative overflow-hidden bg-slate-800">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with Links */}
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-orange-400 transition cursor-pointer">
                   <FiGithub size={20} />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-orange-400 transition cursor-pointer">
                   <FiExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Details */}
            <div className="px-4 pb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono text-orange-400 border border-orange-400/30 px-3 py-1 rounded-full uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;







// import React from 'react';
// import { motion } from 'framer-motion';
// //import react icons
// import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

// const Project = () => {
//   const projectList = [
//     { 
//       title: "Modern Analytics Dashboard", 
//       tech: ["React", "Chart.js", "Tailwind"], 
//       color: "from-blue-500/20",
//       desc: "A high-performance data visualization platform featuring real-time analytics and interactive user insights."
//     },
//     { 
//       title: "E-Commerce Experience", 
//       tech: ["Next.js", "Stripe", "Redux"], 
//       color: "from-purple-500/20",
//       desc: "A full-stack digital storefront with seamless payment integration and a focus on conversion-driven UX."
//     },
//     { 
//       title: "AI Generation Tool", 
//       tech: ["OpenAI API", "Node.js", "Cloudinary"], 
//       color: "from-cyan-500/20",
//       desc: "An intelligent content creation suite leveraging advanced AI models to automate image and text generation."
//     },
//   ];

//   return (
//     <section id="projects" className="py-24 px-10 lg:px-24 bg-slate-950 min-h-screen">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-5xl font-bold text-white italic underline underline-offset-8 decoration-orange-400">Selected Work</h2>
//       </motion.div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projectList.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             whileHover={{ y: -10 }}
//             className="group relative bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden p-4 hover:border-orange-400/50 transition-all"
//           >
//             {/* Card Header */}
//             <div className={`h-48 rounded-[2rem] bg-gradient-to-br ${project.color} to-transparent mb-6 flex items-center justify-center relative`}>
//               {/* imported FiFolder */}
//               <FiFolder size={48} className="text-slate-700 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-500" />
              
//               <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
//                  <button className="p-3 bg-white text-black rounded-full hover:bg-orange-400 transition cursor-pointer">
//                     <FiGithub size={20} />
//                  </button>
//                  <button className="p-3 bg-white text-black rounded-full hover:bg-orange-400 transition cursor-pointer">
//                     <FiExternalLink size={20} />
//                  </button>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="px-4 pb-6">
//               <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
//               <p className="text-slate-400 text-sm mb-6">{project.desc}</p>
              
//               <div className="flex flex-wrap gap-2">
//                 {project.tech.map((t, idx) => (
//                   <span key={idx} className="text-[10px] font-mono text-orange-400 border border-orange-400/30 px-3 py-1 rounded-full uppercase">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Project;