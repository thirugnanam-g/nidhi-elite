import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { GoogleAnalytics } from "@/components/google-analytics"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { ConversionTracking } from "@/components/conversion-tracking"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Nidhi Elite | Premium Luxury Villas - Beginning of a New Dream",
    template: "%s | Nidhi Elite Luxury Villas",
  },
  description:
    "Nidhi Elite - Discover premium luxury 3BHK villas with world-class amenities in an exclusive gated community. Your dream home awaits at Nidhi Elite.",
  keywords: [
    "Nidhi Elite",
    "Nidhi Elite villas",
    "Nidhi Elite luxury homes",
    "luxury villas",
    "3BHK villas",
    "gated community",
    "premium homes",
    "real estate",
    "luxury living",
    "villa for sale",
    "luxury properties",
    "residential villas",
    "Nidhi Elite properties",
    "Nidhi Elite real estate",
  ],
  authors: [{ name: "Nidhi Elite" }],
  creator: "Nidhi Elite",
  publisher: "Nidhi Elite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nidhi-elite.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nidhi Elite | Premium Luxury Plots - Beginning of a New Dream",
    description:
      "Nidhi Elite - Discover premium luxury 3BHK plota with world-class amenities in an exclusive gated community. Your dream home awaits.",
    url: "https://nidhi-elite.vercel.app",
    siteName: "Nidhi Elite",
    images: [
      {
        url: "/images/exterior-villas.png",
        width: 1200,
        height: 630,
        alt: "Nidhi Elite Luxury Plots - Premium Exterior Design",
      },
      {
        url: "/images/property-1.png",
        width: 1200,
        height: 630,
        alt: "Nidhi Elite Plots Interior - Luxury Living Spaces",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Elite | Premium Luxury Villas - Beginning of a New Dream",
    description:
      "Nidhi Elite - Discover premium luxury 3BHK plots with world-class amenities in an exclusive gated community.",
    images: ["/images/exterior-villas.png"],
    creator: "@nidhi_elite",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "real estate",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${playfair.variable} ${GeistMono.variable}`}>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          {children}
          <Analytics />
          <SpeedInsights />
          <AnalyticsTracker />
          <ConversionTracking />
        </Suspense>
      </body>
    </html>
  )
}
