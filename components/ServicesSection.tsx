import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ServicesSectionProps {
  onGetQuote?: () => void;
}

const services = [
  {
    title: 'Painting & Decorating',
    subtitle: 'Primary Service Category',
    description: 'We are professional painters and decorators serving London and Hertfordshire with comprehensive painting and decorating solutions.',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Interior & Exterior Painting',
      'Commercial & Residential', 
      'Cabinet & Furniture Painting',
      'Drywall & Wood Finishes'
    ],
    icon: '🎨',
    href: '/services/painting-decorating'
  },
  {
    title: 'Interior Decorating',
    subtitle: 'Specialty Design Services',
    description: 'Expert interior decorating with bespoke finishes and custom design solutions for discerning clients.',
    image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Venetian Plaster',
      'Decorative Wall Finishes',
      'Hand-Painted Kitchens',
      'Mural Design'
    ],
    icon: '✨',
    href: '/services/interior-decorating'
  },
  {
    title: 'Wallpaper Installation',
    subtitle: 'Professional Hanging & Removal',
    description: 'Precision wallpaper installation and removal services for residential and commercial properties.',
    image: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Professional Hanging',
      'Wallpaper Removal',
      'Feature Walls',
      'Commercial Installation'
    ],
    icon: '📐',
    href: '/services/wallpaper-installation'
  },
];

export default function ServicesSection({ onGetQuote }: ServicesSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-alba-warm-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-alba-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-alba-accent to-alba-gold"></div>
            <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Our Services</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-alba-accent to-alba-gold"></div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-alba-primary mb-6 decorative-line">
            Comprehensive Solutions
            <span className="block text-alba-accent italic">for Your Home or Business</span>
          </h2>
          
          <p className="text-alba-charcoal/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional services across painting, decorating, interior design, and wallpaper installation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alba-primary/80 via-alba-primary/40 to-transparent" />
                
                {/* Service number */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-alba-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Service Icon and Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-alba-primary group-hover:text-alba-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-alba-accent font-medium">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-alba-charcoal/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Services include label */}
                <h4 className="text-sm font-semibold text-alba-primary mb-3">Services include:</h4>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-alba-charcoal/80">
                      <div className="w-1.5 h-1.5 bg-alba-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="btn-alba-secondary w-full group-hover:bg-alba-primary group-hover:border-alba-primary group-hover:text-white"
                >
                  <Link href={service.href}>
                    View All {service.title} Services →
                  </Link>
                </Button>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-alba-gold/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button onClick={onGetQuote} className="btn-alba-primary text-lg px-8">
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
}
