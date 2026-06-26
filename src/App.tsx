import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA, Footer } from "@/components/footer"

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Stats />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
      {import.meta.env.PROD && <Analytics />}
    </ThemeProvider>
  )
}
