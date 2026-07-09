import { Link } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useDocumentMeta } from "@/lib/use-document-meta"

export function NotFoundPage() {
  useDocumentMeta("Page not found | NurseJobPilot", "The page you're looking for doesn't exist or may have been moved.")

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-1 items-center pt-32 pb-28 md:pt-40">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">404</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Page not found
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back to home
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 font-medium text-foreground transition-colors hover:bg-muted"
            >
              Visit the blog
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
