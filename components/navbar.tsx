"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-[6px] bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 2L11.5 7H16L12.5 10.5L14 15.5L9 12.5L4 15.5L5.5 10.5L2 7H6.5L9 2Z" fill="white" />
            </svg>
          </div>
          <span className="font-semibold text-[15px] tracking-tight text-foreground whitespace-nowrap">
            NurseJob<span className="text-accent">Pilot</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          <Link href="#how-it-works" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-[6px] hover:bg-muted">
            How it works
          </Link>
          <Link href="#features" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-[6px] hover:bg-muted">
            Features
          </Link>
          <Link href="#pricing" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-[6px] hover:bg-muted">
            Pricing
          </Link>
          <Link href="#faq" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-[6px] hover:bg-muted">
            FAQ
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-[6px] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {theme === "dark" ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 1.5V3M9 15v1.5M1.5 9H3M15 9h1.5M3.697 3.697l1.06 1.06M13.243 13.243l1.06 1.06M3.697 14.303l1.06-1.06M13.243 4.757l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M15.5 11.5A7 7 0 1 1 6.5 2.5a5.5 5.5 0 0 0 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-[6px] hover:bg-primary/90 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8.5 4.5L11 7l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add to Chrome — Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-[6px] hover:bg-muted text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-1">
          <Link href="#how-it-works" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-[6px] hover:bg-muted transition-colors">
            How it works
          </Link>
          <Link href="#features" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-[6px] hover:bg-muted transition-colors">
            Features
          </Link>
          <Link href="#pricing" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-[6px] hover:bg-muted transition-colors">
            Pricing
          </Link>
          <Link href="#faq" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-[6px] hover:bg-muted transition-colors">
            FAQ
          </Link>
          <div className="pt-2 border-t border-border mt-1 flex flex-col gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-[6px] hover:bg-muted transition-colors w-full text-left"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M9 1.5V3M9 15v1.5M1.5 9H3M15 9h1.5M3.697 3.697l1.06 1.06M13.243 13.243l1.06 1.06M3.697 14.303l1.06-1.06M13.243 4.757l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Light mode
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M15.5 11.5A7 7 0 1 1 6.5 2.5a5.5 5.5 0 0 0 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Dark mode
                </>
              )}
            </button>
            <Link href="#" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-[6px] transition-colors">
              Sign in
            </Link>
            <Link href="#" className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-[6px] hover:bg-primary/90 transition-colors">
              Add to Chrome — Free
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
