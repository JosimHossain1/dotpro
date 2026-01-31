import React from 'react'

const Title = ({tinyText, title1, title2 }: { tinyText: string, title1: string, title2: string }) => {
  return (
    <div className="text-center mb-24">
      <span className="text-black/40 dark:text-white/40 font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">{tinyText}</span>
      <h2 className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tighter serif italic transition-colors">{title1} <br /><span className="text-[#00CC76]">{title2}</span></h2>
    </div>
  )
}

export default Title

