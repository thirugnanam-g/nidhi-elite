"use client"

import { useEffect } from "react"
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
import { usePathname } from "next/navigation"

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
  const pathname = usePathname()

  // ✅ Ensures hash navigation (e.g., /#location, /#contact) works after components finish loading
  useEffect(() => {
    if (typeof window === "undefined") return

    const scrollToSection = () => {
      const hash = window.location.hash
      if (!hash) return

      const sectionId = hash.substring(1)
      const section = document.getElementById(sectionId)
      if (section) {
        const headerHeight = 80
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight
        window.scrollTo({ top: sectionTop, behavior: "smooth" })
      }
    }

    // ✅ Attempt scroll a few times in case lazy sections load later
    const attempts = [300, 800, 1500]
    const timers = attempts.map((delay) => setTimeout(scrollToSection, delay))

    // ✅ Also handle hash changes after initial load
    window.addEventListener("hashchange", scrollToSection)

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener("hashchange", scrollToSection)
    }
  }, [pathname])

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
          <Suspense fallback={<div className="h-96 bg-gradient-to-b from-gray-100 to-gray-50 animate-pulse" />}>
            <LazyPlotsIntro />
          </Suspense>
        </section>

        {/* VILLAS */}
        <section
          id="customized-villas"
          aria-label="Customizable Luxury Villas Near Bangalore"
          className="relative scroll-mt-20"
        >
          <Suspense fallback={<div className="h-96 bg-gradient-to-b from-gray-100 to-gray-50 animate-pulse" />}>
            <LazyVillaIntro />
          </Suspense>
        </section>

        {/* AMENITIES */}
        <section id="amenities" aria-label="World-Class Amenities at Nidhi Elite" className="relative scroll-mt-20">
          <Suspense fallback={<div className="h-96 bg-gradient-to-b from-gray-100 to-gray-50 animate-pulse" />}>
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
