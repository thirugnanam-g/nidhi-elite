import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function PlotsIntro() {
  const plotFeatures = [
    "Premium residential plots starting from 1200 sq ft",
    "TNRERA approved with clear title deeds",
    "30 feet concrete road connectivity for smooth access",
    "Underground drainage and modern sewage system",
    "Individual electricity and street lighting provisions",
    "Secure gated community with 24/7 surveillance",
    "Surrounded by lush greenery and open spaces",
    "Flexible and transparent payment plans available",
  ]

  const plotSizes = [
    { size: "30x40", area: "1200 sq ft", price: "₹21 lakhs+" },
    { size: "30x50", area: "1500 sq ft", price: "₹26 lakhs+" },
    { size: "40x60", area: "2400 sq ft", price: "₹42 lakhs+" },
  ]

  return (
    <section
      id="plots"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-sm">
              Premium Plots
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3 sm:mb-4 text-foreground leading-tight">
            Build Your Dream on <span className="font-semibold text-primary italic">Solid Ground</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose from thoughtfully planned residential plots within a secure gated community - blending modern
            infrastructure, green surroundings, and unmatched connectivity.
          </p>
        </div>

        {/* IMAGE + FEATURES */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left — Layout Image */}
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white">
            <Card className="relative overflow-hidden border-0 rounded-2xl p-0 bg-transparent">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] bg-white flex items-center justify-center">
                <Image
                  src="/images/site-layout.jpg"
                  alt="Nidhi Elite plots master plan with greenery and amenities"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain absolute inset-0 rounded-2xl p-2 md:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </Card>

            {/* Glow accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-all" />
          </div>

          {/* Right — Plot Features */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 sm:mb-6 font-serif">
              Exceptional Plot Features
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {plotFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
