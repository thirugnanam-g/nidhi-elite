import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlotsIntro } from "@/components/plots-intro"
import { VillaIntro } from "@/components/villa-intro"
import { FloorPlans } from "@/components/floor-plans"
import { InteriorFeatures } from "@/components/interior-features"
import { Amenities } from "@/components/amenities"
import { SitePlan } from "@/components/site-plan"
import { LocationConnectivity } from "@/components/location-connectivity"
import { DreamVillaCTA } from "@/components/dream-villa-cta"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { PerformanceOptimizer } from "@/components/performance-optimizer"
import { AccessibilityEnhancer } from "@/components/accessibility-enhancer"
import { SEOMonitor } from "@/components/seo-monitor"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <>
      <StructuredData />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SEOMonitor />
      <main className="min-h-screen" id="main-content" role="main">
        <Header />
        <section id="home" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        <section id="plots" aria-labelledby="plots-heading">
          <PlotsIntro />
        </section>

        <section id="customized-villas" aria-labelledby="villas-heading">
          <VillaIntro />
        </section>

        <section id="floor-plans" aria-labelledby="floor-plans-heading">
          <FloorPlans />
        </section>
        <InteriorFeatures />

        <section id="amenities" aria-labelledby="amenities-heading">
          <Amenities />
        </section>
        <section id="site-plan" aria-labelledby="site-plan-heading">
          <SitePlan />
        </section>
        <section id="location" aria-labelledby="location-heading">
          <LocationConnectivity />
        </section>
        <DreamVillaCTA />
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  )
}
