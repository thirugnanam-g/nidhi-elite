"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

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
      className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden pt-0 -mt-10"
    >
      {/* Soft glow background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-3xl rounded-full opacity-20" />

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-tight mb-3">
            Build Your Dream on{" "}
            <span className="text-primary italic font-semibold">Solid Ground</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Premium residential plots designed for comfort, growth, and peace of mind.
          </p>
        </div>

        {/* ✅ Equal height grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center h-[calc(100vh-200px)]">
          {/* Left — Features */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 flex flex-col justify-center">
            <ul className="space-y-3 sm:space-y-4">
              {plotFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Full-fit Image (never cropped) */}
          <div className="order-1 lg:order-2 relative w-full h-full flex items-center justify-center">
            <Card className="relative border-0 rounded-2xl overflow-hidden w-full h-[85%] shadow-xl bg-background flex items-center justify-center">
              <div className="relative w-full h-full p-2 sm:p-3 lg:p-4">
                <Image
                  src="/images/site-layout.jpg"
                  alt="Nidhi Elite master plan"
                  fill
                  priority
                  className="object-contain object-center rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
