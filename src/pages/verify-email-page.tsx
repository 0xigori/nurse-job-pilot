import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useDocumentMeta } from "@/lib/use-document-meta"

type VerificationState = "verifying" | "success" | "error"

export function VerifyEmailPage() {
  const { token } = useParams<{ token: string }>()
  const [state, setState] = useState<VerificationState>("verifying")

  useDocumentMeta("Verify your email | NurseJobPilot", undefined, { noindex: true })

  useEffect(() => {
    if (!token) {
      setState("error")
      return
    }
    let cancelled = false
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/verify-email/${token}`, { method: "POST" })
      .then((res) => {
        if (cancelled) return
        setState(res.ok ? "success" : "error")
      })
      .catch(() => {
        if (!cancelled) setState("error")
      })
    return () => {
      cancelled = true
    }
  }, [token])

  const message = {
    verifying: "Verifying your email…",
    success: "Your email is verified. Open the NurseJobPilot extension to continue.",
    error: "This link is invalid or has expired. Request a new one from the extension's Account Settings page.",
  }[state]

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-1 items-center pt-32 pb-28 md:pt-40">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Email verification
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">{message}</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
