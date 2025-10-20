'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone } from 'lucide-react';

export default function DrywallRepairPage() {
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
              Expert Drywall Repair
              <span className="block text-alba-accent italic">in London & Hertfordshire</span>
            </h1>
            <p className="text-body-mobile text-alba-charcoal/80 max-w-3xl mx-auto mb-8">
              Professional drywall repair services for holes, cracks, water damage, and other wall imperfections. Our skilled craftsmen restore your walls to perfect condition before painting, ensuring smooth, flawless results.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Hole Repair</h3>
              <p className="text-alba-charcoal/70 mb-6">Expert repair of holes from nails, screws, or accidental damage.</p>
              <ul className="space-y-2">
                {['Small hole patching', 'Large hole reconstruction', 'Texture matching', 'Seamless finish'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-alba-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Crack Repair</h3>
              <p className="text-alba-charcoal/70 mb-6">Professional repair of wall cracks and joint separation.</p>
              <ul className="space-y-2">
                {['Crack assessment', 'Proper filling technique', 'Reinforcement mesh', 'Smooth blending'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-alba-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Water Damage Repair</h3>
              <p className="text-alba-charcoal/70 mb-6">Restoration of water-damaged drywall sections.</p>
              <ul className="space-y-2">
                {['Damage assessment', 'Section replacement', 'Moisture treatment', 'Complete restoration'].map((feature, index) => (
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
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">Ready for Professional Drywall Repair?</h2>
          <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
            Get Free Quote
          </Button>
        </div>
      </section>
    </main>
  );
}