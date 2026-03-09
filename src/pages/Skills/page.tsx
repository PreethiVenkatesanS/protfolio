import React from 'react';
import { motion } from 'framer-motion';
import { IoCodeSlash } from 'react-icons/io5';
import { IoIosColorPalette } from 'react-icons/io';
import { FaServer, FaWrench } from 'react-icons/fa';
import { MdAnimation } from 'react-icons/md';



const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <IoCodeSlash size={24} className="text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "group-hover:border-cyan-500/50",
      skills: [
        {name:"HTML5"},
        {name:"CSS3"},
        {name:"JavaScript"},
        {name:"TypeScript"},
        {name:"React JS"},
        {name:"Next JS"}, 
      ]
    },
    {
      title: "Styling & UI",
      icon: <IoIosColorPalette size={24} className="text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-500/50",
      skills: [
        { name: "Tailwind CSS"},
        { name: "Bootstrap"},
        { name: "Responsive Design"},
      ]
    },
    {
      title: "Backend (Basic)",
      icon: <FaServer size={24} className="text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-500/50",
      skills: [
        { name: "Firebase"},
        { name: "MySQL(basic)"},
        { name: "PHP(basic)"},
      ]
    },
    {
      title: "Tools & Libraries",
      icon: <FaWrench size={24} className="text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/50",
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "VS Code", level: 95 },
      ]
    },
    {
      title: "Animation",
      icon: <MdAnimation size={24} className="text-rose-400" />,
      color: "from-rose-500/20 to-red-500/20",
      borderColor: "group-hover:border-rose-500/50",
      skills: [
        { name: "Framer Motion", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 min-h-screen bg-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Here are the technologies, languages, and tools I use to build robust and beautiful digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              className={`bg-slate-800/40 p-1 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-xl group transition-all duration-300 ${category.borderColor}`}
            >
              <div className={`h-full bg-slate-900 rounded-xl p-6 relative overflow-hidden`}>
                {/* Subtle Gradient Background matching the category */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -mr-10 -mt-10`}></div>
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-slate-800 rounded-lg shadow-inner border border-slate-700/80">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.1 + (skillIdx * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-slate-800 border border-slate-700/50 rounded-full text-sm font-medium text-slate-300 shadow-sm hover:text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-colors duration-300 cursor-default"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Tailwind Shimmer Animation Config */}
      <style>{`
        @keyframes shimmer {
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
