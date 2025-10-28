/**
 * Generate structured data for a property listing
 */
export function generatePropertySchema(property: {
  name: string
  description: string
  image: string
  price: number
  priceCurrency: string
  address: string
  bedrooms?: number
  bathrooms?: number
  area?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: property.name,
    description: property.description,
    image: property.image,
    offers: {
      "@type": "Offer",
      priceCurrency: property.priceCurrency,
      price: property.price.toString(),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: "Hosur",
      addressRegion: "Tamil Nadu",
      postalCode: "635110",
      addressCountry: "IN",
    },
    ...(property.bedrooms && { numberOfBedrooms: property.bedrooms }),
    ...(property.bathrooms && { numberOfBathroomsUnitConfiguration: property.bathrooms }),
    ...(property.area && { floorSize: { "@type": "QuantitativeValue", value: property.area, unitCode: "SQM" } }),
  }
}

/**
 * Generate meta tags for a page
 */
export function generateMetaTags(page: {
  title: string
  description: string
  image: string
  url: string
  type?: "website" | "article" | "product"
}) {
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      image: page.image,
      url: page.url,
      type: page.type || "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      image: page.image,
    },
  }
}

/**
 * Track Core Web Vitals
 */
export function trackCoreWebVitals() {
  if (typeof window === "undefined") return

  // Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]
    console.log("[v0] LCP:", lastEntry.renderTime || lastEntry.loadTime)
  })

  observer.observe({ entryTypes: ["largest-contentful-paint"] })

  // Cumulative Layout Shift (CLS)
  let clsValue = 0
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value
        console.log("[v0] CLS:", clsValue)
      }
    }
  })

  clsObserver.observe({ entryTypes: ["layout-shift"] })

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      console.log("[v0] FID:", (entry as any).processingDuration)
    })
  })

  fidObserver.observe({ entryTypes: ["first-input"] })
}

/**
 * Generate sitemap entry
 */
export function generateSitemapEntry(url: string, priority = 0.8, changeFrequency = "weekly") {
  return {
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }
}

/**
 * Validate SEO best practices
 */
export function validateSEO(page: {
  title?: string
  description?: string
  h1?: string
  images?: Array<{ src: string; alt: string }>
  links?: Array<{ href: string; text: string }>
}) {
  const issues: string[] = []

  if (!page.title || page.title.length < 30 || page.title.length > 60) {
    issues.push("Title should be 30-60 characters")
  }

  if (!page.description || page.description.length < 120 || page.description.length > 160) {
    issues.push("Meta description should be 120-160 characters")
  }

  if (!page.h1) {
    issues.push("Page should have exactly one H1 tag")
  }

  if (page.images) {
    page.images.forEach((img, idx) => {
      if (!img.alt || img.alt.length < 5) {
        issues.push(`Image ${idx + 1} has missing or short alt text`)
      }
    })
  }

  return {
    isValid: issues.length === 0,
    issues,
  }
}
