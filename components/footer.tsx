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
            tailored application for the first role you are interested in —
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

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"} alt="NurseJobPilot Logo" className="h-12" />
            </div>
            <p className="text-xs text-background/50 leading-relaxed max-w-48">
              The Browser extension built for UK nursing job applications.
            </p>
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
                { label: "FAQ", href: "/#faq" },
                { label: "Supported job sites", href: "/#job-sites" },
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
                { label: "Privacy policy", href: "#" },
                { label: "Terms of service", href: "#" },
                { label: "Cookie policy", href: "#" },
                { label: "UK GDPR", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </a>
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
