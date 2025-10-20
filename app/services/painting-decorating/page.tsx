'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Palette, Shield, Clock, Award } from 'lucide-react';

const paintingServices = [
  'Exterior Painting',
  'Interior Painting',
  'Cabinet Painting',
  'Deck Painting',
  'Door Painting',
  'Drywall Painting',
  'Drywall Repair',
  'Faux Finishes',
  'Furniture Painting',
  'Mural Painting',
  'Speciality Design Painting',
  'Spray Painting',
  'Wallpaper Hanging',
  'Wallpaper Removal',
  'Wood Painting',
  'Wood Staining',
  'Wood Varnishing',
  'Venetian Plaster',
  'Textured Walls',
  'Floor Sanding',
  'Floor Varnishing',
  'Hand Painted Kitchens',
  'Hand Painted Wardrobes',
  'Bathroom Silicone Removal & Application',
  'Kitchen Silicone Removal & Application',
  'Commercial Painting',
  'Residential Painting',
  'Hotel Painting',
  'Pub Painting',
  'Newly Built House Painting'
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation & Quote',
    description: 'We assess your space, discuss your vision, and provide a detailed quote'
  },
  {
    step: '02',
    title: 'Preparation',
    description: 'Thorough surface preparation including cleaning, sanding, and priming'
  },
  {
    step: '03',
    title: 'Professional Application',
    description: 'Expert painting using premium materials and proven techniques'
  },
  {
    step: '04',
    title: 'Final Inspection',
    description: 'Quality check and cleanup to ensure perfect results'
  }
];

export default function PaintingDecoratingPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Palette className="w-8 h-8 text-alba-accent" />
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Painting & Decorating</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                Professional Painting
                <span className="block text-alba-accent italic">& Decorating</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                Transform your home with our expert painting and decorating services. From interior walls to exterior facades, 
                we deliver exceptional results using premium materials and proven techniques across London and Hertfordshire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Get Free Quote
                </Button>
                <Button variant="outline" className="btn-alba-secondary">
                  View Gallery
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-elegant">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional painting service"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Complete Painting & Decorating Services
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              From interior walls to specialty finishes, we handle every aspect of painting and decorating
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paintingServices.map((service, index) => {
              // Create URL-friendly slug from service name
              const serviceSlug = service.toLowerCase()
                .replace(/&/g, 'and')
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
              
              return (
                <Link 
                  key={index}
                  href={`/services/painting-decorating/${serviceSlug}`}
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
                Don't See Your Project Listed?
              </h3>
              <p className="text-alba-charcoal/70 mb-6">
                We handle all types of painting and decorating projects. Contact us to discuss your specific needs.
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

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Our Process
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              A systematic approach ensuring perfect results every time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-8 decorative-line">
                Why Choose Our
                <span className="block text-alba-accent italic">Painting Services</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-alba-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-primary mb-2">Quality Guarantee</h3>
                    <p className="text-alba-charcoal/70 text-sm">We stand behind our work with comprehensive warranties and satisfaction guarantees.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-alba-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-primary mb-2">Timely Completion</h3>
                    <p className="text-alba-charcoal/70 text-sm">Projects completed on schedule with minimal disruption to your daily routine.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-alba-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-alba-primary mb-2">Expert Craftsmen</h3>
                    <p className="text-alba-charcoal/70 text-sm">Skilled professionals with years of experience in residential and commercial painting.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-alba-primary p-8 rounded-2xl text-white">
              <h3 className="font-display text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-alba-cream/90 mb-6">
                Contact us today for a free consultation and detailed quote for your painting project.
              </p>
              <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold w-full">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}