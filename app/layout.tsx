import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Alba Homes - Professional Painting & Decorating in London & Hertfordshire',
  description: 'Expert painting, decorating, interior design & wallpaper installation services across London, Hertfordshire & M25 areas. Free quotes. Call 07404 304224.',
  keywords: 'painters London, decorators Hertfordshire, interior painting, exterior painting, wallpaper installation, hand painted kitchens, Venetian plaster, painting contractors',
  authors: [{ name: 'Alba Homes' }],
  creator: 'Alba Homes',
  publisher: 'Alba Homes',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://albahomes.co.uk',
    siteName: 'Alba Homes',
    title: 'Alba Homes - Professional Painting & Decorating in London & Hertfordshire',
    description: 'Expert painting, decorating, interior design & wallpaper installation services across London, Hertfordshire & M25 areas. Free quotes.',
    images: [
      {
        url: '/images/alba-homes-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alba Homes - Professional Painting & Decorating Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alba Homes - Professional Painting & Decorating',
    description: 'Expert painting & decorating services in London & Hertfordshire. Free quotes.',
    images: ['/images/alba-homes-twitter-card.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero-kitchen.webp" />
        <link rel="preload" as="image" href="/images/alba-decor-logo.png" />
        <link rel="canonical" href="https://albahomes.co.uk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#162F4F" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://albahomes.co.uk",
              "name": "Alba Homes",
              "alternateName": "Alba Homes Painting & Decorating",
              "description": "Professional painting, decorating, interior design and wallpaper installation services across London, Hertfordshire and M25 areas.",
              "url": "https://albahomes.co.uk",
              "telephone": "07404304224",
              "priceRange": "££",
              "image": "https://albahomes.co.uk/images/alba-homes-logo.png",
              "logo": "https://albahomes.co.uk/images/alba-homes-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "London"
                },
                {
                  "@type": "State",
                  "name": "Hertfordshire"
                },
                {
                  "@type": "City",
                  "name": "Barnet"
                },
                {
                  "@type": "City",
                  "name": "Watford"
                },
                {
                  "@type": "City",
                  "name": "St Albans"
                },
                {
                  "@type": "City",
                  "name": "Stevenage"
                },
                {
                  "@type": "City",
                  "name": "Harrow"
                },
                {
                  "@type": "City",
                  "name": "Enfield"
                }
              ],
              "serviceType": [
                "Interior Painting",
                "Exterior Painting",
                "Wallpaper Installation",
                "Interior Decorating",
                "Hand Painted Kitchens",
                "Venetian Plaster",
                "Commercial Painting",
                "Residential Painting"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Painting & Decorating Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior Painting",
                      "description": "Professional interior painting services for homes and businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Exterior Painting",
                      "description": "Expert exterior painting and weatherproofing services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wallpaper Installation",
                      "description": "Professional wallpaper hanging and installation services"
                    }
                  }
                ]
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "currenciesAccepted": "GBP"
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
