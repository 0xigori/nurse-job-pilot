import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

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
          <a href="#how-it-works" className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
            How it works
          </a>
          <a href="#features" className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
            Features
          </a>
          <a href="#pricing" className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
            Pricing
          </a>
          <a href="#faq" className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors bg-foreground/5 dark:bg-foreground/5 dark:hover:bg-foreground/10"
          >
            {theme === "dark" ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 1.5V3M9 15v1.5M1.5 9H3M15 9h1.5M3.697 3.697l1.06 1.06M13.243 13.243l1.06 1.06M3.697 14.303l1.06-1.06M13.243 4.757l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M15.5 11.5A7 7 0 1 1 6.5 2.5a5.5 5.5 0 0 0 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8.5 4.5L11 7l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
            How it works
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
            Features
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
            Pricing
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
            FAQ
          </a>
          <div className="pt-2 border-t border-border mt-1 flex flex-col gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors w-full text-left"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 1.5V3M9 15v1.5M1.5 9H3M15 9h1.5M3.697 3.697l1.06 1.06M13.243 13.243l1.06 1.06M3.697 14.303l1.06-1.06M13.243 4.757l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Light mode
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M15.5 11.5A7 7 0 1 1 6.5 2.5a5.5 5.5 0 0 0 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Dark mode
                </>
              )}
            </button>
            <a href="#" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors">
              Sign in
            </a>
            <a href="#" className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
              Join the waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
