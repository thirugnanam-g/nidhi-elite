import { createClient } from "@sanity/client"

// ✅ Create Sanity client
export const client = createClient({
  projectId: "9vgq2wji",        // your actual project ID
  dataset: "nidhielite",        // your dataset name
  apiVersion: "2024-01-01",     // today's API version
  useCdn: true,                 // use CDN for faster public reads
})

// ✅ Fetch all blog posts
export async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name},
    categories,
    seoTitle,
    seoDescription,
  }`
  return await client.fetch(query)
}

// ✅ Fetch single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    author->{name, bio, image},
    categories,
    seoTitle,
    seoDescription,
    seoKeywords,
  }`
  return await client.fetch(query, { slug })
}
