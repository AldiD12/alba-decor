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
  name: 'Wallpaper Hanging',
  icon: '🏠',
  intro: 'Professional wallpaper hanging services that transform your walls with precision and care. Our expert craftsmen ensure perfect pattern matching, seamless joins, and bubble-free application for all types of wallpaper across London and Hertfordshire, delivering stunning results that enhance your interior spaces.',
  serviceCards: [
    {
      title: 'Pattern Matching Excellence',
      description: 'Precise pattern alignment and matching for seamless, professional wallpaper installation.',
      features: ['Perfect pattern alignment', 'Seamless pattern flow', 'Minimal waste calculation', 'Professional measuring', 'Complex pattern handling', 'Quality assurance']
    },
    {
      title: 'All Wallpaper Types',
      description: 'Expert installation of traditional, vinyl, textured, and designer wallpapers.',
      features: ['Traditional wallpapers', 'Vinyl installations', 'Textured materials', 'Designer collections', 'Custom wallpapers', 'Specialty finishes']
    },
    {
      title: 'Surface Preparation',
      description: 'Thorough wall preparation ensuring optimal adhesion and long-lasting results.',
      features: ['Wall assessment', 'Surface cleaning', 'Primer application', 'Repair work', 'Smooth finish prep', 'Proper sizing']
    }
  ],
  process: [
    { step: '01', title: 'Wall Assessment', description: 'Evaluate wall condition and prepare surfaces for installation' },
    { step: '02', title: 'Measurement & Planning', description: 'Precise measurements and pattern planning for optimal results' },
    { step: '03', title: 'Professional Hanging', description: 'Expert installation with perfect pattern matching' },
    { step: '04', title: 'Quality Finishing', description: 'Final inspection and cleanup for flawless results' }
  ],
  gallery: [
    'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585762/pexels-photo-6585762.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  faqs: [
    { 
      question: 'How long does wallpaper hanging take?', 
      answer: 'Installation time varies by room size and wallpaper complexity, typically 1-2 days for an average room with proper preparation and drying time.' 
    },
    { 
      question: 'Do you provide wallpaper or do I need to purchase it?', 
      answer: 'We can source wallpaper for you or work with wallpaper you\'ve already purchased. We\'ll advise on quantities needed to minimize waste.' 
    },
    { 
      question: 'Can you hang wallpaper over existing paint?', 
      answer: 'Yes, with proper surface preparation including cleaning, light sanding, and priming, we can install wallpaper over most painted surfaces.' 
    },
    { 
      question: 'What about pattern matching on complex designs?', 
      answer: 'We specialize in complex pattern matching, ensuring seamless alignment across all walls for professional, cohesive results.' 
    },
    { 
      question: 'Do you handle wallpaper repairs if needed later?', 
      answer: 'Yes, we provide wallpaper repair services for tears, lifting edges, or damaged sections to maintain your wallpaper\'s appearance.' 
    },
    { 
      question: 'How do you ensure bubble-free installation?', 
      answer: 'We use professional techniques including proper adhesive application, smoothing tools, and controlled drying conditions to prevent bubbles.' 
    },
    { 
      question: 'What preparation is needed before installation?', 
      answer: 'We handle all preparation including wall cleaning, repairs, priming, and ensuring surfaces are smooth and ready for wallpaper application.' 
    }
  ],
  testimonials: [
    { 
      name: 'Catherine Mills', 
      location: 'Hertford', 
      rating: 10, 
      text: 'Absolutely perfect wallpaper installation! The pattern matching is flawless and the attention to detail exceeded our expectations completely.' 
    },
    { 
      name: 'Robert Davies', 
      location: 'Barnet', 
      rating: 10, 
      text: 'Professional service from start to finish. The complex pattern in our dining room was handled expertly with seamless results.' 
    },
    { 
      name: 'Amanda Foster', 
      location: 'Watford', 
      rating: 9, 
      text: 'Excellent workmanship and clean installation. The team was professional, efficient, and delivered exactly what they promised.' 
    }
  ]
};

export default function WallpaperHangingPage() {
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
              Our Installation Process
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
            Ready for Expert {serviceData.name}?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote for professional {serviceData.name.toLowerCase()} services across London and Hertfordshire.
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