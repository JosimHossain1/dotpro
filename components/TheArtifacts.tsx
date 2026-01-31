import React from 'react';

const TheArtifacts: React.FC = () => {
  const assets = [
    {
      title: "The Semantic Manual",
      format: "PDF / EPUB",
      detail: "Complete technical guide from basic landmarks to advanced ARIA-live implementations.",
      icon: "01"
    },
    {
      title: "Audit Checklist",
      format: "EXCEL / NOTION",
      detail: "A 120-point rigorous checklist to ensure every deployment is search and user ready.",
      icon: "02"
    },
    {
      title: "Pattern Library",
      format: "CODE REPO",
      detail: "Ready-to-use semantic components for React, Vue, and Vanilla JS.",
      icon: "03"
    }
  ];

  return (
    <section className="py-40 px-6 bg-slate-50 dark:bg-black/20 border-y border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[#00CC76] font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Developer Bundle</span>
          <h2 className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tighter serif italic transition-colors">Total <span className="text-black/30 dark:text-white/30">Compliance.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assets.map((asset, i) => (
            <div key={i} className="group relative bg-white dark:bg-white/[0.03] p-12 rounded-[3.5rem] border border-black/5 dark:border-white/10 hover:border-[#00CC76]/30 transition-all duration-700 hover:shadow-2xl hover:shadow-black/5">
              <div className="mb-10 flex justify-between items-start">
                <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center font-black text-xs group-hover:bg-[#00CC76] dark:group-hover:bg-[#00CC76] dark:group-hover:text-white transition-colors">
                  {asset.icon}
                </div>
                <span className="text-[9px] font-black text-black/20 dark:text-white/20 uppercase tracking-[0.3em]">{asset.format}</span>
              </div>
              <h4 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight transition-colors">{asset.title}</h4>
              <p className="text-black/70 dark:text-white/70 leading-relaxed font-medium mb-8 transition-colors">
                {asset.detail}
              </p>
              <div className="h-px w-12 bg-black/5 dark:bg-white/10 group-hover:w-full group-hover:bg-[#00CC76]/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheArtifacts;