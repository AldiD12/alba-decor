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
  name: 'Hand Painted Kitchens',
  icon: '🏠',
  intro: 'Transform your kitchen with our expert hand painted kitchen services across London and Hertfordshire. Our skilled craftsmen specialize in breathing new life into your existing kitchen cabinets, doors, and units using premium paints and traditional techniques. From modern contemporary finishes to classic country styles, we deliver stunning results that rival expensive kitchen replacements at a fraction of the cost.',
  serviceCards: [
    {
      title: 'Cabinet Transformation',
      description: 'Complete cabinet makeover with professional preparation and premium finishes.',
      features: ['Deep cleaning & degreasing', 'Professional sanding', 'Primer application', 'Multiple paint coats', 'Protective topcoat', 'Hardware upgrade options']
    },
    {
      title: 'Door & Drawer Fronts',
      description: 'Specialized painting of kitchen doors and drawer fronts for a fresh new look.',
      features: ['Detailed edge painting', 'Smooth finish application', 'Color matching service', 'Shaker style expertise', 'Panel detail enhancement', 'Quick turnaround']
    },
    {
      title: 'Kitchen Islands & Units',
      description: 'Complete painting service for kitchen islands, pantries, and storage units.',
      features: ['Large surface expertise', 'Consistent color matching', 'Durable finish application', 'Custom color consultation', 'Protective coating', 'Professional cleanup']
    }
  ],
  process: [
    { step: '01', title: 'Assessment', description: 'Detailed kitchen evaluation and color consultation' },
    { step: '02', title: 'Preparation', description: 'Professional cleaning, sanding, and priming' },
    { step: '03', title: 'Painting', description: 'Multiple coats with premium kitchen paints' },
    { step: '04', title: 'Finishing', description: 'Protective topcoat and hardware reinstallation' }
  ],
  gallery: [
    'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  faqs: [
    { 
      question: 'How long does hand painting a kitchen take?', 
      answer: 'Typically 3-5 days depending on kitchen size and complexity. We work efficiently while ensuring quality results.' 
    },
    { 
      question: 'What type of paint do you use for kitchens?', 
      answer: 'We use premium kitchen-specific paints that are durable, easy to clean, and resistant to moisture and grease.' 
    },
    { 
      question: 'Can you paint over existing kitchen finishes?', 
      answer: 'Yes, we can paint over most existing finishes including laminate, wood, and previously painted surfaces with proper preparation.' 
    },
    { 
      question: 'Do you remove cabinet doors for painting?', 
      answer: 'Yes, we remove doors and drawer fronts to ensure the best finish quality and faster drying times.' 
    },
    { 
      question: 'What colors are available for kitchen painting?', 
      answer: 'We offer a full range of colors from classic whites and creams to bold contemporary shades. Custom color matching available.' 
    },
    { 
      question: 'How durable is hand painted kitchen finish?', 
      answer: 'With proper preparation and quality paints, our finishes last 8-10 years with normal kitchen use and proper care.' 
    },
    { 
      question: 'Do you provide a warranty on kitchen painting?', 
      answer: 'Yes, we provide a comprehensive warranty covering workmanship and paint quality for complete peace of mind.' 
    }
  ],
  testimonials: [
    { 
      name: 'Sarah Mitchell', 
      location: 'Hertford', 
      rating: 10, 
      text: 'Absolutely transformed our dated kitchen! The hand painted finish looks better than we ever imagined. Professional service from start to finish.' 
    },
    { 
      name: 'James Thompson', 
      location: 'Barnet', 
      rating: 10, 
      text: 'Outstanding workmanship on our kitchen cabinets. The attention to detail and quality of finish exceeded our expectations completely.' 
    },
    { 
      name: 'Emma Clarke', 
      location: 'Watford', 
      rating: 9, 
      text: 'Fantastic value compared to a full kitchen replacement. The team was professional, clean, and delivered exactly what they promised.' 
    }
  ]
};

export default function HandPaintedKitchensPage() {
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
            Ready for Professional {serviceData.name}?
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