"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X } from "lucide-react"
import { BookingModal } from "@/components/shared/booking-modal"
import Image from "next/image"
import { getImageUrl } from "@/lib/config/image-config"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  // ✅ WhatsApp booking button
  const handleBookNowClick = () => {
    const phoneNumber = "919360299919"
    const message = encodeURIComponent(
      "Hi! I'm interested in Nidhi Elite plots and customized villas. Please provide more information."
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  // ✅ Enquire button scroll or navigate
  const handleEnquireClick = () => {
    setIsMobileMenuOpen(false)

    if (isHomePage) {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const headerHeight = 80
        const sectionTop = contactSection.getBoundingClientRect().top + window.scrollY - headerHeight
        window.scrollTo({ top: sectionTop, behavior: "smooth" })
      }
    } else {
      router.push("/#contact", { scroll: false })
    }
  }

  // ✅ Universal smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false)

    if (isHomePage) {
      const section = document.getElementById(sectionId)
      if (section) {
        const headerHeight = 80
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight
        window.scrollTo({ top: sectionTop, behavior: "smooth" })
      }
    } else {
      router.push(`/#${sectionId}`, { scroll: false })
    }
  }

  return (
    <>
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <div className="rounded-full bg-card shadow-sm border border-border/20 flex items-center justify-center overflow-hidden w-full h-full">
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
                <h1 className="text-lg md:text-xl font-serif font-semibold text-foreground tracking-tight leading-tight">
                  Nidhi Elite
                </h1>
                <p className="hidden md:block text-xs text-muted-foreground font-medium">
                  Luxury Plots & Villas
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Primary Site Navigation">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Plots", id: "plots" },
                { label: "Villas", id: "customized-villas" },
                { label: "Amenities", id: "amenities" },
                { label: "Location", id: "location" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", id: "contact" },
              ].map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id!)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              )}
            </nav>

            {/* Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* WhatsApp Book Now */}
              <Button
                aria-label="Book via WhatsApp"
                size="sm"
                onClick={handleBookNowClick}
                className="bg-green-600 hover:bg-green-700 text-white shadow-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="w-4 h-4 mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
              </Button>

              {/* Enquire */}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hidden lg:flex"
                onClick={handleEnquireClick}
              >
                <Mail className="w-4 h-4 mr-2" /> Enquire
              </Button>

              {/* Mobile Menu Button */}
              <Button
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
              <nav className="flex flex-col space-y-3 pt-4">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Plots", id: "plots" },
                  { label: "Customized Villas", id: "customized-villas" },
                  { label: "Amenities", id: "amenities" },
                  { label: "Location", id: "location" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", id: "contact" },
                ].map((item) =>
                  item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id!)}
                      className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  )
                )}

                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm mt-3"
                  onClick={handleEnquireClick}
                >
                  <Mail className="w-4 h-4 mr-2" /> Enquire
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
