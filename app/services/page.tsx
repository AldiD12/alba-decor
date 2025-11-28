'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Palette, Home, Wallpaper, Brush, Building, Droplets, TreePine, Sofa, Sparkles, Zap, Square } from 'lucide-react';

const services = [
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    icon: Palette,
    description: 'Transform your living spaces with professional interior painting services',
    features: [
      'Living rooms & bedrooms',
      'Kitchens & bathrooms',
      'Ceilings & feature walls',
      'Color consultation included',
      'Premium paint brands',
      'Clean & tidy service'
    ],
    image: '/images/gallery/interior/interior-living-room-modern.webp',
    href: '/services/interior-painting'
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    icon: Home,
    description: 'Protect and beautify your property with weather-resistant exterior painting',
    features: [
      'House exteriors & render',
      'Windows & door frames',
      'Fascias & soffits',
      'Weather protection',
      'Long-lasting finishes',
      'Surface preparation'
    ],
    image: '/images/gallery/exterior/exterior-modern-home.webp',
    href: '/services/exterior-painting'
  },
  {
    id: 'cabinet-furniture-painting',
    title: 'Cabinet & Furniture Painting',
    icon: Sofa,
    description: 'Transform kitchens and furniture with professional hand-painted finishes',
    features: [
      'Kitchen cabinet painting',
      'Wardrobe transformations',
      'Furniture restoration',
      'Custom color matching',
      'Durable finishes',
      'Spray & brush techniques'
    ],
    image: '/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp',
    href: '/services/cabinet-furniture-painting'
  },
  {
    id: 'decorative-finishes',
    title: 'Decorative Finishes',
    icon: Sparkles,
    description: 'Stunning decorative wall finishes and specialty paint techniques',
    features: [
      'Venetian plaster',
      'Textured walls',
      'Faux finishes',
      'Feature walls',
      'Murals & artwork',
      'Luxury finishes'
    ],
    image: '/images/gallery/decorative/decorative-venetian-plaster.webp',
    href: '/services/decorative-finishes'
  },
  {
    id: 'wallpaper-services',
    title: 'Wallpaper Services',
    icon: Wallpaper,
    description: 'Expert wallpaper installation, removal, and repair services',
    features: [
      'Professional hanging',
      'Pattern matching',
      'Wallpaper removal',
      'Surface preparation',
      'Designer wallpapers',
      'Feature walls'
    ],
    image: '/images/gallery/wallpaper/wallpaper-feature-wall-dining.webp',
    href: '/services/wallpaper-services'
  },
  {
    id: 'wood-finishing',
    title: 'Wood Finishing',
    icon: TreePine,
    description: 'Professional wood staining, varnishing, and restoration services',
    features: [
      'Wood staining & varnishing',
      'Furniture restoration',
      'Skirting & architrave',
      'Floor finishing',
      'Custom wood finishes',
      'Protective coatings'
    ],
    image: '/images/gallery/interior/interior-staircase-feature.webp',
    href: '/services/wood-finishing'
  },
  {
    id: 'floor-services',
    title: 'Floor Sanding & Varnishing',
    icon: Square,
    description: 'Restore and protect your wooden floors with professional sanding and finishing',
    features: [
      'Floor sanding & refinishing',
      'Staining & varnishing',
      'Floor restoration',
      'Protective coatings',
      'Dust-free sanding',
      'Quick turnaround'
    ],
    image: '/images/gallery/interior/interior-hallway-contemporary.webp',
    href: '/services/floor-services'
  },
  {
    id: 'silicone-sealing',
    title: 'Silicone Sealing',
    icon: Droplets,
    description: 'Professional silicone removal and application for kitchens and bathrooms',
    features: [
      'Bathroom sealing',
      'Kitchen sealing',
      'Silicone removal',
      'Mould prevention',
      'Waterproof sealing',
      'Clean finish'
    ],
    image: '/images/gallery/interior/interior-bathroom-luxury.webp',
    href: '/services/silicone-sealing'
  },
  {
    id: 'commercial-painting',
    title: 'Commercial Painting',
    icon: Building,
    description: 'Professional painting services for offices, retail, and commercial properties',
    features: [
      'Offices & retail spaces',
      'Restaurants & hotels',
      'Industrial facilities',
      'Scheduled maintenance',
      'Minimal disruption',
      'Quality finishes'
    ],
    image: '/images/gallery/commercial/commercial-office-space.webp',
    href: '/services/commercial-painting'
  },
  {
    id: 'residential-painting',
    title: 'Residential Painting',
    icon: Home,
    description: 'Comprehensive painting services for homes, new builds, and renovations',
    features: [
      'New build painting',
      'Home renovations',
      'Period properties',
      'Modern homes',
      'Interior & exterior',
      'Project coordination'
    ],
    image: '/images/gallery/exterior/exterior-period-property.webp',
    href: '/services/residential-painting'
  },
  {
    id: 'spray-painting',
    title: 'Spray Painting',
    icon: Zap,
    description: 'Professional spray painting for smooth, flawless finishes on various surfaces',
    features: [
      'Kitchen cabinets',
      'Furniture & doors',
      'Metal surfaces',
      'Large area coverage',
      'Smooth finishes',
      'Quick application'
    ],
    image: '/images/gallery/kitchen/kitchen-modern-transformation.webp',
    href: '/services/spray-painting'
  },
  {
    id: 'color-consultation',
    title: 'Color Consultation',
    icon: Brush,
    description: 'Professional color advice and design consultation to perfect your space',
    features: [
      'In-home consultation',
      'Color matching',
      'Design advice',
      'Paint selection',
      'Lighting assessment',
      'Style coordination'
    ],
    image: '/images/gallery/interior/interior-bedroom-elegant.webp',
    href: '/services/color-consultation'
  }
];

