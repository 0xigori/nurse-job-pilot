import { useSearchParams } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedPost } from "@/components/blog/featured-post"
import { PostCard } from "@/components/blog/post-card"
import { Pagination } from "@/components/blog/pagination"
import { getFeaturedPost, getListPosts } from "@/src/data/blog"
import { useDocumentMeta } from "@/lib/use-document-meta"

const POSTS_PER_PAGE = 6

export function BlogPage() {
  useDocumentMeta(
    "Blog — NurseJobPilot",
    "Guidance on NHS applications, interviews, visas, and career progression for UK nurses."
  )

  const [searchParams] = useSearchParams()
  const featuredPost = getFeaturedPost()
  const listPosts = getListPosts()

  const totalPages = Math.max(1, Math.ceil(listPosts.length / POSTS_PER_PAGE))
  const requestedPage = Number(searchParams.get("page") ?? "1")
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, requestedPage), totalPages)
    : 1

  const start = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = listPosts.slice(start, start + POSTS_PER_PAGE)

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold leading-[1.2] tracking-tight text-foreground text-balance md:text-4xl">
              Guidance for UK nursing applications
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Practical, NHS-specific advice on applications, interviews, visas, and career progression — written by our clinical and recruitment editors.
            </p>
          </div>

          {currentPage === 1 && (
            <div className="mb-14">
              <FeaturedPost post={featuredPost} />
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
