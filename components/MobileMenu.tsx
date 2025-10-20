'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  onGetQuote?: () => void;
}

export default function MobileMenu({ onGetQuote }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-alba-primary hover:text-alba-accent transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-32 left-0 right-0 bg-alba-warm-white z-50 shadow-elegant max-h-[calc(100vh-8rem)] overflow-y-auto animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-6 space-y-2">
              {/* Home */}
              <Link
                href="/"
                className="px-4 py-4 text-alba-accent font-semibold hover:bg-alba-cream rounded-lg transition-colors border-l-4 border-alba-accent"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              
              {/* About */}
              <button className="flex items-center justify-between px-4 py-4 text-alba-primary font-semibold hover:bg-alba-cream rounded-lg transition-colors">
                <span>ABOUT</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Services */}
              <div className="space-y-1">
                <Link
                  href="/services"
                  className="block px-4 py-4 text-alba-primary font-semibold hover:bg-alba-cream rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  ALL SERVICES
                </Link>
                <Link
                  href="/services/painting-decorating"
                  className="block px-6 py-3 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Painting & Decorating
                </Link>
                <Link
                  href="/services/interior-decorating"
                  className="block px-6 py-3 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Interior Decorating
                </Link>
                <Link
                  href="/services/wallpaper-installation"
                  className="block px-6 py-3 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Wallpaper Installation
                </Link>
              </div>
              


              {/* Contact Info */}
              <div className="border-t border-alba-cream pt-4 mt-4">
                <a 
                  href="tel:07404304224" 
                  className="flex items-center gap-3 px-4 py-3 text-alba-primary hover:bg-alba-cream rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5 text-alba-accent" />
                  <span className="font-semibold">07404 304224</span>
                </a>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  className="w-full bg-alba-primary hover:bg-alba-secondary text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all min-h-[52px] text-base"
                  onClick={() => {
                    setIsOpen(false);
                    onGetQuote?.();
                  }}
                >
                  GET FREE QUOTE
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
