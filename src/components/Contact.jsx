import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-slate-950 text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Simple Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-slate-400 mb-10">
          I'm currently looking for new opportunities. My inbox is always open!
        </p>

        {/* Big Email Button */}
        <a 
          href="mailto:alishba.abbas@email.com" 
          className="inline-block border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-950 transition-all mb-12"
        >
          Say Hello
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-slate-500">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            <FiGithub size={28} />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            <FiLinkedin size={28} />
          </a>
          <a href="mailto:alishba.abbas@email.com" className="hover:text-cyan-400 transition-colors">
            <FiMail size={28} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-20 text-slate-600 text-sm font-mono">
          Designed & Built by Alishba Abbas
        </p>
        
      </div>
    </section>
  );
};

export default Contact;