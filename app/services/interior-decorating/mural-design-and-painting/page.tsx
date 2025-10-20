'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone } from 'lucide-react';

export default function MuralDesignAndPaintingPage() {
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
              Mural Design & Painting
              <span className="block text-alba-accent italic">in London & Hertfordshire</span>
            </h1>
            <p className="text-body-mobile text-alba-charcoal/80 max-w-3xl mx-auto mb-8">
              Transform your walls into works of art with our bespoke mural design and painting services. Our talented artists create custom murals that tell your story, enhance your space, and provide unique focal points for homes and businesses.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-4">Children's Murals</h3>
              <p className="text-alba-charcoal/70 text-sm">Whimsical and educational designs perfect for nurseries and playrooms</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-4">Nature Scenes</h3>
              <p className="text-alba-charcoal/70 text-sm">Realistic landscapes and botanical designs that bring nature indoors</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-4">Abstract Art</h3>
              <p className="text-alba-charcoal/70 text-sm">Contemporary abstract designs and geometric patterns for modern spaces</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-4">Custom Themes</h3>
              <p className="text-alba-charcoal/70 text-sm">Personalized designs reflecting your interests, hobbies, and style</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">Ready for Custom Mural Design?</h2>
          <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
            Get Free Quote
          </Button>
        </div>
      </section>
    </main>
  );
}