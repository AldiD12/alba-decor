'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';

export default function Home() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main>
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
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <HeroSection onGetQuote={handleGetQuote} />
      <AboutSection onGetQuote={handleGetQuote} />
      <WhyChooseSection onGetQuote={handleGetQuote} />
      <ServicesSection onGetQuote={handleGetQuote} />
      <ServiceAreasSection onGetQuote={handleGetQuote} />
      <GoogleReviewsSection onGetQuote={handleGetQuote} />
    </main>
  );
}
