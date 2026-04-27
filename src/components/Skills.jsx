import { useState, useEffect, useRef } from "react";

// Skills data — name, percentage, icon, and color gradient
const SKILLS = [
  { name: "HTML5",       pct: 95, icon: "🌐", color: "from-orange-600 to-orange-400" },
  { name: "CSS3",        pct: 88, icon: "🎨", color: "from-blue-600 to-blue-400" },
  { name: "JavaScript",  pct: 78, icon: "⚡", color: "from-yellow-600 to-yellow-400" },
  { name: "Tailwind CSS",pct: 82, icon: "💨", color: "from-cyan-600 to-cyan-400" },
  { name: "React",       pct: 65, icon: "⚛️", color: "from-sky-600 to-sky-400" },
  { name: "Git & GitHub",pct: 85, icon: "🐙", color: "from-purple-600 to-purple-400" },
  { name: "Bootstrap",   pct: 70, icon: "🔧", color: "from-green-600 to-green-400" },
  { name: "Firebase",    pct: 60, icon: "🔥", color: "from-red-600 to-red-400" },
];

export default function Skills() {
  // when animated = true, progress bars will fill to their percentage, otherwise they stay at 0%
  const [animated, setAnimated] = useState(false);

  // sectionRef = this section ref
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver: when element is in viewport, callback runs. 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // animation start 
          setAnimated(true);   
          // only animate once

          observer.disconnect(); 
        }
      },
      // triggred when 20% of the section is visible
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
            — What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 font-['Syne',sans-serif]">
            My Skills
          </h2>
          <p className="text-[#8892a4] mt-3">
            Technologies I work with to create amazing web experiences
          </p>
        </div>

        {/* SKILLS GRID — 2 columns on medium+ screens */}
        <div className="grid sm:grid-cols-2 gap-4">
          {SKILLS.map((skill, index) => (
            // Each skill card
            // style={{ animationDelay }} = stagger effect (one after another)
            <div
              key={skill.name}
              className="bg-[#0a0e1a] border border-orange-500/20 rounded-2xl p-5 hover:border-orange-500/40 transition-all duration-200 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill name + percentage */}
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-sm flex items-center gap-2">
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="text-orange-500 font-bold text-sm">
                  {skill.pct}%
                </span>
              </div>

              {/* PROGRESS BAR */}
              {/* Background track */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                {/* Filled bar — width dynamically set */}
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    // when animated = true, width = skill.pct%, otherwise 0%
                    width: animated ? `${skill.pct}%` : "0%",
                    // staggered animation delay 
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
