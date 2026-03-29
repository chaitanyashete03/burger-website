import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { defaultSEO } from '../lib/seo';
import { siteInfo } from '../lib/constants';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SmoothScrolling from '../components/SmoothScrolling';

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
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // Replace after deploying
  },
};

// JSON-LD — LocalBusiness schema for Google Maps / Knowledge Panel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteInfo.siteUrl}/#restaurant`,
  name: "Kangen Burgers",
  description: defaultSEO.description,
  url: siteInfo.siteUrl,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  image: `${siteInfo.siteUrl}/images/scroll-laptop/ezgif-frame-002.jpg`,
  logo: `${siteInfo.siteUrl}/images/scroll-laptop/ezgif-frame-002.jpg`,
  priceRange: "₹₹",
  servesCuisine: ["Burgers", "Pizzas", "Fast Food", "Healthy Food", "Sandwiches", "Pasta"],
  acceptsReservations: "True",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  currenciesAccepted: "INR",
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
    ratingValue: "4.6",
    reviewCount: "320",
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
  hasMap: "https://maps.google.com/?q=Talegaon+Dabhade,+Pune",
  sameAs: [
    "https://www.facebook.com/people/Kangen-Burger/61558688043249/",
    "https://www.instagram.com/kangen_burgers_/",
    "https://www.linkedin.com/in/kangen-burgers-47a964305/",
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
        <link rel="icon" href="/favicon.png" />
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
      </body>
    </html>
  );
}
