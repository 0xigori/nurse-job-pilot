export function CoverImage({
  image,
  alt = "",
  className = "",
}: {
  image: string
  alt?: string
  className?: string
}) {
  return (
    <img
      src={image}
      alt={alt}
      className={`rounded-lg object-cover ${className}`}
    />
  )
}
