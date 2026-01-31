import React from 'react';

const ChapterPreview = () => {
  return (
    <section id="preview" className="py-32 px-6 bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="max-w-xl">
            <span className="text-[#00CC76] font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">Code Insights</span>
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white tracking-tighter serif italic mb-8 transition-colors">
              Inside the <br/> <span className="text-black/30 dark:text-white/30">Semantic Vault.</span>
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed mb-10 font-medium transition-colors">
              We move beyond generic advice. You'll explore implementation strategies for complex UI components that maintain strict SEO integrity and WCAG 2.2 Level AAA standards.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black dark:text-white mb-1 transition-colors">45+</span>
                <span className="text-[9px] font-black text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">ARIA Patterns</span>
              </div>
              <div className="w-px h-10 bg-black/10 dark:bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black dark:text-white mb-1 transition-colors">100%</span>
                <span className="text-[9px] font-black text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">Inclusive Logic</span>
              </div>
            </div>
          </div>

          <div className="relative group perspective-[2000px]">
            <div className="relative aspect-[3/4] max-w-[450px] mx-auto bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col shadow-black/5 transition-transform duration-700 group-hover:rotate-y-[-5deg]">
              
              <div className="px-8 py-6 bg-white dark:bg-black/40 border-b border-black/5 dark:border-white/10 flex justify-between items-center z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#00CC76]/40"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-white/10"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-white/10"></div>
                </div>
                <span className="text-[9px] font-black text-black/40 dark:text-white/40 uppercase tracking-[0.3em]">Module 04: Focus Management</span>
              </div>

              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar relative z-10 space-y-10 scroll-smooth">
                <div className="space-y-4">
                  <span className="text-[#00CC76] font-bold text-[9px] uppercase tracking-[0.4em]">Snippet 04.2</span>
                  <h4 className="text-3xl font-bold text-black dark:text-white tracking-tight serif italic leading-tight transition-colors">The Skip-Link <br/> Architecture.</h4>
                </div>

                <div className="h-[2px] w-16 bg-[#00CC76]/30"></div>

                <p className="text-black/70 dark:text-white/70 leading-[1.8] font-medium text-sm font-mono bg-black/[0.02] dark:bg-white/[0.05] p-5 rounded-2xl border border-black/[0.05] dark:border-white/10 transition-colors">
                  &lt;a href="#main" <br/>
                  &nbsp;&nbsp;className="sr-only <br/>
                  &nbsp;&nbsp;focus:not-sr-only"&gt;<br/>
                  &nbsp;&nbsp;Skip to content<br/>
                  &lt;/a&gt;
                </p>

                <div className="p-8 bg-white dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-3xl space-y-4 shadow-sm">
                  <span className="text-[8px] font-black text-black/30 dark:text-white/30 uppercase tracking-[0.3em]">SEO Rule</span>
                  <p className="text-black dark:text-white italic font-bold leading-relaxed transition-colors">
                    "Search engines reward pages where the primary content is logically and physically prioritized in the DOM."
                  </p>
                </div>

                <p className="text-black/60 dark:text-white/60 leading-[1.8] font-medium transition-colors">
                  Effective focus management isn't just for assistive tech—it ensures a logical flow for the browser's rendering engine.
                </p>

                <div className="grid grid-cols-2 gap-4 pb-20">
                  <div className="h-24 bg-slate-100 dark:bg-white/[0.03] rounded-xl flex flex-col items-center justify-center border border-black/[0.03] dark:border-white/10">
                    <span className="text-[10px] font-bold text-black/20 dark:text-white/20 uppercase tracking-widest">A11Y</span>
                    <div className="w-8 h-1 bg-[#00CC76] rounded-full mt-2"></div>
                  </div>
                  <div className="h-24 bg-slate-100 dark:bg-white/[0.03] rounded-xl flex flex-col items-center justify-center border border-black/[0.03] dark:border-white/10">
                    <span className="text-[10px] font-bold text-black/20 dark:text-white/20 uppercase tracking-widest">SEO</span>
                    <div className="w-8 h-1 bg-black/40 dark:bg-white/40 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-white/90 dark:via-[#0A0A0A]/90 to-transparent z-20 transition-colors duration-500">
                <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] shadow-xl hover:bg-[#00CC76] dark:hover:bg-[#00CC76] dark:hover:text-white transition-all">
                  Read Accessibility Protocol
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChapterPreview;