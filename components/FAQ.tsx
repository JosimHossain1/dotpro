import { FAQS } from '@/data/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowDown } from 'lucide-react';

const FAQ = () => {
  return (
    <section
      className="py-10 bg-white dark:bg-[#0A0A0A] transition-colors duration-500"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-black/30 dark:text-white/70 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
            Support
          </span>
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tighter serif italic transition-colors"
          >
            Common <br /> Inquiries.
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-none"
            >
              <div className="rounded-[2.5rem] border transition-all duration-500 overflow-hidden bg-white dark:bg-transparent border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 data-[state=open]:bg-black data-[state=open]:dark:bg-white/5 data-[state=open]:border-transparent data-[state=open]:shadow-2xl">
                
                {/* Trigger */}
                <AccordionTrigger
                  className="px-10 py-8 text-left text-[16px] font-semibold tracking-tight flex justify-between items-center no-underline hover:no-underline focus-visible:bg-[#00CC76] focus-visible:text-white transition-colors [&>svg]:hidden"
                >
                  {faq.question}

                  {/* Custom Icon */}
                  <span
                    className="ml-6 w-8 h-8 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 text-black dark:text-white transition-all duration-500 data-[state=open]:bg-[#00CC76] data-[state=open]:text-white data-[state=open]:rotate-180"
                  >
                    <ArrowDown size={16} />
                  </span>
                </AccordionTrigger>

                {/* Content */}
                <AccordionContent className="px-10 pb-10 text-[15px] leading-relaxed text-black/40 dark:text-white/80 data-[state=open]:text-white/60">
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
