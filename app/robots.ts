import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://nidhielite.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/", "/admin/", "/api/", "/drafts/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/storage/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Slurp",
        allow: ["/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
    crawlDelay: 0.5,
  }
}
