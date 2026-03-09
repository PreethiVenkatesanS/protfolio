import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiDownload } from 'react-icons/fi';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#0a0f1c] min-h-[60vh] flex flex-col justify-center items-center">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Top Gradient Glow */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 w-1/2 left-1/4 h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
        
        {/* Header Section */}
        <motion.div 
          className="mb-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Contact Me<span className="text-cyan-400">.</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, or frontend developer projects. 
           </p>
        </motion.div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email */}
          <motion.a 
            href="mailto:preethivenkat328@gmail.com"
            className="group relative bg-[#0b1120] p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
              <FiMail />
            </div>
            <div>
              <h3 className="text-slate-200 font-semibold mb-1">Email</h3>
              <a href="mailto: preethivenkat328@gmail.com" className="text-slate-400 font-light text-sm">preethivenkat328@gmail.com</a>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href="https://linkedin.com/in/preethi-v-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0b1120] p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
              <FiLinkedin />
            </div>
            <div>
              <h3 className="text-slate-200 font-semibold mb-1">LinkedIn</h3>
              <a href="https://linkedin.com/in/-preethi-venkatesan-27729a2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-400 font-light text-sm">Preethi Venkatesan</a>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.div 
            className="group relative bg-[#0b1120] p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
              <FiPhone />
            </div>
            <div>
              <h3 className="text-slate-200 font-semibold mb-1">Phone</h3>
              <p className="text-slate-400 font-light text-sm">+91 9361895722</p>
            </div>
          </motion.div>

        </div>

        {/* CTA Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="/resume/preethiVResume.docx" 
            download="Preethi_Venkatesan_Resume.docx"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group transform hover:-translate-y-0.5"
          >
            <span>Download My Resume</span>
            <FiDownload className="text-xl group-hover:animate-bounce" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ContactSection;
