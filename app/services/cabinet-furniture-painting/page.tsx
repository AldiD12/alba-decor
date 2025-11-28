import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hand-Painted Kitchens & Cabinet Painting London | Alba Decor',
  description: 'Transform your kitchen for a fraction of replacement cost. Expert cabinet painting, hand-painted kitchens & furniture refinishing in North London. Save £1000s. Call 07404304224',
  keywords: 'hand painted kitchens London, cabinet painting Hertfordshire, kitchen cabinet refinishing, furniture painting, kitchen transformation, spray painted cabinets, Barnet kitchen painters',
  openGraph: {
    title: 'Hand-Painted Kitchens & Cabinet Painting London | Alba Decor',
    description: 'Transform your kitchen for a fraction of replacement cost. Expert cabinet painting, hand-painted kitchens & furniture refinishing in North London.',
    url: 'https://albadecor.co.uk/services/cabinet-furniture-painting',
  },
};

export default function CabinetFurniturePainting() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Hand-Painted Kitchen Cabinets & Furniture Painting
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Transform your tired kitchen or outdated furniture into stunning, bespoke pieces for a fraction of replacement cost. Alba Decor specializes in professional cabinet painting and hand-painted finishes across North London and Hertfordshire, delivering showroom-quality results that last for years.
          </p>
        </header>

        {/* Why Paint Instead of Replace */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Paint Your Kitchen Instead of Replacing?
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            If your kitchen cabinets are structurally sound but the finish looks tired or dated, replacement seems like the obvious solution. But a new kitchen costs between £10,000 and £25,000 – a significant investment that also means weeks of disruption, dust, and chaos.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-6">
            <h3 className="font-display text-2xl font-bold text-alba-primary mb-6">The Smart Alternative</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-semibold text-alba-charcoal/60 mb-3">KITCHEN REPLACEMENT</p>
                <ul className="space-y-2 text-alba-charcoal/80">
                  <li>✗ £10,000 - £25,000 cost</li>
                  <li>✗ 2-4 weeks disruption</li>
                  <li>✗ No kitchen facilities during work</li>
                  <li>✗ Disposal of perfectly good cabinets</li>
                  <li>✗ Potential plumbing/electrical complications</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-alba-charcoal/60 mb-3">PROFESSIONAL CABINET PAINTING</p>
                <ul className="space-y-2 text-alba-charcoal/80">
                  <li>✓ £2,000 - £5,000 typical cost</li>
                  <li>✓ 5-7 days with kitchen usable evenings</li>
                  <li>✓ Minimal disruption to daily life</li>
                  <li>✓ Sustainable choice – reduce waste</li>
                  <li>✓ Truly bespoke color choices</li>
                  <li>✓ Factory-quality finish when sprayed</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            Professional cabinet painting isn't a compromise – it's a premium finish that delivers exactly the look you want at a sensible investment. Many of our clients in Barnet and Enfield specifically choose painting over replacement because they love their kitchen layout but want a fresh, contemporary aesthetic.
          </p>
        </section>

        {/* What We Paint */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            What We Paint & Refinish
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Our cabinet and furniture painting service covers any wooden or MDF piece you'd like to transform. We work primarily with kitchens but also refresh bedroom furniture, living room pieces, and bespoke built-in units.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="border-2 border-alba-cream p-6 rounded-xl bg-white">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Kitchen Cabinets</h3>
              <ul className="text-sm text-alba-charcoal/80 space-y-1">
                <li>• Base and wall units</li>
                <li>• Drawer fronts</li>
                <li>• Cabinet doors (any style)</li>
                <li>• Kitchen islands</li>
                <li>• Open shelving units</li>
                <li>• Pantry cupboards</li>
              </ul>
            </div>
            
            <div className="border-2 border-alba-cream p-6 rounded-xl bg-white">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Bedroom Furniture</h3>
              <ul className="text-sm text-alba-charcoal/80 space-y-1">
                <li>• Fitted wardrobes</li>
                <li>• Freestanding wardrobes</li>
                <li>• Chest of drawers</li>
                <li>• Bedside tables</li>
                <li>• Dressing tables</li>
                <li>• Built-in storage</li>
              </ul>
            </div>
            
            <div className="border-2 border-alba-cream p-6 rounded-xl bg-white">
              <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Living Room Pieces</h3>
              <ul className="text-sm text-alba-charcoal/80 space-y-1">
                <li>• Sideboards & dressers</li>
                <li>• Display cabinets</li>
                <li>• Bookcases</li>
                <li>• Media units</li>
                <li>• Alcove cupboards</li>
                <li>• Window seats</li>
              </ul>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 italic leading-relaxed">
            We work with solid wood, MDF, laminate, and previously painted surfaces. Even melamine cabinets can be painted using appropriate bonding primers – though we'll assess suitability during our site visit.
          </p>
        </section>

        {/* Our Cabinet Painting Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Professional Cabinet Painting Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Cabinet painting is highly skilled work. The difference between a finish that lasts five years and one that chips within months comes down to preparation and technique. We follow a meticulous seven-step process developed over years of refinishing kitchens across North London.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-display text-xl font-bold text-alba-primary mb-2">Removal & Labeling</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We carefully remove all doors, drawer fronts, and hardware. Each piece is labeled and photographed to ensure perfect reinstallation. Hinges, handles, and knobs are bagged separately. We protect your worktops, appliances, and flooring with heavy-duty dust sheets.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-display text-xl font-bold text-alba-primary mb-2">Deep Cleaning & Degreasing</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  This step is critical and often skipped by inexperienced painters. Kitchen cabinets accumulate cooking grease, oil deposits, and grime – invisible to the eye but fatal to paint adhesion. We use commercial-grade degreasers (sugar soap and specialist products) to strip every surface completely clean. Paint applied over grease will eventually peel, no matter how good the product.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-display text-xl font-bold text-alba-primary mb-2">Sanding & Surface Preparation</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We sand all surfaces to create a key for the primer to grip. For previously painted cabinets, we remove any loose paint and smooth rough areas. For glossy finishes, we sand thoroughly to break the sheen. For bare wood, we sand with the grain and fill any imperfections. This stage creates the foundation for a flawless finish.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="font-display text-xl font-bold text-alba-primary mb-2">Priming</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We apply high-adhesion primer appropriate to your cabinet material. MDF receives MDF primer. Wood gets wood primer. Previously painted surfaces get bonding primer. Melamine and laminate require specialist adhesion primers. This coat seals the surface and provides the perfect base for topcoats.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div>
                <h3 className="font-display text-xl font-bold text-alba-primary mb-2">Application of Topcoats</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We apply multiple coats of premium cabinet paint – typically two to three coats depending on color and coverage. Each coat is allowed proper drying time. For spray finishes, we use professional HVLP equipment in a controlled environment. For brushed finishes, we use specialist cabinet brushes that leave minimal marks.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold text-lg">6</div>
              <div>
                <h3 className="font-display text-xl font-bold text-alba-primary mb-2">Curing & Quality Control</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Cabinet paint needs time to cure properly – rushing this stage invites problems. We allow full curing time before reassembly. Each piece is inspected for coverage, smoothness, and finish quality. Any imperfections are corrected before moving forward.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold text-lg">7</div>
              <div>
                <h3 className="font-display text-xl font-bold text-alba-primary mb-2">Reinstallation & Hardware</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We carefully reinstall all doors and drawer fronts, making any necessary adjustments for perfect alignment. Hardware is either cleaned and refitted, painted to match, or replaced with your chosen new handles and knobs. We clean the workspace thoroughly and remove all protection, leaving your kitchen spotless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spray vs Brush */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Spray vs Brush Application: Choosing Your Finish
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Sprayed Finish</h3>
              <p className="font-semibold text-blue-900 mb-2">The Premium Option</p>
              <p className="text-sm text-alba-charcoal/80 mb-4 leading-relaxed">
                Spray application delivers a factory-quality finish with no brush marks whatsoever. The result is glass-smooth and incredibly durable.
              </p>
              
              <p className="text-sm font-semibold mb-2">Best for:</p>
              <ul className="text-sm text-alba-charcoal/80 space-y-1 mb-4">
                <li>✓ Modern, minimalist kitchens</li>
                <li>✓ High-gloss or satin finishes</li>
                <li>✓ Flat cabinet doors</li>
                <li>✓ When perfection is the goal</li>
              </ul>
              
              <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                <strong>Process:</strong> Doors are removed and sprayed in a controlled environment using professional HVLP spray systems. Multiple thin coats build to a flawless finish.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Hand-Painted Finish</h3>
              <p className="font-semibold text-green-900 mb-2">The Traditional Option</p>
              <p className="text-sm text-alba-charcoal/80 mb-4 leading-relaxed">
                Hand-brushed application delivers a beautiful, artisanal finish with subtle texture. This traditional approach suits period properties and Shaker-style kitchens.
              </p>
              
              <p className="text-sm font-semibold mb-2">Best for:</p>
              <ul className="text-sm text-alba-charcoal/80 space-y-1 mb-4">
                <li>✓ Traditional or country kitchens</li>
                <li>✓ Shaker-style doors</li>
                <li>✓ Matte or eggshell finishes</li>
                <li>✓ Period properties</li>
              </ul>
              
              <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                <strong>Process:</strong> Applied with specialist cabinet brushes designed to minimize marks. The subtle texture adds character and warmth to traditional kitchen styles.
              </p>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            We'll discuss your preferred aesthetic during our consultation and recommend the best application method for your kitchen style, existing door profile, and desired finish.
          </p>
        </section>

        {/* Timeline & Investment */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Timeline & Investment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Typical Timeline</h3>
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                Most standard kitchen projects take 5-7 working days from start to finish. This includes proper curing time – we never rush the process.
              </p>
              
              <ul className="space-y-2 text-alba-charcoal/80">
                <li><strong>Day 1:</strong> Removal, cleaning, and initial preparation</li>
                <li><strong>Days 2-3:</strong> Sanding, priming, and first topcoats</li>
                <li><strong>Days 4-5:</strong> Additional coats and curing</li>
                <li><strong>Day 6:</strong> Final coat and quality control</li>
                <li><strong>Day 7:</strong> Reinstallation and finishing touches</li>
              </ul>
              
              <p className="text-sm text-alba-charcoal/60 mt-4 italic">
                Your kitchen remains partially functional during most of the work. We typically work 9am-5pm and you can use basic facilities in evenings.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Investment Guide</h3>
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                Cabinet painting costs depend on several factors: number of units, door style complexity, finish type, and whether hardware is being replaced.
              </p>
              
              <div className="space-y-3">
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Small Kitchen (8-12 units)</p>
                  <p className="text-2xl font-bold text-alba-accent">£2,000 - £3,000</p>
                  <p className="text-sm text-alba-charcoal/60">Typical galley kitchen or small U-shape</p>
                </div>
                
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Medium Kitchen (13-18 units)</p>
                  <p className="text-2xl font-bold text-alba-accent">£3,000 - £4,500</p>
                  <p className="text-sm text-alba-charcoal/60">Standard family kitchen with island</p>
                </div>
                
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Large Kitchen (19+ units)</p>
                  <p className="text-2xl font-bold text-alba-accent">£4,500 - £6,000+</p>
                  <p className="text-sm text-alba-charcoal/60">Extensive kitchen with multiple islands/features</p>
                </div>
              </div>
              
              <p className="text-sm text-alba-charcoal/60 mt-4">
                All quotes include materials, preparation, painting, and reinstallation. Optional extras: new hardware, internal drawer/shelf painting, additional furniture pieces.
              </p>
            </div>
          </div>
          
          <div className="bg-alba-cream p-6 rounded-xl">
            <h3 className="font-display font-bold text-lg text-alba-primary mb-2">Care & Longevity</h3>
            <p className="text-alba-charcoal/80 mb-2 leading-relaxed">
              With proper care, professionally painted cabinets last 5-10 years before needing refresh. We provide detailed care instructions, but the basics are simple:
            </p>
            <ul className="text-sm text-alba-charcoal/80 space-y-1 ml-4">
              <li>• Wipe spills immediately with soft cloth</li>
              <li>• Use mild soap and water for cleaning (no harsh chemicals)</li>
              <li>• Avoid scouring pads or abrasive cleaners</li>
              <li>• Keep ventilation fan running while cooking to minimize grease deposits</li>
              <li>• Touch-ups available if needed for high-wear areas</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Transform Your Kitchen Without Breaking the Bank
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Book a free consultation and quote. We'll visit your home, assess your cabinets, discuss your color preferences, and provide a detailed written estimate with no obligation. See samples of our work and get expert advice on the best approach for your kitchen.
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
              Request Free Consultation
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80 mb-4">
            Serving Barnet, Enfield, Watford, St Albans, Harrow, Stevenage and throughout North London & Hertfordshire
          </p>
          <p className="text-xs text-alba-cream/70">
            Fully insured • Premium materials • 100+ satisfied kitchen transformations • Free color consultation
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
            "serviceType": "Kitchen Cabinet Painting and Furniture Refinishing",
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
            "description": "Professional hand-painted kitchen cabinets, furniture refinishing and cabinet painting services. Transform your kitchen for a fraction of replacement cost with showroom-quality finishes.",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "2000",
              "highPrice": "6000",
              "priceCurrency": "GBP"
            }
          })
        }}
      />
    </main>
  );
}