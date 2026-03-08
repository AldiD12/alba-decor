import { Metadata } from 'next';
import BarnetPageClient from '@/components/BarnetPageClient';

export const metadata: Metadata = {
  title: 'Painters in Barnet | Free Quote | Alba Decor',
  description: 'Professional painters & decorators in Barnet, EN4 & EN5. Interior, exterior painting, wallpapering & kitchen spraying. Fully insured. Free quote: 07404 304224',
  keywords: 'painters Barnet, decorators Barnet, painting services EN5, decorating services EN4, Barnet painters, Alba Decor Barnet',
  alternates: {
    canonical: 'https://albadecor.co.uk/locations/barnet',
  },
  openGraph: {
    title: 'Painters in Barnet | Free Quote | Alba Decor',
    description: 'Professional painters & decorators in Barnet. Interior, exterior painting, wallpapering & kitchen spraying. Free quote today.',
    url: 'https://albadecor.co.uk/locations/barnet',
  },
};

const barnetSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Alba Decor - Painters & Decorators Barnet",
  "description": "Professional painting and decorating services in Barnet, covering EN4, EN5, N11, N12, N14, N20 postcodes",
  "telephone": "+447404304224",
  "url": "https://albadecor.co.uk/locations/barnet",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barnet",
    "addressRegion": "Greater London",
    "addressCountry": "GB",
    "postalCode": "EN5"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.6503",
    "longitude": "-0.2014"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "17",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": [
    { "@type": "PostalAddress", "addressLocality": "High Barnet", "postalCode": "EN5" },
    { "@type": "PostalAddress", "addressLocality": "East Barnet", "postalCode": "EN4" },
    { "@type": "PostalAddress", "addressLocality": "Cockfosters", "postalCode": "EN4" }
  ],
  "serviceType": [
    "Interior Painting",
    "Exterior Painting",
    "Wallpaper Installation",
    "Decorating Services"
  ]
};

export default function BarnetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barnetSchema) }}
      />
      <BarnetPageClient />
    </>
  );
}
