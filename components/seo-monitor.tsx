"use client"

import { useEffect } from "react"

export function SEOMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ("web-vital" in window) {
        // Monitor Largest Contentful Paint (LCP)
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === "largest-contentful-paint") {
              const lcp = entry.startTime
              if (typeof window !== "undefined" && (window as any).gtag) {
                ;(window as any).gtag("event", "web_vital", {
                  event_category: "performance",
                  event_label: "LCP",
                  value: Math.round(lcp),
                  non_interaction: true,
                })
              }
            }
          }
        }).observe({ entryTypes: ["largest-contentful-paint"] })

        // Monitor First Input Delay (FID)
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === "first-input") {
              const fid = (entry as any).processingStart - entry.startTime
              if (typeof window !== "undefined" && (window as any).gtag) {
                ;(window as any).gtag("event", "web_vital", {
                  event_category: "performance",
                  event_label: "FID",
                  value: Math.round(fid),
                  non_interaction: true,
                })
              }
            }
          }
        }).observe({ entryTypes: ["first-input"] })

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          if (typeof window !== "undefined" && (window as any).gtag) {
            ;(window as any).gtag("event", "web_vital", {
              event_category: "performance",
              event_label: "CLS",
              value: Math.round(clsValue * 1000),
              non_interaction: true,
            })
          }
        }).observe({ entryTypes: ["layout-shift"] })
      }
    }

    // Monitor SEO health
    const monitorSEOHealth = () => {
      // Check for missing alt tags
      const images = document.querySelectorAll("img:not([alt])")
      if (images.length > 0 && typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "seo_issue", {
          event_category: "seo_health",
          event_label: "missing_alt_tags",
          value: images.length,
        })
      }

      // Check for missing headings
      const h1s = document.querySelectorAll("h1")
      if (h1s.length === 0 && typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "seo_issue", {
          event_category: "seo_health",
          event_label: "missing_h1",
          value: 1,
        })
      }

      // Check page load time
      if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "page_load_time", {
            event_category: "performance",
            value: Math.round(loadTime),
            non_interaction: true,
          })
        }
      }
    }

    monitorCoreWebVitals()
    monitorSEOHealth()
  }, [])

  return null
}
