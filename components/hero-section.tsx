"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919360299919"
    const message = encodeURIComponent(
      "Hi! I'm interested in Nidhi Elite plots and customized villas. Please provide more information.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
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
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#fefcf9] via-[#ffffff] to-primary/5 min-h-[85vh] sm:min-h-screen flex items-center"
    >
      {/* Background Image with minimal overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Nidhi Elite Villas"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT SIDE — TEXT SECTION */}
            <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-tight text-white drop-shadow-lg">
                  Experience <span className="text-yellow-300 font-medium italic">Luxury</span>
                  <br />
                  with <span className="text-yellow-300 font-semibold">Nidhi Elite</span>
                </h1>

                <p className="text-base sm:text-lg text-white/95 drop-shadow-md max-w-md leading-relaxed font-light">
                  Premium plots & customized 3BHK villas. HNTDA & TNRERA approved. Starting ₹21 Lakhs+
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold w-full sm:w-auto"
                  onClick={handleExploreFloorPlans}
                >
                  Explore Plans
                </Button>
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  Book on WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/30">
                {[
                  { value: "106", label: "Plots" },
                  { value: "3BHK", label: "Villas" },
                  { value: "₹21L+", label: "Price" },
                ].map((item) => (
                  <div key={item.label} className="text-center space-y-1 group">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-yellow-300 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium tracking-wide drop-shadow-sm">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE — BADGES + CARD (Redesigned) */}
            <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8">
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg">
                    <Image
                      src="/images/rera-approved.jpg"
                      alt="RERA Approved"
                      width={100}
                      height={100}
                      className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg">
                    <Image
                      src="/images/hntda-approved.jpg"
                      alt="HNTDA Approved"
                      width={100}
                      height={100}
                      className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground p-6 sm:p-8 rounded-3xl shadow-2xl border border-primary/30 backdrop-blur-sm w-full max-w-xs text-center hover:shadow-3xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-serif font-bold">₹21 Lakhs+</div>
                <div className="text-sm sm:text-base opacity-95 font-semibold mt-2">Starting Price</div>
                <div className="text-xs sm:text-sm opacity-80 mt-1">Premium Plots</div>
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute -top-8 -left-8 w-12 h-12 bg-secondary rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/3 -right-4 w-6 h-6 bg-primary rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
