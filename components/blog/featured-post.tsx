import { Link } from "react-router-dom"
import type { BlogPost } from "@/src/data/blog"
import { formatPublishedDate } from "@/src/data/blog"
import { CoverImage } from "./cover-image"

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group grid gap-6 overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-accent/30 hover:shadow-sm md:grid-cols-2 md:gap-8"
    >
      <CoverImage image={post.thumbnail} alt={post.title} className="aspect-16/10 w-full md:aspect-auto md:h-full" />
      <div className="flex flex-col justify-center py-2 pr-2 md:py-6">
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
          Featured
        </span>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {post.categories.slice(0, 2).map((category) => (
            <span
              key={category.slug}
              className="rounded-full border border-accent/15 bg-teal-subtle px-2 py-0.5 text-[11px] font-semibold text-accent"
            >
              {category.name}
            </span>
          ))}
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-foreground text-balance transition-colors group-hover:text-accent md:text-3xl">
          {post.title}
        </h2>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground text-pretty">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-subtle text-[11px] font-semibold text-navy">
            {post.author.initials}
          </span>
          <span className="font-medium text-foreground">{post.author.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedDate}>{formatPublishedDate(post.publishedDate)}</time>
          {post.readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
