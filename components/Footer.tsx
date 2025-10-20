import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onGetQuote?: () => void;
}

export default function Footer({ onGetQuote }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-alba-primary via-alba-secondary to-alba-charcoal text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-alba-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="/images/alba-decor-logo.png"
                alt="Alba Decor Homes - Premium Interior Design"
                className="h-16 w-auto mb-2"
              />
              <div className="text-alba-cream/80 text-sm">Premium Interior Design</div>
            </div>

            <p className="text-alba-cream/80 mb-8 leading-relaxed max-w-md">
              Transforming spaces across London and Hertfordshire with exceptional painting,
              decorating, and interior design services. Quality craftsmanship guaranteed.
            </p>

            {/* Enhanced contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-alba-accent/20 rounded-full flex items-center justify-center group-hover:bg-alba-accent/30 transition-colors">
                  <span className="text-alba-gold">📞</span>
                </div>
                <div>
                  <div className="text-alba-cream/60 text-sm">Phone</div>
                  <a href="tel:07404304224" className="text-alba-cream font-semibold hover:text-alba-gold transition-colors">
                    07404 304224
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-alba-accent/20 rounded-full flex items-center justify-center group-hover:bg-alba-accent/30 transition-colors">
                  <span className="text-alba-gold">✉️</span>
                </div>
                <div>
                  <div className="text-alba-cream/60 text-sm">Email</div>
                  <a href="mailto:fjorentin@albadecor.co.uk" className="text-alba-cream font-semibold hover:text-alba-gold transition-colors">
                    fjorentin@albadecor.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-alba-accent/20 rounded-full flex items-center justify-center group-hover:bg-alba-accent/30 transition-colors">
                  <span className="text-alba-gold">📍</span>
                </div>
                <div>
                  <div className="text-alba-cream/60 text-sm">Service Areas</div>
                  <div className="text-alba-cream font-semibold">London, Hertfordshire & M25</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-alba-gold decorative-line">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Interior Painting', href: '/painting' },
                { name: 'Decorating', href: '/decorating' },
                { name: 'Interior Design', href: '/interior-design' },
                { name: 'Wallpaper Installation', href: '/wallpaper' },
                { name: 'Color Consultation', href: '/consultation' },
                { name: 'Commercial Projects', href: '/commercial' },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-alba-cream/80 hover:text-alba-gold hover:translate-x-1 transition-all group"
                  >
                    <span className="text-alba-accent group-hover:text-alba-gold transition-colors">→</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-alba-gold decorative-line">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Get Quote', href: '/quote' },
                { name: 'Contact', href: '/contact' },
                { name: 'Blog', href: '/blog' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-alba-cream/80 hover:text-alba-gold hover:translate-x-1 transition-all group"
                  >
                    <span className="text-alba-accent group-hover:text-alba-gold transition-colors">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-alba-gold font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-alba-accent/20 rounded-full flex items-center justify-center hover:bg-alba-accent hover:scale-110 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-alba-accent/20 rounded-full flex items-center justify-center hover:bg-alba-accent hover:scale-110 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="border-t border-alba-cream/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-alba-cream/60 text-sm">
              © 2025 Alba Decor Homes. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-alba-cream/60">
              <Link href="/privacy" className="hover:text-alba-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-alba-gold transition-colors">Terms of Service</Link>
              <span>Made with ❤️ in London</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
