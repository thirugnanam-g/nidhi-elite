import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function InteriorFeatures() {
  const features = [
    "Luxurious Bedrooms",
    "Plush bedding and high-end furnishings",
    "Soft ambient lighting for a serene atmosphere",
    "Spacious layout with a private sitting area and expansive windows",
    "Natural light floods the room, enhancing tranquillity",
    "Marble-finished bathroom, designed for relaxation and functionality",
    "Vibrant, playful decor with ample storage for an organized space",
    "Luxurious study area with elegant furnishings for focused learning",
    "Rooms on the villa's second floor blend comfort, creativity, and functionality",
    "Ideal environment for nurturing your children's growth and imagination",
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interior <span className="text-primary">Intro</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Elevate Your Living Experience with Luxurious Interiors
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="overflow-hidden shadow-lg">
              <Image
                src="/images/interior-features.png"
                alt="Luxurious interior features and amenities"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
