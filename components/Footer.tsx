import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Logo from "./helpers/Logo"

const Footer = () => {
  return (
    <footer
      aria-label="Global Footer"
      className="relative z-10 bg-white dark:bg-[#0A0A0A] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 pt-40 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          {/* Brand */}
          <div>
           <Logo/>
            <p className="max-w-sm text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed text-black/40 dark:text-white/40 mt-3">
              Engineering the capacity for deep inclusion in a digital world.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <nav aria-label="Protocol Links">
              <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20 dark:text-white/20">
                Protocol
              </h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em] text-black/50 dark:text-white/50">
                <li><Link href="#preview" className="hover:text-black dark:hover:text-white transition-colors">Vault</Link></li>
                <li><Link href="#checkout" className="hover:text-black dark:hover:text-white transition-colors">Purchase</Link></li>
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Repo</Link></li>
              </ul>
            </nav>

            <nav aria-label="Resource Links">
              <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20 dark:text-white/20">
                Resources
              </h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em] text-black/50 dark:text-white/50">
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">WCAG 2.2</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <Separator className="dark:bg-white/5" />

        {/* Bottom Section */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20 dark:text-white/20">
            © 2025 DotPro
          </p>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Follow us on X"
              className="text-black dark:text-white hover:text-[#00CC76]"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
