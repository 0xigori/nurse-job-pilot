export function CoverImage({
  image,
  alt = "",
  className = "",
}: {
  image?: string
  alt?: string
  className?: string
}) {
  if (!image) {
    return <div className={`rounded-lb-lg bg-muted ${className}`} aria-hidden="true" />
  }

  return (
    <img
      src={image}
      alt={alt}
      className={`rounded-lb-lg object-cover ${className}`}
    />
  )
}
