import { Link } from "react-router-dom"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Field } from "./ui/field"
import { WaitListForm } from "./waitlist-form"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground text-balance mb-6 leading-[1.2]">
            Your first NHS application is free.{" "}
            <span style={{ color: "#2DD4BF" }}>No card required.</span>
          </h2>
          <p className="text-base text-primary-foreground/70 leading-relaxed mb-10 text-pretty">
            Install the extension, build your profile, and generate a complete
            tailored application for the first role you are interested in,
            before you decide whether to subscribe.
          </p>
          {/* Waitlist */}
          <WaitListForm background="dark" />
          <p className="mt-5 text-xs text-primary-foreground/50">
            Browser extension · UK GDPR compliant · Cancel any time
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { theme } = useTheme()
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com/nursejobpilot",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.198-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.644 1.44 1.44 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
    {
      label: "Twitter",
      href: "https://twitter.com/nursejobpilot",
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/nursejobpilot",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/nursejobpilot",
      icon: (
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
      ),
    },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"} alt="NurseJobPilot Logo" className="h-12" />
            </div>
            <p className="text-xs text-background/50 leading-relaxed max-w-xs">
              The job application platform built for nurses navigating the NHS hiring process.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              {/* <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">Follow us</p> */}
              <ul className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        {link.icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">Product</p>
            <ul className="space-y-2.5">
              {[
                { label: "How it works", href: "/#how-it-works" },
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">Support</p>
            <ul className="space-y-2.5">
              {[
                { label: "Demo", href: "/#demo" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact us", href: "mailto:hello@nursejobpilot.com" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">Legal</p>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy policy", href: "/privacy-policy" },
                { label: "Terms of service", href: "/terms-of-service" },
                { label: "Cookie policy", href: "/cookie-policy" },
                { label: "UK GDPR", href: "/uk-gdpr" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} NurseJobPilot. All rights reserved. Browser extension for UK nursing applications.
          </p>
          <div className="flex items-center gap-1 text-xs text-background/40">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span>Not affiliated with NHS England or NHSBSA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
