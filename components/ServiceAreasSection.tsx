import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CoverageMap from '@/components/CoverageMap';

interface ServiceAreasSectionProps {
  onGetQuote?: () => void;
}

const serviceAreas = [
  { name: 'Barnet', region: 'North London', postcode: 'EN4, EN5' },
  { name: 'Watford', region: 'Hertfordshire', postcode: 'WD17-WD25' },
  { name: 'Hatfield', region: 'Hertfordshire', postcode: 'AL9, AL10' },
  { name: 'Brentford', region: 'West London', postcode: 'TW8' },
  { name: 'Hoddesdon', region: 'Hertfordshire', postcode: 'EN11' },
  { name: 'St Albans', region: 'Hertfordshire', postcode: 'AL1-AL4' },
  { name: 'Stevenage', region: 'Hertfordshire', postcode: 'SG1, SG2' },
  { name: 'Broxbourne', region: 'Hertfordshire', postcode: 'EN10' },
  { name: 'Potters Bar', region: 'Hertfordshire', postcode: 'EN6' },
  { name: 'Ealing', region: 'West London', postcode: 'W5, W13' },
  { name: 'Hackney', region: 'East London', postcode: 'E8, E9' },
  { name: 'Islington', region: 'North London', postcode: 'N1, N7' },
  { name: 'Welwyn Garden City', region: 'Hertfordshire', postcode: 'AL7, AL8' },
  { name: 'Camden Town', region: 'Central London', postcode: 'NW1' },
  { name: 'Redbridge', region: 'East London', postcode: 'IG1-IG6' },
  { name: 'Waltham Forest', region: 'East London', postcode: 'E10, E11, E17' },
  { name: 'Haringey', region: 'North London', postcode: 'N4, N8, N15, N17' },
  { name: 'Enfield', region: 'North London', postcode: 'EN1-EN3' },
  { name: 'Harrow', region: 'North West London', postcode: 'HA1-HA3' }
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
                    <div className="text-2xl font-bold text-alba-primary">19+</div>
                    <div className="text-xs text-alba-charcoal/70">Areas Covered</div>
                  </div>
                  <div className="text-center p-4 bg-alba-cream/50 rounded-lg">
                    <div className="text-2xl font-bold text-alba-accent">50+</div>
                    <div className="text-xs text-alba-charcoal/70">Postcodes</div>
                  </div>
                </div>

                {/* Coverage highlights */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 p-3 bg-alba-primary/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-primary rounded-full"></div>
                    <span className="text-sm font-medium text-alba-primary">Central London Areas</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-alba-secondary/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-secondary rounded-full"></div>
                    <span className="text-sm font-medium text-alba-secondary">North London Boroughs</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-alba-accent/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-accent rounded-full"></div>
                    <span className="text-sm font-medium text-alba-accent">Hertfordshire Towns</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-alba-gold/5 rounded-lg">
                    <div className="w-3 h-3 bg-alba-gold rounded-full"></div>
                    <span className="text-sm font-medium text-alba-gold">M25 Corridor</span>
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

            <p className="text-alba-charcoal/70 text-lg mb-10 leading-relaxed">
              Professional painting and decorating services across London, Hertfordshire, 
              and surrounding areas. Covering over 50+ postcodes with reliable, local service.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-h-80 overflow-y-auto pr-2">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-between group p-3 rounded-lg hover:bg-alba-cream/50 transition-colors border border-transparent hover:border-alba-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-alba-accent/10 rounded-full flex items-center justify-center group-hover:bg-alba-accent/20 transition-colors flex-shrink-0">
                      <Check className="w-3 h-3 text-alba-accent" />
                    </div>
                    <div>
                      <span className="text-alba-primary font-semibold text-sm group-hover:text-alba-accent transition-colors">
                        {area.name}
                      </span>
                      <div className="text-xs text-alba-charcoal/60">{area.region}</div>
                    </div>
                  </div>
                  <span className="text-xs text-alba-charcoal/50 font-mono">
                    {area.postcode}
                  </span>
                </div>
              ))}
            </div>

            {/* Coverage Summary */}
            <div className="bg-gradient-to-r from-alba-primary to-alba-secondary p-6 rounded-xl text-white mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📍</span>
                <h3 className="font-display text-xl font-bold">Complete M25 Coverage</h3>
              </div>
              <p className="text-alba-cream/90 mb-3">
                Serving 50+ postcodes across London & Hertfordshire with professional painting and decorating services.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-alba-gold/20 rounded text-xs font-medium">London Boroughs</span>
                <span className="px-2 py-1 bg-alba-gold/20 rounded text-xs font-medium">Hertfordshire</span>
                <span className="px-2 py-1 bg-alba-gold/20 rounded text-xs font-medium">M25 Corridor</span>
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
              <Button variant="outline" className="btn-alba-secondary">
                View All Locations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
