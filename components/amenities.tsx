import { Bold as Road, TreePine, Lightbulb, Droplets, Shield, Zap, CloudRain, Waves, Users } from "lucide-react"

export function Amenities() {
  const amenities = [
    {
      icon: Road,
      title: "30 Feet CC Road",
      description: "Wide concrete roads for easy access",
    },
    {
      icon: TreePine,
      title: "Children's Park",
      description: "Safe play area for kids",
    },
    {
      icon: Lightbulb,
      title: "Streetlight & CCTV",
      description: "24/7 lighting and security surveillance",
    },
    {
      icon: Droplets,
      title: "Underground Sewage & Drainage",
      description: "Modern waste management system",
    },
    {
      icon: Shield,
      title: "Secured Gated Community",
      description: "Controlled access with security",
    },
    {
      icon: Zap,
      title: "3 Phase EB Line",
      description: "Reliable electricity connection",
    },
    {
      icon: CloudRain,
      title: "Rainwater Harvesting System",
      description: "Eco-friendly water conservation",
    },
    {
      icon: Waves,
      title: "Food Grade Water Pipe Connection",
      description: "Safe and clean water supply",
    },
    {
      icon: Users,
      title: "Community Hall / Relaxation Area",
      description: "Social gathering space for residents",
    },
  ]

  return (
    <section id="amenities" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nidhi Elite Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience world-class amenities designed for modern living and recreation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <div key={index} className="text-center group p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            )
          })}
        </div>

        {/* Reference section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-primary mb-3">Premium Community Living</h4>
            <p className="text-foreground">
              All amenities are thoughtfully planned and maintained to provide residents with a luxurious and
              comfortable lifestyle in our gated community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
