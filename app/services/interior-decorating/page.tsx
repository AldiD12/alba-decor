'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Home, Lightbulb, Palette, Users } from 'lucide-react';

const interiorDecoratingServices = [
  'Venetian Plaster',
  'Decorative Wall Finishes',
  'Textured Wall Design',
  'Feature Wall Design',
  'Mural Design and Painting',
  'Hand-painted Kitchen Cabinets',
  'Hand-painted Wardrobes',
  'Custom Furniture Painting',
  'Color Consultation',
  'Interior Paint Color Selection',
  'Decorative Plasterwork',
  'Specialty Paint Finishes',
  'Faux Finishing',
  'Wall Art and Murals',
  'Bespoke Interior Painting',
  'Luxury Interior Finishes'
];

const designProcess = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We discuss your vision, lifestyle, and budget requirements'
  },
  {
    step: '02',
    title: 'Design Development',
    description: 'Create detailed plans, mood boards, and 3D visualizations'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Coordinate all aspects of the project from start to finish'
  },
  {
    step: '04',
    title: 'Final Styling',
    description: 'Add finishing touches and accessories for the perfect look'
  }
];

export default function InteriorDecoratingPage() {
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
                <Home className="w-8 h-8 text-alba-accent" />
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Interior Decorating</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                Interior Design
                <span className="block text-alba-accent italic">& Decorating</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                Create beautiful, functional spaces that reflect your personality and lifestyle. Our interior design 
                services combine aesthetic vision with practical solutions for homes across London and Hertfordshire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Start Your Project
                </Button>
                <Button variant="outline" className="btn-alba-secondary">
                  View Portfolio
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-elegant">
                <img
                  src="https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Interior design consultation"
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
              Interior Decorating Services
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Specialized decorative finishes and bespoke interior painting services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorDecoratingServices.map((service, index) => {
              // Create URL-friendly slug from service name
              const serviceSlug = service.toLowerCase()
                .replace(/&/g, 'and')
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
              
              return (
                <Link 
                  key={index}
                  href={`/services/interior-decorating/${serviceSlug}`}
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
                Looking for Something Unique?
              </h3>
              <p className="text-alba-charcoal/70 mb-6">
                We specialize in bespoke interior decorating projects. Contact us to discuss your vision.
              </p>
              <div className="flex justify-center">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Design Styles We Love
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              From contemporary to classic, we work with all design styles
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Modern', 'Traditional', 'Scandinavian', 'Industrial', 'Minimalist', 'Eclectic', 'Art Deco', 'Contemporary'].map((style, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-alba-primary">{style}</h3>
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
              Our Design Process
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              A collaborative approach to creating your perfect space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => (
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

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-8 decorative-line">
                Why Choose Our
                <span className="block text-alba-gold italic">Design Services</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Creative Solutions</h3>
                    <p className="text-alba-cream/80 text-sm">Innovative design ideas that maximize your space and budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Collaborative Approach</h3>
                    <p className="text-alba-cream/80 text-sm">We work closely with you to ensure the design reflects your vision.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Palette className="w-6 h-6 text-alba-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-cream mb-2">Attention to Detail</h3>
                    <p className="text-alba-cream/80 text-sm">Every element is carefully considered for a cohesive, beautiful result.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-alba-cream p-8 rounded-2xl text-alba-primary">
              <h3 className="font-display text-2xl font-bold mb-6">Ready to Transform Your Space?</h3>
              <p className="text-alba-charcoal/80 mb-6">
                Let's discuss your interior design project and create a space you'll love coming home to.
              </p>
              <Button onClick={handleGetQuote} className="bg-alba-accent hover:bg-alba-gold text-white font-semibold w-full">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}