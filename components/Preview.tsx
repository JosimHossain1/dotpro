import { PreviewData } from '@/data/PreviewData';
import { Card } from './ui/card';



const Preview = () => {
  return (
    <section id="preview" className="max-w-6xl mx-auto py-15 overflow-hidden transition-colors duration-500 px-6">

          <Card className='p-10'>
            <h2 className="text-3xl md:text-6xl font-bold text-black/90 dark:text-white md:leading-18 tracking-tighter serif md:mb-8 transition-colors">
              Great developers don&apos;t just write code. They build things that last.
            </h2>
            <ul>
                {
                PreviewData.map((item, index) => (
                  <li key={index} className="text-black/70 dark:text-white/70 leading-[1.8] font-medium  mb-2 transition-colors">
                    {item}
                  </li>
                ))
              }
            </ul>
           
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black dark:text-white mb-1 transition-colors">45+</span>
                <span className="text-[9px] font-black text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">ARIA Patterns</span>
              </div>
              <div className="w-px h-10 bg-black/10 dark:bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black dark:text-white mb-1 transition-colors">100%</span>
                <span className="text-[9px] font-black text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">Inclusive Logic</span>
              </div>
            </div>
          </Card>
 
    </section>
  );
};

export default Preview;