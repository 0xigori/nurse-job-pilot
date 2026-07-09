import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { FeaturedPost } from "@/components/blog/featured-post"
import { PostCard } from "@/components/blog/post-card"
import { Pagination } from "@/components/blog/pagination"
import { getAllPosts, getAllCategories, getFeaturedPost, type BlogPost, type Category } from "@/src/data/blog"
import { useDocumentMeta } from "@/lib/use-document-meta"

const POSTS_PER_PAGE = 6
const ALL_CATEGORIES = "all"

export function BlogPage() {
  useDocumentMeta(
    "Blog | NurseJobPilot",
    "Guidance on NHS applications, interviews, visas, and career progression for UK nurses.",
    { image: `${import.meta.env.VITE_WEB_URL}/preview-image.png`, url: `${import.meta.env.VITE_WEB_URL}/blog` }
  )

  const [searchParams, setSearchParams] = useSearchParams()

  const [posts, setPosts] = useState<BlogPost[] | null>(null)
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setError(false)
    Promise.all([getAllPosts(), getAllCategories(), getFeaturedPost()])
      .then(([allPosts, allCategories, featured]) => {
        if (cancelled) return
        setPosts(allPosts)
        setCategories(allCategories)
        setFeaturedPost(featured ?? null)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const query = searchParams.get("q") ?? ""
  const categorySlug = searchParams.get("category") ?? ALL_CATEGORIES
  const hasFilters = query.trim() !== "" || categorySlug !== ALL_CATEGORIES

  const [searchInput, setSearchInput] = useState(query)
  useEffect(() => setSearchInput(query), [query])

  function updateFilters(partial: { q?: string; category?: string }) {
    const next = new URLSearchParams(searchParams)
    if (partial.q !== undefined) {
      partial.q ? next.set("q", partial.q) : next.delete("q")
    }
    if (partial.category !== undefined) {
      partial.category && partial.category !== ALL_CATEGORIES
        ? next.set("category", partial.category)
        : next.delete("category")
    }
    next.delete("page")
    setSearchParams(next)
  }

  const listPosts = (posts ?? []).filter((post) => post.slug !== featuredPost?.slug)

  const filteredPosts = listPosts.filter((post) => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q === "" || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
    const matchesCategory =
      categorySlug === ALL_CATEGORIES || post.categories.some((c) => c.slug === categorySlug)
    return matchesQuery && matchesCategory
  })

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const requestedPage = Number(searchParams.get("page") ?? "1")
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, requestedPage), totalPages)
    : 1

  const start = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE)
  const showFeatured = !hasFilters && currentPage === 1 && !!featuredPost

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold leading-[1.2] tracking-tight text-foreground text-balance md:text-4xl">
              Guidance for UK nursing applications
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Practical, NHS-specific advice on applications, interviews, visas, and career progression, written by our clinical and recruitment editors.
            </p>
          </div>

          {error && (
            <div className="mb-10 rounded-lg border border-dashed border-border py-16 text-center">
              <p className="text-base font-medium text-foreground">Couldn't load articles.</p>
              <p className="mt-1 text-sm text-muted-foreground">Please refresh the page to try again.</p>
            </div>
          )}

          {!error && posts === null && (
            <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="h-72 animate-pulse rounded-lg border border-border bg-muted/40" />
              ))}
            </div>
          )}

          {!error && posts !== null && (
            <>
              {showFeatured && featuredPost && (
                <div className="mb-14">
                  <FeaturedPost post={featuredPost} />
                </div>
              )}

              {/* Filters */}
              <div className="mb-10 grid gap-3 md:grid-cols-[1fr_12rem_1fr] md:items-start">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    updateFilters({ q: searchInput })
                  }}
                  className="flex gap-2"
                >
                  <Input
                    type="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search articles…"
                    aria-label="Search articles"
                  />
                  <button
                    type="submit"
                    aria-label="Search"
                    className="flex h-8 shrink-0 items-center justify-center rounded-lg bg-primary px-3 text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M13 13l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </form>

                <Select
                  items={[{ label: "All categories", value: ALL_CATEGORIES }, ...categories.map((c) => ({ label: c.name, value: c.slug }))]}
                  value={categorySlug}
                  onValueChange={(value) => updateFilters({ category: value as string })}
                >
                  <SelectTrigger aria-label="Filter by category">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL_CATEGORIES}>All categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {hasFilters && (
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchParams(new URLSearchParams())}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {pagePosts.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {pagePosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-border py-16 text-center">
                  <p className="text-base font-medium text-foreground">No articles match your filters.</p>
                  <p className="mt-1 text-sm text-muted-foreground">Try a different search term or clear a filter.</p>
                </div>
              )}

              <Pagination currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
