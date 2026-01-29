"use client";
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-12'}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${isScrolled ? 'bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full px-10 py-3 shadow-2xl' : ''}`}>
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3 group" aria-label="Deep Work Blueprint Home">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-[#00CC76] rounded-xs rotate-45 group-hover:rotate-0 transition-transform"></div>
              <div className="absolute inset-0 flex items-center justify-center text-black font-black text-xs z-10">B</div>
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase italic">Blueprint<span className="text-[#00CC76]">.</span></span>
          </a>
          
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
              <a href="#diagnostic" className="hover:text-white transition-colors">Diagnose</a>
              <a href="#narrative" className="hover:text-white transition-colors">Optimize</a>
              <a href="#checkout" className="hover:text-white transition-colors">Deploy</a>
            </div>
            <a 
              href="#checkout" 
              className="bg-[#00CC76] text-black px-8 py-3.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-[#00CC76]/10"
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden text-white" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;