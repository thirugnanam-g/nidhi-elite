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
import { getImageUrl } from "@/lib/image-config"

export function AutoScrollGallery() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [isPaused, setIsPaused] = React.useState(false)

  // Auto-scroll logic
  React.useEffect(() => {
    if (!api) return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) return

    const interval = setInterval(() => {
      if (!isPaused) api.scrollNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [api, isPaused])

  const onMouseEnter = () => setIsPaused(true)
  const onMouseLeave = () => setIsPaused(false)
  const onFocusIn = () => setIsPaused(true)
  const onFocusOut = () => setIsPaused(false)

  const images = Array.from({ length: 50 }, (_, i) => {
    const num = (i + 1).toString().padStart(4, "0")
    const localPath = `/images/IMG-20250929-WA${num}.jpg`
    return getImageUrl(localPath) || localPath
  })

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-2 sm:mb-3 text-foreground leading-tight">
            Site <span className="text-primary italic font-semibold">Highlights</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore real photos from Nidhi Elite's premium gated community — see the landscape, roads, and ongoing
            progress.
          </p>
        </div>

        {/* Carousel */}
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocusCapture={onFocusIn}
          onBlurCapture={onFocusOut}
          className="relative"
        >
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent className="-ml-2 md:-ml-3">
              {images.map((src, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-3 basis-3/4 sm:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Nidhi Elite real site photo ${idx + 1} - Premium residential community in Hosur`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                        quality={80}
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 md:-left-5 bg-background/70 backdrop-blur border" />
            <CarouselNext className="right-2 md:-right-5 bg-background/70 backdrop-blur border" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
