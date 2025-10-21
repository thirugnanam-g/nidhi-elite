"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = ["/images/exterior-villas.png", "/images/butterfly-logo.png", "/images/hero-interior.png"]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Add resource hints for external domains
      const resourceHints = [
        { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
        { rel: "preconnect", href: "https://vitals.vercel-insights.com" },
      ]

      resourceHints.forEach((hint) => {
        const link = document.createElement("link")
        link.rel = hint.rel
        link.href = hint.href
        if (hint.rel === "preconnect") {
          link.crossOrigin = "anonymous"
        }
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical resources
    const lazyLoadNonCritical = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          preloadCriticalImages()
          optimizeThirdPartyScripts()
        })
      } else {
        setTimeout(() => {
          preloadCriticalImages()
          optimizeThirdPartyScripts()
        }, 100)
      }
    }

    lazyLoadNonCritical()
  }, [])

  return null
}
