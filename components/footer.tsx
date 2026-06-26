import Link from "next/link"

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[6px] transition-all"
              style={{ background: "#0F766E", color: "#fff" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add to Chrome — Free
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground text-sm font-medium rounded-[6px] hover:border-primary-foreground/60 transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-5 text-xs text-primary-foreground/50">
            Chrome extension · UK GDPR compliant · Cancel any time
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-[5px] bg-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1L9 5.5H13.5L10 8.5L11.5 13L7 10L2.5 13L4 8.5L0.5 5.5H5L7 1Z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-sm text-background">
                NurseJob<span className="opacity-60">Pilot</span>
              </span>
            </div>
            <p className="text-xs text-background/50 leading-relaxed max-w-48">
              Purpose-built for UK nursing job applications. From profile to submitted form.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">Product</p>
            <ul className="space-y-2.5">
              {[
                { label: "How it works", href: "#how-it-works" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">Support</p>
            <ul className="space-y-2.5">
              {[
                { label: "Getting started", href: "#" },
                { label: "Profile setup guide", href: "#" },
                { label: "Supported job sites", href: "#" },
                { label: "Contact us", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
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
                  <Link href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} NurseJobPilot. All rights reserved. Chrome extension for UK nursing applications.
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
