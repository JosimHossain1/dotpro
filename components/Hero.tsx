import Link from "next/link";
import Background from "./helpers/Background";
import BlinkDot from "./helpers/BlinkDot";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden bg-white dark:bg-[#0A0A0A] pt-32 pb-20 lg:pt-30 transition-colors duration-500">
      {/* Background Architectural Elements */}
      <Background />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Column: Intelligence */}
        <div className="lg:col-span-7 flex flex-col  items-center lg:items-start fade-in">
          <div className="inline-flex items-center space-x-3 mb-8 py-2.5 px-5 bg-black/3 dark:bg-white/5 border border-black/8 dark:border-white/1 rounded-full backdrop-blur-md">

            <BlinkDot />
            <span className="text-[10px] font-black text-black/60 dark:text-white/60 uppercase tracking-[0.35em]">Technical Edition v1.0.0</span>
          </div>

          <h1 className="text-7xl lg:text-[5rem] font-bold text-black dark:text-white leading-[0.95] tracking-tighter mb-8 transition-colors">
            Ship Inclusive <br />
            <span className="serif italic text-[#00A35C] dark:text-[#00CC76] relative inline-block">
              High-Rank Sites.
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-[#00CC76]/20" preserveAspectRatio="none" viewBox="0 0 100 10" fill="currentColor">
                <path d="M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-md text-black/60 dark:text-white/60 leading-relaxed max-w-xl mb-6 transition-colors">
            A precise manual for developers. Master the synergy between Semantic HTML and Search Visibility. Engineering for everyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link
              href="#checkout"
              className="px-12 py-5 text-white font-bold text-[11px] uppercase tracking-[0.35em] rounded-full hover:bg-[#00A35C] bg-[#00CC76] shadow-[0_25px_50px_-12px_rgba(0,204,118,0.4)] -translate-y-1 transition-all"
            >
              Get the Book
            </Link>
            <div className="flex items-center space-x-3 px-6 py-2 border border-black/5 dark:border-white/10 rounded-full">
              <BlinkDot />
              <span className="text-[9px] font-bold text-black/60 dark:text-white/60 uppercase tracking-widest">100/100 Lighthouse Ready</span>
            </div>
          </div>
        </div>

        {/* Right Column: Book Mockup */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end group">
          <div className="relative w-full max-w-120 aspect-[1/1.1] perspective-[3000px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-linear-to-tr from-[#00CC76]/20 dark:from-[#00CC76]/30 via-transparent to-[#00CC76]/20 blur-[130px] rounded-full pointer-events-none scale-95 group-hover:scale-110 transition-all duration-1000"></div>

            <div className="relative w-75 h-105 sm:w-85 sm:h-120 mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform -rotate-6 group-hover:rotate-2 group-hover:scale-105 group-hover:-translate-y-2">

              <div className="absolute inset-0 bg-[#0F0F0F] dark:bg-[#050505] rounded-[2.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)] group-hover:shadow-[0_80px_160px_-40px_rgba(0,204,118,0.25)] overflow-hidden border border-white/10 ring-1 ring-white/5 z-10">
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-[#00CC76]/5 opacity-60"></div>

                <div className="absolute top-0 left-0 w-3 h-full bg-linear-to-b from-[#00CC76] via-[#00FF95] to-[#00A35C] shadow-[15px_0_50px_rgba(0,204,118,0.4)] z-20"></div>

                <div className="relative h-full p-10 sm:p-12 flex flex-col justify-between z-10 text-left">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <BlinkDot />
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em]">&lt;SEMANTIC_CORE /&gt;</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="h-1 w-16 bg-[#00CC76]/40 rounded-full mb-6"></div>
                    <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tighter leading-[0.85] flex flex-col gap-1">
                      <span className="text-white/30 text-2xl sm:text-3xl">THE SEMANTIC</span>
                      <span className="text-white">ARCHITECT.</span>
                      <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00CC76] via-[#00FF95] to-[#00A35C]">A11Y + SEO.</span>
                    </h2>
                  </div>

                  <div className="flex justify-between items-end pt-8 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-white/20 text-[8px] font-mono tracking-[0.2em] mb-1 uppercase">ENGINEER</span>
                      <span className="text-white/70 text-[9px] font-bold tracking-[0.25em] uppercase">DEVELOPER EDITION</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-12 top-1/4 bg-white/95 dark:bg-black/95 backdrop-blur-3xl border border-black/5 dark:border-white/10 p-5 rounded-[2.5rem] shadow-2xl transform -rotate-12 group-hover:-rotate-3 transition-all duration-700 z-30">
                <span className="text-[8px] font-black text-black/30 dark:text-white/30 uppercase tracking-[0.2em] mb-1 block">RANK</span>
                <span className="text-xl font-black text-black dark:text-white tracking-tighter">#1</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;