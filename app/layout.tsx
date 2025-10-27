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
import { FontLoader } from "@/components/font-loader"
import "./globals.css"

// ✅ Font setup
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

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Nidhi Elite | Premium Plots & Villas in Hosur",
    template: "%s | Nidhi Elite",
  },
  description:
    "HNTDA & TNRERA approved premium plots and villas in Hosur near Bangalore. Starting from ₹21 Lakhs with modern amenities and gated community.",
  keywords: [
    "Nidhi Elite Hosur",
    "plots in Hosur",
    "villas in Hosur",
    "luxury villas Bangalore",
    "TNRERA approved plots",
    "HNTDA approved layout",
    "gated community Hosur",
    "residential plots Hosur",
    "premium villas Hosur",
    "plots near Electronic City",
    "villas near Bangalore",
    "Hosur real estate",
    "luxury homes Hosur",
    "3BHK villas Hosur",
    "affordable villas Hosur",
    "villa plots Hosur",
    "residential community Hosur",
  ],
  authors: [{ name: "Nidhi Elite" }],
  creator: "Nidhi Elite",
  publisher: "Nidhi Elite",
  metadataBase: new URL("https://nidhielite.com"),
  alternates: { canonical: "https://nidhielite.com/" },
  openGraph: {
    title: "Nidhi Elite | Premium Plots & Villas in Hosur",
    description: "HNTDA & TNRERA approved premium plots and villas in Hosur near Bangalore. Starting from ₹21 Lakhs.",
    url: "https://nidhielite.com/",
    siteName: "Nidhi Elite",
    images: [
      {
        url: "https://nidhielite.com/images/nidhi-elite-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nidhi Elite - Premium Plots and Villas in Hosur",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Elite | Premium Plots & Villas in Hosur",
    description: "HNTDA & TNRERA approved premium plots and villas in Hosur near Bangalore.",
    images: ["https://nidhielite.com/images/nidhi-elite-og-image.jpg"],
    creator: "@nidhielite",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "real estate",
  generator: "Next.js + Vercel",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nidhi Elite",
  },
}

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://nidhielite.com/" />

        {/* ✅ Safe preloads */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* ✅ Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* 🌍 Local SEO Geo Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
        <meta name="geo.position" content="12.7409;77.8253" />
        <meta name="ICBM" content="12.7409,77.8253" />
        <meta name="theme-color" content="#E9C46A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nidhi Elite" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Nidhi Elite" />
        <meta name="owner" content="Nidhi Elite" />
      </head>

      <body className={`font-sans ${inter.variable} ${playfair.variable} ${GeistMono.variable}`}>
        <GoogleAnalytics />
        <FontLoader />

        {/* ✅ Single unified schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://nidhielite.com/#organization",
              "name": "Nidhi Elite",
              "url": "https://nidhielite.com/",
              "logo": "https://nidhielite.com/images/butterfly-logo.jpg",
              "image": "https://nidhielite.com/images/nidhi-elite-og-image.jpg",
              "description":
                "HNTDA & TNRERA approved premium residential plots and customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs with modern amenities and gated community.",
              "priceRange": "₹21L - ₹42L+",
              "telephone": "+91-9360299919",
              "email": "nidhielitelayout@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sy. No: 750, Poonapalli Village",
                "addressLocality": "Hosur",
                "addressRegion": "Tamil Nadu",
                "postalCode": "635110",
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.7409,
                "longitude": 77.8253,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  "opens": "09:00",
                  "closes": "18:00",
                },
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150",
              },
              "sameAs": [
                "https://www.instagram.com/nidhi.elite/",
                "https://www.facebook.com/profile.php?id=61580792931426",
                "https://www.youtube.com/@NidhiElite/videos",
              ],
              "brand": {
                "@type": "Brand",
                "name": "Nidhi Elite",
                "logo": "https://nidhielite.com/images/butterfly-logo.jpg",
              },
            }),
          }}
        />

        {/* ✅ Breadcrumb schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nidhielite.com/" },
                { "@type": "ListItem", "position": 2, "name": "Plots", "item": "https://nidhielite.com/#plots" },
                { "@type": "ListItem", "position": 3, "name": "Villas", "item": "https://nidhielite.com/#customized-villas" },
                { "@type": "ListItem", "position": 4, "name": "Location", "item": "https://nidhielite.com/#location" },
              ],
            }),
          }}
        />

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
