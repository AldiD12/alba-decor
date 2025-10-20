'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Palette, Home, Wallpaper } from 'lucide-react';

const services = [
  {
    id: 'painting-decorating',
    title: 'Painting & Decorating',
    icon: Palette,
    description: 'Transform your space with professional painting and decorating services',
    features: [
      'Interior & Exterior Painting',
      'Color Consultation',
      'Surface Preparation',
      'Premium Paint Selection',
      'Protective Finishes',
      'Clean & Tidy Service'
    ],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/painting-decorating'
  },
  {
    id: 'interior-decorating',
    title: 'Interior Decorating',
    icon: Home,
    description: 'Complete interior design solutions tailored to your lifestyle',
    features: [
      'Space Planning & Design',
      'Color Scheme Development',
      'Furniture & Accessory Selection',
      'Lighting Design',
      'Style Coordination',
      'Project Management'
    ],
    image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/interior-decorating'
  },
  {
    id: 'wallpaper-installation',
    title: 'Wallpaper Installation',
    icon: Wallpaper,
    description: 'Expert wallpaper hanging with precision and attention to detail',
    features: [
      'Pattern Matching',
      'Surface Preparation',
      'Professional Installation',
      'Quality Materials',
      'Custom Wallpaper',
      'Removal Services'
    ],
    image: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/wallpaper-installation'
  }
];

export default function ServicesPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-alba-primary via-alba-secondary to-alba-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-alba-accent/10 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-alba-gold to-alba-cream"></div>
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Our Services</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-alba-gold to-alba-cream"></div>
            </div>
            
            <h1 className="font-display text-hero-mobile md:text-6xl font-bold mb-6 decorative-line">
              Professional Services
              <span className="block text-alba-gold italic">for Your Home</span>
            </h1>
            
            <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto leading-relaxed mb-8">
              From painting and decorating to complete interior design, we provide comprehensive services 
              to transform your space across London, Hertfordshire, and the M25 area.
            </p>
            
            <div className="flex justify-center">
              <Button onClick={handleGetQuote} className="bg-alba-cream text-alba-primary hover:bg-alba-gold hover:text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} services by Alba Homes`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-alba-gold rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-alba-primary mb-4 group-hover:text-alba-secondary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-alba-charcoal">
                          <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA - Centered Buttons */}
                    <div className="space-y-3">
                      <Button
                        onClick={handleGetQuote}
                        className="w-full bg-alba-primary hover:bg-alba-secondary text-white border-0 h-12 font-semibold transition-all duration-200"
                      >
                        Get Free Quote
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-12 border-2 border-alba-primary bg-white text-alba-primary hover:bg-alba-primary hover:text-white transition-all duration-200"
                      >
                        <a href={service.href} className="inline-flex items-center justify-center gap-2">
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Alba Homes */}
      <section className="py-20 md:py-28 bg-alba-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-8 decorative-line">
              Why Choose Alba Homes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-2">Expert Craftsmanship</h3>
                <p className="text-alba-charcoal/70 text-sm">Years of experience delivering exceptional results</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-2">Premium Materials</h3>
                <p className="text-alba-charcoal/70 text-sm">Only the finest paints and materials for lasting quality</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-2">Complete Satisfaction</h3>
                <p className="text-alba-charcoal/70 text-sm">Guaranteed quality and customer satisfaction</p>
              </div>
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
            Get in touch today for a free consultation and discover how Alba Homes can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-2 border-alba-cream text-alba-cream bg-transparent hover:bg-alba-cream hover:text-alba-primary transition-all duration-300 font-semibold">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}