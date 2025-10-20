'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const serviceAreas = [
  'Barnet', 'Harrow', 'Enfield', 'Watford', 'Hatfield', 'Brentford', 
  'Hoddesdon', 'St Albans', 'Stevenage', 'Broxbourne', 'Potters Bar', 
  'Hertfordshire', 'Ealing', 'Hackney', 'Islington', 'Welwyn Garden City'
];

const serviceData = {
  name: 'Color Consultation',
  icon: '🎨',
  intro: 'Transform your space with expert color consultation services that create harmonious, beautiful interiors. Our professional color consultants help you select the perfect paint colors, finishes, and schemes that reflect your style while enhancing your home\'s natural light and architectural features across London and Hertfordshire.',
  serviceCards: [
    {
      title: 'Whole Home Color Schemes',
      description: 'Comprehensive color planning for entire homes ensuring flow and cohesion throughout all spaces.',
      features: ['Room-to-room coordination', 'Natural light assessment', 'Architectural consideration', 'Lifestyle integration', 'Trend awareness', 'Timeless appeal']
    },
    {
      title: 'Room-Specific Consultation',
      description: 'Focused color advice for individual rooms based on function, mood, and personal preferences.',
      features: ['Functional color psychology', 'Mood enhancement', 'Space optimization', 'Personal style reflection', 'Lighting consideration', 'Furniture coordination']
    },
    {
      title: 'Color Correction & Updates',
      description: 'Expert advice on updating existing color schemes and correcting color mistakes.',
      features: ['Problem solving', 'Trend updates', 'Accent color selection', 'Refresh strategies', 'Budget-conscious options', 'Quick transformations']
    }
  ],
  process: [
    { step: '01', title: 'Initial Assessment', description: 'Evaluate your space, lighting, and style preferences' },
    { step: '02', title: 'Color Development', description: 'Create custom color palettes and mood boards' },
    { step: '03', title: 'Sample Testing', description: 'Test colors in your actual lighting conditions' },
    { step: '04', title: 'Final Selection', description: 'Finalize colors with detailed paint specifications' }
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
      question: 'How long does a color consultation take?', 
      answer: 'Typically 2-3 hours for a comprehensive consultation, including room assessment, color development, and sample selection with detailed recommendations.' 
    },
    { 
      question: 'Do you provide paint samples for testing?', 
      answer: 'Yes, we provide carefully selected paint samples and guide you through proper testing techniques to ensure colors work in your specific lighting conditions.' 
    },
    { 
      question: 'Can you help coordinate colors with existing furniture?', 
      answer: 'Absolutely! We consider all existing elements including furniture, flooring, and fixtures to create a cohesive color scheme that works with your current pieces.' 
    },
    { 
      question: 'What if I don\'t like the recommended colors?', 
      answer: 'We work collaboratively to ensure you love the final selection. We\'ll adjust recommendations based on your feedback until we find the perfect colors for your space.' 
    },
    { 
      question: 'Do you provide specific paint brand and color codes?', 
      answer: 'Yes, we provide detailed specifications including exact paint colors, brands, finishes, and application instructions for easy implementation.' 
    },
    { 
      question: 'Can you help with exterior color selection too?', 
      answer: 'Yes, we offer exterior color consultation services considering architectural style, neighborhood context, and personal preferences for complete home coordination.' 
    },
    { 
      question: 'How much does a color consultation cost?', 
      answer: 'Our consultation fees vary based on project scope. Contact us for a detailed quote tailored to your specific needs and requirements.' 
    }
  ],
  testimonials: [
    { 
      name: 'Sophie Williams', 
      location: 'Hertford', 
      rating: 10, 
      text: 'The color consultation transformed our home completely. The expert advice helped us create a cohesive, beautiful space we absolutely love.' 
    },
    { 
      name: 'David Thompson', 
      location: 'Barnet', 
      rating: 10, 
      text: 'Professional color guidance that saved us from costly mistakes. The recommended palette works perfectly with our lifestyle and lighting.' 
    },
    { 
      name: 'Rachel Green', 
      location: 'Watford', 
      rating: 9, 
      text: 'Excellent service with detailed explanations of color choices. The consultation gave us confidence to proceed with our decorating project.' 
    }
  ]
};

export default function ColorConsultationPage() {
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
                Expert {serviceData.name}
                <span className="block text-alba-accent italic">in London & Hertfordshire</span>
              </h1>
              
              <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                {serviceData.intro}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetQuote} className="btn-alba-primary">
                  Book Consultation
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
              Our Consultation Process
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

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
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

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-alba-light-gray">
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

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready for Expert {serviceData.name}?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Book your professional color consultation and discover the perfect colors for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Book Consultation
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