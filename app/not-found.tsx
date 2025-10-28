"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-6">
            Sorry, the page you're looking for doesn't exist. But don't worry, you can explore our premium plots and
            villas in Hosur.
          </p>
        </div>

        <div className="space-y-3">
          <Link href="/" className="block">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5">
              Back to Home
            </Button>
          </Link>
          <Link href="/#plots" className="block">
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10 font-semibold py-2.5 bg-transparent"
            >
              Explore Plots
            </Button>
          </Link>
          <Link href="/#customized-villas" className="block">
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10 font-semibold py-2.5 bg-transparent"
            >
              View Villas
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20">
          <p className="text-sm text-muted-foreground mb-4">Need help? Contact us:</p>
          <a href="tel:+919360299919" className="text-primary hover:underline font-semibold">
            +91 93602 99919
          </a>
        </div>
      </div>
    </div>
  )
}
