import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { defaultSEO } from '../lib/seo';
import { siteInfo } from '../lib/constants';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SmoothScrolling from '../components/SmoothScrolling';
import NearbyAlert from '../components/NearbyAlert';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.siteUrl),
  title: {
    default: defaultSEO.title,
    template: "%s | Kangen Burgers",
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: [{ name: "Kangen Burgers" }],
  creator: "Kangen Burgers",
  publisher: "Kangen Burgers",
  alternates: {
    canonical: siteInfo.siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kangen Burgers",
  },
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.url,
    siteName: "Kangen Burgers",
    images: [
      {
        url: "/images/scroll-laptop/ezgif-frame-002.jpg",
        width: 1200,
        height: 630,
        alt: "Kangen Burgers – Healthy Burgers in Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: ["/images/scroll-laptop/ezgif-frame-002.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "R2lvsardLdQ-WVyajS7qLn9SkjBXXKStkOQXD1eaJZI",
  },
};

// JSON-LD — LocalBusiness schema for Google Maps / Knowledge Panel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteInfo.siteUrl}/#restaurant`,
  name: "Kangen Burgers",
  alternateName: "Kangen Burger's Cafe",
  description: defaultSEO.description,
  url: siteInfo.siteUrl,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  image: `${siteInfo.siteUrl}/images/scroll-laptop/ezgif-frame-002.jpg`,
  logo: `${siteInfo.siteUrl}/favicon.png`,
  priceRange: "₹₹",
  servesCuisine: ["Burgers", "Pizzas", "Fast Food", "Healthy Food", "Sandwiches", "Pasta", "Cakes", "Mojitos", "Milkshakes"],
  acceptsReservations: "True",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  currenciesAccepted: "INR",
  keywords: "best burger shop in Talegaon, best burgers Talegaon Dabhade, burger shop near Talegaon station, best cafe Talegaon, healthy fast food Pune, Kangen Burgers",
  areaServed: [
    {
      "@type": "City",
      name: "Talegaon Dabhade",
    },
    {
      "@type": "City",
      name: "Pune",
    },
    {
      "@type": "State",
      name: "Maharashtra",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "409, Station Road, Chatrapati Shivaji Maharaj Chowk, Yashwant Nagar",
    addressLocality: "Talegaon Dabhade",
    addressRegion: "Maharashtra",
    postalCode: "410507",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.7289896,
    longitude: 73.6811201,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1800",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  menu: `${siteInfo.siteUrl}/menu`,
  hasMenu: {
    "@type": "Menu",
    url: `${siteInfo.siteUrl}/menu`,
    name: "Kangen Burgers Full Menu",
  },
  hasMap: "https://maps.google.com/?q=Kangen+Burgers+Talegaon+Dabhade",
  knowsAbout: ["Alkaline Water Cooking", "Kangen Water", "Healthy Fast Food", "Burger Franchise India"],
  sameAs: [
    "https://www.facebook.com/people/Kangen-Burger/61558688043249/",
    "https://www.instagram.com/kangen_burgers_/",
    "https://www.linkedin.com/in/kangen-burgers-47a964305/",
  ],
};

// JSON-LD — BreadcrumbList for site hierarchy
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteInfo.siteUrl },
    { "@type": "ListItem", position: 2, name: "Menu", item: `${siteInfo.siteUrl}/menu` },
    { "@type": "ListItem", position: 3, name: "Order Online", item: `${siteInfo.siteUrl}/order-online` },
    { "@type": "ListItem", position: 4, name: "Best Burgers in Talegaon", item: `${siteInfo.siteUrl}/burgers-in-talegaon-dabhade` },
    { "@type": "ListItem", position: 5, name: "Franchise", item: `${siteInfo.siteUrl}/franchise` },
    { "@type": "ListItem", position: 6, name: "Contact", item: `${siteInfo.siteUrl}/contact` },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Dark mode init – prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        {/* JSON-LD LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* JSON-LD BreadcrumbList for site hierarchy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-accent selection:text-white flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </main>
        <Footer />
        <WhatsAppButton />
        <NearbyAlert />
      </body>
    </html>
  );
}
