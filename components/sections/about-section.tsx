"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, MapPin, TreePine, CheckCircle } from "lucide-react"

export function AboutSection() {
  const handleBrochureDownload = () => {
    window.open("https://drive.google.com/file/d/1JgqyFQDsNJV9Tj12iadmpdUt4w1p32nJ/view?usp=sharing", "_blank")
  }

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
    >
      {/* Soft glowing accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-20" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-tight mb-4">
            Redefining <span className="text-primary italic font-semibold">Luxury Living</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light">
            Hosur's exclusive gated community with premium plots and customized villas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start mb-12">
          {/* Left — Main Description (2 columns) */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              Nidhi Elite is Hosur's only exclusive gated community on Thali Road, offering affordable premium plots in
              a fast-growing neighborhood. Perfectly connected to NH844 and Electronic City.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              Premium villa plots with options to customize simplex and duplex villas. Top-notch amenities, strong
              investment potential, and vibrant, secure environment.
            </p>

            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <Card className="relative overflow-hidden border-0 rounded-2xl p-0 bg-transparent">
                <div className="relative w-full h-[300px] sm:h-[350px]">
                  <Image
                    src="/images/IMG-20250929-WA0010.jpg"
                    alt="Nidhi Elite luxury gated community"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover absolute inset-0 rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </Card>
            </div>

            <Button
              onClick={handleBrochureDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </Button>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-2xl border border-primary/20 backdrop-blur-sm sticky top-24">
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-6">
                Why Choose <span className="text-primary italic">Nidhi Elite?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Prime Location</p>
                    <p className="text-xs text-muted-foreground">Close to Electronic City & IT hubs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TreePine className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Green Environment</p>
                    <p className="text-xs text-muted-foreground">Landscaped parks & open spaces</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Approved & Secure</p>
                    <p className="text-xs text-muted-foreground">TNRERA & HNTDA approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
