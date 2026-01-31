import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      href="#"
      className="flex items-center space-x-3 group outline-none"
      aria-label="Blueprint Home"
    >
      <div className="relative w-7 h-7">
        <div
          className="absolute inset-0 bg-black dark:bg-white rounded-lg rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-black/10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#00CC76] rounded-full" />
        </div>
      </div>
      <span className="font-bold text-xl tracking-tighter text-black dark:text-white">
        DOTPRO<span className="text-[#00CC76]">.</span>
      </span>
    </Link>
  )
}

export default Logo