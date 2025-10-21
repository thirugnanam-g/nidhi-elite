"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const floorPlans = [
    {
      title: "East-3 BHK Customized Villa Plan",
      image: "/images/east-floor-plan.png",
      features: [
        "Portico 12'X19'",
        "Living 13'6\"X14'",
        "Dining 16'X12'",
        "Master Bed 12'X14'",
        "Study/Home office 9'X11'",
      ],
    },
    {
      title: "West-3 BHK Customized Villa Plan",
      image: "/images/west-floor-plan.png",
      features: [
        "Portico 12'10\"X19'8\"",
        "Living 15'7\"X12'4\"",
        "Dining 14'10\"X10'10\"",
        "Master bed 13'2\"X16'4\"",
        "Study 9'2\"X9'6\"",
      ],
    },
    {
      title: "North-3 BHK Customized Villa Plan",
      image: "/images/north-floor-plan.png",
      features: [
        "Portico 12'X19'",
        "Living 13'6\"X14'",
        "Dining 16'X12'",
        "Master Bed 12'X14'",
        "Study/Home office 9'X11'",
      ],
    },
  ]

  const handleViewDetails = (planIndex: number, planTitle: string) => {
    // Functionality removed as per requirements
    console.log(`Floor plan ${planTitle} selected`)
  }

  return (
    <section id="floor-plans" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customized Villa <span className="text-primary">Floor Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our thoughtfully designed 3BHK customized villa configurations, each offering spacious living
            and modern amenities built by contract builders from Nidhi Elite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {floorPlans.map((plan, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <Image
                  src={plan.image || "/placeholder.svg"}
                  alt={plan.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-4">{plan.title}</CardTitle>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
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
