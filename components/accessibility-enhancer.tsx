"use client"

import { useEffect } from "react"

export function AccessibilityEnhancer() {
  useEffect(() => {
    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement("a")
      skipLink.href = "#main-content"
      skipLink.textContent = "Skip to main content"
      skipLink.className =
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      skipLink.setAttribute("tabindex", "0")
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus-visible polyfill behavior
      document.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          document.body.classList.add("keyboard-navigation")
        }
      })

      document.addEventListener("mousedown", () => {
        document.body.classList.remove("keyboard-navigation")
      })
    }

    // Add ARIA live region for dynamic content
    const addLiveRegion = () => {
      const liveRegion = document.createElement("div")
      liveRegion.setAttribute("aria-live", "polite")
      liveRegion.setAttribute("aria-atomic", "true")
      liveRegion.className = "sr-only"
      liveRegion.id = "live-region"
      document.body.appendChild(liveRegion)
    }

    // Improve heading hierarchy
    const improveHeadingHierarchy = () => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index + 1}`
        }
      })
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

      if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty("--animation-duration", "0.01ms")
        document.documentElement.style.setProperty("--transition-duration", "0.01ms")
      }
    }

    addSkipLink()
    enhanceFocusManagement()
    addLiveRegion()
    improveHeadingHierarchy()
    addReducedMotionSupport()
  }, [])

  return null
}
