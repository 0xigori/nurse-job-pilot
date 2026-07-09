import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { CTA, Footer } from "@/components/footer"
import { JobSites } from "@/components/job-sites"
import { useDocumentMeta } from "@/lib/use-document-meta"

export default function App() {
  useDocumentMeta(
    "NurseJobPilot: NHS Applications, Done in Under 45 Minutes",
    "The Browser extension that turns your nursing profile into a tailored NHS CV, supporting statement, and form autofill, purpose-built for UK nursing job applications.",
    {
      image: `${import.meta.env.VITE_WEB_URL}/preview-image.png`,
      url: import.meta.env.VITE_WEB_URL
    }
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <JobSites />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}
