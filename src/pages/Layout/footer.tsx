import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-[#050810] pt-16 pb-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Top Section: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Middle Section: Social Icons */}
        <div className="flex gap-6 mb-12">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/-preethi-venkatesan-27729a2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 hover:scale-110 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-lg" />
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/PreethiVenkatesanS" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 border border-slate-700/50 hover:border-white/50"
            aria-label="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>
          
          {/* Email */}
          <a 
            href="mailto:preethi.v@example.com"
            className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50"
            aria-label="Email"
          >
            <FiMail className="text-lg" />
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="w-full border-t border-slate-800/50 pt-8 flex flex-col items-center text-center">
          <p className="text-slate-500 text-xs font-light">
            Designed & Built by <span className="text-cyan-500 font-medium">Preethi Venkatesan</span>
          </p>
          <p className="text-slate-600 text-xs font-light mt-1 flex items-center gap-1">
            &copy; {currentYear} All Rights Reserved. Let's build something amazing together.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
