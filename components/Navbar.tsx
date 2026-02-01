'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Logo from './helpers/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full px-6 py-3 shadow-lg'
              : ''
          }`}
        >
          <Logo />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              <a href="#preview" className="hover:text-black dark:hover:text-white">Preview</a>
              <a href="#features" className="hover:text-black dark:hover:text-white">Features</a>
              <a href="#checkout" className="hover:text-black dark:hover:text-white">Purchase</a>
            </nav>

            <div className="flex items-center gap-4 pl-6 border-l border-black/5 dark:border-white/10">
              {/* Theme toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#checkout"
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#00CC76] dark:hover:bg-[#00CC76] dark:hover:text-white transition"
              >
                Secure your copy
              </a>
            </div>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-[#00CC76]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden mt-4 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-2xl bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 space-y-6">
            <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60">
              <a href="#preview" onClick={() => setIsMenuOpen(false)}>Preview</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#checkout" onClick={() => setIsMenuOpen(false)}>Purchase</a>
            </nav>

            <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-4 w-4 dark:hidden" />
                    <Moon className="h-4 w-4 hidden dark:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#checkout"
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest"
              >
                Secure copy
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
