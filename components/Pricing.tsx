
import React from 'react';
import { PRICING } from "@/data/contants";

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold text-indigo-500 uppercase tracking-[0.5em] mb-6">Pricing</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">Invest in your <span className="text-gradient">Focus.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {PRICING.map((plan) => (
            <div 
              key={plan.name} 
              className={`group relative p-12 rounded-[3.5rem] border transition-all duration-500 ${plan.isPopular ? 'bg-[#0a0a0a] border-indigo-500/50 shadow-2xl shadow-indigo-500/10' : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg shadow-indigo-500/20">
                  Highly Recommended
                </div>
              )}
              
              <div className="mb-12">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">{plan.name}</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                  <span className="text-slate-600 font-bold text-sm">USD</span>
                </div>
                <p className="mt-6 text-slate-400 font-medium leading-relaxed">{plan.description}</p>
              </div>

              <div className="h-px bg-white/5 mb-10" />

              <ul className="space-y-6 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-indigo-500/10 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300 font-semibold text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] transition-all transform active:scale-95 ${plan.isPopular ? 'bg-white text-black hover:bg-slate-200' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Unlock Access
              </button>
              
              <div className="mt-8 flex items-center justify-center space-x-4 opacity-30 group-hover:opacity-60 transition-opacity">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Visa</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Apple Pay</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PayPal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
