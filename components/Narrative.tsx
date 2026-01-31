import { FEATURES } from '@/data/constants';
import React from 'react';

const Narrative: React.FC = () => {
  return (
    <div id="narrative" className="max-w-7xl mx-auto px-6 py-40 bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
      
      {/* Introduction to Method */}
      <div className="mb-40 text-center">
        <span className="text-[#00CC76] font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">The Methodology</span>
        <h2 className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tighter serif italic mb-12">Designed for <br/> <span className="text-black/20 dark:text-white/20">Complex Systems.</span></h2>
        <div className="h-px w-24 bg-[#00CC76]/30 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10 tracking-tight leading-tight">A precise protocol for <br/> intentional creation.</h3>
            <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed mb-12 font-medium">
              The Semantic Architect isn't just a guide. It's a technical blueprint for the modern web, ensuring accessibility and search performance are baked into the core of your product.
            </p>
          </div>
          
          <div className="flex-1 space-y-10">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-10 h-10 shrink-0 border border-black/10 dark:border-white/20 rounded-full flex items-center justify-center text-black dark:text-white group-hover:bg-[#00CC76] group-hover:text-white group-hover:border-[#00CC76] transition-all">
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold text-lg mb-2 tracking-tight">{f.title}</h4>
                  <p className="text-black/60 dark:text-white/50 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narrative;