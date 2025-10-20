'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const serviceAreas = [
  'Barnet', 'Harrow', 'Enfield', 'Watford', 'Hatfield', 'Brentford', 
  'Hoddesdon', 'St Albans', 'Stevenage', 'Broxbourne', 'Potters Bar', 
  'Hertfordshire', 'Ealing', 'Hackney', 'Islington', 'Welwyn Garden City', 
  'Camden Town', 'Redbridge', 'Waltham Forest', 'Haringey'
];

const serviceData = {
  name: 'Venetian Plaster',
  icon: '🎨',
  intro: 'Transform your walls with luxurious Venetian plaster finishes that add depth, texture, and elegance to any space. Our skilled artisans apply traditional Italian techniques using premium materials to create stunning polished surfaces that mimic natural marble and stone across London and Hertfordshire.',
  serviceCards: [
    {
      title: 'Classic Venetian Plaster',
      description: 'Traditional polished plaster technique creating marble-like surfaces with depth and luminosity.',
      features: ['Authentic Italian technique', 'Marble-like appearance', 'High-gloss finish', 'Durable surface', 'Unique patterns', 'Luxury appeal']
    },
    {
      title: 'Tinted Venetian Plaster',
      description: 'Custom colored plaster finishes to match your interior design scheme and personal preferences.',
      features: ['Custom color matching', 'Wide color palette', 'Consistent tinting', 'Design coordination', 'Unique effects', 'Professional application']
    },
    {
      title: 'Textured Venetian Finishes',
      description: 'Varied texture applications from smooth polished to rustic textured appearances.',
      features: ['Multiple texture options', 'Artistic variation', 'Custom patterns', 'Surface depth', 'Visual interest', 'Bespoke designs']
    }
  ],
  process: [
    { step: '01', title: 'Surface Preparation', description: 'Thorough wall preparation and priming for optimal adhesion' },
    { step: '02', title: 'Base Application', description: 'First coat application with proper drying time' },
    { step: '03', title: 'Texture Building', description: 'Multiple layers to create depth and pattern' },
    { step: '04', title: 'Polishing & Sealing', description: 'Final polishing and protective sealing for durability' }
  ],
  gallery: [
    'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585762/pexels-photo-6585762.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585766/pexels-photo-6585766.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  faqs: [
    { 
      question: 'What is Venetian plaster and how is it different from regular paint?', 
      answer: 'Venetian plaster is a decorative finish made from lime putty and marble dust that creates a polished, marble-like surface with depth and luminosity, unlike flat paint finishes.' 
    },
    { 
      question: 'How long does Venetian plaster application take?', 
      answer: 'Typically 3-5 days depending on the area size and number of coats required, with proper drying time between each application layer.' 
    },
    { 
      question: 'Is Venetian plaster suitable for bathrooms and kitchens?', 
      answer: 'Yes, when properly sealed, Venetian plaster is moisture-resistant and suitable for bathrooms and kitchens with appropriate protective coatings.' 
    },
    { 
      question: 'How do I maintain Venetian plaster walls?', 
      answer: 'Simple maintenance with gentle cleaning using a soft cloth and mild soap. The sealed surface is durable and easy to maintain with proper care.' 
    },
    { 
      question: 'Can Venetian plaster be applied over existing paint?', 
      answer: 'Yes, with proper surface preparation including cleaning, sanding, and priming, Venetian plaster can be applied over most existing painted surfaces.' 
    },
    { 
      question: 'What colors are available for Venetian plaster?', 
      answer: 'We offer a wide range of colors from natural earth tones to custom tinted options to match your specific design requirements and preferences.' 
    },
    { 
      question: 'Is Venetian plaster environmentally friendly?', 
      answer: 'Yes, traditional Venetian plaster is made from natural materials like lime and marble dust, making it an eco-friendly decorative option.' 
    }
  ],
  testimonials: [
    { 
      name: 'Victoria Sterling', 
      location: 'Hampstead', 
      rating: 10, 
      text: 'The Venetian plaster in our dining room is absolutely stunning. The depth and texture created by Alba Homes exceeded our expectations completely.' 
    },
    { 
      name: 'Marcus Chen', 
      location: 'St Albans', 
      rating: 10, 
      text: 'Exceptional craftsmanship on our feature wall. The Venetian plaster finish looks like real marble and has become the centerpiece of our living room.' 
    },
    { 
      name: 'Isabella Rodriguez', 
      location: 'Watford', 
      rating: 9, 
      text: 'Professional service from consultation to completion. The custom tinted Venetian plaster perfectly matches our interior design vision.' 
    }
  ]
};

export default function VenetianPlasterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
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
                <div className="w-8 h-8 bg-alba-accent rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{serviceData.icon}</span>
                </div>
                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">{serviceData.name}</span>
              </div>
              
              <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                {serviceData.name}
                <span className="block text-alba-accent italic">in London & Hertfordshire</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                {serviceData.intro}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Get Free Quote
                </Button>
                <Button variant="outline" className="btn-alba-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 07404 304224
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-elegant">
                <img
                  src={serviceData.gallery[0]}
                  alt={`Professional ${serviceData.name.toLowerCase()} service`}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Breakdown - 3 Cards */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Our {serviceData.name} Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Our Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Gallery - 8 Photos */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Our Work Gallery
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceData.gallery.slice(0, 8).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1">
                <img
                  src={image}
                  alt={`${serviceData.name} example ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - 7 Questions */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
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

      {/* Testimonials - 3 */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-elegant">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-alba-gold text-alba-gold" />
                    ))}
                  </div>
                  <span className="font-bold text-alba-primary">{testimonial.rating}/10</span>
                </div>
                <p className="text-alba-charcoal/80 mb-4">"{testimonial.text}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-alba-primary">{testimonial.name}</div>
                  <div className="text-alba-charcoal/60">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
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

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready for Luxury {serviceData.name}?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote for expert {serviceData.name.toLowerCase()} services across London and Hertfordshire.
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