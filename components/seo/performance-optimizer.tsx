"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        "/images/butterfly-logo.png",
        "/images/IMG-20250929-WA0008.jpg",
        "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/butterfly-logo.jpg",
      ]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        link.fetchPriority = "high"
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
        { rel: "preconnect", href: "https://dylrlrpqagnbcblddglk.supabase.co" },
        { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
        { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
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

    // Optimize Core Web Vitals
    const optimizeCoreWebVitals = () => {
      // Reduce layout shift by setting explicit dimensions
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        if (!img.width || !img.height) {
          img.style.aspectRatio = "auto"
        }
      })

      // Defer non-critical CSS
      const links = document.querySelectorAll("link[rel='stylesheet']")
      links.forEach((link) => {
        if (link.getAttribute("data-defer") === "true") {
          link.media = "print"
          link.onload = function () {
            this.media = "all"
          }
        }
      })
    }

    // Lazy load non-critical resources
    const lazyLoadNonCritical = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          preloadCriticalImages()
          optimizeThirdPartyScripts()
          optimizeCoreWebVitals()
        })
      } else {
        setTimeout(() => {
          preloadCriticalImages()
          optimizeThirdPartyScripts()
          optimizeCoreWebVitals()
        }, 100)
      }
    }

    lazyLoadNonCritical()

    // Monitor performance metrics
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log("[v0] Performance:", entry.name, entry.duration)
          }
        })
        observer.observe({ entryTypes: ["navigation", "resource", "paint"] })
      } catch (e) {
        console.log("[v0] Performance monitoring not available")
      }
    }
  }, [])

  return null
}
