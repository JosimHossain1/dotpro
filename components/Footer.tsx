import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import Logo from "./helpers/Logo"

const Footer = () => {
  return (
    <footer
      aria-label="Global Footer"
      className="relative z-10 bg-white dark:bg-[#222222] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 pt-15 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10">
          {/* Brand */}
          <div>
           <Logo/>
            <p className="text-[14px] font-semibold text-black/40 dark:text-white/70 mt-3">
             Empowering developers and creators with actionable insights, accessible guides, and practical resources for building modern, high-performance web experiences
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <nav aria-label="Protocol Links">
              <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.3em] text-black/20 dark:text-white/80">
                Protocol
              </h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/80">
                <li><Link href="#preview" className="hover:text-black dark:hover:text-white transition-colors underline">Vault</Link></li>
                <li><Link href="#checkout" className="hover:text-black dark:hover:text-white transition-colors underline">Purchase</Link></li>
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors underline">Repo</Link></li>
              </ul>
            </nav>

            <nav aria-label="Resource Links">
              <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.3em] text-black/20 dark:text-white/80">
                Resources
              </h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/80">
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors underline">Privacy</Link></li>
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors underline">Terms</Link></li>
                <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors underline">WCAG 2.2</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <Separator className="dark:bg-white/30" />

        {/* Bottom Section */}
        <div className="py-12  text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20 dark:text-white/70">
            © 2025 all rights reserved by DotPro
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
