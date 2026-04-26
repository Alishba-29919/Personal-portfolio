import React from 'react';

const About = () => {
  const libraries = [
    "React.js", "JavaScript (ES6+)", "Tailwind CSS", 
    "Framer Motion", "Redux Toolkit", "Firebase", 
    "Git & GitHub", "RESTful APIs", "Figma to Code"
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#050816] flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Professional Biography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-orange-500 font-mono text-sm tracking-[0.4em] uppercase font-bold">
                01. About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Transforming ideas into <br /> 
                <span className="text-gray-500 italic font-light">seamless digital reality.</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I am <span className="text-white font-medium">Alishba Abbas</span>, a Frontend Developer dedicated to building high-performance web interfaces. I specialize in bridging the gap between sophisticated design and functional logic to create intuitive user experiences.
              </p>
              <p>
                My approach is centered around <span className="text-orange-500">minimalism and efficiency</span>. I believe that clean code and a focused UI are the foundations of a successful digital product. I am constantly evolving my workflow to stay aligned with the latest industry standards and performance optimizations.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: The Tech Card */}
          <div className="relative">
            {/* Decorative background glow */}
            <div className="absolute -inset-4 bg-orange-500/5 blur-2xl rounded-[2.5rem]" />
            
            <div className="relative p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl">
              <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                <span className="w-8 h-[1px] bg-orange-500"></span>
                Technical Stack
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {libraries.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                  >
                    <span className="text-orange-500 text-sm group-hover:translate-x-1 transition-transform">▹</span>
                    <span className="font-mono text-sm tracking-tight">{tool}</span>
                  </div>
                ))}
              </div>

              {/* Professional Tagline */}
              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <p className="text-gray-500 text-xs italic">
                  Constantly exploring new libraries to build better, faster interfaces.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;