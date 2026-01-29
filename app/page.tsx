import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen relative bg-[#050605] selection:bg-[#00CC76] selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] neural-glow blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/5 blur-[120px]" />
        <div className="flow-line h-full"></div>
      </div>

      <Navbar/>
      <main id="main-content" className="relative z-10">
   
      
        
  
        <div className="relative">
          <div className="absolute left-1/2 -top-20 -translate-x-1/2 flex flex-col items-center">
            <div className="h-40 w-px bg-gradient-to-b from-transparent to-[#00CC76]"></div>
            <span className="mt-4 text-[9px] font-black text-[#00CC76] uppercase tracking-[0.6em]">Phase 01_Diagnostic</span>
          </div>

        </div>

        {/* The Flow Journey Phase 02: Intervention */}
        <div className="relative mt-40">
           <div className="absolute left-1/2 -top-20 -translate-x-1/2 flex flex-col items-center">
            <div className="h-40 w-px bg-gradient-to-b from-[#00CC76] via-[#00CC76] to-transparent"></div>
            <span className="mt-4 text-[9px] font-black text-[#00CC76] uppercase tracking-[0.6em]">Phase 02_Architecture</span>
          </div>

        </div>

        {/* The Flow Journey Phase 03: Implementation */}
        <div className="relative">

        </div>

        {/* The Final Destination: Deployment */}

      </main>


      {/* Persistent Flow Labels */}
      <div className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 phase-label items-center space-y-10 py-10 z-50">
        <span className="text-[8px] font-black text-white/10 uppercase tracking-[1em]">Diagnose</span>
        <div className="h-10 w-px bg-white/10"></div>
        <span className="text-[8px] font-black text-[#00CC76] uppercase tracking-[1em]">Optimize</span>
        <div className="h-10 w-px bg-white/10"></div>
        <span className="text-[8px] font-black text-white/10 uppercase tracking-[1em]">Deploy</span>
      </div>
    </div>
  );
};

export default page;