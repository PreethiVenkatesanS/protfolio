import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';

const AboutSection: React.FC = () => {
  const education = [
    {
      id: 1,
      type: 'College',
      title: "Bachelor's of Computer Application",
      institution: "Dhanraj Baid Jain College",
      year: "2019 - 2022",
      description: "Completed my Bachelor's degree with a strong foundation in Computer Applications, Programming logic, and web develoment fundamentals. This academic experience helped build my interest in frontend development and modern web technologies.",
      icon: "🎓",
      image:"/images/collegeimg.jpg"
    },
    {
      id: 2,
      type: 'School',
      title: "HSC",
      institution: "Govertnment Girls Higher Secondary School",
      year: "2018 - 2019",
      description: "Completed higher secondary education with a focus on core academic subjects, building good analytical thinking and foundational learning skills.",
      icon: "🏫",
      image:"/images/schoolimg.webp"
    }
  ];

  return (
    <section id="about" className="relative py-24 min-h-screen bg-slate-900 overflow-hidden bg-blue-950">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-700/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm shadow-xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-yellow-500"><HiSparkles /></span> Who I Am? 
            </h3>
            
            <div className="space-y-6 text-slate-300 text-[1.05rem] leading-relaxed">
              <p>
                Hello! I'm <strong className="text-cyan-400 font-medium">Preethi Venkatesan</strong>, a creative and detail-oriented Frontend Developer With 8 months of hands-on experience building modern and responsive web applications.
              </p>
              
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Building responsive, accessible UI components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Converting design mockups into functional interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Focusing on performance and clean code practices</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-700/50">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm">
                  <li className="flex flex-col"><span className="text-slate-500 font-medium">Name:</span> <span className="text-white">Preethi Venkatesan</span></li>
                  <li className="flex flex-col"><span className="text-slate-500 font-medium">Date of Birth:</span> <span className="text-white">28/03/2002</span></li>
                  <li className="flex flex-col"><span className="text-slate-500 font-medium">Phone:</span> <a href="tel:+919361895722" className="text-cyan-400 hover:underline">+91-9361895722</a></li>
                  <li className="flex flex-col"><span className="text-slate-500 font-medium">Email:</span> <a href="mailto:preethivenkat328@gmail.com" className="text-cyan-400 hover:underline break-all">preethivenkat328@gmail.com</a></li>
                  <li className="flex flex-col sm:col-span-2"><span className="text-slate-500 font-medium">Address:</span> <span className="text-white">5/598a, 9th cross street, Nehru Nagar, OMR, Chennai-600097</span></li>
                </ul>
              </div>
              
              <div className="pt-2">
                <a 
                  href="/resume/preethiVResume.docx" 
                  download="Preethi_Venkatesan_Resume.docx"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 text-cyan-400 border border-cyan-500/30 font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform duration-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="mt-10 p-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-500">
              <div className="bg-slate-900 border border-slate-700/50 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center sm:text-left relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] pointer-events-none"></div>
                
                <div className="flex items-center justify-center bg-slate-800 w-20 h-20 rounded-2xl shadow-inner border border-slate-700/80 shrink-0 z-10">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500">
                    8<span className="text-2xl text-cyan-400 p-1">+</span>
                  </div>
                </div>
                
                <div className="z-10">
                  <h4 className="text-xl font-bold text-white mb-2">Months of Experience</h4>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Actively building, learning, and delivering high-quality frontend projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 shrink-0">
              <span className="text-cyan-400">📚</span> Education 
            </h3>

            <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 flex-1 flex flex-col justify-center gap-12 py-6">
              {education.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="relative pl-8 md:pl-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center text-sm shadow-[0_0_10px_rgba(6,182,212,0.4)] z-10">
                    {item.icon}
                  </span>

                  {/* Card Content */}
                  <div className="bg-slate-800/40 p-6 md:p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300 group shadow-lg flex flex-col sm:flex-row gap-6 items-start">
                    
                    {/* Render Image if exists */}
                    {item.image && (
                      <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden border-2 border-slate-700/50 group-hover:border-cyan-500/50 transition-colors">
                        <img 
                          src={item.image} 
                          alt={`${item.institution} Campus`} 
                          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="flex-1 w-full">
                      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3 mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit whitespace-nowrap">
                          {item.year}
                        </span>
                      </div>
                      
                      <div className="text-blue-400 font-medium text-[1.05rem] mb-4">
                        {item.institution}
                      </div>
                    
                    <div className="w-full h-px bg-slate-700/50 mb-4"></div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
