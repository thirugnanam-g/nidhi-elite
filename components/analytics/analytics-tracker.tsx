"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.gtag = function gtag() {
          window.dataLayer.push(arguments)
        }
        window.gtag("js", new Date())
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    }

    // Track page views
    const trackPageView = () => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_path: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ""),
          page_title: document.title,
        })
      }
    }

    // Track user interactions
    const trackUserInteractions = () => {
      // Track button clicks
      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement
        if (target.tagName === "BUTTON" || target.closest("button")) {
          const button = target.tagName === "BUTTON" ? target : target.closest("button")
          const buttonText = button?.textContent?.trim() || "Unknown Button"

          if (typeof window.gtag !== "undefined") {
            window.gtag("event", "click", {
              event_category: "engagement",
              event_label: buttonText,
              value: 1,
            })
          }
        }
      })

      // Track form submissions
      document.addEventListener("submit", (e) => {
        const form = e.target as HTMLFormElement
        const formName = form.getAttribute("name") || form.id || "Unknown Form"

        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "form_submit", {
            event_category: "engagement",
            event_label: formName,
            value: 1,
          })
        }
      })

      // Track scroll depth
      let maxScroll = 0
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
        )

        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent
          if (typeof window.gtag !== "undefined") {
            window.gtag("event", "scroll", {
              event_category: "engagement",
              event_label: `${scrollPercent}%`,
              value: scrollPercent,
            })
          }
        }
      }

      window.addEventListener("scroll", trackScrollDepth, { passive: true })
    }

    // Track real estate specific events
    const trackRealEstateEvents = () => {
      // Track property interest
      const trackPropertyInterest = (propertyType: string) => {
        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "property_interest", {
            event_category: "real_estate",
            event_label: propertyType,
            value: 1,
          })
        }
      }

      // Track contact attempts
      const trackContactAttempt = (contactMethod: string) => {
        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "contact_attempt", {
            event_category: "lead_generation",
            event_label: contactMethod,
            value: 1,
          })
        }
      }

      // Make functions available globally for components to use
      ;(window as any).trackPropertyInterest = trackPropertyInterest
      ;(window as any).trackContactAttempt = trackContactAttempt
    }

    initGA()
    trackPageView()
    trackUserInteractions()
    trackRealEstateEvents()
  }, [pathname, searchParams])

  return null
}
