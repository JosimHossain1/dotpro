import { TESTIMONIALS } from '@/data/constants';
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-40 bg-black/5 dark:bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-32">
          <span className="text-[#00CC76] font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Proof of Concept</span>
          <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter serif italic">Voices of <br/> <span className="">The Disciplined.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-black/5 dark:bg-white/5 text-white p-12 rounded-[3.5rem] border border-black/5 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 transition-all duration-700">
              <div className="mb-12">
                <div className="flex space-x-1 mb-10 opacity-30">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-xl leading-relaxed font-medium serif italic">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center space-x-5 pt-10 border-t border-black/5">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-2xl grayscale" />
                <div>
                  <p className="font-bold text-white text-sm">{testimonial.name}</p>
                  <p className="text-[10px] font-bold text-black/30 dark:text-white/30 uppercase tracking-widest">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;