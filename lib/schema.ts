import { siteInfo } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteInfo.name,
    "image": `${siteInfo.siteUrl}/images/hero-bg.jpg`,
    "description": siteInfo.headline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "409, Station Road, Yashwant Nagar",
      "addressLocality": "Talegaon Dabhade",
      "addressRegion": "Maharashtra",
      "postalCode": "410507",
      "addressCountry": "IN"
    },
    "telephone": siteInfo.phone,
    "priceRange": "₹₹",
    "servesCuisine": ["Burgers", "Pizzas", "Fast Food"],
  };
}

export function generateMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Kangen Burgers Menu",
    "mainEntityOfPage": `${siteInfo.siteUrl}/menu`
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `${siteInfo.siteUrl}${breadcrumb.item}`
    }))
  };
}
