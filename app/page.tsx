"use client"

import { ArrowRight, Zap, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-primary">Nidhielite</div>
          <div className="flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <Button size="sm">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mb-8 inline-block rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-secondary-foreground">
          New: Infinite Canvas — Learn more
        </div>

        <div className="mb-8 max-w-3xl">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            Super fast motion for every team
          </h1>
          <p className="mt-6 text-xl text-foreground/70">
            Collaborate seamlessly and bring your ideas to life. Over 20,000 creative teams choose us.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2">
            Try for free
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Watch demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="mb-8 text-sm font-medium text-foreground/60">Trusted by leading teams</p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
            {["Google", "TikTok", "Netflix", "Deliveroo", "Box", "eBay"].map((company) => (
              <div
                key={company}
                className="text-sm font-semibold text-foreground/50 transition-colors hover:text-foreground"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">Everything you need to succeed</h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70">
            Powerful tools designed for modern teams to collaborate faster and ship better.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Experience 6x faster deployment with our optimized platform.",
            },
            {
              icon: Users,
              title: "Team Collaboration",
              description: "Real-time feedback and seamless teamwork across your organization.",
            },
            {
              icon: Rocket,
              title: "Scale Effortlessly",
              description: "Build and scale your projects without worrying about infrastructure.",
            },
          ].map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-lg border border-border bg-gradient-to-br from-primary/10 to-primary/5 px-8 py-16 text-center sm:px-12">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">Ready to get started?</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Join thousands of teams already using Nidhielite to build faster.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 grid gap-12 sm:grid-cols-4">
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Follow</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/50">
            <p>&copy; 2025 Nidhielite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
