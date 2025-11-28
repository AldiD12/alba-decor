'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// Lazy load the gallery component
const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => (
    <div className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-alba-warm-white animate-pulse rounded-xl h-64" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false
});

interface GalleryClientProps {
  galleryImages: Array<{
    src: string;
    alt: string;
    title: string;
    category: string;
  }>;
}

export default function GalleryClient({ galleryImages }: GalleryClientProps) {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-28 bg-gradient-to-br from-alba-primary via-alba-secondary to-alba-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-alba-accent/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-alba-gold to-alba-cream"></div>
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Our Work</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-alba-gold to-alba-cream"></div>
            </div>

            <h1 className="font-display text-hero-mobile md:text-6xl font-bold mb-6 decorative-line">
              Project
              <span className="block text-alba-gold italic">Gallery</span>
            </h1>

            <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore our portfolio of professional painting and decorating projects across London and Hertfordshire.
              Each project showcases our commitment to quality craftsmanship and attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <Gallery
        images={galleryImages}
        title="Recent Projects"
        description="Professional painting and decorating projects completed across London and Hertfordshire"
        columns={3}
        className="bg-white"
      />

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Join our satisfied customers and see your property featured in our next gallery showcase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}