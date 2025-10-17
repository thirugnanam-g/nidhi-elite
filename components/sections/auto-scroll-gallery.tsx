"use client"

import Image from "next/image"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const images = [
  "/images/IMG-20250929-WA0001.jpg",
  "/images/IMG-20250929-WA0002.jpg",
  "/images/IMG-20250929-WA0004.jpg",
  "/images/IMG-20250929-WA0005.jpg",
  "/images/IMG-20250929-WA0006.jpg",
  "/images/IMG-20250929-WA0007.jpg",
  "/images/IMG-20250929-WA0008.jpg",
  "/images/IMG-20250929-WA0009.jpg",
  "/images/IMG-20250929-WA0010.jpg",
  "/images/IMG-20250929-WA0011.jpg",
  "/images/IMG-20250929-WA0012.jpg",
  "/images/IMG-20250929-WA0013.jpg",
  "/images/IMG-20250929-WA0014.jpg",
  "/images/IMG-20250929-WA0015.jpg",
  "/images/IMG-20250929-WA0016.jpg",
  "/images/IMG-20250929-WA0017.jpg",
  "/images/IMG-20250929-WA0018.jpg",
  "/images/IMG-20250929-WA0019.jpg",
  "/images/IMG-20250929-WA0020.jpg",
  "/images/IMG-20250929-WA0021.jpg",
  "/images/IMG-20250929-WA0022.jpg",
  "/images/IMG-20250929-WA0023.jpg",
  "/images/IMG-20250929-WA0024.jpg",
  "/images/IMG-20250929-WA0025.jpg",
  "/images/IMG-20250929-WA0026.jpg",
  "/images/IMG-20250929-WA0027.jpg",
  "/images/IMG-20250929-WA0028.jpg",
  "/images/IMG-20250929-WA0029.jpg",
  "/images/IMG-20250929-WA0030.jpg",
  "/images/IMG-20250929-WA0031.jpg",
  "/images/IMG-20250929-WA0032.jpg",
  "/images/IMG-20250929-WA0033.jpg",
  "/images/IMG-20250929-WA0034.jpg",
  "/images/IMG-20250929-WA0035.jpg",
  "/images/IMG-20250929-WA0036.jpg",
  "/images/IMG-20250929-WA0037.jpg",
  "/images/IMG-20250929-WA0038.jpg",
  "/images/IMG-20250929-WA0039.jpg",
  "/images/IMG-20250929-WA0040.jpg",
  "/images/IMG-20250929-WA0041.jpg",
  "/images/IMG-20250929-WA0042.jpg",
  "/images/IMG-20250929-WA0043.jpg",
  "/images/IMG-20250929-WA0044.jpg",
  "/images/IMG-20250929-WA0045.jpg",
  "/images/IMG-20250929-WA0046.jpg",
  "/images/IMG-20250929-WA0047.jpg",
  "/images/IMG-20250929-WA0048.jpg",
  "/images/IMG-20250929-WA0049.jpg",
  "/images/IMG-20250929-WA0050.jpg",
]

export function AutoScrollGallery() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) return

    const interval = setInterval(() => {
      if (!isPaused) api.scrollNext()
    }, 3500)

    return () => clearInterval(interval)
  }, [api, isPaused])

  const onMouseEnter = () => setIsPaused(true)
  const onMouseLeave = () => setIsPaused(false)
  const onFocusIn = () => setIsPaused(true)
  const onFocusOut = () => setIsPaused(false)

  return (
    <section id="gallery" className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 sm:px-5 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-3 sm:mb-4 text-foreground leading-tight px-4">
            Site <span className="text-primary italic font-semibold">Highlights</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Explore real photos from Nidhi Elite’s premium gated community — see the landscape, roads, and progress in
            every detail.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          className="relative"
          setApi={setApi}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocusCapture={onFocusIn}
          onBlurCapture={onFocusOut}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((src) => (
              <CarouselItem
                key={src}
                className="carousel-item pl-2 md:pl-4 basis-3/4 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden">
                    <Image
                      src={src}
                      alt="Nidhi Elite real site photo"
                      fill
                      loading="lazy"
                      priority={false}
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 33vw, 25vw"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.05]"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:-left-6 bg-background/70 backdrop-blur border" />
          <CarouselNext className="right-2 md:-right-6 bg-background/70 backdrop-blur border" />
        </Carousel>
      </div>
    </section>
  )
}
