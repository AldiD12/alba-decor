'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone, Shield, Sun, Droplets } from 'lucide-react';

const serviceAreas = [
  'Barnet', 'Harrow', 'Enfield', 'Watford', 'Hatfield', 'Brentford', 
  'Hoddesdon', 'St Albans', 'Stevenage', 'Broxbourne', 'Potters Bar', 
  'Hertfordshire', 'Ealing', 'Hackney', 'Islington', 'Welwyn Garden City', 
  'Camden Town', 'Redbridge', 'Waltham Forest', 'Haringey'
];

const exteriorServices = [
  {
    title: 'House Exterior Painting',
    description: 'Complete exterior house painting with weather-resistant finishes',
    features: ['Walls & Render', 'Windows & Doors', 'Fascias & Soffits', 'Guttering']
  },
  {
    title: 'Preparation & Protection',
    description: 'Thorough surface preparation for long-lasting results',
    features: ['Pressure Washing', 'Surface Repairs', 'Priming & Sealing', 'Masonry Treatment']
  },
  {
    title: 'Weatherproofing',
    description: 'Advanced protection against UK weather conditions',
    features: ['Waterproof Coatings', 'Anti-Mould Treatment', 'UV Protection', 'Thermal Coatings']
  }
];

export default function ExteriorPaintingPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-alba-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-alba-accent rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🏠</span>
                </div>
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Exterior Painting</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                Professional Exterior
                <span className="block text-alba-accent italic">Painting Services</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                Protect and beautify your home's exterior with our weather-resistant painting services. 
                Expert application of premium exterior paints across London, Hertfordshire, and surrounding areas.
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
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional exterior painting service"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Exterior Painting Services
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Complete exterior painting solutions designed for UK weather conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exteriorServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-4">{service.title}</h3>
                <p className="text-alba-charcoal/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                      <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Protection Features */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Weather Protection
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Advanced protection against UK weather conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-alba-accent" />
              </div>
              <h3 className="font-semibold text-alba-primary mb-2">Waterproof Protection</h3>
              <p className="text-alba-charcoal/70 text-sm">Advanced waterproof coatings to protect against rain and moisture</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-alba-accent" />
              </div>
              <h3 className="font-semibold text-alba-primary mb-2">UV Resistance</h3>
              <p className="text-alba-charcoal/70 text-sm">UV-resistant paints that won't fade or deteriorate in sunlight</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-alba-accent" />
              </div>
              <h3 className="font-semibold text-alba-primary mb-2">Long-Term Durability</h3>
              <p className="text-alba-charcoal/70 text-sm">Premium paints designed to last for years in all weather conditions</p>
            </div>
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
              Professional exterior painting services across London, Hertfordshire, and surrounding areas
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
              <h3 className="font-display text-2xl font-bold mb-4">Covering the Entire M25 Area</h3>
              <p className="text-alba-cream/90 mb-6">
                We provide exterior painting services throughout London, Hertfordshire, and all surrounding areas within the M25 corridor.
              </p>
              <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready to Protect Your Home's Exterior?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote for professional exterior painting that will protect and beautify your home for years to come.
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