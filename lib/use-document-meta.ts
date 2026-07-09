import { useEffect } from "react"

interface DocumentMetaOptions {
  image?: string
  url?: string
  type?: "website" | "article"
  noindex?: boolean
}

interface TrackedMetaTag {
  kind: "meta"
  el: HTMLMetaElement
  previousContent?: string
  created: boolean
}

interface TrackedLinkTag {
  kind: "link"
  el: HTMLLinkElement
  previousHref?: string
  created: boolean
}

type TrackedTag = TrackedMetaTag | TrackedLinkTag

function upsertMetaTag(attr: "name" | "property", key: string, content: string): TrackedMetaTag {
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

  return { kind: "meta", el, previousContent, created }
}

function upsertLinkTag(rel: string, href: string): TrackedLinkTag {
  const selector = `link[rel="${rel}"]`
  let el = document.querySelector<HTMLLinkElement>(selector)
  const created = !el
  const previousHref = el?.getAttribute("href") ?? undefined

  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)

  return { kind: "link", el, previousHref, created }
}

export function useDocumentMeta(title: string, description?: string, options: DocumentMetaOptions = {}) {
  const { image, url, type = "website", noindex = false } = options

  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const tags: TrackedTag[] = []
    tags.push(upsertMetaTag("property", "og:title", title))
    tags.push(upsertMetaTag("name", "twitter:title", title))
    tags.push(upsertMetaTag("name", "robots", noindex ? "noindex, follow" : "index, follow"))

    if (description) {
      tags.push(upsertMetaTag("name", "description", description))
      tags.push(upsertMetaTag("property", "og:description", description))
      tags.push(upsertMetaTag("name", "twitter:description", description))
    }

    tags.push(upsertMetaTag("property", "og:type", type))

    if (url) {
      tags.push(upsertMetaTag("property", "og:url", url))
      tags.push(upsertLinkTag("canonical", url))
    }

    if (image) {
      tags.push(upsertMetaTag("property", "og:image", image))
      tags.push(upsertMetaTag("name", "twitter:card", "summary_large_image"))
      tags.push(upsertMetaTag("name", "twitter:image", image))
    }

    return () => {
      document.title = previousTitle
      for (const tag of tags) {
        if (tag.kind === "meta") {
          if (tag.created) {
            tag.el.remove()
          } else if (tag.previousContent !== undefined) {
            tag.el.setAttribute("content", tag.previousContent)
          }
        } else if (tag.created) {
          tag.el.remove()
        } else if (tag.previousHref !== undefined) {
          tag.el.setAttribute("href", tag.previousHref)
        }
      }
    }
  }, [title, description, image, url, type, noindex])
}
