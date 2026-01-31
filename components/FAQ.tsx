import { FAQS } from '@/data/constants';
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-40 bg-white dark:bg-[#0A0A0A] transition-colors duration-500" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-black/30 dark:text-white/30 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Support</span>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tighter serif italic transition-colors">Common <br/> Inquiries.</h2>
        </div>
        
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openIndex === idx ? 'bg-black dark:bg-white/[0.05] text-white border-transparent shadow-2xl' : 'bg-white dark:bg-transparent border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20'}`}
            >
              <button 
                id={`faq-button-${idx}`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-10 py-8 text-left flex justify-between items-center focus-visible:bg-[#00CC76] focus-visible:text-white outline-none transition-colors"
              >
                <span className="text-lg font-bold tracking-tight">{faq.question}</span>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-[#00CC76] text-white rotate-180' : 'bg-black/5 dark:bg-white/5 text-black dark:text-white'}`}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-button-${idx}`}
                className={`transition-all duration-700 ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className={`px-10 pb-10 text-lg leading-relaxed ${openIndex === idx ? 'text-white/60 dark:text-white/60' : 'text-black/40 dark:text-white/40'}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;