'use client';
import React from 'react';

const Ticker = () => {
  const items = [
    'SEO OPTIMIZED',
    'FAST LOAD TIMES',
    'Better Developer Experience',
    'Accessibility FIRST',
    'SERVER-SIDE METADATA',
    'Website PERFORMANCE',
  ];

  return (
    <div
      className="w-full bg-white dark:bg-[#222222] border-y border-black/5 dark:border-white/5 py-10 overflow-hidden select-none transition-colors duration-500 mt-15"
      aria-hidden="true"
    >
      <div
        className="w-max flex animate-marquee whitespace-nowrap"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)',
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center space-x-4 mx-8">
            <span className="text-[14px] font-semibold text-black/80 dark:text-white/80 uppercase tracking-[0.5em] transition-colors">
              {item}
            </span>
            <div className="w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
