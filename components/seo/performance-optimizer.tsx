"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = ["/images/butterfly-logo.png", "/images/IMG-20250929-WA0008.jpg"]

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
      const resourceHints = [
        { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
        { rel: "preconnect", href: "https://vitals.vercel-insights.com" },
        { rel: "preconnect", href: "https://www.google.com" },
        { rel: "preconnect", href: "https://maps.googleapis.com" },
        { rel: "preconnect", href: "https://maps.gstatic.com" },
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
