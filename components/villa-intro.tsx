"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Home, Wrench, Users } from "lucide-react"
import Image from "next/image"
import { getImageUrl } from "@/lib/image-config"

export function VillaIntro() {
  const features = [
    "Choose a plot and let Nidhi Elite deliver a villa tailored to your lifestyle.",
    "Every home is built by expert contract builders ensuring unmatched quality.",
    "Modern layouts with elegant interiors, designed for comfort and durability.",
    "Crafted for privacy, tranquility, and everyday convenience in a secure gated community.",
  ]

  return (
    <section
      id="customized-villas"
      className="relative w-full pt-8 pb-12 flex items-center bg-gradient-to-b from-background via-secondary/5 to-background overflow-hidden"
    >
      {/* Soft background glows */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light leading-tight mb-2 sm:mb-3">
            Your Dream Villa, <span className="text-primary italic font-semibold">Beautifully Crafted</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Experience personalization and luxury — every corner reflects your lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left — Villa Image */}
          <div className="relative flex justify-center items-center order-1 lg:order-1 w-full h-[250px] sm:h-[350px] lg:h-[400px]">
            <Card className="relative border-0 rounded-2xl overflow-hidden w-full h-full shadow-xl">
              <Image
                src={getImageUrl("/images/minimal-villa-exterior-render.jpg") || "/placeholder.svg"}
                alt="Modern luxury villa exterior at Nidhi Elite"
                fill
                loading="lazy"
                className="object-cover object-center rounded-2xl transition-transform duration-700 ease-out hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                quality={85}
              />
            </Card>
          </div>

          {/* Right — Features */}
          <div className="order-2 lg:order-2 flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-foreground">
              Tailored to Your Lifestyle
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm lg:text-base text-foreground leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-2.5 sm:p-3 lg:p-4 rounded-xl border border-primary/20 backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-foreground font-medium">
                <strong>Note:</strong> All villas are constructed by Nidhi Elite's expert contractors, ensuring superior
                quality and timely delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-8 sm:mt-10 lg:mt-12">
          {[
            {
              icon: Home,
              title: "Choose Your Plot",
              desc: "Begin with a premium Nidhi Elite plot featuring world-class infrastructure.",
            },
            {
              icon: Wrench,
              title: "Customize Your Design",
              desc: "Work with experts to create your ideal villa plan and interiors.",
            },
            {
              icon: Users,
              title: "Move Into Perfection",
              desc: "Settle into your elegant, high-quality home designed for comfort.",
            },
          ].map(({ icon: Icon, title, desc }, index) => (
            <Card
              key={index}
              className="p-3 sm:p-4 text-center rounded-2xl hover:shadow-lg transition-shadow border border-border/40 bg-background/80 backdrop-blur-sm"
            >
              <Icon className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-primary mx-auto mb-2 sm:mb-3" />
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold font-serif text-foreground">{title}</h4>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
