import { CircleCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useDocumentMeta } from "@/lib/use-document-meta"

export function SubscriptionSuccessPage() {
  useDocumentMeta("Payment successful | NurseJobPilot", undefined, { noindex: true })

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-1 items-center pt-32 pb-28 md:pt-40">
        <div className="mx-auto max-w-md px-6 text-center">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-accent/10">
            <CircleCheck className="size-8 text-accent" strokeWidth={1.75} aria-hidden="true" />
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Payment successful
          </h1>

          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Your credits have been added to your account. Open the NurseJobPilot extension to keep tailoring
            applications.
          </p>

          <Button size="lg" className="px-6" render={<a href="/" />}>
            Back to home
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
