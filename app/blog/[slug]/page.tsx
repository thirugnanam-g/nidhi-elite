import { getBlogPostBySlug, getBlogPosts } from "@/lib/sanity.client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"
import Image from "next/image"
import { urlFor } from "@/lib/sanity.image"
import { PortableText } from "@portabletext/react"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords?.join(", "),
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.mainImage ? [{ url: urlFor(post.mainImage).url() }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-primary font-semibold hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section with Featured Image */}
        {post.mainImage && (
          <div className="relative h-96 sm:h-[500px] w-full overflow-hidden bg-gray-200">
            <Image
              src={urlFor(post.mainImage).url() || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories && post.categories.length > 0 && (
                <>
                  {post.categories.map((cat: string) => (
                    <span key={cat} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {cat}
                    </span>
                  ))}
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 border-b border-gray-200 pb-6">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{post.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none mb-12">{post.body && <PortableText value={post.body} />}</div>

          {/* Back to Blog Link */}
          <div className="border-t border-gray-200 pt-8">
            <Link href="/blog" className="text-primary font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
