'use client';

import { useContext, createContext } from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import ClientsSection from '@/components/ClientsSection';

// Create a context to get the quote handler from ClientLayout
const QuoteContext = createContext<(() => void) | undefined>(undefined);

export default function Home() {
  // This will be injected by ClientLayout through context or props
  const handleGetQuote = () => {
    // This will be handled by the parent ClientLayout
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
      <ClientsSection onGetQuote={handleGetQuote} />
    </main>
  );
}
