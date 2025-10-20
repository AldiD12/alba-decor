'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Wallpaper, Ruler, Scissors, Sparkles } from 'lucide-react';

const wallpaperServices = [
  'Wallpaper Hanging',
  'Wallpaper Removal',
  'Wallpaper Installation',
  'Feature Wall Wallpapering',
  'Commercial Wallpaper Installation',
  'Residential Wallpaper Services',
  'Wallpaper Repair',
  'Designer Wallpaper Hanging',
  'Vinyl Wallpaper Installation',
  'Textured Wallpaper',
  'Accent Wall Wallpaper'
];

const wallpaperTypes = [
  { name: 'Vinyl Wallpaper', description: 'Durable and easy to clean' },
  { name: 'Fabric Wallpaper', description: 'Luxurious texture and appearance' },
  { name: 'Grasscloth', description: 'Natural texture and warmth' },
  { name: 'Embossed Wallpaper', description: 'Raised patterns and designs' },
  { name: 'Foil Wallpaper', description: 'Metallic finishes and shine' },
  { name: 'Mural Wallpaper', description: 'Large-scale artistic designs' }
];

const installationProcess = [
  {
    step: '01',
    title: 'Surface Assessment',
    description: 'Evaluate walls and prepare surfaces for optimal adhesion'
  },
  {
    step: '02',
    title: 'Measurement & Planning',
    description: 'Precise measurements and pattern planning for perfect alignment'
  },
  {
    step: '03',
    title: 'Professional Installation',
    description: 'Expert hanging with attention to pattern matching and seams'
  },
  {
    step: '04',
    title: 'Quality Finishing',
    description: 'Final inspection and cleanup for flawless results'
  }
];

export default function WallpaperInstallationPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Wallpaper className="w-8 h-8 text-alba-accent" />
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Wallpaper Installation</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                Expert Wallpaper
                <span className="block text-alba-accent italic">Installation</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                Transform your walls with beautiful wallpaper professionally installed with precision and care. 
                From traditional patterns to modern designs, we handle all types of wallpaper across London and Hertfordshire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Get Installation Quote
                </Button>
                <Button variant="outline" className="btn-alba-secondary">
                  View Samples
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-elegant">
                <img
                  src="https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional wallpaper installation"
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
              Complete Wallpaper Services
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Professional wallpaper installation, removal, and repair services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wallpaperServices.map((service, index) => {
              // Create URL-friendly slug from service name
              const serviceSlug = service.toLowerCase()
                .replace(/&/g, 'and')
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
              
              return (
                <Link 
                  key={index}
                  href={`/services/wallpaper-installation/${serviceSlug}`}
                  className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-alba-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-alba-primary group-hover:text-alba-accent transition-colors">
                      {service}
                    </h3>
                  </div>
                  <div className="mt-3 text-sm text-alba-charcoal/70">
                    Professional {service.toLowerCase()} services across London & Hertfordshire
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-alba-cream p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">
                Need Custom Wallpaper Solutions?
              </h3>
              <p className="text-alba-charcoal/70 mb-6">
                We handle all types of wallpaper projects, from residential to commercial installations.
              </p>
              <div className="flex justify-center">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallpaper Types */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Wallpaper Types We Install
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Expertise with all wallpaper materials and styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wallpaperTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-alba-primary mb-2">{type.name}</h3>
                <p className="text-alba-charcoal/70 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Installation Process
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Meticulous attention to detail at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationProcess.map((step, index) => (
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

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-8 decorative-line">
                Why Choose Our
                <span className="block text-alba-gold italic">Wallpaper Experts</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Ruler className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Precision Installation</h3>
                    <p className="text-alba-cream/80 text-sm">Perfect pattern matching and seamless application every time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Scissors className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Expert Techniques</h3>
                    <p className="text-alba-cream/80 text-sm">Advanced methods for handling complex patterns and materials.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Flawless Finish</h3>
                    <p className="text-alba-cream/80 text-sm">Attention to detail that ensures a professional, lasting result.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-alba-cream p-8 rounded-2xl text-alba-primary">
              <h3 className="font-display text-2xl font-bold mb-6">Ready for Beautiful Wallpaper?</h3>
              <p className="text-alba-charcoal/80 mb-6">
                Get a quote for professional wallpaper installation that will transform your space.
              </p>
              <Button onClick={handleGetQuote} className="bg-alba-accent hover:bg-alba-gold text-white font-semibold w-full">
                Get Installation Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}