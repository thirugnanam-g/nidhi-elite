import { Card } from "@/components/ui/card"
import { CheckCircle, Home, Users, Wrench } from "lucide-react"
import Image from "next/image"

export function VillaIntro() {
  const features = [
    "Choose a plot and let Nidhi Elite deliver a customized villa through expert contract builders",
    "Blending design, comfort, and durability in every construction",
    "Expansive living space spanning over various square feet options to suit your needs",
    "Offers 3 generously sized bedrooms with an en-suite bathroom for the master bedroom",
    "Provides unparalleled privacy and convenience in a gated community",
    "Designed as your dream home, meeting every family's unique requirements",
    "Elegant dining and kitchen areas for comfortable family living",
    "Built by experienced contract builders from Nidhi Elite with quality assurance",
  ]

  return (
    <section className="py-16 bg-muted/30" id="customized-villas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            🏡 Customized Villas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Home, <span className="text-primary">Your Way</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose a plot and let Nidhi Elite deliver a customized villa through expert contract builders – blending
            design, comfort, and durability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <Card className="overflow-hidden shadow-lg">
              <Image
                src="/images/villa-intro.png"
                alt="Customized villa introduction with luxury features"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground font-medium">
                <strong>Note:</strong> All customized villas are delivered by experienced contract builders from Nidhi
                Elite, ensuring quality construction and timely completion.
              </p>
            </div>
          </div>
        </div>

        {/* Villa Process */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Home className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="text-xl font-semibold">Choose Your Plot</h4>
            </div>
            <p className="text-muted-foreground">Select from our premium plots with world-class infrastructure</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Wrench className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="text-xl font-semibold">Customize Design</h4>
            </div>
            <p className="text-muted-foreground">Work with our expert contract builders to design your dream villa</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="text-xl font-semibold">Move In</h4>
            </div>
            <p className="text-muted-foreground">
              Enjoy your custom-built villa with quality assurance and timely delivery
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
