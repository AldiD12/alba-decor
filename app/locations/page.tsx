'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Barnet',
    slug: 'barnet',
    description: 'Professional painting and decorating services in Barnet and surrounding areas.',
    postcodes: ['EN4', 'EN5', 'N11', 'N12', 'N14', 'N20']
  },
  {
    name: 'Watford',
    slug: 'watford',
    description: 'Expert painters and decorators serving Watford and the local community.',
    postcodes: ['WD17', 'WD18', 'WD19', 'WD23', 'WD24', 'WD25']
  },
  {
    name: 'St Albans',
    slug: 'st-albans',
    description: 'Quality painting and decorating services throughout St Albans.',
    postcodes: ['AL1', 'AL2', 'AL3', 'AL4']
  },
  {
    name: 'Harrow',
    slug: 'harrow',
    description: 'Trusted painting contractors serving Harrow and surrounding areas.',
    postcodes: ['HA0', 'HA1', 'HA2', 'HA3', 'HA5', 'HA6', 'HA7', 'HA8', 'HA9']
  },
  {
    name: 'Enfield',
    slug: 'enfield',
    description: 'Professional painting and decorating services in Enfield.',
    postcodes: ['EN1', 'EN2', 'EN3', 'N9', 'N13', 'N14', 'N18', 'N21']
  },
  {
    name: 'Stevenage',
    slug: 'stevenage',
    description: 'Expert painting services for homes and businesses in Stevenage.',
    postcodes: ['SG1', 'SG2']
  },
  {
    name: 'Hertford',
    slug: 'hertford',
    description: 'Quality painting and decorating throughout Hertford and East Hertfordshire.',
    postcodes: ['SG13', 'SG14']
  },
  {
    name: 'Potters Bar',
    slug: 'potters-bar',
    description: 'Professional painters serving Potters Bar and the local area.',
    postcodes: ['EN6']
  }
];

export default function LocationsPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6">
              Painting & Decorating Services
              <span className="block text-alba-accent italic">Across London & Hertfordshire</span>
            </h1>
            <p className="text-body-mobile text-alba-charcoal/80 max-w-3xl mx-auto mb-8">
              Alba Homes provides professional painting, decorating, and interior design services across London, 
              Hertfordshire, and the M25 area. Find your local area below for specific service information.
            </p>
            <Button onClick={handleGetQuote} className="btn-alba-primary">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6">
              Areas We Serve
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Professional painting and decorating services in your local area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Link 
                key={index}
                href={`/locations/${location.slug}`}
                className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-alba-accent group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl font-bold text-alba-primary group-hover:text-alba-accent transition-colors">
                    {location.name}
                  </h3>
                </div>
                
                <p className="text-alba-charcoal/70 mb-4">
                  {location.description}
                </p>
                
                <div className="text-sm text-alba-charcoal/60">
                  <strong>Postcodes served:</strong> {location.postcodes.join(', ')}
                </div>
                
                <div className="mt-4 text-alba-accent font-semibold text-sm group-hover:text-alba-primary transition-colors">
                  View Services in {location.name} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6">
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-elegant text-center">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Painting & Decorating</h3>
              <p className="text-alba-charcoal/70 mb-4">Interior and exterior painting, wallpaper installation, and decorative finishes.</p>
              <Link href="/services/painting-decorating" className="text-alba-accent font-semibold hover:text-alba-primary transition-colors">
                View All Services →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-elegant text-center">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Interior Decorating</h3>
              <p className="text-alba-charcoal/70 mb-4">Venetian plaster, decorative finishes, and bespoke interior design solutions.</p>
              <Link href="/services/interior-decorating" className="text-alba-accent font-semibold hover:text-alba-primary transition-colors">
                View All Services →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-elegant text-center">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Wallpaper Installation</h3>
              <p className="text-alba-charcoal/70 mb-4">Professional wallpaper hanging, removal, and repair services.</p>
              <Link href="/services/wallpaper-installation" className="text-alba-accent font-semibold hover:text-alba-primary transition-colors">
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote for professional painting and decorating services in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Get Free Quote
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