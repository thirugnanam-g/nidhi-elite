"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, MapPin, Clock, Car } from "lucide-react"
import { Card } from "@/components/ui/card"

export function LocationConnectivity() {
  const [expandedSection, setExpandedSection] = useState<string | null>("Educational Institutions")

  const proximityData = {
    "Educational Institutions": [
      "Greenwood High International School - 3 km",
      "Global Indian International School - 5 km",
      "Cambridge International School - 4 km",
      "Hosur Public School - 2 km",
      "St. Joseph's School - 3.5 km",
    ],
    Offices: [
      "Electronic City Phase 1 - 27 km",
      "Electronic City Phase 2 - 30 km",
      "Tata Electronics - 8 km",
      "TVS Motors - 6 km",
      "Ashok Leyland - 10 km",
    ],
    "Important Landmarks": [
      "Hosur Railway Station - 9 km",
      "Hosur Bus Station - 9 km",
      "Grand Cinemas - 5 km",
      "Hosur Government Hospital - 8 km",
      "Chandapura Circle - 15 km",
    ],
    "Shopping Destinations": [
      "Forum Mall Hosur - 7 km",
      "Central Mall - 8 km",
      "Big Bazaar - 6 km",
      "Reliance Fresh - 3 km",
      "More Supermarket - 4 km",
    ],
    Hospitals: [
      "Hosur Government Hospital - 8 km",
      "Narayana Multispeciality Hospital - 12 km",
      "Apollo Clinic - 6 km",
      "Manipal Hospital - 25 km",
      "Columbia Asia Hospital - 28 km",
    ],
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="py-16 bg-gradient-to-br from-background via-primary/5 to-background" id="location">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            📍 Prime Location
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Location & Connectivity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically located with excellent connectivity to key destinations and major IT hubs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-lg">
              <div className="w-full h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d297666.1274161688!2d77.68898185068478!3d12.794217924061819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7b31a6464c49%3A0xcb83815a66492049!2sNidhi+Elite+Hosur!5e0!3m2!1sen!2sin!4v1758338170645!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nidhi Elite Location - Hosur"
                  className="rounded-lg"
                ></iframe>
              </div>
            </Card>

            {/* Enhanced connectivity highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <Car className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm">27 km</p>
                <p className="text-xs text-muted-foreground">Electronic City</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm">2.5 km</p>
                <p className="text-xs text-muted-foreground">NH844 Access</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm">45 min</p>
                <p className="text-xs text-muted-foreground">To Bangalore</p>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(proximityData).map(([category, items]) => (
              <Card key={category} className="overflow-hidden hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleSection(category)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                  {expandedSection === category ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {expandedSection === category && (
                  <div className="px-6 pb-4 border-t border-border/50">
                    <div className="pt-4 space-y-2">
                      {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced connectivity info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-primary mb-3">Strategic Location Benefits</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground">
              <p>• Just 2.5 km from NH844 (Electronic City route)</p>
              <p>• 27 km to Electronic City via expressway</p>
              <p>• Easy access to Bengaluru International Airport</p>
              <p>• Close to major industrial developments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
