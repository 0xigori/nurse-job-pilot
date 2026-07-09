#!/usr/bin/env node
// Runs after `vite build`. Fetches every blog post from Contentful and writes a
// static dist/blog/<slug>/index.html per post with post-specific og:*/twitter:*
// tags baked in, since crawlers (WhatsApp, Facebook, Slack, ...) never execute
// the client-side JS that normally sets these via useDocumentMeta.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import { createClient } from "contentful"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const distDir = path.join(root, "dist")

// Vercel injects VITE_* directly into process.env at build time. Locally, load
// them from .env if present (without overriding anything already set).
const envPath = path.join(root, ".env")
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (!match) continue
    const [, key, rawValue] = match
    if (process.env[key] !== undefined) continue
    process.env[key] = (rawValue ?? "").trim().replace(/^["']|["']$/g, "")
  }
}

const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN
const environment = process.env.VITE_CONTENTFUL_ENVIRONMENT || "master"
const webUrl = (process.env.VITE_WEB_URL || "https://nursejobpilot.com").replace(/\/$/, "")

if (!spaceId || !accessToken) {
  console.warn("[prerender-blog] Missing Contentful config, skipping blog prerender.")
  process.exit(0)
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  )
}

function resolveOgImage(asset) {
  const url = asset?.fields?.file?.url
  if (!url) return `${webUrl}/preview-image.png`
  const httpsUrl = url.startsWith("//") ? `https:${url}` : url
  const query = new URLSearchParams({ fm: "webp", q: "80", w: "1200", h: "630", fit: "fill" })
  return `${httpsUrl}?${query.toString()}`
}

const templatePath = path.join(distDir, "index.html")
if (!existsSync(templatePath)) {
  console.error("[prerender-blog] dist/index.html not found - run `vite build` first.")
  process.exit(1)
}
const template = readFileSync(templatePath, "utf8")

function replaceAttr(html, matchAttr, matchValue, newContent) {
  const re = new RegExp(`(<meta\\s+${matchAttr}="${matchValue}"\\s+content=")[^"]*(")`)
  return html.replace(re, `$1${escapeHtml(newContent)}$2`)
}

function renderPage({ title, description, image, url }) {
  let html = template
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`)
  html = replaceAttr(html, "name", "description", description)
  html = replaceAttr(html, "property", "og:type", "article")
  html = replaceAttr(html, "property", "og:url", url)
  html = replaceAttr(html, "property", "og:title", title)
  html = replaceAttr(html, "property", "og:description", description)
  html = replaceAttr(html, "property", "og:image", image)
  html = replaceAttr(html, "name", "twitter:title", title)
  html = replaceAttr(html, "name", "twitter:description", description)
  html = replaceAttr(html, "name", "twitter:image", image)
  return html
}

const client = createClient({ space: spaceId, accessToken, environment })
const response = await client.getEntries({ content_type: "blogPost", include: 2 })

let count = 0
for (const entry of response.items) {
  const slug = entry.fields.slug
  if (!slug || typeof slug !== "string") continue

  const title = entry.fields.seoTitle || `${entry.fields.title} | NurseJobPilot`
  const description = entry.fields.seoDescription || entry.fields.excerpt || ""
  const imageField = entry.fields.image
  const imageAsset = imageField && "fields" in imageField ? imageField : undefined
  const image = resolveOgImage(imageAsset)
  const url = `${webUrl}/blog/${slug}`

  const outDir = path.join(distDir, "blog", slug)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, "index.html"), renderPage({ title, description, image, url }))
  count++
}

console.log(`[prerender-blog] Generated ${count} static blog preview page(s).`)
