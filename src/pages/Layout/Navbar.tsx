import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-slate-900/85 backdrop-blur-md shadow-lg py-4 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white">
          <a href="#hero" className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
             Preethi Venkatesan 
            </span>
            
          </a>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-white text-[1.05rem] font-medium relative group transition-colors duration-300 py-2"
            >
              {link.name}
              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-sm"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center z-[1001]">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none flex flex-col justify-center items-center w-8 h-8 space-y-[5px]"
            aria-label="Toggle Menu"
          >
            <span className={`block w-[25px] h-[3px] bg-white rounded-sm transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></span>
            <span className={`block w-[25px] h-[3px] bg-white rounded-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-[25px] h-[3px] bg-white rounded-sm transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`absolute top-0 right-0 h-screen w-[250px] bg-slate-900/95 backdrop-blur-xl shadow-2xl flex flex-col items-start pt-24 pl-10 gap-8 transition-transform duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-white text-lg font-medium relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-sm"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
