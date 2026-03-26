import { MetadataRoute } from "next";
import { siteInfo } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/privacy", "/terms", "/refund-policy"],
      },
    ],
    sitemap: `${siteInfo.siteUrl}/sitemap.xml`,
    host: siteInfo.siteUrl,
  };
}
