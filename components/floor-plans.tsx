"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

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

  const handleViewDetails = (planIndex: number, planTitle: string) => {
    setSelectedPlan(planIndex)
  }

  return (
    <section
      id="floor-plans"
      className="py-12 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Soft ambient glow for luxury depth */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 shadow-sm">
            Floor Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-3 text-foreground leading-tight">
            Explore Our <span className="text-primary italic font-semibold">Customized Villa Layouts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thoughtfully planned 3BHK villas that balance space, natural light, and functional elegance - designed and
            built by Nidhi Elite's expert contract builders with complete quality assurance.
          </p>
        </div>

        {/* Floor Plan Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {floorPlans.map((plan, index) => (
            <Card
              key={index}
              className="overflow-hidden group rounded-2xl shadow-xl border border-border/40 bg-background/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <CardHeader className="relative p-0">
                <Image
                  src={plan.image || "/placeholder.svg"}
                  alt={plan.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </CardHeader>

              <CardContent className="p-6 text-center">
                <CardTitle className="text-lg font-serif font-semibold mb-4 text-foreground">{plan.title}</CardTitle>

                <ul className="space-y-2 mb-4 text-left max-w-sm mx-auto">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center transition-colors duration-300 group-hover:text-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
