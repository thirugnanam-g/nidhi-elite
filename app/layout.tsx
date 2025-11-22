import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { AnalyticsTracker } from "@/components/analytics/analytics-tracker"
import { ConversionTracking } from "@/components/analytics/conversion-tracking"
import "./globals.css"
import Script from "next/script"

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
    default: "Nidhi Elite | HNTDA & RERA Approved Plots & Villas in Hosur",
    template: "%s | Nidhi Elite",
  },
  description:
    "HNTDA & TNRERA approved luxury plots and villas in Hosur near Bangalore. Premium residential community with modern amenities starting from ₹21 Lakhs onwards. Book your dream home today.",
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
    "Hosur metro connectivity",
    "Hosur property investment",
    "best plots in Hosur",
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
    canonical: "https://nidhielite.com/",
    languages: {
      "en-IN": "https://nidhielite.com/",
    },
  },
  openGraph: {
    title: "Nidhi Elite | HNTDA & TNRERA Approved Plots & Villas in Hosur",
    description:
      "HNTDA & TNRERA approved plots and villas in Hosur near Bangalore. Premium residential community from ₹21 Lakhs.",
    url: "https://nidhielite.com/",
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
    title: "Nidhi Elite | HNTDA & TNRERA Approved Plots & Villas in Hosur",
    description: "HNTDA & TNRERA approved plots and villas in Hosur near Bangalore.",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://dylrlrpqagnbcblddglk.supabase.co" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Geo Tags for Local SEO */}
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

        {/* Mobile Web App Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nidhi Elite" />

        {/* Additional Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Nidhi Elite" />
        <meta name="owner" content="Nidhi Elite" />

        {/* ✅ Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1960371824750038');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1960371824750038&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className={`font-sans ${inter.variable} ${playfair.variable} ${GeistMono.variable}`}>
        <GoogleAnalytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nidhi Elite",
              url: "https://nidhielite.com/",
              logo: "https://nidhielite.com/favicon.png",
              description:
                "HNTDA & TNRERA approved premium residential plots and customized villas in Hosur, near Bangalore.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
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
              email: "nidhielite@gmail.com",
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
