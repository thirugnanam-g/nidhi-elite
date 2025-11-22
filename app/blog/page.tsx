import { getBlogPosts } from "@/lib/sanity.client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/lib/sanity.image"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata = {
  title: "Blog | Nidhi Elite - Real Estate Insights & Investment Tips",
  description: "Read latest articles about real estate investment, Hosur properties, and lifestyle at Nidhi Elite.",
  openGraph: {
    title: "Blog | Nidhi Elite",
    description: "Real estate insights and investment tips for Hosur properties",
    type: "website",
  },
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Blog Header */}
        <div className="bg-gradient-to-b from-primary/10 to-transparent py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Nidhi Elite Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, tips, and updates about premium real estate investment in Hosur
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {posts && posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post: any) => (
                <article
                  key={post._id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Featured Image */}
                    {post.mainImage && (
                      <div className="md:col-span-1 relative h-48 md:h-full overflow-hidden bg-gray-200">
                        <Image
                          src={urlFor(post.mainImage).url() || "/placeholder.svg?height=300&width=400&query=blog"}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className={`p-6 sm:p-8 ${post.mainImage ? "md:col-span-2" : "md:col-span-3"}`}>
                      <div className="flex flex-wrap gap-3 mb-4">
                        {post.categories && post.categories.length > 0 && (
                          <>
                            {post.categories.slice(0, 2).map((cat: string) => (
                              <span
                                key={cat}
                                className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                              >
                                {cat}
                              </span>
                            ))}
                          </>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>

                      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-4">
                          {post.author && <span className="font-medium text-gray-900">{post.author.name}</span>}
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
