import React from 'react';
import { motion } from 'framer-motion';
import { GiHamburger } from 'react-icons/gi';
import { FaCalculator } from 'react-icons/fa';
import { IoImages, IoLogIn } from 'react-icons/io5';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Spicyhub Restaurant",
      description: "A full-featured restaurant website with an interactive menu, online ordering capabilities, and a responsive design tailored for food enthusiasts.",
      tags: ["HTML5", "Css3"],
      icon: <GiHamburger className="text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]" />,
      color: "from-orange-500/40 via-red-500/20 to-slate-900/80",
      borderHover: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
      accent: "bg-orange-500/50"
    },
    {
      id: 2,
      title: "Interactive Calculator",
      description: "A sleek, modern web-based calculator with advanced mathematical functions and a beautiful user interface.",
      tags: ["HTML5","Css3","JavaScript"],
      icon: <FaCalculator className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
      color: "from-cyan-500/40 via-blue-500/20 to-slate-900/80",
      borderHover: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      accent: "bg-blue-500/50"
    },
    {
      id: 3,
      title: "Dynamic Image Slider",
      description: "A smooth, customizable image carousel with touch support, auto-play features, and fluid transition animations.",
      tags: ["HTML5"],
      icon: <IoImages className="text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]" />,
      color: "from-purple-500/40 via-pink-500/20 to-slate-900/80",
      borderHover: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      accent: "bg-purple-500/50"
    },
    {
      id: 4,
      title: "Secure Login Page",
      description: "A beautifully designed authentication flow with form validation, password strength checking, and smooth error handling.",
      tags: ["React", "Framer Motion"],
      icon: <IoLogIn className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />,
      color: "from-emerald-500/40 via-teal-500/20 to-slate-900/80",
      borderHover: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      accent: "bg-emerald-500/50"
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#0a0f1c] min-h-screen flex flex-col justify-center items-center">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Top Gradient Glow */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 w-1/2 left-1/4 h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Section */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Personal Projects<span className="text-cyan-400">.</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            A showcase of my recent work, highlighting my skills in frontend development, UI/UX design, and creating responsive web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Premium Card Container */}
              <div className={`relative h-[480px] w-full bg-[#0b1120] rounded-3xl border border-slate-800/80 ${project.borderHover} transition-all duration-500 overflow-hidden flex flex-col group hover:-translate-y-2`}>
                
                {/* Top Graphic Section (Image Placeholder) */}
                <div className={`relative h-[45%] w-full bg-gradient-to-br ${project.color} overflow-hidden flex items-center justify-center`}>
                  
                  {/* Abstract Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_2px,transparent_2px)] bg-[size:24px_24px]"></div>
                  
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent opacity-80"></div>

                  {/* Icon Focus */}
                  <motion.div 
                    className="relative z-10 text-7xl drop-shadow-2xl transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-6"
                  >
                    {project.icon}
                  </motion.div>
                </div>
                
                {/* Content Section */}
                <div className="relative z-20 h-[55%] p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-transparent to-[#0a0f1c]/90">
                  
                  {/* Blur divider on top ridge */}
                  <div className="absolute top-0 left-0 w-full h-px bg-white/5 backdrop-blur-md"></div>

                  <div>
                     <h3 className="text-2xl font-bold text-slate-100 mb-3 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags / Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-mono tracking-wide text-slate-300 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 shadow-inner group-hover:border-slate-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectSection;
