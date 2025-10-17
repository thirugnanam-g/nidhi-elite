import { Route, TreePine, Lightbulb, Droplets, Shield, Zap, CloudRain, Waves, Users, Droplet } from "lucide-react"

export function Amenities() {
  const amenities = [
    {
      icon: Route,
      title: "30 Feet CC Road",
    },
    {
      icon: TreePine,
      title: "Children's Park",
    },
    {
      icon: Lightbulb,
      title: "Streetlight & CCTV",
    },
    {
      icon: Droplets,
      title: "Underground Sewage",
    },
    {
      icon: Shield,
      title: "Secured Gated Community",
    },
    {
      icon: Zap,
      title: "3 Phase EB Line",
    },
    {
      icon: CloudRain,
      title: "Rainwater Harvesting",
    },
    {
      icon: Waves,
      title: "Food Grade Water Pipe",
    },
    {
      icon: Users,
      title: "Community Hall",
    },
    {
      icon: Droplet,
      title: "Sewage Water Treatment",
    },
  ]

  return (
    <section
      id="amenities"
      className="py-12 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
    >
      {/* Soft ambient glow for luxury look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,100,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto animate-fade-up">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-sm">
              World-Class Amenities
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-3 leading-tight">
            Experience <span className="text-primary italic font-semibold">Luxury & Comfort</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nidhi Elite offers an array of thoughtfully curated amenities — blending modern conveniences with serene,
            sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <div
                key={index}
                className="text-center group flex flex-col items-center animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-3">
                  <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {amenity.title}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center max-w-4xl mx-auto animate-fade-up delay-400">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-primary mb-2">Premium Community Living</h4>
            <p className="text-foreground leading-relaxed text-sm">
              Every amenity at Nidhi Elite is crafted to elevate everyday life — ensuring a perfect balance of safety,
              sustainability, and sophistication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
