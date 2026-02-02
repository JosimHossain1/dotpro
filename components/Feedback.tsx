'use client';

import { CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { feedbackData } from '@/data/feedbackData';

const Feedback = () => {
  return (
    <section className="max-w-6xl rounded-lg mx-auto px-6 py-24 dark:bg-[rgb(29,28,28)]">
    <h2 className="text-5xl text-center font-bold text-black/80 dark:text-white tracking-tighter serif italic transition-colors">What people are saying...</h2>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbackData.map((data) => (
          <div
            key={data.id}
            className="
              bg-[#F9F6F3] dark:bg-black/60
               dark:border-white/10
              rounded-2xl
              transition-colors
            "
          >
            <CardContent className="p-6 flex flex-col gap-6">
              {/* Avatar + Meta */}
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-[#ffeddb] text-black dark:text-black font-semibold">
                    {data.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="text-md font-semibold text-black dark:text-white">
                    {data.name}
                  </h3>
                  <p className="text-sm text-black/50 dark:text-white/50">
                    {data.role}
                  </p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-md leading-relaxed text-black/75 dark:text-white/70">
                {data.feddback}
              </p>
            </CardContent>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
