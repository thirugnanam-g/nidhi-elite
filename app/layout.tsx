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
    default: "Nidhi Elite | Premium Plots & Villas in Hosur",
    template: "%s | Nidhi Elite",
  },
  description:
    "HNTDA & TNRERA approved premium plots and customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs with modern amenities.",
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
  ],
  authors: [{ name: "Nidhi Elite" }],
  creator: "Nidhi Elite",
  publisher: "Nidhi Elite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nidhielite.com"),
  alternates: {
    canonical: "https://nidhielite.com",
  },
  openGraph: {
    title: "Nidhi Elite | Premium Plots & Villas in Hosur",
    description:
      "HNTDA & TNRERA approved premium plots and customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs.",
    url: "https://nidhielite.com",
    siteName: "Nidhi Elite",
    images: [
      {
        url: "/images/nidhi-elite-hosur-layout.jpg",
        width: 1200,
        height: 630,
        alt: "Nidhi Elite - Premium Plots and Villas in Hosur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Elite | Premium Plots & Villas in Hosur",
    description: "HNTDA & TNRERA approved premium plots and customized villas in Hosur near Bangalore.",
    images: ["/images/nidhi-elite-hosur-layout.jpg"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="canonical" href="https://nidhielite.com" />

        {/* 🌍 Local SEO Geo Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
        <meta name="geo.position" content="12.7409;77.8253" />
        <meta name="ICBM" content="12.7409,77.8253" />
        <meta name="rating" content="General" />
        <meta name="subject" content="Premium Plots and Customized Villas in Hosur near Bangalore" />
        <meta name="copyright" content="© 2025 Nidhi Elite" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="theme-color" content="#E9C46A" />

        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://drive.google.com" />

        {/* 🔍 Schema Markup for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Residence",
              name: "Nidhi Elite",
              description:
                "HNTDA & TNRERA approved premium residential plots and customized villas in Hosur, near Bangalore.",
              image: "https://nidhielite.com/images/nidhi-elite-hosur-layout.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sy. No: 750, Poonapalli Village",
                addressLocality: "Hosur",
                addressRegion: "Tamil Nadu",
                postalCode: "635110",
                addressCountry: "India",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.7409,
                longitude: 77.8253,
              },
              url: "https://nidhielite.com",
              telephone: "+91-9360299919",
              priceRange: "₹21L - ₹42L+",
              openingHours: "Mo-Sa 09:00-18:00",
              sameAs: [
                "https://www.instagram.com/nidhi.elite/",
                "https://www.facebook.com/profile.php?id=61580792931426",
                "https://www.youtube.com/@NidhiElite/videos",
              ],
            }),
          }}
        />
      </head>

      <body className={`font-sans ${inter.variable} ${playfair.variable} ${GeistMono.variable}`}>
        {/* Google Analytics + Tracking */}
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
