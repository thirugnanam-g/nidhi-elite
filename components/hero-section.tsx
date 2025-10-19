"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919360299919"
    const message = encodeURIComponent(
      "Hi! I'm interested in Nidhi Elite plots and customized villas. Please provide more information."
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
      className="relative w-full overflow-hidden bg-white min-h-[90vh] flex items-center"
    >
      {/* ✅ Full background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Nidhi Elite Villas"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ✅ Slightly darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-[1]" />

      {/* ✅ Hero Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 py-10 sm:py-14 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE — Text Section */}
          <div className="text-white space-y-5 sm:space-y-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-serif font-light leading-tight">
              Experience{" "}
              <span className="text-yellow-300 italic font-medium">Luxury</span>
              <br />
              with <span className="text-yellow-300 font-semibold">Nidhi Elite</span>
            </h1>

            <p className="text-sm sm:text-lg text-white/95 max-w-md leading-relaxed font-light">
              Premium plots and customized villas with world-class amenities and trusted
              government approvals — your dream home near Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-5 text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                onClick={handleExploreFloorPlans}
              >
                Explore Plans
              </Button>

              {/* ✅ Updated WhatsApp Button */}
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-5 text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                onClick={handleWhatsAppClick}
              >
                {/* Icon slightly bigger and closer to text */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[22px] h-[22px] mr-1.5" // bigger icon + reduced margin
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Book on WhatsApp
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE — Badges (Laptop and larger only) */}
          <div className="hidden lg:flex flex-col items-center justify-center space-y-6 relative">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Image
                src="/images/rera-approved.png"
                alt="RERA Approved"
                width={150}
                height={150}
                className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
              />
              <Image
                src="/images/hntda-approved.png"
                alt="HNTDA Approved"
                width={180}
                height={180}
                className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>

        {/* ✅ Bottom Stats with “Starting Price” */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 text-center">
          {[ 
            { value: "106", label: "Plots" },
            { value: "3BHK", label: "Villas" },
            { value: "₹21L+", label: "Starting Price" },
          ].map((item) => (
            <div key={item.value} className="text-white space-y-1">
              <div className="text-xl sm:text-3xl font-serif font-semibold text-yellow-300">
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
