
import React from 'react';

const Footer= () => {
  return (
    <footer className="bg-[#050605] pt-40 pb-20 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-4 mb-10">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-[#00CC76] rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center text-black font-black text-sm z-10">B</div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase italic">Blueprint<span className="text-[#00CC76]">.</span></span>
            </div>
            <p className="text-slate-500 max-w-sm text-sm font-bold leading-relaxed uppercase tracking-wider">
              Engineering the capacity for deep thought in a shallow world.
            </p>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black text-[#00CC76] mb-8 uppercase text-[10px] tracking-[0.4em]">Protocol</h4>
              <ul className="space-y-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <li><a href="#narrative" className="hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#preview" className="hover:text-white transition-colors">Interface</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Licensing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[#00CC76] mb-8 uppercase text-[10px] tracking-[0.4em]">Resources</h4>
              <ul className="space-y-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Log_Updates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black text-[#00CC76] mb-8 uppercase text-[10px] tracking-[0.4em]">Security</h4>
              <ul className="space-y-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy_Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms_Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-6">
             <div className="w-2 h-2 bg-[#00CC76] rounded-full pulse-emerald"></div>
             <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">© 2025 Deep Blueprint Media / System Active</p>
          </div>
          <div className="flex space-x-10">
            <a href="#" className="text-slate-600 hover:text-[#00CC76] transition-colors"><span className="sr-only">X</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
