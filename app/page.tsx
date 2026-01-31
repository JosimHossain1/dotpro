'use client';
import ChapterPreview from '@/components/ChapterPreview';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Narrative from '@/components/Narrative';
import Navbar from '@/components/Navbar';
import Offer from '@/components/Offer';
import ScrollToTop from '@/components/ScrollToTop';
import SocialShare from '@/components/SocialShare';
import Testimonials from '@/components/Testimonials';
import TheArtifacts from '@/components/TheArtifacts';
import Ticker from '@/components/Ticker';
import React, { useState, useEffect } from 'react';


const page= () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen relative transition-colors duration-500 bg-white dark:bg-[#0A0A0A] selection:bg-[#00CC76] selection:text-white`}>
      {/* Skip Link for Keyboard Navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[400] focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black focus:px-6 focus:py-3 focus:rounded-full focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#00CC76]/[0.03] dark:bg-[#00CC76]/[0.05] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 dark:bg-slate-900/20 blur-[100px]" />
      </div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main id="main-content" className="relative z-10" role="main">
        <Hero />
        <Ticker />
        <ChapterPreview />
        <TheArtifacts />
        <Features />
        <Narrative />
        <Testimonials />
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