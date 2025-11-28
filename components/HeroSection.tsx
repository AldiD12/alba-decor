import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface HeroSectionProps {
  onGetQuote?: () => void;
}

export default function HeroSection({ onGetQuote }: HeroSectionProps) {
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);

  const handleQuoteClick = () => {
    setIsQuoteLoading(true);
    onGetQuote?.();
    // Reset loading state after modal opens
    setTimeout(() => setIsQuoteLoading(false), 500);
  };

  return (
    <section className="relative min-h-[600px] sm:h-[650px] md:h-[750px] lg:h-[850px] overflow-hidden">
      {/* SEO-optimized background image with proper alt text */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-kitchen.webp"
          alt="Professional painting and decorating services - Alba Decor kitchen transformation in London and Hertfordshire"
          className="w-full h-full object-cover hero-bg-mobile"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      {/* Mobile-optimized overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 sm:bg-gradient-to-br sm:from-alba-primary/75 sm:via-alba-secondary/55 sm:to-alba-charcoal/45" />

      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 bg-alba-gold/20 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-32 left-16 w-24 h-24 bg-alba-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative container mx-auto px-4 h-full flex items-center justify-center sm:justify-start py-8 sm:py-0">
        <div className="max-w-4xl text-center sm:text-left animate-in fade-in duration-1000">
          {/* Mobile-optimized badges */}
          <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
            <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-alba-primary text-xs sm:text-sm font-semibold tracking-wide uppercase border border-alba-gold/30 shadow-lg hover:shadow-xl transition-all">
              <span className="text-alba-gold mr-1">✓</span> Painting & Decorating
            </span>
            <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-alba-primary text-xs sm:text-sm font-semibold tracking-wide uppercase border border-alba-gold/30 shadow-lg hover:shadow-xl transition-all">
              <span className="text-alba-gold mr-1">✓</span> Interior Design
            </span>
            <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-alba-primary text-xs sm:text-sm font-semibold tracking-wide uppercase border border-alba-gold/30 shadow-lg hover:shadow-xl transition-all">
              <span className="text-alba-gold mr-1">✓</span> Wallpaper Installation
            </span>
          </div>

          {/* Responsive main heading with optimized mobile sizing */}
          <h1 className="font-display font-bold mb-6 sm:mb-8 text-white drop-shadow-2xl" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1.1' }}>
            ALBA <span className="block text-alba-gold italic drop-shadow-lg">DECOR</span>
          </h1>

          {/* Responsive subtitle with mobile optimization */}
          <h2 className="text-white font-bold mb-4 sm:mb-6 max-w-3xl" style={{ fontSize: 'clamp(1.125rem, 5vw, 1.5rem)', lineHeight: '1.3' }}>
            Professional Painting & Decorating in London & Hertfordshire
          </h2>

          {/* Responsive description with optimal readability */}
          <p className="text-white/90 mb-8 sm:mb-10 max-w-2xl font-light leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 4vw, 1.125rem)' }}>
            Expert painting, decorating, and interior design services across London, Hertfordshire, and the M25 area. Transform your space with our professional team.
          </p>

          {/* Mobile-optimized CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 max-w-sm sm:max-w-none mx-auto sm:mx-0">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              disabled={isQuoteLoading}
              className={`bg-alba-gold hover:bg-alba-accent text-alba-primary text-base sm:text-lg font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105 w-full sm:w-auto min-h-[56px] sm:min-h-[60px] ${isQuoteLoading ? 'btn-loading' : ''}`}
            >
              {isQuoteLoading ? 'Opening...' : '🎨 Get Free Quote'}
            </Button>
            <a
              href="tel:07404304224"
              className="bg-white/95 backdrop-blur-sm text-alba-primary border-2 border-white/50 hover:bg-white hover:border-alba-gold hover:text-alba-primary text-base sm:text-lg font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105 text-center flex items-center justify-center gap-3 w-full sm:w-auto min-h-[56px] sm:min-h-[60px]"
            >
              <span className="text-xl">📞</span> 
              <span>Call 07404 304224</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-alba-cream">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
