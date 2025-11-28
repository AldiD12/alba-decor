import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Painting Services London | Alba Decor',
  description: 'Professional residential painting services in North London & Hertfordshire. Interior & exterior house painting, new builds, renovations. Quality painters serving Barnet, Enfield, Watford. Call 07404304224',
  keywords: 'residential painting London, house painters Hertfordshire, home painting services, interior exterior painting, new build painting, renovation painting, Barnet painters, Enfield decorators',
  openGraph: {
    title: 'Residential Painting Services London | Alba Decor',
    description: 'Professional residential painting services in North London & Hertfordshire. Interior & exterior house painting, new builds, renovations.',
    url: 'https://albadecor.co.uk/services/residential-painting',
  },
};

export default function ResidentialPainting() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Professional Residential Painting Services
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Transform your home with Alba Decor's comprehensive residential painting services. From single rooms to entire properties, new builds to period renovations, we deliver exceptional results that enhance your living space and add value to your property.
          </p>
        </header>

        {/* Why Choose Residential Specialists */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Choose Residential Painting Specialists
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Residential painting requires a different approach than commercial work. We understand the importance of your home environment, working around your family's schedule while maintaining the highest standards of cleanliness, professionalism, and quality.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Home-Focused Approach</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Minimal Disruption:</strong> We work around your family's routine and schedule</li>
                <li><strong>Dust Protection:</strong> Comprehensive covering and containment systems</li>
                <li><strong>Daily Cleanup:</strong> Your home stays liveable throughout the project</li>
                <li><strong>Flexible Scheduling:</strong> Evening and weekend work available when needed</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Quality & Value</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Premium Materials:</strong> High-quality paints that last longer and look better</li>
                <li><strong>Proper Preparation:</strong> Surface prep that ensures lasting results</li>
                <li><strong>Color Expertise:</strong> Professional advice on colors that work in your home</li>
                <li><strong>Property Value:</strong> Quality painting that enhances your home's worth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Residential Services */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Complete Residential Painting Solutions
          </h2>
          <p className="text-alba-charcoal/80 mb-8 leading-relaxed">
            Whether you're refreshing a single room, preparing for a special occasion, or undertaking a whole-house renovation, we provide comprehensive painting services tailored to residential properties.
          </p>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Interior Residential Painting</h3>
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                Complete interior painting services for all living spaces, from bedrooms and living rooms to kitchens and bathrooms. We handle everything from color consultation to final cleanup.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-alba-charcoal/70">
                <ul className="space-y-1">
                  <li>• Living rooms and dining rooms</li>
                  <li>• Bedrooms and nurseries</li>
                  <li>• Kitchens and utility rooms</li>
                  <li>• Bathrooms and en-suites</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Hallways and staircases</li>
                  <li>• Home offices and studies</li>
                  <li>• Basements and loft conversions</li>
                  <li>• Ceilings and feature walls</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Exterior House Painting</h3>
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                Protect and beautify your home's exterior with weather-resistant paints and expert application. We handle all exterior surfaces and provide long-lasting protection against the elements.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-alba-charcoal/70">
                <ul className="space-y-1">
                  <li>• External walls and render</li>
                  <li>• Windows and door frames</li>
                  <li>• Fascias and soffits</li>
                  <li>• Garden walls and boundaries</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Garage doors and outbuildings</li>
                  <li>• Decking and garden furniture</li>
                  <li>• Railings and metalwork</li>
                  <li>• Weatherproofing treatments</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">New Build & Renovation Projects</h3>
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                Specialized services for new construction and major renovations. We work with builders, architects, and homeowners to deliver perfect finishes for new and newly renovated homes.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-alba-charcoal/70">
                <ul className="space-y-1">
                  <li>• New build house painting</li>
                  <li>• Extension and conversion painting</li>
                  <li>• Post-renovation touch-ups</li>
                  <li>• Builder's cleans and final coats</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Coordination with other trades</li>
                  <li>• Schedule flexibility for project timelines</li>
                  <li>• Quality finishes for show homes</li>
                  <li>• Warranty and aftercare service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types We Serve */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            All Types of Residential Properties
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Our experience spans all types of residential properties across North London and Hertfordshire. Each property type has unique requirements, and we adapt our approach accordingly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-alba-warm-white p-6 rounded-xl">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Period Properties</h3>
              <p className="text-alba-charcoal/80 text-sm leading-relaxed mb-3">
                Victorian, Edwardian, and Georgian homes requiring specialist knowledge of traditional materials and appropriate color schemes.
              </p>
              <p className="text-xs text-alba-charcoal/60">Heritage colors, lime-based paints, period-appropriate finishes</p>
            </div>
            
            <div className="bg-alba-warm-white p-6 rounded-xl">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Modern Homes</h3>
              <p className="text-alba-charcoal/80 text-sm leading-relaxed mb-3">
                Contemporary properties with clean lines, open-plan living, and modern materials requiring precision and attention to detail.
              </p>
              <p className="text-xs text-alba-charcoal/60">Contemporary colors, smooth finishes, architectural features</p>
            </div>
            
            <div className="bg-alba-warm-white p-6 rounded-xl">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">New Builds</h3>
              <p className="text-alba-charcoal/80 text-sm leading-relaxed mb-3">
                Newly constructed homes requiring first-time decoration with proper preparation and high-quality finishes.
              </p>
              <p className="text-xs text-alba-charcoal/60">Builder coordination, warranty work, show home standards</p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Residential Painting Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            We follow a proven process that ensures excellent results while minimizing disruption to your home life. Every project is managed professionally from initial consultation to final cleanup.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Home Consultation & Quote</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We visit your home to assess the work, discuss your requirements, and provide a detailed written quote. This includes color advice and timeline planning.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Preparation & Protection</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Comprehensive protection of your furniture, floors, and belongings. Proper surface preparation including filling, sanding, and priming as needed.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Professional Application</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Expert painting using premium materials and proven techniques. Multiple coats applied with proper drying time between each application.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Quality Check & Cleanup</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Thorough quality inspection, touch-ups where needed, and complete cleanup. Your home is left spotless and ready to enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Serving North London & Hertfordshire Homes
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            We're proud to serve residential properties throughout North London and Hertfordshire, bringing professional painting services directly to your neighborhood.
          </p>
          
          <div className="bg-alba-cream p-6 rounded-xl">
            <div className="grid md:grid-cols-3 gap-4 text-alba-charcoal/80">
              <div>
                <h4 className="font-bold text-alba-primary mb-2">North London</h4>
                <ul className="text-sm space-y-1">
                  <li>• Barnet & High Barnet</li>
                  <li>• Enfield & Winchmore Hill</li>
                  <li>• Finchley & Golders Green</li>
                  <li>• Harrow & Pinner</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Hertfordshire</h4>
                <ul className="text-sm space-y-1">
                  <li>• Watford & Bushey</li>
                  <li>• St Albans & Harpenden</li>
                  <li>• Stevenage & Welwyn</li>
                  <li>• Hertford & Ware</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Surrounding Areas</h4>
                <ul className="text-sm space-y-1">
                  <li>• Potters Bar & Radlett</li>
                  <li>• Borehamwood & Elstree</li>
                  <li>• Rickmansworth & Chorleywood</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Get a free, no-obligation quote for your residential painting project. We'll visit your home, discuss your requirements, and provide a detailed written estimate with no hidden costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a 
              href="tel:07404304224" 
              className="inline-block bg-alba-gold hover:bg-alba-accent text-alba-primary px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center shadow-lg"
            >
              Call 07404 304224
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-alba-charcoal hover:bg-alba-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
            >
              Get Free Quote
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80 mb-4">
            Serving residential properties throughout North London & Hertfordshire
          </p>
          <p className="text-xs text-alba-cream/70">
            Interior painting • Exterior painting • New builds • Renovations • Period properties • Modern homes
          </p>
        </section>
      </article>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Painting Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Alba Decor",
              "telephone": "07404304224",
              "url": "https://albadecor.co.uk"
            },
            "areaServed": [
              "Barnet",
              "Enfield",
              "Watford",
              "St Albans",
              "Harrow",
              "Stevenage",
              "Hertfordshire",
              "North London",
              "London"
            ],
            "description": "Professional residential painting services for homes in North London and Hertfordshire. Interior and exterior house painting, new builds, renovations, and period properties."
          })
        }}
      />
    </main>
  );
}