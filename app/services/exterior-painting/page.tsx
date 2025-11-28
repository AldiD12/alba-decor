import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exterior Painting Services London & Hertfordshire | Alba Decor',
  description: 'Professional exterior house painting in North London & Hertfordshire. Expert painting for render, woodwork, decks, fences & more. Weather-resistant finishes. Call 07404304224',
  keywords: 'exterior painting London, exterior house painting Hertfordshire, render painting, masonry painting, deck painting, fence painting, weathershield painting, Barnet exterior painters',
  openGraph: {
    title: 'Exterior Painting Services London & Hertfordshire | Alba Decor',
    description: 'Professional exterior house painting in North London & Hertfordshire. Expert painting for render, woodwork, decks, fences & more. Weather-resistant finishes.',
    url: 'https://albadecor.co.uk/services/exterior-painting',
  },
};

export default function ExteriorPainting() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Exterior Painting Services in London & Hertfordshire
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Protect and enhance your property with professional exterior painting from Alba Decor. Serving homeowners across London and Hertfordshire, we deliver durable, weather-resistant finishes that stand up to the UK climate while transforming your home's appearance.
          </p>
        </header>

        {/* Why Exterior Painting Matters */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Exterior Painting Matters
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Your home's exterior faces relentless challenges from the British weather – rain, wind, frost, and UV exposure all take their toll. Regular exterior painting isn't just about aesthetics; it's essential maintenance that protects your most valuable asset.
          </p>
          
          <div className="bg-alba-warm-white p-6 rounded-xl mb-6">
            <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Three Key Benefits:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold text-alba-primary mr-3">Weather Protection:</span>
                <span className="text-alba-charcoal/80">Quality exterior paint creates a waterproof barrier that prevents moisture penetration, wood rot, and structural damage. In our unpredictable climate, this protection is invaluable.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-alba-primary mr-3">Enhanced Curb Appeal:</span>
                <span className="text-alba-charcoal/80">A freshly painted exterior dramatically improves your home's appearance. Whether you're planning to sell or simply want to take pride in your property, exterior painting delivers immediate visual impact.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-alba-primary mr-3">Property Value:</span>
                <span className="text-alba-charcoal/80">Well-maintained exteriors command higher property values. Estate agents consistently report that homes with fresh exterior paintwork sell faster and achieve better prices.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Surfaces We Paint */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Surfaces We Paint
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Our exterior painting service covers every external surface of your property. Each material requires specific preparation, primers, and paint types to ensure longevity and performance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Masonry & Render</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                We paint rendered walls, pebbledash, brick, and concrete using specialist masonry paints like Dulux Weathershield or Sandtex. These breathable paints allow moisture to escape while providing waterproof protection. Perfect for the typical North London Victorian and Edwardian properties throughout Barnet, Enfield, and surrounding areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">External Woodwork</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Window frames, doors, fascias, soffits, and barge boards all require specialist wood paint or stain. We prepare wooden surfaces thoroughly, treating any rot and applying primer before topcoats. Quality exterior wood paint protects against splitting, warping, and weather damage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Decking & Fencing</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Garden decking and fences face constant exposure to moisture and UV light. We offer both painting and staining options, using products designed specifically for horizontal surfaces and ensuring proper penetration into the wood grain for lasting protection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Metal & UPVC</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Gutters, downpipes, railings, and gates can all be refreshed with appropriate paint systems. Even UPVC windows and doors can be painted using specialist UPVC paint, giving tired plastic frames a fresh lease of life.
              </p>
            </div>
          </div>
        </section>

        {/* Weather-Resistant Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Weather-Resistant Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Successful exterior painting in the UK climate requires meticulous preparation and the right products. We don't cut corners – proper preparation accounts for 70% of the finished result.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-alba-accent pl-6">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Step 1: Surface Assessment & Cleaning</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                We begin with a thorough inspection, identifying any damage, rot, or areas needing repair. Next comes power washing to remove dirt, algae, moss, and loose paint. This step is crucial – paint won't adhere properly to dirty or flaking surfaces. Clean surfaces also allow us to properly assess the condition of the substrate.
              </p>
            </div>
            
            <div className="border-l-4 border-alba-accent pl-6">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Step 2: Repairs & Preparation</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Any damaged woodwork is repaired or replaced. Rotten sections of fascia or window frames are cut out and replaced with new timber. Render cracks are filled with flexible exterior filler. All surfaces are then sanded smooth, creating the perfect base for paint adhesion.
              </p>
            </div>
            
            <div className="border-l-4 border-alba-accent pl-6">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Step 3: Priming & Undercoating</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Bare wood receives wood primer to seal the surface and prevent tannin bleed. Masonry gets stabilizing solution if necessary. Metal surfaces receive appropriate metal primer. These foundation coats are essential for paint system longevity.
              </p>
            </div>
            
            <div className="border-l-4 border-alba-accent pl-6">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Step 4: Application of Weather-Resistant Topcoats</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                We apply premium exterior paints designed for UK weather conditions. Dulux Weathershield provides excellent protection against rain and moisture, while Sandtex masonry paint offers breathable, flexible coverage for render and brick. Multiple coats ensure complete coverage and maximum durability. Depending on the surface and product, we typically apply 2-3 topcoats.
              </p>
            </div>
          </div>
          
          <div className="bg-alba-cream p-6 rounded-xl mt-6">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Understanding Paint Types:</h3>
            <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
              <strong>Masonry Paint:</strong> Thick, textured paint containing fine aggregate. Provides waterproof protection while remaining breathable. Available in smooth or textured finishes. Ideal for render, brick, and concrete.
            </p>
            <p className="text-alba-charcoal/80 leading-relaxed">
              <strong>Exterior Wood Paint:</strong> Flexible paint that moves with the wood as it expands and contracts with temperature changes. Forms a protective barrier against moisture while allowing vapor to escape. Essential for fascias, soffits, and wooden cladding.
            </p>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Common Exterior Painting Challenges We Solve
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Peeling & Flaking Paint</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Often caused by moisture trapped behind the paint or poor surface preparation. We strip back to sound paint or bare substrate, address the underlying cause, and rebuild the paint system properly. Simply painting over peeling paint is a waste of money.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Wood Rot & Decay</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Common in older properties, particularly around window sills, fascia boards, and door frames. Rotten wood must be cut out and replaced – paint cannot fix structural decay. We treat surrounding wood with preservative before priming and painting.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Algae, Moss & Mold Growth</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                North-facing walls and shaded areas are prone to biological growth. We treat these areas with fungicidal wash, allow proper drying time, then apply paint with built-in fungicide protection. Modern masonry paints include additives that inhibit regrowth for years.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Chalking Render</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Older painted render can develop a chalky surface as the paint breaks down. This must be removed through power washing and stabilizing solution before repainting, or new paint won't bond properly.
              </p>
            </div>
          </div>
        </section>

        {/* Best Time for Exterior Painting */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            When to Schedule Exterior Painting
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Timing is critical for exterior painting success. Paint requires specific temperature and humidity conditions to cure properly. In the UK climate, this means strategic planning.
          </p>
          
          <div className="bg-green-50 p-6 rounded-xl mb-6">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Ideal Season: Late Spring to Early Autumn</h3>
            <p className="text-alba-charcoal/80 mb-3 leading-relaxed">May through September offers the most reliable weather for exterior painting. We need:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-alba-charcoal/80">
              <li>Dry conditions for at least 24-48 hours after application</li>
              <li>Temperatures between 10-25°C for optimal paint curing</li>
              <li>Low humidity to allow proper drying</li>
              <li>No rain forecast for at least 6 hours after painting</li>
            </ul>
          </div>
          
          <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
            <strong>Winter Painting:</strong> We generally avoid exterior painting between November and March. Cold temperatures prevent proper paint curing, and frequent rain makes scheduling impossible. However, if you have urgent repairs or specific circumstances, we can sometimes work during brief dry spells using fast-drying formulations.
          </p>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            <strong>Project Duration:</strong> Typical terraced house takes 3-5 days. Semi-detached or detached properties may require 5-7 days depending on size and complexity. We monitor weather forecasts closely and communicate any necessary schedule adjustments.
          </p>
        </section>

        {/* Why Choose Alba Decor */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Choose Alba Decor for Exterior Painting
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-alba-warm-white p-4 rounded-xl">
              <h3 className="font-bold text-alba-primary mb-2">✓ Fully Insured</h3>
              <p className="text-sm text-alba-charcoal/80">Comprehensive public liability insurance gives you complete peace of mind.</p>
            </div>
            <div className="bg-alba-warm-white p-4 rounded-xl">
              <h3 className="font-bold text-alba-primary mb-2">✓ Scaffolding Access</h3>
              <p className="text-sm text-alba-charcoal/80">We arrange scaffolding when needed for safe access to high areas and upper floors.</p>
            </div>
            <div className="bg-alba-warm-white p-4 rounded-xl">
              <h3 className="font-bold text-alba-primary mb-2">✓ Premium Products</h3>
              <p className="text-sm text-alba-charcoal/80">We use Dulux Weathershield, Sandtex, and other trusted brands proven in UK conditions.</p>
            </div>
            <div className="bg-alba-warm-white p-4 rounded-xl">
              <h3 className="font-bold text-alba-primary mb-2">✓ Local Expertise</h3>
              <p className="text-sm text-alba-charcoal/80">Years serving North London and Hertfordshire – we understand local property types.</p>
            </div>
            <div className="bg-alba-warm-white p-4 rounded-xl">
              <h3 className="font-bold text-alba-primary mb-2">✓ Weather Monitoring</h3>
              <p className="text-sm text-alba-charcoal/80">We track forecasts carefully and only work in suitable conditions for guaranteed results.</p>
            </div>
            <div className="bg-alba-warm-white p-4 rounded-xl">
              <h3 className="font-bold text-alba-primary mb-2">✓ Transparent Pricing</h3>
              <p className="text-sm text-alba-charcoal/80">Detailed written quotes with no hidden costs. You know exactly what you're paying for.</p>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            As a family-run business based in the area, we take pride in every project. We treat your home with the same care and attention we'd give our own. Our reputation is built on quality workmanship and reliable service – that's why so much of our work comes from recommendations.
          </p>
        </section>

        {/* Strong CTA */}
        <section className="bg-gradient-to-r from-alba-primary to-alba-secondary text-white p-8 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Protect & Refresh Your Property?
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90">
            Get a free, no-obligation quote for your exterior painting project. We'll assess your property, discuss your requirements, and provide a detailed written estimate covering all aspects of the work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a 
              href="tel:07404304224" 
              className="inline-block bg-alba-gold hover:bg-alba-accent text-alba-primary px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
            >
              Call 07404 304224
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-alba-charcoal hover:bg-alba-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
            >
              Request a Quote Online
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80">
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
            "serviceType": "Exterior Painting",
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
            "description": "Professional exterior painting services including house painting, render painting, woodwork, decking, fencing and more. Weather-resistant finishes using Dulux Weathershield and Sandtex products."
          })
        }}
      />
    </main>
  );
}