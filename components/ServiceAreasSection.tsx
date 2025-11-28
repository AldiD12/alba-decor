import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CoverageMap from '@/components/CoverageMap';

interface ServiceAreasSectionProps {
  onGetQuote?: () => void;
}

const serviceAreas = [
  { name: 'Barnet', region: 'North London', postcode: 'EN5, N20' },
  { name: 'Potters Bar', region: 'Hertfordshire', postcode: 'EN6' },
  { name: 'Hadley Wood', region: 'North London', postcode: 'EN4' },
  { name: 'Totteridge', region: 'North London', postcode: 'N20' },
  { name: 'Enfield', region: 'North London', postcode: 'EN1-EN3' },
  { name: 'Cockfosters', region: 'North London', postcode: 'EN4' },
  { name: 'Southgate', region: 'North London', postcode: 'N14' },
  { name: 'Winchmore Hill', region: 'North London', postcode: 'N21' },
  { name: 'Cuffley', region: 'Hertfordshire', postcode: 'EN6' },
  { name: 'Northaw', region: 'Hertfordshire', postcode: 'EN6' },
  { name: 'St Albans', region: 'Hertfordshire', postcode: 'AL1-AL4' },
  { name: 'Watford', region: 'Hertfordshire', postcode: 'WD17-WD25' },
  { name: 'Brookmans Park', region: 'Hertfordshire', postcode: 'AL9' },
  { name: 'Waltham Cross', region: 'Hertfordshire', postcode: 'EN8' }
];

export default function ServiceAreasSection({ onGetQuote }: ServiceAreasSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-alba-light-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-alba-accent/5 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coverage Visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white p-8 h-[400px] md:h-[500px] rounded-2xl shadow-elegant relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #162F4F 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, #D4AF37 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-alba-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-alba-primary mb-2">
                    Service Coverage
                  </h3>
                  <p className="text-alba-charcoal/70 text-sm">
                    Professional painting & decorating across London & Hertfordshire
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-alba-cream/50 rounded-lg">
                    <div className="text-2xl font-bold text-alba-primary">14</div>
                    <div className="text-xs text-alba-charcoal/70">Premium Areas</div>
                  </div>
                  <div className="text-center p-4 bg-alba-cream/50 rounded-lg">
                    <div className="text-2xl font-bold text-alba-accent">25+</div>
                    <div className="text-xs text-alba-charcoal/70">Postcodes</div>
                  </div>
                </div>

                {/* Coverage highlights */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 p-3 bg-alba-primary/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-primary rounded-full"></div>
                    <span className="text-sm font-medium text-alba-primary">High-Value North London</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-alba-secondary/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-secondary rounded-full"></div>
                    <span className="text-sm font-medium text-alba-secondary">Premium Hertfordshire</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-alba-accent/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-accent rounded-full"></div>
                    <span className="text-sm font-medium text-alba-accent">Exclusive Villages</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-alba-gold/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-gold rounded-full"></div>
                    <span className="text-sm font-medium text-alba-gold">Wealthy Enclaves</span>
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-6 text-center">
                  <div className="text-xs text-alba-charcoal/60 mb-2">
                    Don't see your area? We cover additional locations.
                  </div>
                  <button className="text-alba-accent text-sm font-semibold hover:text-alba-gold transition-colors">
                    Check Your Postcode →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced content */}
          <div className="order-1 lg:order-2">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-alba-accent to-alba-gold"></div>
              <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Service Areas</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-8 decorative-line">
              Areas We
              <span className="block text-alba-accent italic">Cover</span>
            </h2>

            <p className="text-alba-charcoal/80 text-lg mb-6 leading-relaxed font-medium">
              Alba Decor provides professional painting and decorating services across North London and Hertfordshire. 
              We focus on premium areas where we can deliver exceptional service and build lasting relationships with discerning homeowners.
            </p>

            <p className="text-alba-charcoal/70 text-base mb-10 leading-relaxed">
              Specializing in high-value properties across the wealthy North London belt, from exclusive villages like Hadley Wood 
              and Totteridge to prestigious Hertfordshire locations including Cuffley and Brookmans Park.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-h-80 overflow-y-auto pr-2">
              {serviceAreas.map((area, index) => {
                // Create slug for areas that might have location pages
                const slug = area.name.toLowerCase().replace(/\s+/g, '-');
                // Check against actual location pages that exist
                const hasLocationPage = [
                  'potters-bar', 'barnet', 'hadley-wood', 'totteridge', 'enfield', 
                  'cockfosters', 'southgate', 'winchmore-hill', 'cuffley', 'northaw'
                ].includes(slug);
                
                const content = (
                  <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-alba-cream/50 transition-colors border border-transparent hover:border-alba-accent/20">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-alba-accent/10 rounded-full flex items-center justify-center group-hover:bg-alba-accent/20 transition-colors flex-shrink-0">
                        <Check className="w-3 h-3 text-alba-accent" />
                      </div>
                      <div>
                        <span className="text-alba-primary font-semibold text-sm group-hover:text-alba-accent transition-colors">
                          Painters in {area.name}
                        </span>
                        <div className="text-xs text-alba-charcoal/60">{area.region}</div>
                      </div>
                    </div>
                    <span className="text-xs text-alba-charcoal/50 font-mono">
                      {area.postcode}
                    </span>
                  </div>
                );

                return hasLocationPage ? (
                  <a key={index} href={`/locations/${slug}`} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Coverage Summary */}
            <div className="bg-gradient-to-r from-alba-primary to-alba-secondary p-6 rounded-xl text-white mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💎</span>
                <h3 className="font-display text-xl font-bold">Premium Service Areas</h3>
              </div>
              <p className="text-alba-cream/90 mb-3">
                Focused coverage across North London's most desirable areas and premium Hertfordshire locations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-alba-gold/20 rounded text-xs font-medium">High-Value Properties</span>
                <span className="px-2 py-1 bg-alba-gold/20 rounded text-xs font-medium">Exclusive Villages</span>
                <span className="px-2 py-1 bg-alba-gold/20 rounded text-xs font-medium">Premium Postcodes</span>
              </div>
            </div>

            {/* Don't see your area */}
            <div className="bg-alba-cream p-4 rounded-lg border-l-4 border-alba-accent">
              <p className="text-alba-charcoal text-sm">
                <strong>Don't see your area?</strong> We cover additional locations within the M25. 
                Contact us to confirm service availability in your postcode.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button onClick={onGetQuote} className="btn-alba-primary">
                Get Quote for Your Area
              </Button>
              <Button variant="outline" className="btn-alba-secondary" asChild>
                <a href="/locations">
                  All Painting Services by Location
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
