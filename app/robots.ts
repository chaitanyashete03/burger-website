import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/privacy", "/terms", "/refund-policy"],
      },
    ],
    sitemap: "https://www.kangenburgers.com/sitemap.xml",
    host: "https://www.kangenburgers.com",
  };
}
