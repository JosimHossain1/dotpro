import { FEATURES, TESTIMONIALS } from '@/data/contants';
import React from 'react';


const Narrative = () => {
  return (
    <div id="narrative" className="max-w-7xl mx-auto px-6 py-40">
      

      {/* Block 2: Protocol Alpha (Original Refined) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-80 items-center">
        <div className="lg:col-span-6">
           <div className="flex items-center space-x-4 mb-10">
             <span className="text-[#00CC76] font-black text-[10px] uppercase tracking-[0.6em]">Protocol Alpha</span>
             <div className="h-px w-12 bg-[#00CC76]/30" aria-hidden="true"></div>
           </div>
           <h2 className="text-6xl font-black text-white leading-[0.9] tracking-tighter mb-12 serif italic">Architecting <br/>Total <br/><span className="text-[#00CC76]">Immersion.</span></h2>
           <p className="text-xl text-slate-400 font-medium leading-relaxed mb-16 max-w-lg">
             Silence is the new status symbol. This protocol is a surgical strike against cognitive decay.
           </p>
           
           <div className="grid grid-cols-1 gap-12">
             {FEATURES.map((f, i) => (
               <div key={i} className="group flex gap-8 items-start p-8 rounded-3xl border border-white/5 glass-blade hover:border-[#00CC76]/30 transition-all duration-500">
                 <div className="w-14 h-14 shrink-0 bg-[#00CC76]/10 border border-[#00CC76]/20 rounded-2xl flex items-center justify-center text-[#00CC76] group-hover:bg-[#00CC76] group-hover:text-black transition-all shadow-[0_0_20px_rgba(0,204,118,0.1)]">
                   {f.icon}
                 </div>
                 <div>
                   <h4 className="text-white font-black text-lg mb-3 tracking-tight group-hover:text-[#00CC76] transition-colors">{f.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
        
        <div className="lg:col-span-6 relative">
           <div className="relative glass-blade p-12 rounded-[4rem] border border-white/10 overflow-hidden group">
              <div className="mb-12 flex justify-between items-center">
                 <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#00CC76]"></div>
                 </div>
                 <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Performance_Log_001</span>
              </div>
              <p className="text-3xl font-black text-white italic serif leading-[1.2] mb-12">
                "This isn't just an eBook—it's the missing documentation for the high-functioning mind."
              </p>
              <div className="flex items-center space-x-5">
                 <img src={TESTIMONIALS[0].avatar} className="w-14 h-14 rounded-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all" alt={TESTIMONIALS[0].name} />
                 <div>
                   <p className="text-md font-black text-white tracking-tight">{TESTIMONIALS[0].name}</p>
                   <p className="text-[10px] font-bold text-[#00CC76] uppercase tracking-[0.2em]">Lead Architect @ {TESTIMONIALS[0].company}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      
    </div>
  );
};

export default Narrative;