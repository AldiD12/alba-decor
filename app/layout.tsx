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
  title: 'Alba Decor - Professional Painting & Decorating in London & Hertfordshire',
  description: 'Expert painting, decorating, interior design & wallpaper installation services across London, Hertfordshire & M25 areas. Free quotes. Call 07404 304224.',
  keywords: 'painters London, decorators Hertfordshire, interior painting, exterior painting, wallpaper installation, hand painted kitchens, Venetian plaster, painting contractors',
  authors: [{ name: 'Alba Decor' }],
  creator: 'Alba Decor',
  publisher: 'Alba Decor',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://albadecor.co.uk',
    siteName: 'Alba Decor',
    title: 'Alba Decor - Professional Painting & Decorating in London & Hertfordshire',
    description: 'Expert painting, decorating, interior design & wallpaper installation services across London, Hertfordshire & M25 areas. Free quotes.',
    images: [
      {
        url: '/images/alba-decor-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alba Decor - Professional Painting & Decorating Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alba Decor - Professional Painting & Decorating',
    description: 'Expert painting & decorating services in London & Hertfordshire. Free quotes.',
    images: ['/images/alba-decor-twitter-card.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
        <link rel="canonical" href="https://albadecor.co.uk" />
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
      "@type": "ProfessionalService",
      "@id": "https://albadecor.co.uk/#organization",
      "name": "Alba Decor",
      "alternateName": "Alba Decor Painting & Decorating",
      "legalName": "Alba Decor",
      "description": "Professional painting, decorating, and wallpaper installation services across North London and Hertfordshire. Over 20 years of experience serving Barnet, Enfield, Watford and surrounding areas.",
      "url": "https://albadecor.co.uk",
      "telephone": "+447387844751",
      "email": "fjorentin@albadecor.co.uk",
      "priceRange": "££",
      "image": "https://albadecor.co.uk/images/alba-decor-logo.png",
      "logo": {
        "@type": "ImageObject",
        "url": "https://albadecor.co.uk/images/alba-decor-logo.png",
        "width": "250",
        "height": "100"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barnet",
        "addressRegion": "London",
        "postalCode": "EN5",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.6500",
        "longitude": "-0.2000"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Barnet",
          "sameAs": "https://en.wikipedia.org/wiki/London_Borough_of_Barnet"
        },
        {
          "@type": "City", 
          "name": "Potters Bar",
          "sameAs": "https://en.wikipedia.org/wiki/Potters_Bar"
        },
        {
          "@type": "City",
          "name": "Enfield",
          "sameAs": "https://en.wikipedia.org/wiki/London_Borough_of_Enfield"
        },
        {
          "@type": "City",
          "name": "Brentwood",
          "sameAs": "https://en.wikipedia.org/wiki/Brentwood,_Essex"
        },
        {
          "@type": "City",
          "name": "Haringey",
          "sameAs": "https://en.wikipedia.org/wiki/London_Borough_of_Haringey"
        },
        {
          "@type": "City",
          "name": "Ealing",
          "sameAs": "https://en.wikipedia.org/wiki/London_Borough_of_Ealing"
        },
        {
          "@type": "City",
          "name": "Islington",
          "sameAs": "https://en.wikipedia.org/wiki/London_Borough_of_Islington"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Painting & Decorating Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "Interior Painting",
              "name": "Interior Painting Services",
              "description": "Professional interior painting for walls, ceilings, doors, trim and woodwork across North London and Hertfordshire",
              "areaServed": ["Barnet", "Potters Bar", "Enfield", "Brentwood", "Haringey", "Ealing", "Islington"],
              "provider": {
                "@type": "ProfessionalService",
                "name": "Alba Decor"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "Exterior Painting",
              "name": "Exterior Painting Services",
              "description": "Expert exterior house painting including render, woodwork, and masonry painting with weather-resistant finishes",
              "areaServed": ["Barnet", "Potters Bar", "Enfield", "Brentwood", "Haringey", "Ealing", "Islington"],
              "provider": {
                "@type": "ProfessionalService",
                "name": "Alba Decor"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "Wallpaper Installation",
              "name": "Wallpaper Services",
              "description": "Professional wallpaper hanging, removal, and installation services including designer and feature walls",
              "areaServed": ["Barnet", "Potters Bar", "Enfield", "Brentwood", "Haringey", "Ealing", "Islington"],
              "provider": {
                "@type": "ProfessionalService",
                "name": "Alba Decor"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "Cabinet Painting",
              "name": "Hand-Painted Kitchen Cabinets",
              "description": "Transform kitchens with expert cabinet painting and furniture refinishing services",
              "areaServed": ["Barnet", "Potters Bar", "Enfield", "Brentwood", "Haringey", "Ealing", "Islington"],
              "provider": {
                "@type": "ProfessionalService",
                "name": "Alba Decor"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "Decorative Finishes",
              "name": "Decorative & Specialty Finishes",
              "description": "Bespoke decorative finishes including Venetian plaster, faux effects, and textured walls",
              "areaServed": ["Barnet", "Potters Bar", "Enfield", "Brentwood", "Haringey", "Ealing", "Islington"],
              "provider": {
                "@type": "ProfessionalService",
                "name": "Alba Decor"
              }
            }
          }
        ]
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "GBP",
      "sameAs": [
        // Add social profiles when available
        // "https://www.facebook.com/albadecor",
        // "https://www.instagram.com/albadecor"
      ],
      "founder": {
        "@type": "Person",
        "name": "Fjorentin Zoga",
        "jobTitle": "Owner & Master Decorator"
      },
      "foundingDate": "2005",
      "slogan": "Professional Painting & Decorating Across North London & Hertfordshire",
      "knowsAbout": [
        "Interior Painting",
        "Exterior Painting",
        "Decorating",
        "Wallpaper Installation",
        "Kitchen Cabinet Painting",
        "Venetian Plaster",
        "Wood Finishing",
        "Commercial Painting",
        "Residential Painting"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "20",
        "bestRating": "5",
        "worstRating": "3"
      }
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
