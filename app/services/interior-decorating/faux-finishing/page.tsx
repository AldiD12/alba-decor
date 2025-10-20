// TIER 3 (BASIC) - Faux Finishing Service

'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone } from 'lucide-react';

const serviceAreas = [
  'Barnet', 'Harrow', 'Enfield', 'Watford', 'Hatfield', 'Brentford', 
  'Hoddesdon', 'St Albans', 'Stevenage', 'Broxbourne', 'Potters Bar', 
  'Hertfordshire', 'Ealing', 'Hackney', 'Islington', 'Welwyn Garden City', 
  'Camden Town', 'Redbridge', 'Waltham Forest', 'Haringey'
];

const serviceData = {
  name: 'Faux Finishing',
  icon: '🎭',
  intro: 'Create stunning decorative paint effects with our expert faux finishing services. We specialize in marble effects, wood graining, metallic finishes, and other artistic paint techniques throughout London and Hertfordshire.',
  serviceCard: {
    title: 'Professional Faux Finishing Techniques',
    description: 'Our skilled artisans create beautiful decorative paint effects that mimic natural materials and textures. From elegant marble effects to rustic wood graining, we bring artistic flair to your interior spaces.',
    features: [
      'Marble and stone effect finishes',
      'Wood graining and distressing techniques',
      'Metallic and pearl effect applications',
      'Custom decorative paint treatments'
    ]
  },
  process: [
    { step: '01', title: 'Technique Selection', description: 'Choose the perfect faux finish for your space' },
    { step: '02', title: 'Surface Preparation', description: 'Prepare walls for optimal finish application' },
    { step: '03', title: 'Artistic Application', description: 'Expert application of chosen faux finish technique' }
  ],
  benefits: [
    'Create unique and artistic wall treatments',
    'Achieve expensive material looks at lower cost',
    'Add texture and visual interest to plain walls',
    'Customize finishes to match your decor style'
  ]
};

export default function FauxFinishingPage() {
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
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Artistic Finishes</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-alba-gold to-alba-cream"></div>
            </div>
            
            <h1 className="font-display text-hero-mobile md:text-6xl font-bold mb-6 decorative-line">
              {serviceData.name}
              <span className="block text-alba-gold italic">in London & Hertfordshire</span>
            </h1>
            
            <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto leading-relaxed mb-8">
              {serviceData.intro}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
                Get Free Quote
              </Button>
              <Button variant="outline" className="border-2 border-alba-cream text-alba-cream bg-transparent hover:bg-alba-cream hover:text-alba-primary transition-all duration-300 font-semibold">
                <Phone className="w-4 h-4 mr-2" />Call 07404 304224
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-alba-gold/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{serviceData.icon}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-alba-primary">
                    {serviceData.serviceCard.title}
                  </h2>
                </div>
                
                <p className="text-alba-charcoal mb-8 leading-relaxed text-lg">
                  {serviceData.serviceCard.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceData.serviceCard.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-alba-accent flex-shrink-0" />
                      <span className="text-alba-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-alba-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Our Process
            </h2>
            <p className="text-alba-charcoal/80 text-lg">
              Professional faux finishing with artistic expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-alba-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-alba-cream font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-3 text-xl">{step.title}</h3>
                <p className="text-alba-charcoal/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-heading-mobile md:text-4xl font-bold text-alba-primary mb-12 text-center">
              Why Choose Faux Finishing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-alba-warm-white rounded-xl">
                  <Check className="w-6 h-6 text-alba-accent flex-shrink-0" />
                  <span className="text-alba-charcoal font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-alba-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-heading-mobile md:text-4xl font-bold text-alba-primary mb-8">
              Service Areas
            </h2>
            <p className="text-alba-charcoal/80 mb-12">
              We provide faux finishing services across London, Hertfordshire, and the M25 area
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-alba-charcoal">
                  <MapPin className="w-4 h-4 text-alba-accent flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready for Artistic Faux Finishes?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Contact Alba Homes today for expert faux finishing services in London and Hertfordshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-2 border-alba-cream text-alba-cream bg-transparent hover:bg-alba-cream hover:text-alba-primary transition-all duration-300 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Call 07404 304224
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}