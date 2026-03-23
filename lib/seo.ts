const BASE_URL = "https://www.kangenburgers.com";
const OG_IMAGE = `${BASE_URL}/images/hero-bg.jpg`;

export const defaultSEO = {
  title: "Kangen Burgers – Healthy, Tasty Burgers with Alkaline Kangen Water | Pune",
  description:
    "Kangen Burgers serves handcrafted burgers, gourmet pizzas, and refreshing beverages made with alkaline Kangen water. Visit us in Talegaon Dabhade, Pune, or order online.",
  keywords: [
    "Kangen Burgers",
    "Burgers in Pune",
    "Alkaline Water Burgers",
    "Healthy Burgers Pune",
    "Kangen Water Food",
    "Food Franchise India",
    "Best Burger Pune",
    "Talegaon Dabhade Restaurant",
    "Alkaline Burger Pune",
  ],
  url: BASE_URL,
};

export const pageSEO = {
  home: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    keywords: defaultSEO.keywords,
    canonical: BASE_URL,
  },
  menu: {
    title: "Our Menu – Burgers, Pizzas & Beverages | Kangen Burgers Pune",
    description:
      "Explore our full menu of handcrafted burgers, stone-baked pizzas, and alkaline Kangen water beverages. Something for every taste at Kangen Burgers, Pune.",
    keywords: ["Kangen Burger menu", "Burger menu Pune", "Alkaline pizza Pune", "Healthy fast food menu"],
    canonical: `${BASE_URL}/menu`,
  },
  franchise: {
    title: "Franchise Opportunity – Join the Kangen Family | Kangen Burgers",
    description:
      "Start your own Kangen Burgers franchise in India with low investment (₹5L–₹20L), comprehensive training, and full marketing support. Apply now.",
    keywords: ["Burger franchise India", "Food franchise Pune", "Kangen Burgers franchise", "Low investment food franchise"],
    canonical: `${BASE_URL}/franchise`,
  },
  contact: {
    title: "Contact Kangen Burgers – Talegaon Dabhade, Pune | Phone & Location",
    description:
      "Find Kangen Burgers at Chatrapati Shivaji Maharaj Chowk, 409 Station Road, Talegaon Dabhade, Pune. Call us or send a message online.",
    keywords: ["Kangen Burgers contact", "Burger restaurant Talegaon", "Kangen Burgers address Pune"],
    canonical: `${BASE_URL}/contact`,
  },
  kangenWater: {
    title: "Kangen Water – The Science Behind Our Taste | Kangen Burgers",
    description:
      "Learn how alkaline Kangen water (pH 8.5–9.5) enhances flavour, boosts nutrition, and fights free radicals in every Kangen Burgers recipe.",
    keywords: ["Kangen water benefits", "Alkaline water cooking", "Kangen water Pune", "Healthy food alkaline water"],
    canonical: `${BASE_URL}/kangen-water`,
  },
  blog: {
    title: "Blog – Insights, Recipes & Stories | Kangen Burgers",
    description:
      "Read about Kangen water in cooking, local sourcing, franchise success stories, and healthy eating tips from the Kangen Burgers team.",
    keywords: ["Kangen Burgers blog", "Healthy food blog India", "Alkaline cooking tips", "Kangen water recipes"],
    canonical: `${BASE_URL}/blog`,
  },
  orderOnline: {
    title: "Order Online – Kangen Burgers Delivery & Pickup | Pune",
    description:
      "Order your favourite Kangen Burgers via Zomato, Swiggy, or call us directly for takeaway. Fast delivery across Talegaon Dabhade, Pune.",
    keywords: ["Order burger online Pune", "Kangen Burgers delivery", "Burger delivery Talegaon"],
    canonical: `${BASE_URL}/order-online`,
  },
};

export const generatePageMetadata = (page: keyof typeof pageSEO) => {
  const p = pageSEO[page];
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: {
      canonical: p.canonical,
    },
    openGraph: {
      title: p.title,
      description: p.description,
      type: "website" as const,
      url: p.canonical,
      siteName: "Kangen Burgers",
      locale: "en_IN",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Kangen Burgers – Healthy Burgers with Alkaline Kangen Water",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: p.title,
      description: p.description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
};

export const generateBlogMetadata = (post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}) => ({
  title: `${post.title} | Kangen Burgers Blog`,
  description: post.excerpt,
  keywords: ["Kangen Burgers blog", post.title, "healthy food Pune", "alkaline cooking"],
  alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
  openGraph: {
    title: `${post.title} | Kangen Burgers Blog`,
    description: post.excerpt,
    type: "article" as const,
    url: `${BASE_URL}/blog/${post.slug}`,
    siteName: "Kangen Burgers",
    locale: "en_IN",
    publishedTime: new Date(post.date).toISOString(),
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `${post.title} | Kangen Burgers Blog`,
    description: post.excerpt,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
});
