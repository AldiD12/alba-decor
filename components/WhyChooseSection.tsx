import { Button } from '@/components/ui/button';

interface WhyChooseSectionProps {
  onGetQuote?: () => void;
}

const features = [
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'We use only the finest materials and paints, ensuring lasting beauty and durability for your space.',
  },
  {
    icon: '🎯',
    title: 'Transparent Pricing',
    description: 'No hidden costs or surprises. Our detailed estimates give you complete confidence in your investment.',
  },
  {
    icon: '🛡️',
    title: 'Fully Insured',
    description: 'Complete peace of mind with comprehensive insurance coverage for all our decorating projects.',
  },
  {
    icon: '⭐',
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every project with our commitment to excellence and customer satisfaction.',
  },
];

export default function WhyChooseSection({ onGetQuote }: WhyChooseSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-alba-primary via-alba-secondary to-alba-charcoal relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-alba-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-alba-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-alba-cream/5 rounded-full blur-xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Enhanced content section */}
          <div className="space-y-8">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-alba-gold to-alba-cream"></div>
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight decorative-line">
              Excellence in
              <span className="block text-alba-gold italic">Every Detail</span>
            </h2>
            
            <div className="space-y-6 text-alba-cream/90">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                Looking for expert decorators in London & Hertfordshire? Alba Decor Homes combines 
                artistry with craftsmanship to transform your vision into reality.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                With our commitment to quality, transparent pricing, and customer satisfaction, 
                we've become the trusted choice for discerning homeowners across the M25 corridor.
              </p>
            </div>

            {/* Enhanced CTA */}
            <div className="pt-6">
              <Button onClick={onGetQuote} className="bg-alba-accent hover:bg-alba-gold text-white border-2 border-alba-accent hover:border-alba-gold font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Get Your Free Consultation
              </Button>
            </div>
          </div>

          {/* Enhanced features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-alba-cream/20 hover:bg-white/15 hover:border-alba-gold/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon container */}
                <div className="w-16 h-16 bg-alba-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-alba-gold/30 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-alba-cream mb-4 group-hover:text-alba-gold transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-alba-cream/80 leading-relaxed text-sm group-hover:text-alba-cream transition-colors">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-alba-gold/30 to-transparent rounded-tr-2xl"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-alba-gold/5 to-alba-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats section */}
        <div className="mt-20 pt-16 border-t border-alba-cream/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-alba-gold mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-alba-cream/80 text-sm uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-alba-gold mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-alba-cream/80 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-alba-gold mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-alba-cream/80 text-sm uppercase tracking-wider">Satisfaction Rate</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-alba-gold mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-alba-cream/80 text-sm uppercase tracking-wider">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
