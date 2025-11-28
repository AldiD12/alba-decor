import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ServicesSectionProps {
  onGetQuote?: () => void;
}

const services = [
  {
    title: 'Interior Painting',
    subtitle: 'Transform Your Living Spaces',
    description: 'Professional interior painting services for all rooms in your home with premium paints and expert application.',
    image: '/images/gallery/interior/interior-living-room-modern.webp',
    features: [
      'Living Rooms & Bedrooms',
      'Kitchens & Bathrooms',
      'Ceilings & Feature Walls',
      'Color Consultation'
    ],
    icon: '🎨',
    href: '/services/interior-painting'
  },
  {
    title: 'Exterior Painting',
    subtitle: 'Protect & Beautify Your Property',
    description: 'Weather-resistant exterior painting services that protect your property while enhancing curb appeal.',
    image: '/images/gallery/exterior/exterior-modern-home.webp',
    features: [
      'House Exteriors & Render',
      'Windows & Door Frames',
      'Fascias & Soffits',
      'Weather Protection'
    ],
    icon: '🏠',
    href: '/services/exterior-painting'
  },
  {
    title: 'Cabinet & Furniture',
    subtitle: 'Kitchen & Furniture Transformations',
    description: 'Hand-painted kitchen cabinets and furniture restoration with durable, beautiful finishes.',
    image: '/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp',
    features: [
      'Kitchen Cabinet Painting',
      'Wardrobe Transformations',
      'Furniture Restoration',
      'Custom Color Matching'
    ],
    icon: '🪑',
    href: '/services/cabinet-furniture-painting'
  },
  {
    title: 'Decorative Finishes',
    subtitle: 'Luxury Wall Treatments',
    description: 'Stunning decorative finishes including Venetian plaster, textured walls, and specialty techniques.',
    image: '/images/gallery/decorative/decorative-venetian-plaster.webp',
    features: [
      'Venetian Plaster',
      'Textured Walls',
      'Faux Finishes',
      'Feature Walls'
    ],
    icon: '✨',
    href: '/services/decorative-finishes'
  },
  {
    title: 'Wallpaper Services',
    subtitle: 'Expert Installation & Removal',
    description: 'Professional wallpaper hanging, removal, and repair services with precision pattern matching.',
    image: '/images/gallery/wallpaper/wallpaper-feature-wall-dining.webp',
    features: [
      'Professional Hanging',
      'Pattern Matching',
      'Wallpaper Removal',
      'Designer Papers'
    ],
    icon: '📐',
    href: '/services/wallpaper-services'
  },
  {
    title: 'Commercial Painting',
    subtitle: 'Business & Office Solutions',
    description: 'Professional painting services for offices, retail spaces, restaurants, and commercial properties.',
    image: '/images/gallery/commercial/commercial-office-space.webp',
    features: [
      'Offices & Retail Spaces',
      'Restaurants & Hotels',
      'Scheduled Maintenance',
      'Minimal Disruption'
    ],
    icon: '🏢',
    href: '/services/commercial-painting'
  }
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
          
          <p className="text-alba-charcoal/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From interior and exterior painting to decorative finishes and commercial services - we deliver exceptional results across North London and Hertfordshire.
          </p>
        </div>

        {/* Services grid - Mobile First Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image container - Mobile optimized */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} services by Alba Decor`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alba-primary/70 via-alba-primary/30 to-transparent" />
                
                {/* Service icon - Mobile friendly */}
                <div className="absolute top-3 right-3 w-10 h-10 sm:w-12 sm:h-12 bg-alba-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg sm:text-xl">{service.icon}</span>
                </div>
              </div>

              {/* Content - Mobile optimized spacing */}
              <div className="p-4 sm:p-6">
                {/* Title and subtitle */}
                <div className="mb-3">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-alba-primary group-hover:text-alba-accent transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-alba-accent font-medium">{service.subtitle}</p>
                </div>
                
                <p className="text-alba-charcoal/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features list - Compact for mobile */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-alba-charcoal/80">
                      <div className="w-1 h-1 bg-alba-accent rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="w-full text-sm border-alba-primary text-alba-primary hover:bg-alba-primary hover:text-white transition-all duration-200"
                >
                  <Link href={service.href}>
                    Learn More →
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button
            asChild
            variant="outline"
            className="border-2 border-alba-accent text-alba-accent hover:bg-alba-accent hover:text-white px-6 py-3 text-base font-semibold"
          >
            <Link href="/services">
              View All 12 Services →
            </Link>
          </Button>
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
