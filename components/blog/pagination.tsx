import { Link } from "react-router-dom"

export function Pagination({
  currentPage,
  totalPages,
  searchParams,
}: {
  currentPage: number
  totalPages: number
  searchParams?: URLSearchParams
}) {
  if (totalPages <= 1) return null

  const pageHref = (page: number) => {
    const next = new URLSearchParams(searchParams)
    page === 1 ? next.delete("page") : next.set("page", String(page))
    const qs = next.toString()
    return qs ? `/blog?${qs}` : "/blog"
  }

  return (
    <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Blog pagination">
      <Link
        to={pageHref(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        className={`inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-sm font-medium transition-colors ${
          currentPage === 1
            ? "pointer-events-none text-muted-foreground/40"
            : "text-foreground hover:bg-muted"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M8.5 3L4.5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Prev
      </Link>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            to={pageHref(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        to={pageHref(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage === totalPages}
        className={`inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none text-muted-foreground/40"
            : "text-foreground hover:bg-muted"
        }`}
      >
        Next
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </nav>
  )
}
