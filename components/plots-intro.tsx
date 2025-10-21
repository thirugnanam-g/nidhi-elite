import { Card } from "@/components/ui/card"
import { CheckCircle, MapPin, Ruler, TreePine } from "lucide-react"
import Image from "next/image"

export function PlotsIntro() {
  const plotFeatures = [
    "Premium residential plots starting from 1200 sq ft",
    "TNRERA approved with clear title deeds",
    "30 feet CC road connectivity for easy access",
    "Underground drainage and sewage system",
    "Electricity connection and street lighting",
    "Gated community with 24/7 security",
    "Surrounded by lush greenery and open spaces",
    "Flexible payment plans available",
  ]

  const plotSizes = [
    { size: "30x40", area: "1200 sq ft", price: "₹21 lakhs+" },
    { size: "30x50", area: "1500 sq ft", price: "₹26 lakhs+" },
    { size: "40x60", area: "2400 sq ft", price: "₹42 lakhs+" },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-background" id="plots">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            🏞️ Premium Plots
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Your Dream on <span className="text-primary">Solid Ground</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Premium plots designed with world-class infrastructure and connectivity, giving you the perfect foundation
            for your future home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="overflow-hidden shadow-lg">
              <Image
                src="/images/site-layout.png"
                alt="Nidhi Elite plots layout with amenities"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Plot Features</h3>
              <div className="space-y-3">
                {plotFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Plot Sizes */}
        <div className="grid md:grid-cols-3 gap-6">
          {plotSizes.map((plot, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Ruler className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="text-xl font-semibold">{plot.size} ft</h4>
                <p className="text-muted-foreground">{plot.area}</p>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{plot.price}</div>
              <p className="text-sm text-muted-foreground">Starting price</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 backdrop-blur-sm max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-foreground mb-3">Why Choose Nidhi Elite Plots?</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium">Prime Location</p>
                <p className="text-sm text-muted-foreground">Close to Electronic City & IT hubs</p>
              </div>
              <div>
                <TreePine className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium">Green Environment</p>
                <p className="text-sm text-muted-foreground">Surrounded by nature & parks</p>
              </div>
              <div>
                <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium">TNRERA Approved</p>
                <p className="text-sm text-muted-foreground">Legal & safe investment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
