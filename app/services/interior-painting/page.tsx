import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Painting Services London & Hertfordshire | Alba Decor',
  description: 'Professional interior painting services in North London and Hertfordshire. Expert painting for walls, ceilings, doors, trim and woodwork. Free quotes. Call 07404304224',
  keywords: 'interior painting London, interior painters Hertfordshire, wall painting, ceiling painting, door painting, trim painting, drywall painting, Barnet painters, Enfield decorators',
  openGraph: {
    title: 'Interior Painting Services London & Hertfordshire | Alba Decor',
    description: 'Professional interior painting services in North London and Hertfordshire. Expert painting for walls, ceilings, doors, trim and woodwork.',
    url: 'https://albadecor.co.uk/services/interior-painting',
  },
};

export default function InteriorPainting() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Interior Painting Services in North London & Hertfordshire
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed">
            Transform your home with professional interior painting from Alba Decor. Serving Barnet, Enfield, Watford, and surrounding areas, we deliver flawless finishes on walls, ceilings, doors, trim, and all interior surfaces.
          </p>
        </header>

        {/* Main Content - Service Overview */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Comprehensive Interior Painting Solutions
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Our interior painting service covers every surface in your home. Whether you're refreshing a single room or redecorating your entire property, we handle everything from preparation to final coat with meticulous attention to detail.
          </p>
          <p className="text-alba-charcoal/80 mb-8 leading-relaxed">
            We specialize in painting walls, ceilings, doors, window frames, skirting boards, architraves, and all interior woodwork. Our team works with both modern and period properties across North London and Hertfordshire, understanding the unique requirements of different building types.
          </p>

          <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">What We Paint</h3>
          <ul className="space-y-3 text-alba-charcoal/80">
            <li><strong className="text-alba-primary">Walls:</strong> Smooth finishes on plaster, drywall, and previously painted surfaces</li>
            <li><strong className="text-alba-primary">Ceilings:</strong> Even coverage without drips or roller marks</li>
            <li><strong className="text-alba-primary">Doors:</strong> Interior doors, French doors, and panel doors with smooth brush finishes</li>
            <li><strong className="text-alba-primary">Trim & Woodwork:</strong> Skirting boards, architraves, window frames, and dado rails</li>
            <li><strong className="text-alba-primary">Drywall:</strong> New drywall painting and repairs to damaged areas</li>
            <li><strong className="text-alba-primary">Staircases:</strong> Banisters, spindles, and staircase walls</li>
          </ul>
        </section>

        {/* Our Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Interior Painting Process
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">1. Surface Preparation</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Proper preparation is 80% of a quality paint job. We start by protecting your furniture and flooring with quality dust sheets. We then fill cracks, repair damaged plaster or drywall, and sand surfaces smooth. Any mold or damp issues are treated before painting begins.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">2. Priming & Undercoating</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                We apply appropriate primers for different surfaces - stain-blocking primers for water damage, wood primers for bare timber, and bonding primers for glossy surfaces. This ensures your topcoat adheres properly and lasts for years.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">3. Professional Application</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                We use premium Dulux and Crown paints, applying multiple coats for durability and depth of color. Large wall areas are rollered for efficiency, while edges, corners, and woodwork receive careful brush work for crisp lines. We work room by room to minimize disruption to your daily life.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">4. Clean Finish</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                We clean up thoroughly each day, leaving your home tidy. Once painting is complete, we remove all protection, clean any paint spots, and leave you with a fresh, beautifully painted interior.
              </p>
            </div>
          </div>
        </section>

        {/* Common Issues We Solve */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Common Interior Painting Challenges We Solve
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Uneven Walls & Ceilings</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Many North London properties have old plaster with bumps and imperfections. We don't just paint over problems - we fill, sand, and prepare surfaces properly so your walls look smooth and professional.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Drywall Repairs</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Holes from picture hooks, cracks from settling, or water damage all need proper repair before painting. We patch drywall seamlessly, feathering edges so repairs are invisible after painting.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Color Matching</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Need to match existing colors for touch-ups or adjacent rooms? We can color-match from samples or work with your chosen paint codes to ensure perfect consistency.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Dark to Light Color Changes</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Painting over dark colors requires extra coats and proper primers. We plan this into our process so you get full coverage without the old color showing through.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas & Specialties */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Interior Painting Throughout North London & Hertfordshire
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            We serve homeowners and landlords across Barnet, Enfield, Harrow, Watford, St Albans, Stevenage, and surrounding areas. From Victorian terraces in Barnet to modern apartments in Watford, we understand the specific needs of different property types in our region.
          </p>
          <p className="text-alba-charcoal/80 leading-relaxed">
            Whether you're preparing a rental property between tenants, refreshing your family home, or doing a complete renovation, our interior painting service delivers professional results on time and within budget.
          </p>
        </section>

        {/* Pricing & Timeline */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">What to Expect</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Timeline</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Most single rooms take 1-2 days including drying time. A full 3-bedroom house typically takes 5-7 days. We'll give you an accurate timeline during your free quote.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Investment</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Interior painting costs vary based on room size, ceiling height, surface condition, and paint quality. We provide transparent, detailed quotes with no hidden costs. Most customers find our prices competitive while our quality exceeds expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Choose Alba Decor for Interior Painting
          </h2>
          <ul className="space-y-3 text-alba-charcoal/80">
            <li>✓ 15+ years combined experience in decorating</li>
            <li>✓ Fully insured and professional service</li>
            <li>✓ Clean, tidy work practices - we respect your home</li>
            <li>✓ Premium Dulux and Crown paints as standard</li>
            <li>✓ Honest quotes with no hidden costs</li>
            <li>✓ Family-run business based in North London</li>
            <li>✓ Excellent reviews from local customers</li>
          </ul>
          <p className="text-alba-charcoal/80 mt-6 leading-relaxed">
            We take pride in our work and treat every home as if it were our own. Our attention to detail and commitment to customer satisfaction has built our reputation across North London and Hertfordshire.
          </p>
        </section>

        {/* Strong CTA */}
        <section className="bg-alba-warm-white p-8 rounded-2xl">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-4">
            Ready to Transform Your Interior?
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Get a free, no-obligation quote for your interior painting project. We'll visit your property, discuss your requirements, and provide a detailed written estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="tel:07404304224" 
              className="inline-block bg-alba-accent hover:bg-alba-gold text-alba-primary px-8 py-3 rounded-xl font-semibold transition-colors text-center"
            >
              Call 07404 304224
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-alba-primary hover:bg-alba-secondary text-white px-8 py-3 rounded-xl font-semibold transition-colors text-center"
            >
              Request a Quote Online
            </a>
          </div>
          <p className="text-sm text-alba-charcoal/60">
            Serving Barnet, Enfield, Watford, St Albans, Harrow, Stevenage and throughout North London & Hertfordshire
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
            "serviceType": "Interior Painting",
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
              "North London"
            ],
            "description": "Professional interior painting services including walls, ceilings, doors, trim, and woodwork across North London and Hertfordshire"
          })
        }}
      />
    </main>
  );
}