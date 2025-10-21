"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X } from "lucide-react"
import { BookingModal } from "./booking-modal"
import Image from "next/image"
import { getImageUrl } from "@/lib/image-config"

export function Header() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleBookNowClick = () => {
    const phoneNumber = "919360299919"
    const message = encodeURIComponent(
      "Hi! I'm interested in Nidhi Elite plots and customized villas. Please provide more information.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEnquireClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40"
        role="banner"
        aria-label="Main Navigation for Nidhi Elite"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-card shadow-sm border border-border/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={getImageUrl("/images/butterfly-logo.jpg") || "/placeholder.svg"}
                    alt="Nidhi Elite Logo – DTCP & RERA Approved Luxury Plots and Villas"
                    width={28}
                    height={28}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-serif font-semibold text-foreground tracking-tight leading-tight">
                  Nidhi Elite
                </h1>
                <p className="text-xs text-muted-foreground font-medium">Luxury Plots & Villas</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary Site Navigation">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Plots", id: "plots" },
                { label: "Villas", id: "customized-villas" },
                { label: "Amenities", id: "amenities" },
                { label: "Location", id: "location" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Buttons */}
            <div className="flex items-center space-x-3">
              {/* Book Now (WhatsApp) */}
              <Button
                aria-label="Book Now via WhatsApp"
                variant="ghost"
                size="sm"
                className="hidden sm:flex text-muted-foreground hover:text-foreground bg-green-500/10 hover:bg-green-500/20 text-green-600"
                onClick={handleBookNowClick}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Book Now
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                onClick={handleEnquireClick}
              >
                {" "}
                <Mail className="w-4 h-4 mr-2" /> Enquire{" "}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
              <nav className="flex flex-col space-y-3 pt-4" aria-label="Mobile Menu Navigation">
                {[
                  { label: "Home", id: "home" },
                  { label: "Plots", id: "plots" },
                  { label: "Customized Villas", id: "customized-villas" },
                  { label: "Amenities", id: "amenities" },
                  { label: "Location", id: "location" },
                  { label: "About", id: "about" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile "Book Now" Button */}
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium mt-2"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
