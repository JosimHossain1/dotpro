'use client';
import React, { useState, useEffect } from 'react';

const ScrollToTop= () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-[150] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-12 h-12 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-full flex items-center justify-center text-black dark:text-white shadow-lg bg-[#00CC76] hover:text-white hover:border-[#00CC76] focus:outline-none focus:ring-2 focus:ring-[#00CC76] transition-all group"
      >
        <svg 
          className="w-5 h-5 transition-transform group-hover:-translate-y-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;