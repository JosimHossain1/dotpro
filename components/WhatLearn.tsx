import Link from 'next/link';
import { Card } from './ui/card';
import { WhatLearnData } from '@/data/Datas';

const WhatLearn = () => {
  return (
    <Card id="narrative" className="max-w-6xl mx-4 lg:mx-auto px-6 border-0 dark:border py-15 bg-[#f6f9f3da] dark:bg-[#1b1b1b] transition-colors duration-500 mb-10">

      <h2 className="text-4xl md:text-5xl text-center font-bold text-black/80 dark:text-white tracking-tighter serif italic transition-colors mb-10">10 Things This Book Will Teach You.</h2>

      <Card className='p-0 lg:mx-36 h-65 lg:h-100'>
        <iframe
          className="w-full rounded-lg h-full"
          src="https://www.youtube.com/embed/V0k33NOAVcE?si=m-cAjWPX2UZvbBK9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Card>

     <h2 className="text-4xl text-center font-bold text-black/80 dark:text-white tracking-tighter serif italic transition-colors ">Learn How To...</h2>


      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-15  space-y-5">
        {WhatLearnData.map((data) => (
          <h4 className="text-black dark:text-white font-semibold text-xl" key={data.id}>{data.id}. {data.title}</h4>
        ))}
      </div>
      <Link href="/more" className="text-center underline
       font-semibold text-black/90 dark:text-white leading-18 tracking-tighter serif mb-4 transition-colors">
        ...and much, much more
      </Link>

    </Card>
  );
};

export default WhatLearn;