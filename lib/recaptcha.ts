declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

let scriptLoaded: Promise<void> | null = null

export function loadRecaptchaScript(): Promise<void> {
  if (scriptLoaded) return scriptLoaded

  scriptLoaded = new Promise((resolve, reject) => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script"))
    document.head.appendChild(script)
  })

  return scriptLoaded
}

export async function getRecaptchaToken(action: string): Promise<string> {
  await loadRecaptchaScript()
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(siteKey, { action }).then(resolve, reject)
    })
  })
}
