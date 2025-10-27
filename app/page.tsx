"use client"

import Head from "next/head"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlotsIntro } from "@/components/plots-intro"
import { VillaIntro } from "@/components/villa-intro"
import { Amenities } from "@/components/amenities"
import { LocationConnectivity } from "@/components/location-connectivity"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { PerformanceOptimizer } from "@/components/performance-optimizer"
import { AccessibilityEnhancer } from "@/components/accessibility-enhancer"
import { SEOMonitor } from "@/components/seo-monitor"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { AboutSection } from "@/components/sections/about-section"
import { AutoScrollGallery } from "@/components/sections/auto-scroll-gallery"
import { TestimonialsSection } from "@/components/sections/testimonials"

export default function Home() {
  return (
    <>
      {/* SEO HEAD TAGS */}
      <Head>
        <title>Nidhi Elite | HNTDA & TNRERA Approved Plots and Villas in Hosur</title>
        <meta
          name="description"
          content="Nidhi Elite offers HNTDA & TNRERA-approved residential plots and customizable luxury villas in Hosur. Located near Bangalore with modern amenities and 24/7 security."
        />
        <meta
          name="keywords"
          content="Nidhi Elite Hosur, HNTDA plots Hosur, villas near Bangalore, gated community plots Hosur, real estate Hosur, TNRERA approved plots, premium villas in Hosur"
        />
        <meta property="og:title" content="Nidhi Elite | Luxury Plots & Villas in Hosur" />
        <meta
          property="og:description"
          content="Premium gated community offering HNTDA-approved plots and customizable villas near Electronic City, Bangalore. Book your dream home today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nidhielite.com" />
        <meta property="og:image" content="https://nidhielite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nidhi Elite | Luxury Plots & Villas in Hosur" />
        <meta
          name="twitter:description"
          content="Explore HNTDA-approved residential plots and luxury villas near Bangalore. Secure, connected, and surrounded by greenery."
        />
        <meta name="twitter:image" content="https://nidhielite.com/og-image.jpg" />
        <link rel="canonical" href="https://nidhielite.com/" />
      </Head>

      {/* Structured Data + Performance Enhancers */}
      <StructuredData />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SEOMonitor />

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-white text-gray-900" id="main-content" role="main">
        <Header />

        {/* HERO */}
        <div id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
          <h1 id="hero-heading" className="sr-only">
            Nidhi Elite – HNTDA & TNRERA Approved Plots and Customizable Villas in Hosur
          </h1>
          <HeroSection />
        </div>

        {/* ABOUT */}
        <div id="about" aria-labelledby="about-heading" className="relative scroll-mt-20">
          <h2 id="about-heading" className="sr-only">
            About Nidhi Elite – Leading Real Estate Developer in Hosur
          </h2>
          <AboutSection />
        </div>

        {/* PLOTS */}
        <div id="plots" aria-labelledby="plots-heading" className="relative scroll-mt-20">
          <h2 id="plots-heading" className="sr-only">
            HNTDA Approved Residential Plots for Sale in Hosur
          </h2>
          <PlotsIntro />
        </div>

        {/* VILLAS */}
        <div id="customized-villas" aria-labelledby="villas-heading" className="relative scroll-mt-20">
          <h2 id="villas-heading" className="sr-only">
            Customizable Luxury Villas Near Bangalore
          </h2>
          <VillaIntro />
        </div>

        {/* AMENITIES */}
        <div id="amenities" aria-labelledby="amenities-heading" className="relative scroll-mt-20">
          <h2 id="amenities-heading" className="sr-only">
            World-Class Amenities at Nidhi Elite Hosur
          </h2>
          <Amenities />
        </div>

        {/* LOCATION */}
        <div id="location" aria-labelledby="location-heading" className="bg-gray-50 relative scroll-mt-20">
          <h2 id="location-heading" className="sr-only">
            Prime Location & Connectivity – Hosur to Bangalore
          </h2>
          <LocationConnectivity />
        </div>

        {/* GALLERY */}
        <div id="gallery" aria-labelledby="gallery-heading" className="bg-gray-50 relative scroll-mt-20">
          <h2 id="gallery-heading" className="sr-only">
            Real Images of Nidhi Elite Layout in Hosur
          </h2>
          <AutoScrollGallery />
        </div>

        {/* TESTIMONIALS */}
        <div id="testimonials" aria-labelledby="testimonials-heading" className="relative scroll-mt-20">
          <h2 id="testimonials-heading" className="sr-only">
            Nidhi Elite Reviews – What Our Clients Say
          </h2>
          <TestimonialsSection />
        </div>

        {/* CONTACT */}
        <div id="contact" aria-labelledby="contact-heading" className="bg-gray-50 relative scroll-mt-20">
          <h2 id="contact-heading" className="sr-only">
            Contact Nidhi Elite for Brochure or Site Visit
          </h2>
          <ContactSection />
        </div>

        {/* INTERNAL LINKS FOR SEO */}
        <nav
          aria-label="Quick Links"
          className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-8 mb-8 text-sm text-gray-700 px-4 border-t border-gray-200 pt-4"
        >
          <a href="#plots" className="hover:text-primary transition-colors">
            HNTDA Approved Plots for Sale in Hosur
          </a>
          <span>|</span>
          <a href="#customized-villas" className="hover:text-primary transition-colors">
            Customizable Luxury Villas Near Bangalore
          </a>
          <span>|</span>
          <a href="#amenities" className="hover:text-primary transition-colors">
            Modern Amenities & Facilities
          </a>
          <span>|</span>
          <a href="#location" className="hover:text-primary transition-colors">
            Hosur Location & Connectivity
          </a>
        </nav>

        {/* Breadcrumb Schema */}
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
                  item: "https://nidhielite.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Plots",
                  item: "https://nidhielite.com/#plots",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Villas",
                  item: "https://nidhielite.com/#customized-villas",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Amenities",
                  item: "https://nidhielite.com/#amenities",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact",
                  item: "https://nidhielite.com/#contact",
                },
              ],
            }),
          }}
        />

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  )
}
