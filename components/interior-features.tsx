"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function InteriorFeatures() {
  const features = [
    "Luxurious bedrooms with plush bedding and high-end furnishings",
    "Soft ambient lighting for a serene and restful atmosphere",
    "Spacious layout with private sitting area and panoramic windows",
    "Abundant natural light that enhances calm and comfort",
    "Marble-finished bathrooms designed for elegance and functionality",
    "Vibrant children's rooms with ample storage and creative design",
    "Dedicated study area with elegant furnishings for focused learning",
    "Second-floor spaces designed for comfort, creativity, and family connection",
    "Premium materials and textures throughout for a refined look",
    "Every detail crafted to elevate your everyday living experience",
  ]

  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleAutoplay = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          const iframe = videoRef.current
          const src = iframe.getAttribute("src")
          if (src && !src.includes("autoplay=1")) {
            iframe.setAttribute("src", src.replace("autoplay=0", "autoplay=1"))
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleAutoplay, { threshold: 0.4 })
    if (videoRef.current) observer.observe(videoRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="interiors"
      className="py-12 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-sm">
              Luxury Interiors
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-3">
            Elegance Inside Every <span className="text-primary italic font-semibold">Nidhi Elite Villa</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Step into refined interiors that blend modern comfort with timeless sophistication — every corner designed
            to inspire calm, warmth, and elegance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left — Features */}
          <div className="space-y-3 text-left mx-auto max-w-lg">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          {/* Right — Full-Cover Autoplay Video */}
          <div className="relative group flex justify-center">
            <Card className="overflow-hidden shadow-2xl border border-primary/20 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-white/90 to-primary/5 w-[320px] md:w-[360px] h-[480px] relative opacity-0 translate-y-6 animate-fade-in">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <iframe
                  ref={videoRef}
                  src="https://go.screenpal.com/player/cT66o1nb66T?width=100%&height=100%&autoplay=0&mute=1&ff=1&title=0"
                  allowFullScreen
                  scrolling="no"
                  className="w-full h-full border-0 rounded-3xl"
                  title="Nidhi Elite Villa Interior Video"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "scale(1.3)",
                    transformOrigin: "center",
                    objectFit: "cover",
                  }}
                ></iframe>
              </div>
            </Card>

            {/* Decorative Glow */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all" />
          </div>
        </div>
      </div>
    </section>
  )
}
