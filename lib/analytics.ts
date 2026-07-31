declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function pushPageView(path: string, title: string) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: "page_view", page_path: path, page_title: title })
}
