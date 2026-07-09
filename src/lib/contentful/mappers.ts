import type { Asset } from "contentful"
import type { Document } from "@contentful/rich-text-types"
import type { Author, BlogPost, Category, Tag } from "@/src/data/blog"
import type { AuthorSkeleton, BlogPostSkeleton, CategorySkeleton, ResolvedEntry, TagSkeleton } from "./types"

const WORDS_PER_MINUTE = 200

function isResolvedEntry(value: unknown): value is ResolvedEntry<AuthorSkeleton | CategorySkeleton | TagSkeleton | BlogPostSkeleton> {
  return !!value && typeof value === "object" && "fields" in (value as Record<string, unknown>)
}

export function resolveAssetUrl(asset: Asset<undefined> | undefined, params = "fm=webp&q=75"): string | undefined {
  const url = asset?.fields?.file?.url
  if (!url) return undefined
  const httpsUrl = url.startsWith("//") ? `https:${url}` : url
  return params ? `${httpsUrl}?${params}` : httpsUrl
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  const initials = parts.length === 1 ? parts[0][0] : `${parts[0][0]}${parts[parts.length - 1][0]}`
  return initials.toUpperCase()
}

export function estimateReadingTime(body: Document | undefined): number | undefined {
  if (!body) return undefined
  let wordCount = 0
  const visit = (node: { nodeType?: string; value?: string; content?: unknown[] }) => {
    if (node.nodeType === "text" && typeof node.value === "string") {
      wordCount += node.value.trim().split(/\s+/).filter(Boolean).length
    }
    node.content?.forEach((child) => visit(child as typeof node))
  }
  visit(body as unknown as { content?: unknown[] })
  return wordCount === 0 ? undefined : Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
}

export function mapAuthor(entry: ResolvedEntry<AuthorSkeleton>): Author {
  const { name, slug, bio } = entry.fields
  return {
    name: name ?? "",
    slug: slug ?? "",
    bio: bio ?? "",
    initials: getInitials(name ?? ""),
  }
}

export function mapCategory(entry: ResolvedEntry<CategorySkeleton>): Category {
  return { name: entry.fields.name ?? "", slug: entry.fields.slug ?? "" }
}

export function mapTag(entry: ResolvedEntry<TagSkeleton>): Tag {
  return { name: entry.fields.name ?? "", slug: entry.fields.slug ?? "" }
}

const FALLBACK_AUTHOR: Author = { name: "NurseJobPilot Team", slug: "nursejobpilot-team", bio: "", initials: "NJ" }

export function mapBlogPost(entry: ResolvedEntry<BlogPostSkeleton>): BlogPost {
  const { title, slug, image, excerpt, body, author, categories, tags, publishedDate, seoTitle, seoDescription } =
    entry.fields

  return {
    title: title ?? "",
    slug: slug ?? "",
    excerpt: excerpt ?? "",
    body: (body ?? undefined) as Document | undefined,
    image: resolveAssetUrl(image && "fields" in image ? image : undefined),
    author: isResolvedEntry(author) ? mapAuthor(author as ResolvedEntry<AuthorSkeleton>) : FALLBACK_AUTHOR,
    categories: (categories ?? [])
      .filter((c): c is ResolvedEntry<CategorySkeleton> => isResolvedEntry(c))
      .map(mapCategory),
    tags: (tags ?? []).filter((t): t is ResolvedEntry<TagSkeleton> => isResolvedEntry(t)).map(mapTag),
    publishedDate: publishedDate ?? "",
    readingTime: estimateReadingTime((body ?? undefined) as Document | undefined),
    seoTitle: seoTitle ?? undefined,
    seoDescription: seoDescription ?? undefined,
  }
}
