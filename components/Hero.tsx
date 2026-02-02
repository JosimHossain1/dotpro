import Link from "next/link";
import Background from "./helpers/Background";
import BlinkDot from "./helpers/BlinkDot";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0A0A0A] pt-32 pb-5 md:pb-20 lg:pt-30 transition-colors duration-500">
      <Background />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Column: Intelligence */}
        <div className="lg:col-span-7 flex flex-col  items-center lg:items-start fade-in">
          <div className="inline-flex items-center space-x-3 mb-8 py-2.5 px-5 bg-black/3 dark:bg-white/5 border border-black/8 dark:border-white/1 rounded-full backdrop-blur-md">

            <BlinkDot />
            <span className="text-[10px] font-black text-black/60 dark:text-white/60 uppercase tracking-[0.35em]">Now Availble Edition v1.0.0</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white  tracking-tighter mb-8 transition-colors text-center lg:text-left leading-tight">
            The Modern Developer's <br />
            <span className="serif italic text-[#00A35C] dark:text-[#00CC76] relative inline-block">
             PlayBooks
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-[#00CC76]/20" preserveAspectRatio="none" viewBox="0 0 100 10" fill="currentColor">
                <path d="M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z" />
              </svg>
            </span>
          </h1>

          <p className="text-2xl text-black/80 dark:text-white/60 leading-relaxed max-w-xl mb-6 transition-colors">
            A precise manual for developers. Master the synergy between Semantic HTML and Search Visibility. Engineering for everyone.
          </p>


        </div>

        {/* Right Column: Book Mockup */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end group">
          <div className="relative w-full max-w-120 aspect-[1/1.1] perspective-[3000px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-linear-to-tr from-[#00CC76]/20 dark:from-[#00CC76]/30 via-transparent to-[#00CC76]/20 blur-[130px] rounded-full pointer-events-none scale-95 group-hover:scale-110 transition-all duration-1000"></div>

            <div className="relative w-75 h-105 sm:w-85 sm:h-120 mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform -rotate-6 group-hover:rotate-2 group-hover:scale-105 group-hover:-translate-y-2">

              <div className="absolute inset-0 bg-[#0F0F0F] dark:bg-[#050505] rounded-[2.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)]  overflow-hidden border border-white/10 ring-1 ring-white/5 z-10">
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-[#00CC76]/5 opacity-60"></div>

            

              <Image  src='/bookcover.png' alt='Book Cover' width={500} height={600} className="w-full h-full object-cover rounded-[2.5rem] relative z-30" />
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