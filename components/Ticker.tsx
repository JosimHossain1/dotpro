import React from 'react';

const Ticker = () => {
  const items = [
    "SEMANTIC HTML5",
    "WCAG 2.2 LEVEL AAA",
    "CORE WEB VITALS",
    "ARIA-PATTERNS",
    "SERVER-SIDE METADATA",
    "JSON-LD SCHEMA",
  ];

  return (
    <div 
      className="w-full bg-white dark:bg-[#0A0A0A] border-y border-black/5 dark:border-white/5 py-10 overflow-hidden select-none transition-colors duration-500"
      aria-hidden="true"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center max-w-6xl mx-auto">
        {Array(4).fill(items).flat().map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[10px] font-bold text-black/8 dark:text-white/8 uppercase tracking-[0.5em] mx-16 transition-colors hover:text-black/30 dark:hover:text-white/40">
              {item}
            </span>
            <div className="w-1 h-1 bg-black/5 dark:bg-white/5 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;