"use client"

import { useEffect } from "react"

export function ConversionTracking() {
  useEffect(() => {
    // Track lead generation events
    const trackLead = (leadType: string, value?: number) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "generate_lead", {
          event_category: "conversion",
          event_label: leadType,
          value: value || 1,
          currency: "INR",
        })
      }
    }

    // Track booking events
    const trackBooking = (bookingType: string) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "booking", {
          event_category: "conversion",
          event_label: bookingType,
          value: 1,
        })
      }
    }

    // Track property inquiries
    const trackPropertyInquiry = (propertyId: string, propertyType: string) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "property_inquiry", {
          event_category: "real_estate",
          event_label: `${propertyType}_${propertyId}`,
          value: 1,
        })
      }
    }

    // Make tracking functions available globally
    ;(window as any).trackLead = trackLead
    ;(window as any).trackBooking = trackBooking
    ;(window as any).trackPropertyInquiry = trackPropertyInquiry

    // Track time on page
    const startTime = Date.now()
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      if (timeSpent > 30 && typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "timing_complete", {
          name: "page_view_time",
          value: timeSpent,
          event_category: "engagement",
        })
      }
    }

    // Track when user leaves page
    window.addEventListener("beforeunload", trackTimeOnPage)

    return () => {
      window.removeEventListener("beforeunload", trackTimeOnPage)
    }
  }, [])

  return null
}
