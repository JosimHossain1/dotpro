import { Copy, Linkedin } from 'lucide-react';
import Link from 'next/link';

const SocialShare = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://arif-almas.com';


  const platforms = [
    {
      name: 'X',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: ``,
      label: 'Share on X'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      href: "",
      label: 'Share on LinkedIn'
    },
    {
      name: 'Copy',
      icon: <Copy className="w-4 h-4" />,
      action: () => {
        navigator.clipboard.writeText(shareUrl);
        alert('Protocol link copied to clipboard.');
      },
      label: 'Copy Protocol Link'
    }
  ];

  return (
    <div className="fixed left-2 top-1/2 -translate-y-1/2 z-150 hidden xl:flex flex-col space-y-4">
      <div className="flex flex-col items-center space-y-4 p-2 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-2xl shadow-black/5">
        <span className="text-[8px] font-bold text-black/50 uppercase tracking-[0.2em] [writing-mode:vertical-lr] mb-2 rotate-180">Share to World</span>
        {platforms.map((p) => (
          p.href ? (
            <Link
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.label}
              className="w-10 h-10 flex items-center justify-center rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {p.icon}
            </Link>
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