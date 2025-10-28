// Performance optimization configuration
export const PERFORMANCE_CONFIG = {
  // Image optimization
  images: {
    quality: {
      hero: 85,
      gallery: 80,
      thumbnail: 75,
      logo: 90,
    },
    formats: ["webp", "avif"],
    cache: {
      ttl: 60 * 60 * 24 * 365, // 1 year
      sMaxAge: 60 * 60 * 24 * 30, // 30 days
    },
  },

  // Lazy loading strategy
  lazyLoading: {
    enabled: true,
    threshold: 0.1, // Load when 10% visible
  },

  // Responsive breakpoints
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1280,
    wide: 1920,
  },

  // Size hints for responsive images
  sizes: {
    fullWidth: "100vw",
    halfWidth: "(max-width: 768px) 100vw, 50vw",
    thirdWidth: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    gallery: "(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw",
  },

  // Cache headers
  cacheHeaders: {
    static: "public, max-age=31536000, immutable",
    dynamic: "public, max-age=3600, s-maxage=86400",
    api: "public, max-age=60, s-maxage=300",
  },
}
