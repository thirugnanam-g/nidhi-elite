"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90">Back to Home</Button>
          </Link>
          <Link href="/#plots">
            <Button variant="outline">View Plots</Button>
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/#about" className="text-sm text-primary hover:underline">
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#villas" className="text-sm text-primary hover:underline">
              Villas
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#amenities" className="text-sm text-primary hover:underline">
              Amenities
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
