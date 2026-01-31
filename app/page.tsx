
import ChapterPreview from "@/components/ChapterPreview";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import TheArtifacts from "@/components/TheArtifacts";

const page = () => {
  return (
    <div className="min-h-screen relative bg-[#050605] selection:bg-[#00CC76] selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] neural-glow blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/5 blur-[120px]" />
        <div className="flow-line h-full"></div>
      </div>

      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />

        <ChapterPreview />

        <TheArtifacts />



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
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default page;