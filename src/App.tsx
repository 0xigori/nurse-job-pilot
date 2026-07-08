import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { CTA, Footer } from "@/components/footer"
import { JobSites } from "@/components/job-sites"

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <JobSites />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
