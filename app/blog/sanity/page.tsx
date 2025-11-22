import { getBlogPosts } from "@/lib/sanity.client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/lib/sanity.image"

export const metadata = {
  title: "Blog | Nidhi Elite",
  description: "Read latest articles about real estate, investment tips, and lifestyle at Nidhi Elite.",
}

export default async function SanityBlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="text-4xl font-serif font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Insights, tips, and stories about real estate investment and lifestyle at Nidhi Elite.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/sanity/${post.slug.current}`}
                className="group overflow-hidden rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                {post.mainImage && (
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={urlFor(post.mainImage).url() || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.categories?.map((cat: string) => (
                      <span key={cat} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author?.name}</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
