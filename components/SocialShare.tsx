import React from 'react';

const SocialShare = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://deepblueprint.com';
  const shareText = "I'm optimizing my cognitive output with the Deep Work Blueprint. Engineering focus in a fragmented world.";

  const platforms = [
    {
      name: 'X',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      label: 'Share on X'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2 .7-2.3 1.2v-1h-2.6v7.8h2.6v-4.1c0-.6.4-1.1 1-1.1s1 .5 1 1.1v4.1h2.6M8 7.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M6.7 18.5h2.6V10.7H6.7v7.8z"/>
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      label: 'Share on LinkedIn'
    },
    {
      name: 'Copy',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      ),
      action: () => {
        navigator.clipboard.writeText(shareUrl);
        alert('Protocol link copied to clipboard.');
      },
      label: 'Copy Protocol Link'
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[150] hidden xl:flex flex-col space-y-4">
      <div className="flex flex-col items-center space-y-4 p-2 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-2xl shadow-black/5">
        <span className="text-[8px] font-bold text-black/20 uppercase tracking-[0.2em] [writing-mode:vertical-lr] mb-2 rotate-180">Spread the word</span>
        {platforms.map((p) => (
          p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.label}
              className="w-10 h-10 flex items-center justify-center rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {p.icon}
            </a>
          ) : (
            <button
              key={p.name}
              onClick={p.action}
              aria-label={p.label}
              className="w-10 h-10 flex items-center justify-center rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {p.icon}
            </button>
          )
        ))}
      </div>
    </div>
  );
};

export default SocialShare;