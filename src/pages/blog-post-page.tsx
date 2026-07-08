import { Link, useParams } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CoverImage } from "@/components/blog/cover-image"
import { PostCard } from "@/components/blog/post-card"
import { getPostBySlug, getListPosts, formatPublishedDate } from "@/src/data/blog"
import { useDocumentMeta } from "@/lib/use-document-meta"

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  useDocumentMeta(
    post ? post.seoTitle ?? `${post.title} — NurseJobPilot` : "Post not found — NurseJobPilot",
    post?.seoDescription ?? post?.excerpt
  )

  if (!post) {
    return (
      <main>
        <Navbar />
        <section className="pt-32 pb-28 md:pt-40">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Post not found</h1>
            <p className="mb-8 text-muted-foreground">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back to blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const related = getListPosts()
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.categories.some((c) => post.categories.some((pc) => pc.slug === c.slug)))
    .slice(0, 3)

  const paragraphs = post.body.split("\n\n")

  return (
    <main>
      <Navbar />
      <article className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M8.5 3L4.5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to blog
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            {post.categories.map((category) => (
              <span
                key={category.slug}
                className="rounded-full border border-accent/15 bg-teal-subtle px-2 py-0.5 text-[11px] font-semibold text-accent"
              >
                {category.name}
              </span>
            ))}
          </div>

          <h1 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-foreground text-balance md:text-4xl">
            {post.title}
          </h1>

          <div className="mb-8 flex items-center gap-3 border-b border-border pb-8 text-sm text-muted-foreground">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-subtle text-xs font-semibold text-navy">
              {post.author.initials}
            </span>
            <div>
              <p className="font-medium text-foreground">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">
                <time dateTime={post.publishedDate}>{formatPublishedDate(post.publishedDate)}</time>
                {post.readingTime && <> · {post.readingTime} min read</>}
              </p>
            </div>
          </div>

          <CoverImage image={post.image} alt={post.title} className="mb-10 aspect-16/9 w-full" />

          <div className="space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 flex items-start gap-4 rounded-lg border border-border bg-card p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-subtle text-sm font-semibold text-navy">
              {post.author.initials}
            </span>
            <div>
              <p className="mb-1 font-semibold text-foreground">{post.author.name}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Related articles
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
