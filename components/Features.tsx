import { FEATURES } from '@/data/constants';
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-40 bg-white dark:bg-[#0A0A0A] border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-40">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group flex flex-col items-start">
              <div className="w-12 h-12 bg-black/[0.02] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 rounded-xl flex items-center justify-center text-black dark:text-white mb-8 group-hover:bg-[#00CC76] group-hover:text-white group-hover:border-[#00CC76] transition-all duration-500 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-4 tracking-tight uppercase tracking-[0.05em]">{feature.title}</h4>
              <p className="text-black/50 dark:text-white/40 leading-relaxed text-sm font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Quote / Statistics Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative bg-[#0A0A0A] dark:bg-black p-12 md:p-20 rounded-[3.5rem] overflow-hidden flex flex-col justify-center border border-white/5 shadow-2xl">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
            
            <div className="relative z-10">
              <div className="mb-12 inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <div className="w-1 h-1 bg-[#00CC76] rounded-full animate-pulse"></div>
                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em]">Core Philosophy</span>
              </div>
              <p className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-12 serif italic tracking-tighter">
                "Technical accessibility is not a feature. It is the <span className="text-[#00CC76]">foundation</span> of the modern, decentralized web."
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 grayscale">
                  <img src="https://i.pravatar.cc/150?u=developer-hero" alt="Author" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-white text-base tracking-tight">Elias Thorne</p>
                  <p className="text-[#00CC76] text-[9px] font-black uppercase tracking-[0.4em]">Lead Semantic Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {[
              { label: 'Technical Readers', value: '12,400+', color: 'text-black dark:text-white' },
              { label: 'Global Satisfaction', value: '4.9/5', color: 'text-[#00A35C] dark:text-[#00CC76]' }
            ].map((stat, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center transition-all bg-white dark:bg-white/[0.02] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-[#00CC76]/5 group`}>
                <span className={`text-4xl font-bold tracking-tighter mb-2 ${stat.color}`}>{stat.value}</span>
                <span className="text-[10px] font-black text-black/30 dark:text-white/30 uppercase tracking-[0.3em]">{stat.label}</span>
              </div>
            ))}
            <div className="p-10 rounded-[2.5rem] bg-[#00CC76] flex flex-col items-center justify-center text-center shadow-[0_20px_40px_-10px_rgba(0,204,118,0.3)]">
              <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">WCAG 2.2 Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;