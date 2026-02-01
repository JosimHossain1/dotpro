'use client';
import ChapterPreview from '@/components/ChapterPreview';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Narrative from '@/components/Narrative';
import Navbar from '@/components/Navbar';
import Offer from '@/components/Offer';
import ScrollToTop from '@/components/ScrollToTop';
import SocialShare from '@/components/SocialShare';
import TheArtifacts from '@/components/TheArtifacts';
import Ticker from '@/components/Ticker';


const page = () => {

  return (
    <div className={`min-h-screen relative transition-colors duration-500 bg-white dark:bg-[#0A0A0A] selection:bg-[#00CC76] selection:text-white`}>

      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250h-150 bg-[#00CC76]/3 dark:bg-[#00CC76]/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-slate-100 dark:bg-slate-900/20 blur-[100px]" />
      </div>
      <Navbar />
      <main id="main-content" className="relative z-10" role="main">
        <Hero />
        <Ticker />
        <ChapterPreview />
        <TheArtifacts />
        <Features />
        <Narrative />
        <Feedback />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
      <SocialShare />
    </div>
  );
};

export default page;