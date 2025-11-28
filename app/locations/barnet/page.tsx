'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone, Star } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

const barnetServices = [
  'Interior Painting',
  'Exterior Painting', 
  'Wallpaper Installation',
  'Hand Painted Kitchens',
  'Venetian Plaster',
  'Commercial Painting',
  'Residential Decorating',
  'Color Consultation'
];

const barnetAreas = [
  { area: 'High Barnet', postcode: 'EN5' },
  { area: 'East Barnet', postcode: 'EN4' },
  { area: 'New Barnet', postcode: 'EN4' },
  { area: 'Chipping Barnet', postcode: 'EN5' },
  { area: 'Cockfosters', postcode: 'EN4' },
  { area: 'Oakleigh Park', postcode: 'N20' },
  { area: 'Totteridge', postcode: 'N20' },
  { area: 'Whetstone', postcode: 'N20' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    area: 'High Barnet',
    postcode: 'EN5',
    rating: 10,
    text: 'Excellent painting service in High Barnet. The team was professional, punctual, and delivered outstanding results on our Victorian terrace.'
  },
  {
    name: 'Michael Chen',
    area: 'East Barnet',
    postcode: 'EN4',
    rating: 10,
    text: 'Alba Decor transformed our home in East Barnet. The interior painting work was flawless and completed on time and within budget.'
  },
  {
    name: 'Emma Williams',
    area: 'Cockfosters',
    postcode: 'EN4',
    rating: 9,
    text: 'Professional decorators who really understand the local area. Great communication and beautiful results on our period property.'
  }
];

export default function BarnetPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  const breadcrumbItems = [
    { name: 'Locations', url: '/locations' },
    { name: 'Barnet', url: '/locations/barnet' }
  ];

  return (
    <main className="pt-32">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Structured Data for Barnet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alba Decor - Painters & Decorators Barnet",
            "description": "Professional painting and decorating services in Barnet, covering EN4, EN5, N11, N12, N14, N20 postcodes",
            "telephone": "07404304224",
            "url": "https://albahomes.co.uk/locations/barnet",
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
            "areaServed": [
              {
                "@type": "PostalAddress",
                "addressLocality": "High Barnet",
                "postalCode": "EN5"
              },
              {
                "@type": "PostalAddress", 
                "addressLocality": "East Barnet",
                "postalCode": "EN4"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Cockfosters", 
                "postalCode": "EN4"
              }
            ],
            "serviceType": [
              "Interior Painting",
              "Exterior Painting",
              "Wallpaper Installation",
              "Decorating Services"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-alba-accent" />
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Barnet Painters & Decorators</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                Professional Painters
                <span className="block text-alba-accent italic">& Decorators in Barnet</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                Expert painting and decorating services throughout Barnet, including High Barnet, East Barnet, Cockfosters, 
                and surrounding areas. Covering postcodes EN4, EN5, N11, N12, N14, and N20 with professional, reliable service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Get Free Barnet Quote
                </Button>
                <Button variant="outline" className="btn-alba-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 07404 304224
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-elegant">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional painting services in Barnet"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Barnet */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Painting & Decorating Services in Barnet
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Comprehensive painting and decorating solutions for Barnet homes and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barnetServices.map((service, index) => {
              const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              const categorySlug = service.includes('Wallpaper') ? 'wallpaper-installation' : 
                                 service.includes('Venetian') || service.includes('Color') ? 'interior-decorating' : 
                                 'painting-decorating';
              
              return (
                <Link
                  key={index}
                  href={`/services/${categorySlug}/${serviceSlug}`}
                  className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2 group text-center"
                >
                  <Check className="w-6 h-6 text-alba-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-alba-primary group-hover:text-alba-accent transition-colors mb-2">
                    {service}
                  </h3>
                  <p className="text-alba-charcoal/70 text-sm">
                    Professional {service.toLowerCase()} in Barnet
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Barnet Areas We Cover
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Professional painting and decorating services across all Barnet postcodes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barnetAreas.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-elegant text-center">
                <MapPin className="w-5 h-5 text-alba-accent mx-auto mb-3" />
                <h3 className="font-semibold text-alba-primary mb-1">{location.area}</h3>
                <p className="text-alba-charcoal/60 text-sm">{location.postcode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              What Barnet Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-elegant">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-alba-gold text-alba-gold" />
                    ))}
                  </div>
                  <span className="font-bold text-alba-primary">{testimonial.rating}/10</span>
                </div>
                <p className="text-alba-charcoal/80 mb-4">"{testimonial.text}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-alba-primary">{testimonial.name}</div>
                  <div className="text-alba-charcoal/60">{testimonial.area}, {testimonial.postcode}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready for Professional Painting in Barnet?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote for expert painting and decorating services in Barnet and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Get Free Barnet Quote
            </Button>
            <Button variant="outline" className="border-alba-cream text-alba-cream hover:bg-alba-cream hover:text-alba-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call 07404 304224
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}