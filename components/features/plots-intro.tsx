"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"
import Image from "next/image"
import { getImageUrl } from "@/lib/config/image-config"
import { motion, AnimatePresence } from "framer-motion"

export function PlotsIntro() {
  const [isOpen, setIsOpen] = useState(false)

  const plotFeatures = [
    "Premium residential plots starting from 600 sq ft",
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
      {/* Subtle glows */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 blur-3xl rounded-full opacity-20" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-secondary/10 blur-3xl rounded-full opacity-20" />

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

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* LEFT — Image */}
          <div
            className="relative w-full order-1 flex items-center justify-center"
          >
            <Card
              onClick={() => setIsOpen(true)}
              className="relative border-0 rounded-2xl overflow-hidden w-full shadow-xl bg-background cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9]">
                <Image
                  src={`${getImageUrl("/images/site-layout.jpg")}?v=${Date.now()}`}
                  alt="Nidhi Elite master plan and layout"
                  fill
                  loading="lazy"
                  className="object-contain object-center rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
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

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative max-w-4xl w-[90%] h-[70vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={getImageUrl("/images/site-layout.jpg")}
                alt="Enlarged plot layout"
                fill
                className="object-contain"
                quality={100}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
