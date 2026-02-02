
const Background = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 right-0 w-400 h-400 bg-linear-to-br from-[#00CC76]/8 dark:from-[#00CC76]/12 to-transparent rounded-full blur-[140px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-150 h-150 bg-slate-50/50 dark:bg-white/2 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '100px 100px' }}></div>
    </div>
  )
}

export default Background