import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Nidhi Elite | Real Estate Insights & Property Investment Tips",
  description:
    "Expert insights on premium plots, villas, and real estate investment in Hosur near Bangalore. HNTDA & RERA approved properties, investment guides, and market trends.",
  keywords:
    "Nidhi Elite blog, Hosur real estate, premium plots Hosur, HNTDA approved, RERA approved, property investment, Bangalore real estate",
  openGraph: {
    title: "Blog - Nidhi Elite | Real Estate Insights",
    description: "Expert insights on premium plots and villas in Hosur near Bangalore",
    type: "website",
  },
}

const blogPosts = [
  {
    slug: "affordable-premium-plots-hosur-bangalore",
    title: "Why Nidhi Elite Offers the Best Affordable Premium Plots in Hosur Near Bangalore",
    excerpt:
      "Discover why Nidhi Elite is the top choice for affordable premium plots in Hosur, strategically located near Bangalore with HNTDA & RERA approvals.",
    publishedAt: "2025-01-15",
    readTime: "8 min read",
    categories: ["Investment", "Plots", "Hosur"],
    image: "/images/plots-intro.png",
  },
  {
    slug: "hntda-rera-approved-plots-hosur",
    title: "Understanding HNTDA & RERA Approvals: Your Guide to Safe Property Investment",
    excerpt:
      "Learn why HNTDA and RERA approvals are crucial for your property investment and how Nidhi Elite ensures complete legal compliance.",
    publishedAt: "2025-01-10",
    readTime: "6 min read",
    categories: ["Legal", "Investment", "Guide"],
    image: "/images/site-plan.png",
  },
  {
    slug: "hosur-real-estate-investment-guide-2025",
    title: "Hosur Real Estate Investment Guide 2025: Why Now is the Perfect Time",
    excerpt:
      "Complete guide to investing in Hosur real estate in 2025. Market trends, growth potential, and why Nidhi Elite is your best investment choice.",
    publishedAt: "2025-01-05",
    readTime: "10 min read",
    categories: ["Investment", "Market Trends", "Guide"],
    image: "/images/location-map.png",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Real Estate Insights & Investment Tips</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Expert advice on investing in premium plots and villas in Hosur near Bangalore
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
                <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
