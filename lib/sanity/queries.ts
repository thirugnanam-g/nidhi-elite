import { groq } from "next-sanity"

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  body
}`
