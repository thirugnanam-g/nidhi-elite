"use client"
import { useEffect } from "react"

export function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
    link.crossOrigin = "anonymous"
    link.media = "all"
    document.head.appendChild(link)
  }, [])

  return null
}
