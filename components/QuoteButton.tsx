'use client';

import { Button } from '@/components/ui/button';

interface QuoteButtonProps {
  locationName?: string;
  className?: string;
  variant?: 'primary' | 'gold';
}

export function QuoteButton({ locationName, className, variant = 'primary' }: QuoteButtonProps) {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  const buttonText = locationName ? `Get Free ${locationName} Quote` : 'Get Free Quote';
  
  const buttonClass = variant === 'gold' 
    ? 'bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold'
    : 'btn-alba-primary';

  return (
    <Button onClick={handleGetQuote} className={`${buttonClass} ${className || ''}`}>
      {buttonText}
    </Button>
  );
}