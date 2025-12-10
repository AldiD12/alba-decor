'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import ClientsSection from '@/components/ClientsSection';

export default function Home() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main>
      <HeroSection onGetQuote={handleGetQuote} />
      <AboutSection onGetQuote={handleGetQuote} />
      <WhyChooseSection onGetQuote={handleGetQuote} />
      <ServicesSection onGetQuote={handleGetQuote} />
      <ServiceAreasSection onGetQuote={handleGetQuote} />
      <GoogleReviewsSection onGetQuote={handleGetQuote} />
      <ClientsSection onGetQuote={handleGetQuote} />
    </main>
  );
}
