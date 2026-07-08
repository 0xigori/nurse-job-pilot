import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "@/components/theme-provider"
import { DesktopButtonMode, MobileButtonMode } from "./theme-mode"

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features",     href: "/#features" },
  { label: "Job sites",    href: "/#job-sites" },
  { label: "Blog",         href: "/blog" },
  { label: "FAQ",          href: "/#faq" },
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
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"} alt="NurseJobPilot Logo" className="h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) =>
            href.startsWith("/#") ? (
              <a key={href} href={href} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
                {label}
              </a>
            ) : (
              <Link key={href} to={href} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
                {label}
              </Link>
            )
          )}
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
          <div className="relative w-5 h-5">
            {/* Hamburger */}
            <svg
              width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
              className={`absolute inset-0 transition-all duration-200 ${menuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
            >
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {/* Close */}
            <svg
              width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
              className={`absolute inset-0 transition-all duration-200 ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
            >
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </button>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Side drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-dvh w-72 bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-border shrink-0">
          <img src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"} alt="NurseJobPilot" className="h-10" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md hover:bg-muted text-foreground"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) =>
            href.startsWith("/#") ? (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="p-4 border-t border-border shrink-0">
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <img src="/icon-light-32x32.png" alt="" className="h-4 w-4" />
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  )
}
