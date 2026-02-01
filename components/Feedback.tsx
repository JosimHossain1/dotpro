'use client';
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { feedbackData, feedbackData2 } from '@/data/feedbackData';
import Title from './helpers/Title';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

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
        className="max-w-full overflow-hidden"
        id="feedback"
        style={{
          '--speed': speed,
          '--numItems': numItems,
          '--item-width': itemWidth,
          '--item-gap': itemGap,
          '--direction': direction,
          maskImage:
            'linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)',
        } as React.CSSProperties}
      >
        <div
          className="w-max flex"
          style={{
            '--track-width': `calc(var(--item-width) * ${numItems})`,
            '--track-gap': `calc(var(--item-gap) * ${numItems})`,
          } as React.CSSProperties}
        >
          {[...logos, ...logos].map((data, index) => (
            <div
              key={index}
              className="
                bg-transparent
                border border-black/10 dark:border-white/10
                rounded-2xl
                h-[250px]
              "
              style={{
                marginRight: 'var(--item-gap)',
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
              } as React.CSSProperties}
            >
              <Card
                className="
                  bg-white dark:bg-black/60
                  border border-black/10 dark:border-white/10
                  backdrop-blur-xl
                  rounded-2xl
                  p-6
                  max-w-md
                  mx-auto
                  h-full

                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_rgba(0,0,0,0.5)]

                  hover:border-[#00CC76]
                  hover:shadow-[0_0_0_1px_rgba(0,204,118,0.4),0_20px_40px_rgba(0,204,118,0.15)]
                  dark:hover:shadow-[0_0_0_1px_rgba(0,204,118,0.5),0_30px_60px_rgba(0,204,118,0.2)]

                  transition-all duration-300
                "
              >
                <CardContent className="flex flex-col gap-4">
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg text-black dark:text-white">
                        {data.name}
                      </h3>
                      <p className="text-sm text-black/50 dark:text-white/50">
                        {data.role}
                      </p>
                    </div>
                  </div>

                  {/* Feedback */}
                  <p className="text-sm leading-relaxed text-black/75 dark:text-white/70">
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
    <div className="items-center overflow-hidden max-w-6xl mx-auto">
      <Title tinyText="Testimonials" title1="What Our" title2="Clients Say" />

      <div className="w-full max-w-6xl flex flex-col gap-y-6">
        <Marquee logos={feedbackData} />
        <Marquee logos={feedbackData2} direction="reverse" />
      </div>
    </div>
  );
};

export default Feedback;
