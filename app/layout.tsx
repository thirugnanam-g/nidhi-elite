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
    default: "Nidhi Elite | Premium Plots & Villas in Hosur near Bangalore | TNRERA & HNTDA Approved",
    template: "%s | Nidhi Elite",
  },
  description:
    "HNTDA & TNRERA approved premium plots and customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs with modern amenities, gated community, and world-class facilities. Book your dream home today.",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://v0-nidhi-elite.vercel.app"),
  alternates: {
    canonical: "https://v0-nidhi-elite.vercel.app/",
  },
  openGraph: {
    title: "Nidhi Elite | Premium Plots & Villas in Hosur near Bangalore",
    description:
      "HNTDA & TNRERA approved premium plots and customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs with modern amenities.",
    url: "https://v0-nidhi-elite.vercel.app/",
    siteName: "Nidhi Elite",
    images: [
      {
        url: "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/nidhi-elite-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nidhi Elite - Premium Plots and Villas in Hosur",
        type: "image/jpeg",
      },
      {
        url: "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/butterfly-logo.jpg",
        width: 400,
        height: 400,
        alt: "Nidhi Elite Logo",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Elite | Premium Plots & Villas in Hosur",
    description: "HNTDA & TNRERA approved premium plots and customized villas in Hosur near Bangalore.",
    images: ["https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/nidhi-elite-og-image.jpg"],
    creator: "@nidhielite",
    site: "@nidhielite",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="canonical" href="https://v0-nidhi-elite.vercel.app/" />

        <link rel="preconnect" href="https://dylrlrpqagnbcblddglk.supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://dylrlrpqagnbcblddglk.supabase.co" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

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

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nidhi Elite" />

        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Nidhi Elite" />
        <meta name="owner" content="Nidhi Elite" />

        {/* 🔍 Schema Markup for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nidhi Elite",
              url: "https://v0-nidhi-elite.vercel.app/",
              logo: "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/butterfly-logo.jpg",
              description:
                "HNTDA & TNRERA approved premium residential plots and customized villas in Hosur, near Bangalore.",
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
              telephone: "+91-9360299919",
              email: "nidhielitelayout@gmail.com",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nidhi Elite",
              image: "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/butterfly-logo.jpg",
              description:
                "Premium HNTDA & TNRERA approved residential plots and customized villas in Hosur near Bangalore",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sy. No: 750, Poonapalli Village",
                addressLocality: "Hosur",
                addressRegion: "Tamil Nadu",
                postalCode: "635110",
                addressCountry: "IN",
              },
              telephone: "+91-9360299919",
              url: "https://v0-nidhi-elite.vercel.app/",
              priceRange: "₹21L - ₹42L+",
              areaServed: ["Hosur", "Bangalore", "Tamil Nadu", "Krishnagiri"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://v0-nidhi-elite.vercel.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Plots",
                  item: "https://v0-nidhi-elite.vercel.app/#plots",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Villas",
                  item: "https://v0-nidhi-elite.vercel.app/#customized-villas",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Location",
                  item: "https://v0-nidhi-elite.vercel.app/#location",
                },
              ],
            }),
          }}
        />
      </head>

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
