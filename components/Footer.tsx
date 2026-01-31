import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0A0A0A] pt-40 pb-20 border-t border-black/5 dark:border-white/5 relative z-10 transition-colors duration-500" aria-label="Global Footer">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-5 h-5 bg-black dark:bg-white rounded-sm rotate-45" aria-hidden="true"></div>
              <span className="font-bold text-xl tracking-tight text-black dark:text-white uppercase transition-colors">DotPro<span className="text-[#00CC76]">.</span></span>
            </div>
            <p className="text-black/40 dark:text-white/40 max-w-sm text-[10px] font-bold leading-relaxed uppercase tracking-[0.3em]">
              Engineering the capacity for deep inclusion in a digital world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <nav aria-label="Product Links">
              <h4 className="font-bold text-black/20 dark:text-white/20 mb-8 uppercase text-[10px] tracking-[0.3em]">Protocol</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em] text-black/50 dark:text-white/50">
                <li><a href="#preview" className="hover:text-black dark:hover:text-white transition-colors">Vault</a></li>
                <li><a href="#checkout" className="hover:text-black dark:hover:text-white transition-colors">Purchase</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Repo</a></li>
              </ul>
            </nav>
            <nav aria-label="Support Links">
              <h4 className="font-bold text-black/20 dark:text-white/20 mb-8 uppercase text-[10px] tracking-[0.3em]">Resources</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em] text-black/50 dark:text-white/50">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">WCAG 2.2</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-16 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <p className="text-[10px] font-bold text-black/20 dark:text-white/20 uppercase tracking-[0.2em]">© 2025 DotPro</p>
          <div className="flex space-x-8 opacity-40 hover:opacity-100 transition-opacity">
            <a href="#" className="text-black dark:text-white hover:text-[#00CC76] p-2" aria-label="Follow us on X">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;