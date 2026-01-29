
const Hero= () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Abstract Focus Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <div className="w-200 h-200 border border-[#00CC76]/10 rounded-full animate-pulse"></div>
        <div className="absolute w-150 h-150 border border-[#00CC76]/5 rounded-full rotate-45"></div>
        <div className="absolute w-250 h-px bg-linear-to-r from-transparent via-[#00CC76]/20 to-transparent rotate-15"></div>
        <div className="absolute w-250 h-px bg-linear-to-r from-transparent via-[#00CC76]/20 to-transparent -rotate-15"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-4 mb-2 py-1 px-4 bg-[#00CC76]/5 border border-[#00CC76]/20 rounded-full mt-16">
          <span className="w-1.5 h-1.5 bg-[#00CC76] rounded-full animate-ping"></span>
          <span className="text-[10px] font-black text-[#00CC76] uppercase tracking-[0.4em]">System Active: Depth Sync 2.0.4</span>
        </div>
        
        <h1 className="text-7xl md:text-[8rem] font-black text-white leading-[0.85] tracking-tighter mb-12">
          THE ART OF <br/>
          <span className="serif italic text-[#00CC76] block transform md:-translate-x-12 translate-y-4">Absolute Focus.</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-20">
          <p className="text-xl md:text-3xl text-slate-400 font-medium leading-tight tracking-tight">
            Stop competing for attention. <br/>
            Start architecting the environment for <br/>
            <span className="text-white italic">exponential cognitive output.</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="#checkout" 
            className="group relative px-16 py-7 bg-[#00CC76] text-black font-black text-xs uppercase tracking-[0.3em] rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_25px_60px_-15px_rgba(0,204,118,0.5)] overflow-hidden"
            aria-label="Secure the system protocol"
          >
            <span className="relative z-10">Initialize Protocol</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
          </a>
          
          <div className="flex items-center space-x-6">
            <div className="h-px w-12 bg-white/10"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">v2.0 Deployments: 12.4k</span>
            <div className="h-px w-12 bg-white/10"></div>
          </div>
        </div>
      </div>

      {/* Floating Status UI */}
      <div className="absolute bottom-20 left-10 hidden xl:block border-l border-[#00CC76]/30 pl-6 py-4">
        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Neural Baseline</p>
        <p className="text-xl font-black text-[#00CC76] tracking-tighter italic serif">Sync_Optimal</p>
      </div>
      
      <div className="absolute bottom-20 right-10 hidden xl:block text-right border-r border-[#00CC76]/30 pr-6 py-4">
        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Cognitive Latency</p>
        <p className="text-xl font-black text-white tracking-tighter">0.02ms</p>
      </div>
    </div>
  );
};

export default Hero;