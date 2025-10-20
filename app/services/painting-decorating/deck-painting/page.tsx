'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone, Star } from 'lucide-react';

const serviceAreas = [
  'Barnet', 'Harrow', 'Enfield', 'Watford', 'Hatfield', 'Brentford', 
  'Hoddesdon', 'St Albans', 'Stevenage', 'Broxbourne', 'Potters Bar', 
  'Hertfordshire', 'Ealing', 'Hackney', 'Islington', 'Welwyn Garden City'
];

export default function DeckPaintingPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-alba-accent rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🏡</span>
                </div>
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Deck Painting</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6">
                Professional Deck Painting
                <span className="block text-alba-accent italic">in London & Hertfordshire</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                Protect and beautify your outdoor deck with our expert deck painting services. We use weather-resistant paints and stains specifically designed for outdoor wood surfaces, ensuring long-lasting protection against the elements while enhancing your outdoor living space.
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
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional deck painting service"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6">
              Deck Painting Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Deck Staining & Sealing</h3>
              <p className="text-alba-charcoal/70 mb-6">Professional wood staining and sealing to protect against weather damage while enhancing natural wood grain.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                  <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                  Weather-resistant stains
                </li>
                <li className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                  <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                  UV protection coating
                </li>
                <li className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                  <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                  Moisture barrier application
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Deck Restoration</h3>
              <p className="text-alba-charcoal/70 mb-6">Complete deck restoration including cleaning, sanding, repairs, and protective coating application.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                  <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                  Power washing & cleaning
                </li>
                <li className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                  <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                  Surface preparation
                </li>
                <li className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                  <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                  Minor repairs included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6">
              Areas We Serve
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-elegant text-center">
                <MapPin className="w-5 h-5 text-alba-accent mx-auto mb-2" />
                <p className="text-alba-charcoal font-medium text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready for Professional Deck Painting?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote for expert deck painting services across London and Hertfordshire.
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