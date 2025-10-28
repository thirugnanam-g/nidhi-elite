"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { getImageUrl } from "@/lib/image-config"

export function PlotsIntro() {
  const plotFeatures = [
    "Premium residential plots starting from 1200 sq ft",
    "30 feet concrete road connectivity for smooth access",
    "Underground drainage and modern sewage system",
    "Individual electricity and street lighting provisions",
    "Secure gated community with 24/7 surveillance",
    "Surrounded by lush greenery and open spaces",
    "Flexible and transparent payment plans available",
  ]

  return (
    <section
      id="plots"
      className="relative w-full pb-8 pt-4 flex items-center bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden"
    >
      {/* Soft glow background */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 blur-3xl rounded-full opacity-20" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-secondary/10 blur-3xl rounded-full opacity-20" />

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light leading-tight mb-2 sm:mb-3">
            Build Your Dream on <span className="text-primary italic font-semibold">Solid Ground</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Premium residential plots designed for comfort, growth, and peace of mind.
          </p>
        </div>

        {/* ✅ Swapped Layout: Image Left | Text Right */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* LEFT — Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] order-1 flex items-center justify-center">
            <Card className="relative border-0 rounded-2xl overflow-hidden w-full h-full shadow-xl bg-background flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={getImageUrl("/images/site-layout.jpg") || "/placeholder.svg"}
                  alt="Nidhi Elite master plan and layout"
                  fill
                  loading="lazy"
                  // ✅ Changed from object-contain to object-fill (no black edges)
                  className="object-fill object-center rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  quality={90}
                />
              </div>
            </Card>
          </div>

          {/* RIGHT — Features */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-2">
            <ul className="space-y-2 sm:space-y-3">
              {plotFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm lg:text-base text-foreground leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
