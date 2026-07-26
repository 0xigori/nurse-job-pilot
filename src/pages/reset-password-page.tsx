import { useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useDocumentMeta } from "@/lib/use-document-meta"

type ResetState = "form" | "submitting" | "success" | "error"

export function ResetPasswordPage() {
  const { token } = useParams<{ token: string }>()
  const [state, setState] = useState<ResetState>("form")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [mismatch, setMismatch] = useState(false)

  useDocumentMeta("Reset your password | NurseJobPilot", undefined, { noindex: true })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMismatch(true)
      return
    }
    setMismatch(false)

    setState("submitting")
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      )
      setState(res.ok ? "success" : "error")
    } catch {
      setState("error")
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-1 items-center pt-32 pb-28 md:pt-40">
        <div className="mx-auto max-w-md px-6 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Reset your password
          </h1>

          {state === "success" && (
            <p className="text-base leading-relaxed text-muted-foreground">
              Your password has been updated. Open the NurseJobPilot extension and sign in with your new password.
            </p>
          )}

          {state === "error" && (
            <p className="text-base leading-relaxed text-destructive">
              This link is invalid or has expired. Request a new one from the extension's sign-in screen.
            </p>
          )}

          {(state === "form" || state === "submitting") && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
              <div>
                <label htmlFor="new-password" className="mb-1.5 block text-sm font-medium text-foreground">
                  New password
                </label>
                <input
                  id="new-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-medium text-foreground">
                  Confirm password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              {mismatch && (
                <p className="text-sm text-destructive">Passwords do not match.</p>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {state === "submitting" ? "Resetting…" : "Reset password"}
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
