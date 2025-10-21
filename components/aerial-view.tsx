"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { BookingModal } from "./booking-modal"

export function AerialView() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleCallClick = () => {
    setIsBookingModalOpen(true)
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Development View</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the actual development progress of Nidhi Elite with TNRERA and RERA approvals
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <Image
                src="/images/aerial-site-view.png"
                alt="Aerial view of Nidhi Elite development with TNRERA approvals"
                width={1000}
                height={600}
                className="w-full h-auto rounded-xl shadow-md"
              />

              <div className="mt-8 text-center space-y-4">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">TNRERA Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">RERA Certified</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-gray-900">Contact: Chandrashekar Kannan</p>
                  <p className="text-amber-600 font-medium">+91 93602 99919</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Site Address: Sy. NO: 750 Poonapalli Village, Hosur, Tamil Nadu
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <Button onClick={handleCallClick} className="bg-green-600 hover:bg-green-700 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    <Button onClick={handleContactClick} className="bg-primary hover:bg-primary/90">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
