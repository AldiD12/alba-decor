'use client';

import { useState } from 'react';
import { X, Phone, Mail, MapPin, Calendar, Home, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    serviceType: '',
    projectDescription: '',
    timeframe: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }

      // Prepare template parameters
      const templateParams = {
        to_email: 'fjorentin@albadecor.co.uk',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        postcode: formData.postcode,
        service_type: formData.serviceType,
        project_description: formData.projectDescription,
        timeframe: formData.timeframe,
        budget: formData.budget,
        message: `
New Quote Request from Alba Decor Website

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Postcode: ${formData.postcode}

Project Details:
- Service Type: ${formData.serviceType}
- Timeframe: ${formData.timeframe}
- Budget: ${formData.budget}

Project Description:
${formData.projectDescription}
        `.trim(),
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Quote request sent successfully');
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          postcode: '',
          serviceType: '',
          projectDescription: '',
          timeframe: '',
          budget: '',
        });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('Sorry, there was an error sending your quote request. Please try calling us directly at 07404 304224.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-alba-primary to-alba-secondary p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-alba-gold transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Get Your Free Quote</h2>
            <p className="text-alba-cream/90">Tell us about your project and we'll provide a detailed estimate</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-alba-primary mb-2">Thank You!</h3>
              <p className="text-alba-charcoal/70 mb-4">
                Your quote request has been submitted successfully. We'll get back to you within 24 hours.
              </p>
              <p className="text-sm text-alba-charcoal/60">
                This window will close automatically...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-alba-primary mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-alba-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-alba-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-alba-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-alba-charcoal mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all"
                      placeholder="SW1A 1AA"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold text-alba-primary mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-alba-charcoal mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="interior-painting">Interior Painting</option>
                      <option value="exterior-painting">Exterior Painting</option>
                      <option value="decorating">Decorating & Design</option>
                      <option value="wallpaper">Wallpaper Installation</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-alba-charcoal mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your project in detail (rooms, size, current condition, specific requirements, etc.)"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-alba-charcoal mb-2">
                        Preferred Timeframe
                      </label>
                      <select
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all"
                      >
                        <option value="">Select timeframe</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-alba-charcoal mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-alba-cream rounded-lg focus:ring-2 focus:ring-alba-accent focus:border-transparent transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under £1,000</option>
                        <option value="1k-5k">£1,000 - £5,000</option>
                        <option value="5k-10k">£5,000 - £10,000</option>
                        <option value="10k-20k">£10,000 - £20,000</option>
                        <option value="over-20k">Over £20,000</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-alba-primary hover:bg-alba-secondary text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting your request...</span>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>Submit Quote Request</span>
                      <span className="text-lg">→</span>
                    </span>
                  )}
                </Button>
              </div>

              <p className="text-xs text-alba-charcoal/60 text-center">
                We'll review your request and get back to you within 24 hours with a detailed quote.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}