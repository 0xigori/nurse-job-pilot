import { useEffect } from "react"

interface DocumentMetaOptions {
  image?: string
  url?: string
  type?: "website" | "article"
}

interface TrackedTag {
  el: HTMLMetaElement
  previousContent?: string
  created: boolean
}

function upsertMetaTag(attr: "name" | "property", key: string, content: string): TrackedTag {
  const selector = `meta[${attr}="${key}"]`
  let el = document.querySelector<HTMLMetaElement>(selector)
  const created = !el
  const previousContent = el?.getAttribute("content") ?? undefined

  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)

  return { el, previousContent, created }
}

export function useDocumentMeta(title: string, description?: string, options: DocumentMetaOptions = {}) {
  const { image, url, type = "website" } = options

  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const tags: TrackedTag[] = []
    tags.push(upsertMetaTag("property", "og:title", title))
    tags.push(upsertMetaTag("name", "twitter:title", title))

    if (description) {
      tags.push(upsertMetaTag("name", "description", description))
      tags.push(upsertMetaTag("property", "og:description", description))
      tags.push(upsertMetaTag("name", "twitter:description", description))
    }

    tags.push(upsertMetaTag("property", "og:type", type))

    if (url) {
      tags.push(upsertMetaTag("property", "og:url", url))
    }

    if (image) {
      tags.push(upsertMetaTag("property", "og:image", image))
      tags.push(upsertMetaTag("name", "twitter:card", "summary_large_image"))
      tags.push(upsertMetaTag("name", "twitter:image", image))
    }

    return () => {
      document.title = previousTitle
      for (const { el, previousContent, created } of tags) {
        if (created) {
          el.remove()
        } else if (previousContent !== undefined) {
          el.setAttribute("content", previousContent)
        }
      }
    }
  }, [title, description, image, url, type])
}
