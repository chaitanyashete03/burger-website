import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { defaultSEO } from '@/lib/seo';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kangenburgers.com"),
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
    canonical: "https://www.kangenburgers.com",
  },
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.url,
    siteName: "Kangen Burgers",
    images: [
      {
        url: "/images/hero-bg.jpg",
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
    images: ["/images/hero-bg.jpg"],
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
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // Replace after deploying
  },
};

// JSON-LD — LocalBusiness schema for Google Maps / Knowledge Panel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.kangenburgers.com/#restaurant",
  name: "Kangen Burgers",
  description: defaultSEO.description,
  url: "https://www.kangenburgers.com",
  telephone: "+911234567890",
  email: "hello@kangenburgers.com",
  image: "https://www.kangenburgers.com/images/hero-bg.jpg",
  logo: "https://www.kangenburgers.com/images/hero-bg.jpg",
  priceRange: "₹₹",
  servesCuisine: ["Burgers", "Pizzas", "Fast Food", "Healthy Food"],
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  menu: "https://www.kangenburgers.com/menu",
  hasMap: "https://maps.google.com/?q=Talegaon+Dabhade,+Pune",
  sameAs: [
    "https://www.facebook.com/kangenburgers",
    "https://www.instagram.com/kangenburgers",
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
        <meta name="theme-color" content="#FF6B35" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* JSON-LD LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-accent selection:text-white flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
