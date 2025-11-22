"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookingModal } from "@/components/shared/booking-modal"

export function DreamVillaCTA() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookViewing = () => {
    setIsBookingModalOpen(true)
  }

  const handleDownloadBrochure = () => {
    const link = document.createElement("a")
    link.href = "/Nidhi Elite 2025.pdf"
    link.download = "Nidhi Elite 2025.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Centered Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-sm">
                ✨ Luxury Living
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-4 text-foreground">
              Your <span className="text-primary italic font-semibold">Dream Villa</span> Awaits
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover luxury, comfort, and modern elegance — crafted to make every day extraordinary.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Content */}
            <div className="space-y-8 text-foreground">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Step into a world of unparalleled luxury and comfort at our exclusive villa. With stunning interiors,
                  breathtaking outdoor spaces, and world-class amenities, every moment here is designed to be
                  extraordinary.
                </p>
                <p>
                  Don’t miss the opportunity to make this exquisite villa your own. Contact us today to book a viewing
                  and start your journey to a life of elegance and sophistication.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-md transition-all duration-300"
                  onClick={handleBookViewing}
                >
                  Book a Viewing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
                  onClick={handleDownloadBrochure}
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
                <Image
                  src="/images/dream-villa-cta.png"
                  alt="Your Dream Villa Awaits by Nidhi Elite"
                  width={900}
                  height={700}
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Subtle glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all" />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 max-w-5xl mx-auto">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                <strong>Disclaimer:</strong> The images and content in this brochure are for illustrative purposes only
                and may not reflect the final villa design. All details, including layouts and materials, are subject to
                change without notice. Buyers should verify all information independently. Reproduction of this brochure
                is prohibited without the developer’s written consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
