
import { BOOK_INFO } from '@/data/contants';
import React from 'react';


const FinalCTA: React.FC = () => {
  return (
    <div className="py-60 px-6 relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-indigo-600/10 blur-[180px] rounded-full -z-10"></div>
      
      <div className="relative z-10 max-w-5xl">
        <h2 className="text-[15vw] lg:text-[10vw] font-serif leading-[0.8] tracking-tighter uppercase mb-12 title-mask">
          The End of <br/>
          <span className="italic font-light">Accidents.</span>
        </h2>
        
        <div className="flex flex-col items-center space-y-12">
          <p className="text-2xl text-gray-500 font-light max-w-xl">
            Secure your invitation to a life of radical precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-12">
            <div className="text-left">
              <div className="text-5xl font-black text-white tracking-tighter">${BOOK_INFO.price}</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black mt-2">Hardcover Release</div>
            </div>
            <button className="px-16 py-8 rounded-full bg-white text-black font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-[0_0_60px_rgba(255,255,255,0.2)]">
              Claim Yours
            </button>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-12 text-[9px] font-black uppercase tracking-[0.5em] text-gray-700">
          <span>Global Access</span>
          <span>Neuro-Mapping</span>
          <span>Direct Connect</span>
          <span>Legacy Build</span>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
