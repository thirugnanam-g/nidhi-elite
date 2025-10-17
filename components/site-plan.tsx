"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SitePlan() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadSitePlan = async () => {
    setIsDownloading(true)

    const subject = encodeURIComponent("Request: Nidhi Elite Site Plan")
    const body = encodeURIComponent(
      "Hi Nidhi Elite Team,\n\nPlease share the detailed Site Plan.\n\nName: \nPhone: \nAny specific requirements: \n\nThanks!",
    )
    const mailto = `mailto:nidhielitelayout@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailto

    setIsDownloading(false)
  }

  return (
    <section id="site-plan" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master <span className="text-primary">Site Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughtfully planned gated community with various plot sizes and premium locations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="p-0">
              <Image
                src="/images/site-layout.png"
                alt="Master site plan showing plot layout and amenities"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </CardHeader>
          </Card>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="w-4 h-4 bg-red-500 mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Owner Site</p>
                </CardContent>
              </Card>

              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="w-4 h-4 bg-purple-500 mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Commercial</p>
                </CardContent>
              </Card>

              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="w-4 h-4 bg-gray-400 mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Booked Sites</p>
                </CardContent>
              </Card>

              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="w-4 h-4 bg-blue-500 mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Duplex Villa</p>
                </CardContent>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src="/images/site-dimensions.png"
                  alt="Site dimensions and plot sizes"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardHeader>
            </Card>

            <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleDownloadSitePlan}>
              Download Site Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
