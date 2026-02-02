'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';

const AboutBook = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-15 ">
      {/* Heading */}
      <div className="text-center mb-24">

        <h2 className="text-4xl  md:text-5xl font-bold text-black/80 dark:text-white tracking-tighter serif italic transition-colors">About The Modern Developer&apos;s Playbook</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT — Sticky Book Cover */}
        <div className="flex justify-end items-center mx-auto lg:mx-0 w-80 lg:w-auto sticky bottom-20">

          <Image
            src="/bookcover.png" 
            alt="Book Cover"
            width={400}
            height={260}
            className="rounded-xl dark:bg-[#0A0A0A]"
            priority
          />
        </div>


        {/* RIGHT —  Content */}
        <div className="">

          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white">Introduction</h2>

            <h4 className="mt-2 text-lg font-semibold text-black dark:text-white">
              A Guide to Building Modern Web Applications
            </h4>
            <p className="mt-4 text-lg text-black/70 dark:text-white/70 leading-relaxed">
             The Modern Developer&apos;s Playbook is a comprehensive guide for developers who want to build professional, high-quality web projects while mastering the modern standards of development.
            </p>
          </div>

          {/* Part 1 */}
          <div className='mt-15'>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Part 1
            </h1>
            <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
              How Great Developers Actually Think
            </h3>
            <p className="mt-2 text-black/70 dark:text-white/70 leading-relaxed">
              This section breaks the myth that great developers are defined by
              frameworks or tools. You’ll learn how professional developers
              approach problems, reason about systems, and make long-term
              technical decisions.
            </p>
          </div>
          {/* Part 2 */}
          <div className='mt-10'>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Part 2
            </h1>
            <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
              Building for Performance, Accessibility, and SEO
            </h3>
            <p className="mt-2 text-black/70 dark:text-white/70 leading-relaxed">
              In this section, you&apos;ll dive deep into the core principles of
              building high-performance, accessible, and SEO-friendly web
              applications. You&apos;ll learn practical techniques and strategies to
              optimize your projects for real-world success.
            </p>
          </div>

          {/* Part 3 */}
          <div className='mt-10'>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Part 3
            </h1>
            <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
              Building Projects That Stand Out
            </h3>
            <p className="mt-2 text-black/70 dark:text-white/70 leading-relaxed">
              The final part focuses on applying everything you&apos;ve learned.
              You&apos;ll see how to structure real projects, avoid common mistakes,
              and build work that looks professional, performs well, and earns trust.
            </p>
          </div>




        </div>
      </div>
    </section>
  );
};

export default AboutBook;
