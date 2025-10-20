// TIER 1 (PREMIUM) - General Wallpaper Installation Service

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
  name: 'Professional Wallpaper Installation',
  icon: '📐',
  intro: 'Expert wallpaper installation services for residential and commercial properties. We provide professional hanging, pattern matching, and finishing for all types of wallpaper throughout London, Hertfordshire, and the M25 area with precision and attention to detail.',
  serviceCards: [
    {
      title: 'Residential Wallpaper Installation',
      description: 'Complete wallpaper installation for homes, including living rooms, bedrooms, dining rooms, and feature walls.',
      features: ['Pattern matching expertise', 'Smooth finish guarantee', 'Furniture protection', 'Clean installation process']
    },
    {
      title: 'Commercial Wallpaper Services',
      description: 'Professional wallpaper installation for offices, retail spaces, restaurants, and hospitality venues.',
      features: ['Minimal business disruption', 'Large-scale projects', 'Durable commercial wallpapers', 'Project management']
    },
    {
      title: 'Specialty Wallpaper Hanging',
      description: 'Expert installation of designer wallpapers, textured papers, and specialty materials requiring advanced techniques.',
      features: ['Designer wallpaper expertise', 'Textured and embossed papers', 'Metallic and foil wallpapers', 'Custom installations']
    }
  ],
  process: [
    { step: '01', title: 'Site Assessment', description: 'Measure walls and assess surface conditions for optimal preparation' },
    { step: '02', title: 'Surface Preparation', description: 'Prepare walls with proper priming and smoothing for perfect adhesion' },
    { step: '03', title: 'Pattern Planning', description: 'Plan wallpaper layout for seamless pattern matching and minimal waste' },
    { step: '04', title: 'Professional Installation', description: 'Expert hanging with precision cutting and perfect alignment' }
  ],
  gallery: [
    'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  faqs: [
    { question: 'What types of wallpaper can you install?', answer: 'We install all types including vinyl, paper, fabric, grasscloth, metallic, textured, and specialty designer wallpapers.' },
    { question: 'Do you provide wallpaper or do I need to purchase it?', answer: 'We can source wallpaper for you or install wallpaper you\'ve already purchased. We\'ll advise on quantities needed.' },
    { question: 'How long does wallpaper installation take?', answer: 'Most rooms take 1-2 days depending on size and wallpaper complexity. We\'ll provide accurate timelines during consultation.' },
    { question: 'Do you prepare the walls before installation?', answer: 'Yes, proper wall preparation is included in our service, including cleaning, priming, and smoothing as needed.' },
    { question: 'Can you match patterns across multiple walls?', answer: 'Absolutely! Pattern matching is one of our specialties, ensuring seamless flow across all walls and around corners.' },
    { question: 'What\'s included in your wallpaper installation service?', answer: 'Full service includes consultation, wall preparation, professional installation, pattern matching, trimming, and cleanup.' }
  ]
};

export default function WallpaperInstallationPage() {
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
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Wallpaper Services</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      <h3 className="font-display text-xl font-bold text-alba-primary">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-alba-charcoal mb-6 leading-relaxed text-sm">
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
              Our Installation Process
            </h2>
            <p className="text-alba-charcoal/80 text-lg">
              Professional wallpaper installation with precision and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-alba-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-alba-cream font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-3 text-lg">{step.title}</h3>
                <p className="text-alba-charcoal/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-4xl font-bold text-alba-primary mb-6">
              Our Wallpaper Projects
            </h2>
            <p className="text-alba-charcoal/80">
              Examples of our professional wallpaper installation work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Wallpaper installation example ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
              We provide wallpaper installation services across London, Hertfordshire, and the M25 area
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
            Ready for Professional Wallpaper Installation?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Contact Alba Homes today for expert wallpaper installation services in London and Hertfordshire.
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