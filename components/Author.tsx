'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const Author = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
       <h2 className="text-5xl text-center mb-10 font-bold text-black/80 dark:text-white tracking-tighter serif italic transition-colors">About The Author</h2>
      <Card className="bg-[#F9F6F3] dark:bg-black/20 border border-black/10 dark:border-white/40 shadow-lg rounded-2xl p-4 md:p-8 transition-all hover:shadow-xl">
        <CardContent className="flex justify-center flex-col items-center gap-8">

          {/* Avatar */}
          <Image src="/author.jpg" className='rounded-lg' alt="Arif Almas" width={400} height={100} />


          {/* About text */}
          <div className="flex-1 text-center md:px-10">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Meet Arif Almas
            </h2>
            <p className="text-xl text-left text-black/70 dark:text-white/70 ">
              Arif Almas is a professional developer and content creator with over five years of
              experience. He specializes in web development, SEO, content strategy, and
              digital storytelling. His mission is to deliver creative, scalable, and impactful
              solutions while sharing knowledge to empower other developers and tech enthusiasts.
            </p>
            <div className="my-4 flex flex-wrap gap-2">
              <Badge variant="outline" className='text-sm'>Web Development</Badge>
              <Badge variant="outline" className='text-sm'>SEO & Content</Badge>
              <Badge variant="outline" className='text-sm'>Digital Strategy</Badge>
              <Badge variant="outline" className='text-sm'>Frontend Design</Badge>
            </div>
          </div>

        </CardContent>
      </Card>
    </section>
  );
};

export default Author;
