import React from 'react';

const Offer= () => {
  return (
    <section id="checkout" className="py-15 bg-white dark:bg-[#0A0A0A] border-t border-black/5 dark:border-white/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto  px-6 md:px-0">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tighter serif italic transition-colors">Secure Your <br/><span className="">Digital License.</span></h2>
        </div>

        <div className="max-w-4xl mx-auto">
           <div className="relative group bg-[#F9F6F3] dark:bg-white/2 border dark:border-white/10 rounded-[4rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl transition-all hover:shadow-[#00CC76]/10">
              {/* Subtle Shimmer */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-20"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                 <div className="mb-10 inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
                    <span className="text-black/70 dark:text-white/70 font-black text-[10px] tracking-[0.3em] uppercase">Limited Release v1.0.0</span>
                 </div>
                 
                 <h3 className="text-black dark:text-white text-4xl md:text-5xl font-bold tracking-tighter mb-8 serif italic">The Architect Edition</h3>
                 
                 <p className="text-black/80 dark:text-white/80 text-lg mb-12 max-w-xl font-medium leading-relaxed">
                    Join 12,000+ developers. Get immediate digital access to the Semantic Architect, the Workbook, and our private code repository.
                 </p>

                 <div className="flex flex-col items-center gap-8">
                    <div className="flex items-baseline gap-4">
                       <span className="text-black dark:text-white text-7xl font-bold tracking-tighter">$49</span>
                       <span className="text-white/20 dark:text-white/20 font-black text-xs uppercase tracking-widest">Single License</span>
                    </div>

                    <button className="bg-black dark:bg-white text-white dark:text-black px-16 py-6 rounded-full font-black text-[12px] uppercase tracking-[0.35em] shadow-2xl hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all">
                       Buy the Protocol
                    </button>
                 </div>

                 <div className="pt-10 border-t border-white/5 w-full flex flex-wrap justify-center gap-12 opacity-50">
                    <span className="text-[9px] font-black text-black dark:text-white/70 uppercase tracking-[0.2em]">PDF / EPUB</span>
                    <span className="text-[9px] font-black text-black dark:text-white/70 uppercase tracking-[0.2em]">WCAG 2.2</span>
                    <span className="text-[9px] font-black text-black dark:text-white/70 uppercase tracking-[0.2em]">CORE VITALS</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-10 text-center">
           <p className="text-[10px] text-black/70 dark:text-white/70 font-black uppercase tracking-[0.4em] mb-4">30-Day Technical Guarantee</p>
           <p className="text-[12px] text-black/50 dark:text-white/60 font-medium max-w-lg mx-auto leading-relaxed">
              If the protocol doesn't fundamentally improve your Lighthouse scores and search visibility, contact us for a full refund. No questions asked.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;