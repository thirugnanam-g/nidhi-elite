"use client"

import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"
import { StructuredData } from "@/components/seo/structured-data"
import { PerformanceOptimizer } from "@/components/seo/performance-optimizer"
import { AccessibilityEnhancer } from "@/components/seo/accessibility-enhancer"
import { SEOMonitor } from "@/components/seo/seo-monitor"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"
import { AboutSection } from "@/components/sections/about-section"
import { Suspense, lazy } from "react"

const LazyPlotsIntro = lazy(() =>
  import("@/components/features/plots-intro").then((mod) => ({ default: mod.PlotsIntro })),
)
const LazyVillaIntro = lazy(() =>
  import("@/components/features/villa-intro").then((mod) => ({ default: mod.VillaIntro })),
)
const LazyAmenities = lazy(() => import("@/components/features/amenities").then((mod) => ({ default: mod.Amenities })))
const LazyLocationConnectivity = lazy(() =>
  import("@/components/sections/location-connectivity").then((mod) => ({ default: mod.LocationConnectivity })),
)
const LazyAutoScrollGallery = lazy(() =>
  import("@/components/sections/auto-scroll-gallery").then((mod) => ({ default: mod.AutoScrollGallery })),
)
const LazyTestimonialsSection = lazy(() =>
  import("@/components/sections/testimonials").then((mod) => ({ default: mod.TestimonialsSection })),
)

export default function Home() {
  return (
    <>
      {/* Structured Data + Performance Enhancers */}
      <StructuredData />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SEOMonitor />

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-white text-gray-900" id="main-content" role="main">
        <Header />

        {/* HERO */}
        <section
          id="home"
          aria-label="Nidhi Elite - HNTDA & TNRERA Approved Plots and Villas in Hosur"
          className="relative overflow-hidden"
        >
          <h1 className="sr-only">Nidhi Elite – HNTDA & TNRERA Approved Plots and Customizable Villas in Hosur</h1>
          <HeroSection />
        </section>

        {/* ABOUT */}
        <section id="about" aria-label="About Nidhi Elite Real Estate Developer" className="relative scroll-mt-20">
          <AboutSection />
        </section>

        {/* PLOTS */}
        <section id="plots" aria-label="HNTDA Approved Residential Plots in Hosur" className="relative scroll-mt-20">
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
            <LazyPlotsIntro />
          </Suspense>
        </section>

        {/* VILLAS */}
        <section
          id="customized-villas"
          aria-label="Customizable Luxury Villas Near Bangalore"
          className="relative scroll-mt-20"
        >
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
            <LazyVillaIntro />
          </Suspense>
        </section>

        {/* AMENITIES */}
        <section id="amenities" aria-label="World-Class Amenities at Nidhi Elite" className="relative scroll-mt-20">
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
            <LazyAmenities />
          </Suspense>
        </section>

        {/* LOCATION */}
        <section
          id="location"
          aria-label="Prime Location and Connectivity from Hosur to Bangalore"
          className="bg-gray-50 relative scroll-mt-20"
        >
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
            <LazyLocationConnectivity />
          </Suspense>
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          aria-label="Real Site Images of Nidhi Elite Layout"
          className="bg-gray-50 relative scroll-mt-20"
        >
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
            <LazyAutoScrollGallery />
          </Suspense>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" aria-label="Customer Reviews and Testimonials" className="relative scroll-mt-20">
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
            <LazyTestimonialsSection />
          </Suspense>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          aria-label="Contact Nidhi Elite for Site Visit or Brochure"
          className="bg-gray-50 relative scroll-mt-20"
        >
          <ContactSection />
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  )
}
