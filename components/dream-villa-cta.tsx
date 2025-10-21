"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

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
      <section className="py-16 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-300">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 text-black">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Your Dream Villa Awaits</h2>

                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Step into a world of unparalleled luxury and comfort at our exclusive villa. With stunning
                    interiors, breathtaking outdoor spaces, and world-class amenities, every moment here is designed to
                    be extraordinary.
                  </p>

                  <p>
                    Don't miss the opportunity to make this exquisite villa your own. Contact us today to book a viewing
                    and start your journey to a life of elegance and sophistication. Your dream villa awaits.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-xl"
                  onClick={handleBookViewing}
                >
                  Book a Viewing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
                  onClick={handleDownloadBrochure}
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Interior Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <Image
                  src="/images/dream-villa-cta.png"
                  alt="Modern villa interior with luxury furnishing"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-200 rounded-full"></div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-black/70 italic max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> The images and content in this brochure are for illustrative purposes only
              and may not reflect the final villa design. All details, including layouts and materials, are subject to
              change without notice. Buyers should verify all information independently. Reproduction of this brochure
              is prohibited without the developer's written consent.
            </p>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
