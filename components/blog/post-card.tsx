import { Link } from "react-router-dom"
import type { BlogPost } from "@/src/data/blog"
import { formatPublishedDate } from "@/src/data/blog"
import { CoverImage } from "./cover-image"

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:border-accent/30 hover:shadow-sm"
    >
      <CoverImage image={post.image} alt={post.title} className="aspect-16/9 w-full" />
      <div className="flex flex-1 flex-col p-5">
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
        <h3 className="mb-2 text-[15px] font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-subtle text-[10px] font-semibold text-navy">
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
