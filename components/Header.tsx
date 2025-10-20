'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Star } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  onGetQuote?: () => void;
}

export default function Header({ onGetQuote }: HeaderProps) {
  return (
    <header className="bg-alba-warm-white/95 backdrop-blur-md border-b border-alba-cream sticky top-0 z-50 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Alba Decor Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity group">
            <img 
              src="/images/alba-decor-logo.png" 
              alt="Alba Decor Homes - Premium Interior Design" 
              className="h-28 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Enhanced Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-alba-accent hover:text-alba-gold transition-colors relative group">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-alba-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-sm font-semibold text-alba-charcoal hover:text-alba-accent transition-colors relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-alba-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-alba-charcoal hover:text-alba-accent transition-colors">
                SERVICES <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              
              {/* Services Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-elegant border border-alba-cream opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-sm font-medium text-alba-primary hover:bg-alba-cream rounded-lg transition-colors"
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services/painting-decorating"
                    className="block px-4 py-3 text-sm text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors"
                  >
                    Painting & Decorating
                  </Link>
                  <Link
                    href="/services/interior-decorating"
                    className="block px-4 py-3 text-sm text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors"
                  >
                    Interior Decorating
                  </Link>
                  <Link
                    href="/services/wallpaper-installation"
                    className="block px-4 py-3 text-sm text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors"
                  >
                    Wallpaper Installation
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-sm font-semibold text-alba-charcoal hover:text-alba-accent transition-colors relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-alba-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Enhanced Contact & CTA */}
          <div className="flex items-center gap-4">
            {/* Phone number */}
            <a 
              href="tel:07404304224" 
              className="hidden xl:flex items-center gap-2 bg-alba-cream/50 px-4 py-2 rounded-lg hover:bg-alba-cream transition-colors group"
            >
              <div className="w-8 h-8 bg-alba-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">📞</span>
              </div>
              <span className="text-sm font-semibold text-alba-primary">07404 304224</span>
            </a>

            {/* Enhanced rating badge */}
            <div className="hidden md:flex items-center gap-2 bg-alba-cream/50 rounded-lg px-3 py-2 hover:bg-alba-cream transition-colors">
              <div className="w-8 h-8 bg-alba-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">★</span>
              </div>
              <div>
                <div className="text-xs text-alba-charcoal/70">Rating</div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-alba-primary text-sm">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-alba-gold text-alba-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA button */}
            <Button 
              onClick={onGetQuote}
              className="btn-alba-primary hidden lg:flex"
            >
              Get Quote
            </Button>
            
            <MobileMenu onGetQuote={onGetQuote} />
          </div>
        </div>
      </div>
    </header>
  );
}
