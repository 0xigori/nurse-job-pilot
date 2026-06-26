import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { DesktopButtonMode, MobileButtonMode } from "./theme-mode"

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features",     href: "#features" },
  { label: "Job sites",    href: "#job-sites" },
  { label: "FAQ",          href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/70 backdrop-blur"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"} alt="NurseJobPilot Logo" className="h-12" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* <DesktopButtonMode /> */}
          <a
            href="#join"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <img src="/icon-light-32x32.png" alt="NurseJobPilot Logo" className="h-4 w-4" />
            Join the waitlist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-muted text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
              {label}
            </a>
          ))}
          <div className="pt-2 border-t border-border mt-1 flex flex-col gap-2">
            {/* <MobileButtonMode /> */}
            <a href="#join" className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
              Join the waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
