'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Logo from './helpers/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-300 transition-all duration-500 ease-in-out ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? 'bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-full px-8 py-3'
              : 'px-0'
          }`}
        >
          {/* Logo */}
         <Logo />

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              <a href="#preview" className="hover:text-black dark:hover:text-white">
                Preview
              </a>
              <a href="#features" className="hover:text-black dark:hover:text-white">
                Features
              </a>
              <a href="#checkout" className="hover:text-black dark:hover:text-white">
                Purchase
              </a>
            </nav>

            <div className="flex items-center space-x-6 pl-6 border-l border-black/5 dark:border-white/10">
              {/* Theme toggle */}
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="p-2 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#00CC76] rounded-lg"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <a
                href="#checkout"
                className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#00CC76] dark:hover:bg-[#00CC76] dark:hover:text-white transition-all shadow-lg shadow-black/5"
              >
                Secure your copy
              </a>
            </div>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden text-black dark:text-white p-2 focus-visible:ring-2 focus-visible:ring-[#00CC76] rounded-lg"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
