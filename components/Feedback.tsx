'use client';
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { feedbackData, feedbackData2 } from '@/data/feedbackData';
import Title from './helpers/Title';


const Feedback = () => {
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const Marquee = ({
    logos,
    direction = 'forwards',
  }: {
    logos: typeof feedbackData;
    direction?: string;
  }) => {
    const numItems = logos.length;
    const speed = '50s';
    const itemWidth = '120px';
    const itemGap = '25px';

    return (
      <div
        className='max-w-full overflow-hidden'
        id='feedback'
        style={
          {
            '--speed': speed,
            '--numItems': numItems,
            '--item-width': itemWidth,
            '--item-gap': itemGap,
            '--direction': direction,
            maskImage:
              'linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)',
          } as React.CSSProperties
        }
      >
        <div
          className='w-max flex'
          style={
            {
              '--track-width': `calc(var(--item-width) * ${numItems})`,
              '--track-gap': `calc(var(--item-gap) * ${numItems})`,
            } as React.CSSProperties
          }
        >
          {[...logos, ...logos].map((data, index) => (
            <div
              key={index}
              className=' bg-white/10 border border-black rounded-2xl text-white h-[250px]'
              style={
                {
                  marginRight: 'var(--item-gap)',
                  animation: `marquee-move var(--speed) linear infinite ${direction}`,
                } as React.CSSProperties
              }
            >
              <Card className='bg-gray-900/50 border border-gray-800 backdrop-blur-xl shadow-lg rounded-2xl p-6 max-w-md mx-auto hover:border-blue-400 transition-all duration-300 h-full'>
                <CardContent className='flex flex-col gap-4'>
                  {/* Top: Avatar and Name */}
                  <div className='flex items-center gap-4'>
                    {data.profile ? (
                      <Image
                        src={data.profile}
                        alt={data.name}
                        width={48}
                        height={48}
                        className='w-12 h-12 rounded-full object-cover border border-gray-700'
                      />
                    ) : (
                      <div className='w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold'>
                        {data.name}
                      </div>
                    )}
                    <div>
                      <h3 className='text-white font-semibold text-lg'>
                        {data.name}
                      </h3>
                      <p className='text-gray-400 text-sm'>{data.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Message */}
                  <p className='text-gray-300 text-sm leading-relaxed'>
                    {data.feddback}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className='items-center overflow-hidden max-w-6xl mx-auto'>
      <Title
        tinyText="Testimonials"
        title1="What Our"
        title2="Clients Say"
      />

      <div className='w-full max-w-6xl flex flex-col gap-y-6'>
        <Marquee logos={feedbackData} />
        <Marquee logos={feedbackData2} direction='reverse' />
      </div>
    </div>
  );
};

export default Feedback;
