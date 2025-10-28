export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author: string
  categories: string[]
  mainImage: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  body: any[]
}
