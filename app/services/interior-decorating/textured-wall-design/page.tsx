// TIER 2 (STANDARD) - Textured Wall Design Service

'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const serviceAreas = [
  'Barnet', 'Harrow', 'Enfield', 'Watford', 'Hatfield', 'Brentford', 
  'Hoddesdon', 'St Albans', 'Stevenage', 'Broxbourne', 'Potters Bar', 
  'Hertfordshire', 'Ealing', 'Hackney', 'Islington', 'Welwyn Garden City', 
  'Camden Town', 'Redbridge', 'Waltham Forest', 'Haringey'
];

const serviceData = {
  name: 'Textured Wall Design',
  icon: '🎨',
  intro: 'Create stunning visual impact with our expert textured wall design services. We specialize in decorative wall textures, dimensional finishes, and artistic wall treatments that add depth and character to your interior spaces throughout London and Hertfordshire.',
  serviceCards: [
    {
      title: 'Decorative Wall Textures',
      description: 'Professional application of various textural finishes to create visual interest and tactile appeal.',
      features: ['Venetian plaster effects', 'Stucco and render finishes', 'Brushed and combed textures']
    },
    {
      title: 'Dimensional Wall Features',
      description: 'Three-dimensional wall treatments that create dramatic focal points and architectural interest.',
      features: ['Raised panel effects', 'Geometric patterns', 'Custom relief designs']
    }
  ],
  process: [
    { step: '01', title: 'Design Consultation', description: 'Discuss texture options and design vision for your space' },
    { step: '02', title: 'Surface Preparation', description: 'Prepare walls for optimal texture application' },
    { step: '03', title: 'Texture Application', description: 'Expert application of chosen textural finish' }
  ],
  gallery: [
    'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  faqs: [
    { question: 'What types of wall textures do you offer?', answer: 'We offer a wide range including Venetian plaster, stucco, brushed textures, geometric patterns, and custom decorative finishes.' },
    { question: 'How long does textured wall application take?', answer: 'Depending on the complexity and room size, most projects take 2-4 days including preparation and drying time.' },
    { question: 'Can textured walls be painted over later?', answer: 'Yes, most textured finishes can be painted over, though some specialty finishes are designed to remain in their natural state.' },
    { question: 'Do you provide design consultation?', answer: 'Absolutely! We offer comprehensive design consultation to help you choose the perfect texture for your space and style.' }
  ]
};

export default function TexturedWallDesignPage() {
  const [activeService, setActiveService] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Interior Design</span>
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

      {/* Service Cards */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceData.serviceCards.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-alba-gold/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{serviceData.icon}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-alba-primary">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-alba-charcoal mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-alba-charcoal">
                          <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
              Professional approach to textured wall design
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

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-4xl font-bold text-alba-primary mb-6">
              Our Work
            </h2>
            <p className="text-alba-charcoal/80">
              Examples of our textured wall design projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Textured wall design example ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-heading-mobile md:text-4xl font-bold text-alba-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {serviceData.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-alba-warm-white/50 transition-colors"
                  >
                    <span className="font-semibold text-alba-primary">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-alba-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-alba-accent" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-alba-charcoal/80">{faq.answer}</p>
                    </div>
                  )}
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
              We provide textured wall design services across London, Hertfordshire, and the M25 area
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
            Ready for Stunning Textured Walls?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Contact Alba Homes today for expert textured wall design services in London and Hertfordshire.
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