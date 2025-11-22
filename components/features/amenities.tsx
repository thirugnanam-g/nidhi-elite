import { Route, TreePine, Lightbulb, Droplets, Shield, Zap, CloudRain, Waves, PencilRuler, Droplet } from "lucide-react"

export function Amenities() {
  const amenities = [
    { icon: Route, title: "30 Feet CC Road" },
    { icon: TreePine, title: "Children's Park" },
    { icon: Lightbulb, title: "Streetlight & CCTV" },
    { icon: Droplets, title: "Underground Sewage" },
    { icon: Shield, title: "Secured Gated Community" },
    { icon: Zap, title: "3 Phase EB Line" },
    { icon: CloudRain, title: "Rainwater Harvesting" },
    { icon: Waves, title: "Food Grade Water Pipe" },
    { icon: PencilRuler, title: "Customized villa design " },
    { icon: Droplet, title: "Sewage Water Treatment" },
  ]

  return (
    <section
      id="amenities"
      className="py-10 sm:py-12 lg:py-14 relative w-full flex flex-col justify-center bg-gradient-to-b from-background via-secondary/5 to-background overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,100,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light mb-2 sm:mb-3 leading-tight">
            Experience <span className="text-primary italic font-semibold">Luxury & Comfort</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Nidhi Elite offers an array of thoughtfully curated amenities — blending modern conveniences with serene,
            sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <div key={index} className="text-center group flex flex-col items-center">
                <div className="relative w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-2 sm:mb-3">
                  <IconComponent className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                  {amenity.title}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 sm:p-4 lg:p-5 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-primary mb-1">
              Premium Community Living
            </h4>
            <p className="text-foreground leading-relaxed text-xs sm:text-sm">
              Every amenity at Nidhi Elite is crafted to elevate everyday life — ensuring a perfect balance of safety,
              sustainability, and sophistication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
