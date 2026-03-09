import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: "Consultant Frontend Developer",
      company: "Ramsol pvt lmt",
      duration: "October 2025 - March 2026",
      description: [
        "Engineered and maintained Ramsol.in, the company's client-facing website, leveraging Next.js, TypeScript, and Tailwind CSS to deliver a performant, fully responsive user experience.",
        "Architected and shipped repplyd.com end-to-end as a production-grade web application using Next.js, TypeScript, and Tailwind CSS, ensuring scalable component structure and clean, maintainable code.",
        "Extended and maintained a business-critical internal ERP system, implementing new modules and bug fixes using PHP and MySQL, and collaborating with stakeholders to translate requirements into working features."
      ],
      icon: "⚡",
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Ramsol pvt lmt",
      duration: "April 2025 - july 2025",
      description: [
        "Developed and delivered frontend features on live client projects using Next.js and TypeScript, gaining production-level experience from day one.",
        "Contributed to a React.js application by building reusable UI components and implementing responsive layouts using Tailwind CSS and Bootstrap.",
        "Adopted professional Git/GitHub workflows, including branching, pull requests, and code reviews, within a collaborative team environment."
      ],
      icon: "🌱",
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#0a0f1c] min-h-[80vh] flex flex-col justify-center items-center">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Top Gradient Glow */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 w-1/2 left-1/4 h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        
        {/* Minimal Header */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Experience<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-slate-400 mt-4 text-lg font-light max-w-md">
              A brief look at my professional journey in frontend development.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500 tracking-widest uppercase">
            <span>April 2025 - March 2026</span>
            
            
          </div>
        </motion.div>

        {/* Unique Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experiences.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative group ${index === 1 ? 'md:mt-24' : ''}`}
            >
              
              {/* Minimal Card Design */}
              <div className="relative bg-[#0d1425] p-8 md:p-10 rounded-3xl border border-slate-800/60 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
                
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Top row: Icon and Duration */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-xl shadow-inner mb-4 group-hover:scale-110 group-hover:bg-cyan-900/20 group-hover:border-cyan-500/30 transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono tracking-widest text-cyan-400/80 uppercase px-3 py-1 rounded-full border border-cyan-900/30 bg-cyan-950/20">
                      {item.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2 tracking-tight group-hover:text-white transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-slate-400 font-medium text-sm mb-6 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                       {item.company}
                    </div>
                    
                    <ul className="text-slate-400 leading-relaxed font-light mt-auto space-y-3 list-none">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-cyan-500 mt-1.5 text-[10px]">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Decorative Bottom Corner Accent */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ExperienceSection;
