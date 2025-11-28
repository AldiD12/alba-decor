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
  const [servicesOpen, setServicesOpen] = useState(false);

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
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className="flex-1 px-4 py-4 text-alba-primary font-semibold hover:bg-alba-cream rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    SERVICES
                  </Link>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="px-4 py-4 text-alba-primary hover:bg-alba-cream rounded-lg transition-colors"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {servicesOpen && (
                  <div className="grid grid-cols-2 gap-1 px-2 pb-2">
                    <Link
                      href="/services/interior-painting"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Interior Painting
                    </Link>
                    <Link
                      href="/services/exterior-painting"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Exterior Painting
                    </Link>
                    <Link
                      href="/services/cabinet-furniture-painting"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Cabinet Painting
                    </Link>
                    <Link
                      href="/services/decorative-finishes"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Decorative Finishes
                    </Link>
                    <Link
                      href="/services/wallpaper-services"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Wallpaper Services
                    </Link>
                    <Link
                      href="/services/wood-finishing"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Wood Finishing
                    </Link>
                    <Link
                      href="/services/floor-services"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Floor Services
                    </Link>
                    <Link
                      href="/services/silicone-sealing"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Silicone Sealing
                    </Link>
                    <Link
                      href="/services/commercial-painting"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Commercial
                    </Link>
                    <Link
                      href="/services/residential-painting"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Residential
                    </Link>
                    <Link
                      href="/services/spray-painting"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Spray Painting
                    </Link>
                    <Link
                      href="/services/color-consultation"
                      className="block px-3 py-2 text-alba-charcoal hover:bg-alba-cream rounded-lg transition-colors text-xs"
                      onClick={() => setIsOpen(false)}
                    >
                      Color Consultation
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Gallery */}
              <Link
                href="/gallery"
                className="px-4 py-4 text-alba-primary font-semibold hover:bg-alba-cream rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                GALLERY
              </Link>
              
              {/* Blog */}
              <Link
                href="/blog"
                className="px-4 py-4 text-alba-primary font-semibold hover:bg-alba-cream rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                BLOG
              </Link>
              
              {/* Areas Covered */}
              <Link
                href="/locations"
                className="px-4 py-4 text-alba-primary font-semibold hover:bg-alba-cream rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                AREAS COVERED
              </Link>
              
              {/* Contact */}
              <Link
                href="/contact"
                className="px-4 py-4 text-alba-primary font-semibold hover:bg-alba-cream rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>

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
