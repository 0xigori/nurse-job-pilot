import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "Cookie policy", href: "/cookie-policy" },
  { label: "UK GDPR", href: "/uk-gdpr" },
]

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-3 text-3xl font-bold leading-[1.2] tracking-tight text-foreground text-balance md:text-4xl">
            {title}
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

          <div className="legal-content space-y-8 text-base leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
