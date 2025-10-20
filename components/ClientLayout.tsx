'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import PageLoader from '@/components/PageLoader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useQuoteModal } from '@/hooks/useQuoteModal';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, openModal, closeModal } = useQuoteModal();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Listen for custom events from child components
  useEffect(() => {
    const handleOpenQuoteModal = () => {
      openModal();
    };

    window.addEventListener('openQuoteModal', handleOpenQuoteModal);
    
    return () => {
      window.removeEventListener('openQuoteModal', handleOpenQuoteModal);
    };
  }, [openModal]);

  // Handle page loading
  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {!isPageLoaded && <PageLoader />}
      <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header onGetQuote={openModal} />
        {children}
        <Footer onGetQuote={openModal} />
        <QuoteModal isOpen={isOpen} onClose={closeModal} />
        <WhatsAppButton />
      </div>
    </>
  );
}