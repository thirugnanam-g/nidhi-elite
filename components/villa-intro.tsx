import { Card } from "@/components/ui/card"
import { CheckCircle, Home, Wrench, Users } from "lucide-react"
import Image from "next/image"

export function VillaIntro() {
  const features = [
    "Choose a plot and let Nidhi Elite deliver a villa tailored to your lifestyle.",
    "Every home is built by expert contract builders ensuring unmatched quality.",
    "Modern layouts with elegant interiors, designed for comfort and durability.",
    "Spacious living areas and a master suite with private en-suite facilities.",
    "Crafted for privacy, tranquility, and everyday convenience in a secure gated community.",
    "Open dining and kitchen spaces perfect for family moments and gatherings.",
    "Flexible villa plans that adapt to your preferences and aspirations.",
    "Quality materials, expert engineering, and transparent timelines — always.",
  ]

  const floorPlans = [
    {
      title: "East-Facing 3BHK Customized Villa",
      image: "/images/east-floor-plan.jpg",
      features: [
        "Portico 12'X19'",
        "Living 13'6\"X14'",
        "Dining 16'X12'",
        "Master Bed 12'X14'",
        "Study/Home Office 9'X11'",
      ],
    },
    {
      title: "West-Facing 3BHK Customized Villa",
      image: "/images/west-floor-plan.jpg",
      features: [
        "Portico 12'10\"X19'8\"",
        "Living 15'7\"X12'4\"",
        "Dining 14'10\"X10'10\"",
        "Master Bed 13'2\"X16'4\"",
        "Study 9'2\"X9'6\"",
      ],
    },
    {
      title: "North-Facing 3BHK Customized Villa",
      image: "/images/north-floor-plan.jpg",
      features: [
        "Portico 12'X19'",
        "Living 13'6\"X14'",
        "Dining 16'X12'",
        "Master Bed 12'X14'",
        "Study/Home Office 9'X11'",
      ],
    },
  ]

  const interiorFeatures = [
    "Luxurious bedrooms with plush bedding and high-end furnishings",
    "Soft ambient lighting for a serene and restful atmosphere",
    "Spacious layout with private sitting area and panoramic windows",
    "Abundant natural light that enhances calm and comfort",
    "Marble-finished bathrooms designed for elegance and functionality",
    "Vibrant children's rooms with ample storage and creative design",
    "Dedicated study area with elegant furnishings for focused learning",
    "Second-floor spaces designed for comfort, creativity, and family connection",
  ]

  return (
    <section
      id="customized-villas"
      className="w-full py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
    >
      {/* Subtle glowing backdrop */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION 1: VILLA INTRO */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Centered Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-4">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="inline-flex items-center px-4 sm:px-5 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium shadow-sm">
                Customized Villas, Floor Plans & Interiors
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-2 sm:mb-3 text-foreground leading-tight">
              Your Dream Villa, <span className="text-primary italic font-semibold">Beautifully Crafted</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Experience the joy of personalization - where every wall, corner, and detail reflects your lifestyle.
              Nidhi Elite delivers bespoke villas with customized floor plans and luxury interiors.
            </p>
          </div>

          {/* IMAGE + FEATURES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Left — Villa Image */}
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <Card className="relative overflow-hidden border-0 rounded-2xl p-0 bg-transparent">
                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px]">
                  <Image
                    src="/images/minimal-villa-exterior-render.jpg"
                    alt="Modern luxury villa exterior by Nidhi Elite"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover absolute inset-0 rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
              </Card>

              {/* Subtle glowing accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-all" />
            </div>

            {/* Right — Features */}
            <div className="space-y-2 sm:space-y-3 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4 font-serif">
                Tailored to Your Lifestyle
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 sm:p-4 rounded-xl border border-primary/20 backdrop-blur-sm mt-4">
                <p className="text-xs sm:text-sm text-foreground font-medium">
                  <strong>Note:</strong> All customized villas are constructed by experienced contract builders from
                  Nidhi Elite - ensuring quality craftsmanship and timely delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VILLA CREATION PROCESS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          <Card className="p-4 sm:p-6 text-center rounded-2xl hover:shadow-xl transition-shadow border border-border/40 bg-background/80 backdrop-blur-sm">
            <Home className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
            <h4 className="text-base sm:text-lg font-semibold font-serif text-foreground">Choose Your Plot</h4>
            <p className="text-muted-foreground mt-2 text-xs sm:text-sm leading-relaxed">
              Begin with a premium Nidhi Elite plot featuring world-class connectivity and infrastructure.
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center rounded-2xl hover:shadow-xl transition-shadow border border-border/40 bg-background/80 backdrop-blur-sm">
            <Wrench className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
            <h4 className="text-base sm:text-lg font-semibold font-serif text-foreground">Customize Your Design</h4>
            <p className="text-muted-foreground mt-2 text-xs sm:text-sm leading-relaxed">
              Work with our design and construction experts to create your ideal villa plan and interiors.
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center rounded-2xl hover:shadow-xl transition-shadow border border-border/40 bg-background/80 backdrop-blur-sm">
            <Users className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
            <h4 className="text-base sm:text-lg font-semibold font-serif text-foreground">Move Into Perfection</h4>
            <p className="text-muted-foreground mt-2 text-xs sm:text-sm leading-relaxed">
              Move into your elegantly finished, high-quality home - built to last and designed for comfort.
            </p>
          </Card>
        </div>

        
      </div>
    </section>
  )
}
