// TIER 2 (STANDARD) - Wall Art and Murals Service

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
  name: 'Wall Art and Murals',
  icon: '🎨',
  intro: 'Transform your walls into stunning works of art with our custom mural and wall art services. We create bespoke painted murals, decorative artwork, and artistic wall treatments throughout London and Hertfordshire.',
  serviceCards: [
    {
      title: 'Custom Painted Murals',
      description: 'Bespoke mural designs created to your specifications, from landscapes to abstract art.',
      features: ['Custom design consultation', 'Hand-painted artwork', 'Any size or style']
    },
    {
      title: 'Decorative Wall Art',
      description: 'Artistic wall treatments including stenciling, decorative borders, and painted accents.',
      features: ['Stencil work and patterns', 'Decorative borders', 'Artistic accent walls']
    }
  ],
  process: [
    { step: '01', title: 'Design Consultation', description: 'Discuss your vision and create custom artwork concepts' },
    { step: '02', title: 'Sketch and Approval', description: 'Present design sketches for your approval' },
    { step: '03', title: 'Artistic Creation', description: 'Hand-paint your custom mural or wall art' }
  ],
  gallery: [
    'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  faqs: [
    { question: 'What types of murals do you create?', answer: 'We create all types of murals including landscapes, cityscapes, abstract art, children\'s themes, and custom designs based on your vision.' },
    { question: 'How long does a mural take to complete?', answer: 'Timeline varies by size and complexity, but most murals take 3-10 days to complete depending on detail level.' },
    { question: 'Can you work with my design ideas?', answer: 'Absolutely! We love working with client ideas and can adapt any concept into a beautiful painted mural.' },
    { question: 'Do you provide design services?', answer: 'Yes, we offer complete design consultation and can create original artwork concepts based on your preferences and space.' }
  ]
};

export default function WallArtAndMuralsPage() {
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
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Artistic Services</span>
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
              From concept to completion - creating your perfect wall art
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
              Our Artwork
            </h2>
            <p className="text-alba-charcoal/80">
              Examples of our custom murals and wall art projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Wall art and mural example ${index + 1}`}
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
              We provide wall art and mural services across London, Hertfordshire, and the M25 area
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
            Ready for Custom Wall Art?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Contact Alba Homes today for bespoke wall art and mural services in London and Hertfordshire.
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