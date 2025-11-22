"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getImageUrl } from "@/lib/config/image-config"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919360299919"
    const message = encodeURIComponent(
      "Hi! I'm interested in Nidhi Elite plots and customized villas. Please provide more information.",
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleExploreFloorPlans = () => {
    const floorPlansSection = document.getElementById("customized-villas")
    if (floorPlansSection) {
      floorPlansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white min-h-screen md:min-h-[90vh] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageUrl("/images/hero-bg.jpeg") || "/placeholder.svg"}
          alt="Luxury residential community with modern architecture and green spaces"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={85}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* LEFT SIDE — Text Section */}
          <div className="text-white space-y-4 sm:space-y-5 lg:space-y-6 drop-shadow-[0_6px_16px_rgba(0,0,0,0.8)]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-tight">
              Experience <span className="text-yellow-300 italic font-medium">Luxury</span>
              <br />
              with <span className="text-yellow-300 font-semibold">Nidhi Elite</span>
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-white/95 max-w-md leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Premium plots and customized villas with world-class amenities and trusted government approvals — your
              dream home near Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
              <Button
                size="sm"
                onClick={handleExploreFloorPlans}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm lg:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all rounded-lg"
              >
                Explore Plots
              </Button>

              <Button
                size="sm"
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm lg:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all rounded-lg flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Book on WhatsApp
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE — Badges (Laptop and larger only) */}
          <div className="hidden lg:flex flex-col items-center justify-center space-y-4 relative">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Image
                src={getImageUrl("/images/rera-approved.png") || "/placeholder.svg"}
                alt="TNRERA Approved - Tamil Nadu Real Estate Regulatory Authority"
                width={120}
                height={120}
                className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] aspect-square"
              />
              <Image
                src={getImageUrl("/images/hntda-approved.png") || "/placeholder.svg"}
                alt="HNTDA Approved - Hosur Nandyala Town Development Authority"
                width={150}
                height={150}
                className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] aspect-square"
              />
            </div>
          </div>
        </div>

        {/* ✅ Bottom Stats with "Starting Price" */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10 text-center">
          {[
            { value: "106", label: "Plots" },
            { value: "Duplex", label: "Villas" },
            { value: "₹21L+", label: "Starting Price" },
          ].map((item) => (
            <div
              key={item.value}
              className="text-white space-y-0.5 sm:space-y-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              <div className="text-lg sm:text-2xl lg:text-3xl font-serif font-semibold text-yellow-300">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-white/95 font-medium tracking-wide leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
