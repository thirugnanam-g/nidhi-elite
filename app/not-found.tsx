import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Illustration */}
        <div className="relative">
          <h1 className="text-[150px] sm:text-[200px] font-bold text-primary/10 leading-none select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-primary/20 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="gap-2 min-w-[200px]">
            <Link href="/">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2 min-w-[200px] bg-transparent">
            <Link href="/#contact">
              <Search className="w-5 h-5" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#plots" className="text-sm text-primary hover:underline">
              Plots
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#customized-villas" className="text-sm text-primary hover:underline">
              Villas
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#amenities" className="text-sm text-primary hover:underline">
              Amenities
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#location" className="text-sm text-primary hover:underline">
              Location
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#about" className="text-sm text-primary hover:underline">
              About
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-xs text-muted-foreground pt-4">
          If you believe this is an error, please{" "}
          <Link href="/#contact" className="text-primary hover:underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
