import { CircleX } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useDocumentMeta } from "@/lib/use-document-meta"

export function SubscriptionCancelPage() {
  useDocumentMeta("Checkout cancelled | NurseJobPilot", undefined, { noindex: true })

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-1 items-center pt-32 pb-28 md:pt-40">
        <div className="mx-auto max-w-md px-6 text-center">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-muted">
            <CircleX className="size-8 text-muted-foreground" strokeWidth={1.75} aria-hidden="true" />
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Checkout cancelled
          </h1>

          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            No payment was taken. You can top up credits any time from the NurseJobPilot extension.
          </p>

          <Button size="lg" variant="outline" className="px-6" render={<a href="/#pricing" />}>
            View plans
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
