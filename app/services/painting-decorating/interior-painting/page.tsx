'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone, Clock, Award } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const serviceAreas = [
  'Barnet', 'Harrow', 'Enfield', 'Watford', 'Hatfield', 'Brentford', 
  'Hoddesdon', 'St Albans', 'Stevenage', 'Broxbourne', 'Potters Bar', 
  'Hertfordshire', 'Ealing', 'Hackney', 'Islington', 'Welwyn Garden City', 
  'Camden Town', 'Redbridge', 'Waltham Forest', 'Haringey'
];

const interiorPaintingFeatures = [
  'Professional surface preparation',
  'Premium quality paints and materials',
  'Color consultation and matching',
  'Precise cutting and finishing',
  'Furniture protection and room preparation',
  'Clean and tidy service',
  'Fully insured and guaranteed work',
  'Free detailed quotations'
];

const paintingProcess = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We assess your space, discuss color preferences, and provide a detailed quote'
  },
  {
    step: '02', 
    title: 'Surface Preparation',
    description: 'Thorough cleaning, filling, sanding, and priming for the perfect finish'
  },
  {
    step: '03',
    title: 'Professional Application',
    description: 'Expert painting using premium materials and proven techniques'
  },
  {
    step: '04',
    title: 'Quality Inspection',
    description: 'Final quality check and cleanup to ensure perfect results'
  }
];

export default function InteriorPaintingPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Painting & Decorating', url: '/services/painting-decorating' },
    { name: 'Interior Painting', url: '/services/painting-decorating/interior-painting' }
  ];

  return (
    <main className="pt-32">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Interior Painting",
            "description": "Professional interior painting services for homes and businesses in London and Hertfordshire",
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
            "areaServed": [
              "London",
              "Hertfordshire",
              "Barnet",
              "Watford",
              "St Albans",
              "Harrow",
              "Enfield"
            ],
            "serviceType": "Interior Painting",
            "offers": {
              "@type": "Offer",
              "description": "Free consultation and quote for interior painting services",
              "priceCurrency": "GBP"
            }
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
                <div className="w-8 h-8 bg-alba-accent rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎨</span>
                </div>
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Interior Painting</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                Professional Interior
                <span className="block text-alba-accent italic">Painting Services</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                Transform your home's interior with our expert painting services. From single rooms to complete house 
                makeovers, we deliver exceptional results across London, Hertfordshire, and surrounding areas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Get Free Quote
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
                  src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional interior painting service"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              What's Included
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Comprehensive interior painting service with attention to every detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interiorPaintingFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1">
                <Check className="w-6 h-6 text-alba-accent mb-3" />
                <p className="text-alba-charcoal/80 text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Our Process
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Professional approach ensuring perfect results every time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paintingProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-alba-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-2">{step.title}</h3>
                <p className="text-alba-charcoal/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Areas We Serve
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Professional interior painting services across London, Hertfordshire, and surrounding areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1 text-center">
                <MapPin className="w-5 h-5 text-alba-accent mx-auto mb-2" />
                <p className="text-alba-charcoal font-medium text-sm">{area}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-alba-primary p-8 rounded-2xl text-white max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold mb-4">Don't See Your Area?</h3>
              <p className="text-alba-cream/90 mb-6">
                We cover the entire M25 area and surrounding regions. Contact us to confirm service availability in your location.
              </p>
              <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
                Check Your Area
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-8 decorative-line">
                Why Choose Alba Homes
                <span className="block text-alba-gold italic">for Interior Painting</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Expert Craftsmanship</h3>
                    <p className="text-alba-cream/80 text-sm">Years of experience delivering flawless interior painting results.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Reliable Service</h3>
                    <p className="text-alba-cream/80 text-sm">On-time completion with minimal disruption to your daily routine.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Quality Guarantee</h3>
                    <p className="text-alba-cream/80 text-sm">Fully insured work with comprehensive satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-alba-cream p-8 rounded-2xl text-alba-primary">
              <h3 className="font-display text-2xl font-bold mb-6">Ready to Transform Your Interior?</h3>
              <p className="text-alba-charcoal/80 mb-6">
                Get a free, no-obligation quote for your interior painting project today.
              </p>
              <div className="space-y-3">
                <Button onClick={handleGetQuote} className="bg-alba-accent hover:bg-alba-gold text-white font-semibold w-full">
                  Get Your Free Quote
                </Button>
                <Button variant="outline" className="w-full border-alba-primary text-alba-primary hover:bg-alba-primary hover:text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 07404 304224
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}