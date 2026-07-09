// Blog content is sourced from Contentful (see src/lib/contentful). Content model:
// Blog Post, Author, Category, Tag, Featured Post.

import type { Document } from "@contentful/rich-text-types"
import { getContentfulClient } from "@/src/lib/contentful/client"
import { mapAuthor, mapBlogPost, mapCategory, mapTag } from "@/src/lib/contentful/mappers"
import type { AuthorSkeleton, BlogPostSkeleton, CategorySkeleton, FeaturedPostSkeleton, TagSkeleton } from "@/src/lib/contentful/types"

export interface Author {
  name: string
  slug: string
  bio: string
  initials: string
}

export interface Category {
  name: string
  slug: string
  description?: string
}

export interface Tag {
  name: string
  slug: string
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  body?: Document
  /** Resolved, CDN-optimized image URL. */
  image?: string
  author: Author
  categories: Category[]
  tags: Tag[]
  publishedDate: string // ISO 8601
  readingTime?: number
  seoTitle?: string
  seoDescription?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const response = await getContentfulClient().getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    include: 2,
    order: ["-fields.publishedDate"],
  })
  return response.items.map(mapBlogPost)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const response = await getContentfulClient().getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    include: 2,
    limit: 1,
  })
  const entry = response.items[0]
  return entry ? mapBlogPost(entry) : undefined
}

export async function getFeaturedPost(): Promise<BlogPost | undefined> {
  const response = await getContentfulClient().getEntries<FeaturedPostSkeleton>({
    content_type: "featuredPost",
    include: 3,
    limit: 1,
  })
  const post = response.items[0]?.fields.post
  return post && "fields" in post ? mapBlogPost(post) : undefined
}

export async function getAllCategories(): Promise<Category[]> {
  const response = await getContentfulClient().getEntries<CategorySkeleton>({ content_type: "category" })
  return response.items.map(mapCategory)
}

export async function getAllTags(): Promise<Tag[]> {
  const response = await getContentfulClient().getEntries<TagSkeleton>({ content_type: "tag" })
  return response.items.map(mapTag)
}

export async function getAllAuthors(): Promise<Author[]> {
  const response = await getContentfulClient().getEntries<AuthorSkeleton>({ content_type: "author" })
  return response.items.map(mapAuthor)
}

export function formatPublishedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
