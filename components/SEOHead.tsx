import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  serviceName?: string;
  serviceType?: string;
  location?: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/images/alba-homes-og-image.jpg',
  serviceName,
  serviceType = 'Service',
  location = 'London & Hertfordshire',
  breadcrumbs = []
}: SEOHeadProps) {
  const fullTitle = `${title} | Alba Homes`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  // Generate structured data for service pages
  const serviceStructuredData = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Alba Homes",
      "telephone": "07404304224",
      "url": "https://albahomes.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": location
    },
    "serviceType": serviceType,
    "offers": {
      "@type": "Offer",
      "description": "Free consultation and quote",
      "priceCurrency": "GBP"
    }
  } : null;

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://albahomes.co.uk${crumb.url}`
    }))
  } : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Alba Homes" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || 'https://albahomes.co.uk'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Alba Homes" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {serviceStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData)
          }}
        />
      )}
      
      {breadcrumbStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData)
          }}
        />
      )}
    </Head>
  );
}