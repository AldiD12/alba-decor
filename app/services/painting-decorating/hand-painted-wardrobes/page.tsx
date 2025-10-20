'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone } from 'lucide-react';

export default function HandPaintedWardrobesPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      <section className="py-20 md:py-28 bg-alba-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6">
              Hand Painted Wardrobes
              <span className="block text-alba-accent italic">in London & Hertfordshire</span>
            </h1>
            <p className="text-body-mobile text-alba-charcoal/80 max-w-3xl mx-auto mb-8">
              Transform your bedroom storage with our expert hand painted wardrobe services. We breathe new life into existing wardrobes and fitted furniture, creating beautiful, custom finishes that match your bedroom decor perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleGetQuote} className="btn-alba-primary">Get Free Quote</Button>
              <Button variant="outline" className="btn-alba-secondary">
                <Phone className="w-4 h-4 mr-2" />Call 07404 304224
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Fitted Wardrobe Painting</h3>
              <p className="text-alba-charcoal/70 mb-6">Professional painting of built-in and fitted wardrobes.</p>
              <ul className="space-y-2">
                {['Complete transformation', 'Color coordination', 'Smooth finish application', 'Hardware protection'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-alba-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Freestanding Wardrobes</h3>
              <p className="text-alba-charcoal/70 mb-6">Expert painting of standalone wardrobe units and armoires.</p>
              <ul className="space-y-2">
                {['Detailed preparation', 'Premium paint application', 'Interior painting option', 'Style transformation'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-alba-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">Ready for Hand Painted Wardrobes?</h2>
          <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
            Get Free Quote
          </Button>
        </div>
      </section>
    </main>
  );
}