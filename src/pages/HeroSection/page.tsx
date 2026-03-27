import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">

        {/* Left Content Area (Text) */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 font-mono flex flex-wrap items-center gap-x-4 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.4 }
              }
            }}
          >
            {["Frontend", "Developer"].map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { type: "spring", damping: 14, stiffness: 180 }
                  }
                }}
                className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >Hi, I am Preethi Venkatesan, a passionate frontend developer with 8 months of hands on experience building responsive and user-friendly web applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href='#experience' className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1">
              View My Work
              <FaArrowRight size={18} />
            </a>
            <a href='#contact' className="px-8 py-3 rounded-full bg-slate-800 text-white border border-slate-700 font-semibold hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-5 text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="https://github.com/PreethiVenkatesanS" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/preethivenkatesan328" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200">
              < FaLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content Area (Image) */}
        <motion.div
          className="relative flex justify-center items-center w-full max-w-[260px] sm:max-w-[300px] md:max-w-md lg:max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative ring behind image */}
          <motion.div
            className="absolute inset-0 rounded-full border border-slate-700/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.div
            className="absolute inset-4 rounded-full border border-cyan-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          {/* Image Container with Floating Animation */}
          <motion.div
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/image.webp"
              alt="Preethi - Developer"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent mix-blend-multiply"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
