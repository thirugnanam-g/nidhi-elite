import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "9vgq2wji",
  dataset: "nidhielite",
  apiVersion: "2024-01-01",
  useCdn: true,
})

export async function getBlogPosts() {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
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

export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
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
