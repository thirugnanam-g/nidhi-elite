import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/", "/admin/", "/api/", "/drafts/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
      },
    ],
    sitemap: "https://nidhielite.com/sitemap.xml",
    host: "https://nidhielite.com",
  }
}
