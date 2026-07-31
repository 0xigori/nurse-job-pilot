declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag: (...args: unknown[]) => void
  }
}

export function pushPageView(path: string, title: string) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: "page_view", page_path: path, page_title: title })
}

export function updateConsent(granted: boolean) {
  window.gtag("consent", "update", { analytics_storage: granted ? "granted" : "denied" })
}