export default function ServicesPage() {
  const handleGetQuote = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-alba-primary via-alba-secondary to-alba-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-alba-accent/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-alba-gold to-alba-cream"></div>
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Our Services</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-alba-gold to-alba-cream"></div>
            </div>

            <h1 className="font-display text-hero-mobile md:text-6xl font-bold mb-6 decorative-line">
              Professional Services
              <span className="block text-alba-gold italic">for Your Home</span>
            </h1>

            <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto leading-relaxed mb-8">
              From painting and decorating to complete interior design, we provide comprehensive services
              to transform your space across London, Hertfordshire, and the M25 area.
            </p>

            <div className="flex justify-center">
              <Button onClick={handleGetQuote} className="bg-alba-cream text-alba-primary hover:bg-alba-gold hover:text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} services by Alba Decor`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-alba-gold rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-alba-primary mb-3 group-hover:text-alba-secondary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs text-alba-charcoal">
                          <Check className="w-3 h-3 text-alba-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA - Single Button */}
                    <div className="space-y-2">
                      <Button
                        asChild
                        className="w-full bg-alba-primary hover:bg-alba-secondary text-white border-0 h-10 font-semibold transition-all duration-200 text-sm"
                      >
                        <Link href={service.href} className="inline-flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Alba Decor */}
      <section className="py-20 md:py-28 bg-alba-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-8 decorative-line">
              Why Choose Alba Decor
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-2">Expert Craftsmanship</h3>
                <p className="text-alba-charcoal/70 text-sm">Years of experience delivering exceptional results</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-2">Premium Materials</h3>
                <p className="text-alba-charcoal/70 text-sm">Only the finest paints and materials for lasting quality</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-alba-primary mb-2">Complete Satisfaction</h3>
                <p className="text-alba-charcoal/70 text-sm">Guaranteed quality and customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-alba-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
            Get in touch today for a free consultation and discover how Alba Decor can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} className="bg-alba-gold hover:bg-alba-accent text-alba-primary font-semibold">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-2 border-alba-cream text-alba-cream bg-transparent hover:bg-alba-cream hover:text-alba-primary transition-all duration-300 font-semibold">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}