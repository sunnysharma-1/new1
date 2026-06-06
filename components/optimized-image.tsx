type OptimizedImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
}

function toWebp(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}

export default function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  priority = false,
  sizes,
  fill,
  width,
  height,
}: OptimizedImageProps) {
  const webpSrc = toWebp(src)

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : loading}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
        sizes={sizes}
        width={width}
        height={height}
      />
    </picture>
  )
}
