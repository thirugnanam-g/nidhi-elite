"use client"

import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { PlotsIntro } from "@/components/features/plots-intro"
import { VillaIntro } from "@/components/features/villa-intro"
import { Amenities } from "@/components/features/amenities"
import { LocationConnectivity } from "@/components/sections/location-connectivity"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"
import { StructuredData } from "@/components/seo/structured-data"
import { PerformanceOptimizer } from "@/components/seo/performance-optimizer"
import { AccessibilityEnhancer } from "@/components/seo/accessibility-enhancer"
import { SEOMonitor } from "@/components/seo/seo-monitor"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"
import { AboutSection } from "@/components/sections/about-section"
import { AutoScrollGallery } from "@/components/sections/auto-scroll-gallery"
import { TestimonialsSection } from "@/components/sections/testimonials"

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
          <PlotsIntro />
        </section>

        {/* VILLAS */}
        <section
          id="customized-villas"
          aria-label="Customizable Luxury Villas Near Bangalore"
          className="relative scroll-mt-20"
        >
          <VillaIntro />
        </section>

        {/* AMENITIES */}
        <section id="amenities" aria-label="World-Class Amenities at Nidhi Elite" className="relative scroll-mt-20">
          <Amenities />
        </section>

        {/* LOCATION */}
        <section
          id="location"
          aria-label="Prime Location and Connectivity from Hosur to Bangalore"
          className="bg-gray-50 relative scroll-mt-20"
        >
          <LocationConnectivity />
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          aria-label="Real Site Images of Nidhi Elite Layout"
          className="bg-gray-50 relative scroll-mt-20"
        >
          <AutoScrollGallery />
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" aria-label="Customer Reviews and Testimonials" className="relative scroll-mt-20">
          <TestimonialsSection />
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
