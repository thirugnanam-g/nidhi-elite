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
    default: "Nidhi Elite | HNTDA & TNRERA Approved Plots & Customized Villas in Hosur, Near Bangalore",
    template: "%s | Nidhi Elite Plots & Customized Villas, Hosur",
  },
  description:
    "Discover Nidhi Elite - HNTDA & TN RERA approved premium residential plots (1200-2400 sq ft) and 3BHK customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs. Secure gated community with 30ft roads, underground sewage, CCTV, parks & modern amenities. Expert construction by Nidhi Elite builders. Book site visit: 93602 99919",
  keywords: [
    "Nidhi Elite Hosur",
    "HNTDA approved plots Hosur",
    "TNRERA approved plots Hosur",
    "plots in Hosur near Bangalore",
    "customized villas Hosur",
    "3BHK villas Hosur",
    "gated community Hosur",
    "residential plots Hosur",
    "villas near Bangalore",
    "Hosur plots for sale",
    "Nidhi Elite layout",
    "Poonapalli Village Hosur",
    "approved residential layouts Hosur",
    "premium plots Hosur",
    "real estate Hosur",
    "villa construction Hosur",
    "plots starting 21 lakhs",
    "Hosur property investment",
  ],
  authors: [{ name: "Nidhi Elite" }],
  creator: "Nidhi Elite",
  publisher: "Nidhi Elite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://v0-realestateapp1.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nidhi Elite | HNTDA & TNRERA Approved Plots & Customized Villas in Hosur, Near Bangalore",
    description:
      "Own HNTDA & TN TERA approved plots and customized villas in Hosur with Nidhi Elite. Experience luxury living, expert-built homes, and prime connectivity to Bangalore.",
    url: "https://v0-realestateapp1.vercel.app",
    siteName: "Nidhi Elite",
    images: [
      {
        url: "/images/nidhi-elite-hosur-layout.jpg",
        width: 1200,
        height: 630,
        alt: "Nidhi Elite - HNTDA & TNRERA Approved Plots and Villas in Hosur near Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Elite | HNTDA & TNRERA Approved Plots & Customized Villas in Hosur, Near Bangalore",
    description:
      "Nidhi Elite - Discover premium customized villas and plots near Bangalore. HNTDA & TN TERA approved with world-class amenities.",
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

        {/* Performance Preconnects */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://drive.google.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://www.youtube.com" />

        {/* 🔍 Schema Markup for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Residence",
              name: "Nidhi Elite",
              description:
                "HNTDA & TN TERA approved premium residential plots and customized villas in Hosur, near Bangalore.",
              image: "https://v0-realestateapp1.vercel.app/images/nidhi-elite-hosur-layout.jpg",
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
              url: "https://v0-realestateapp1.vercel.app",
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
