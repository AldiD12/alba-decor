'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '07404 304224',
    description: 'Speak directly with our team for immediate assistance',
    action: 'tel:07404304224',
    buttonText: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'fjorentin@albadecor.co.uk',
    description: 'Send us your project details for a detailed response',
    action: 'mailto:info@albadecor.co.uk',
    buttonText: 'Send Email'
  },
  {
    icon: MessageSquare,
    title: 'Request Callback',
    details: 'Free Consultation',
    description: 'We\'ll call you back at your preferred time',
    action: '#',
    buttonText: 'Request Callback'
  }
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: '',
    message: '',
    preferredContact: 'phone'
  });

  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const breadcrumbItems = [
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <main className="pt-32">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-8 bg-alba-accent rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Contact Alba Homes</span>
            </div>

            <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
              Get Your Free Quote
              <span className="block text-alba-accent italic">Today</span>
            </h1>

            <p className="text-body-mobile text-alba-charcoal/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to transform your space? Contact our expert team for professional painting, decorating, and interior design services across London and Hertfordshire. Free consultations and competitive quotes available.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
              Get In Touch
            </h2>
            <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
              Choose your preferred way to contact us - we're here to help with your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-alba-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-alba-primary mb-2">{method.title}</h3>
                  <p className="text-alba-accent font-semibold text-lg mb-2">{method.details}</p>
                  <p className="text-alba-charcoal/70 text-sm mb-6">{method.description}</p>

                  {method.action === '#' ? (
                    <Button onClick={handleGetQuote} className="btn-alba-primary w-full">
                      {method.buttonText}
                    </Button>
                  ) : (
                    <Button asChild className="btn-alba-primary w-full">
                      <a href={method.action}>{method.buttonText}</a>
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Don't wait - contact Alba Homes today for your free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              <a href="tel:07404304224">
                <Phone className="w-4 h-4 mr-2" />
                Call 07404 304224
              </a>
            </Button>
            <Button onClick={handleGetQuote} variant="outline" className="border-alba-cream text-alba-primary hover:bg-alba-cream hover:text-alba-primary">
              Get Instant Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}