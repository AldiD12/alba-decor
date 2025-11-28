// TEMPLATE B: TIER 2 (STANDARD) - For mid-tier services like Cabinet Painting, Wallpaper Hanging, Commercial Painting

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

// CUSTOMIZE THESE FOR EACH SERVICE
const serviceData = {
  name: '[SERVICE NAME]',
  icon: '🎨',
  intro: '[100-word intro with keywords]',
  serviceCards: [
    {
      title: '[Service Aspect 1]',
      description: '[Description]',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      title: '[Service Aspect 2]',
      description: '[Description]',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    }
  ],
  process: [
    { step: '01', title: '[Step 1]', description: '[Description]' },
    { step: '02', title: '[Step 2]', description: '[Description]' },
    { step: '03', title: '[Step 3]', description: '[Description]' }
  ],
  gallery: [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    // Add 3-5 more images
  ],
  faqs: [
    { question: '[FAQ 1]', answer: '[Answer 1]' },
    { question: '[FAQ 2]', answer: '[Answer 2]' },
    { question: '[FAQ 3]', answer: '[Answer 3]' },
    { question: '[FAQ 4]', answer: '[Answer 4]' }
  ]
};

export default function ServiceTier2Template() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-8 bg-alba-accent rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{serviceData.icon}</span>
              </div>
              <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">{serviceData.name}</span>
            </div>
            
            <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
              {serviceData.name}
              <span className="block text-alba-accent italic">London & Hertfordshire</span>
            </h1>
            
            <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              {serviceData.intro}
            </p>
            
            <div className="flex justify-center">
              <Button onClick={handleGetQuote} className="btn-alba-primary">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Breakdown - 2-3 Cards */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceData.serviceCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-4">{card.title}</h3>
                <p className="text-alba-charcoal/70 mb-6">{card.description}</p>
                <ul className="space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                      <Check className="w-4 h-4 text-alba-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basic Process */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              How We Work
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {serviceData.process.map((step, index) => (
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

      {/* Gallery - 4-6 Photos */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Recent Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceData.gallery.slice(0, 6).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1">
                <img
                  src={image}
                  alt={`${serviceData.name} project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - 4 Questions */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Common Questions
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {serviceData.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elegant overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-alba-cream/50 transition-colors"
                >
                  <h3 className="font-semibold text-alba-primary">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-alba-accent" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-alba-accent" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-alba-charcoal/80">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Areas We Serve
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1 text-center">
                <MapPin className="w-5 h-5 text-alba-accent mx-auto mb-2" />
                <p className="text-alba-charcoal font-medium text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Contact Alba Decor for professional {serviceData.name.toLowerCase()} services across London and Hertfordshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-alba-cream text-alba-cream hover:bg-alba-cream hover:text-alba-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call 07404 304224
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}