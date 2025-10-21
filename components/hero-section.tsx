"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
    const floorPlansSection = document.getElementById("floor-plans")
    if (floorPlansSection) {
      floorPlansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10 flex flex-col justify-center min-h-[600px]">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                ✨ Plots & Customized Villas
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-light text-balance leading-[0.9]">
                Plots & Customized Villas by{" "}
                <span className="text-primary font-medium italic relative">
                  Nidhi Elite
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-lg">
                Premium Plots & Customized Villas with Government Approvals
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-medium"
                onClick={handleExploreFloorPlans}
              >
                Explore Floor Plans
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 px-8 py-6 text-base font-medium bg-transparent backdrop-blur-sm text-green-600 hover:text-green-700"
                onClick={handleWhatsAppClick}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Book Now on WhatsApp
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/30">
              <div className="text-center space-y-2 group">
                <div className="text-3xl font-serif font-semibold text-primary group-hover:scale-110 transition-transform duration-300">
                  106
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Total Plots</div>
              </div>
              <div className="text-center space-y-2 group">
                <div className="text-3xl font-serif font-semibold text-primary group-hover:scale-110 transition-transform duration-300">
                  3BHK
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Villa Types</div>
              </div>
              <div className="text-center space-y-2 group">
                <div className="text-3xl font-serif font-semibold text-primary group-hover:scale-110 transition-transform duration-300">
                  Premium
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Amenities</div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center min-h-[600px] space-y-8">
            <div className="flex items-center justify-center space-x-12 mb-8">
              <div className="relative group">
                <Image
                  src="/images/rera-approved.png"
                  alt="RERA Approved"
                  width={120}
                  height={120}
                  className="w-30 h-30 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative group">
                <Image
                  src="/images/dtcp-approved.png"
                  alt="DTCP Approved"
                  width={120}
                  height={120}
                  className="w-30 h-30 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <Card className="overflow-hidden shadow-2xl border-0 bg-card relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
              <Image
                src="/images/hero-interior.png"
                alt="Luxury villa interior with modern furnishing"
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </Card>

            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground p-8 rounded-2xl shadow-xl border border-primary/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold">₹21 lakhs+</div>
                <div className="text-sm opacity-90 font-medium">Starting Price</div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/4 -right-2 w-4 h-4 bg-primary rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
