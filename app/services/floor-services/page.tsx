import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Floor Sanding & Varnishing Services London | Alba Decor',
  description: 'Professional floor sanding, refinishing & restoration services in North London & Hertfordshire. Restore wooden floors to their former glory. Dust-free sanding. Call 07404304224',
  keywords: 'floor sanding London, floor varnishing Hertfordshire, wood floor refinishing, floor restoration, wooden floor sanding, floor sealing, Barnet floor sanding',
  openGraph: {
    title: 'Floor Sanding & Varnishing Services London | Alba Decor',
    description: 'Professional floor sanding, refinishing & restoration services in North London & Hertfordshire. Restore wooden floors to their former glory. Dust-free sanding.',
    url: 'https://albadecor.co.uk/services/floor-sanding-varnishing',
  },
};

export default function FloorSandingVarnishing() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Restore Your Wooden Floors to Their Former Glory
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Transform tired, scratched, and worn wooden floors with professional sanding and refinishing services across North London and Hertfordshire. Alba Decor's expert floor restoration brings new life to your floors at a fraction of replacement cost, using dust-controlled sanding and premium finishes.
          </p>
        </header>

        {/* Why Sand & Refinish */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Sand & Refinish Your Floors?
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Wooden floors are a valuable asset in any property, but daily wear takes its toll. Scratches from furniture, pet damage, water stains, and general wear can make beautiful floors look tired and neglected. Professional sanding and refinishing restores their original beauty while being significantly more cost-effective than replacement.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="font-display text-lg font-bold text-red-800 mb-3">Floor Replacement Costs</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ £40-80 per m² for new solid wood</li>
                <li>✗ Removal and disposal of existing floors</li>
                <li>✗ Potential subfloor repairs needed</li>
                <li>✗ 1-2 weeks disruption minimum</li>
                <li>✗ Loss of original character and patina</li>
                <li>✗ Environmental waste of good timber</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-lg font-bold text-green-800 mb-3">Professional Refinishing</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ £15-25 per m² typical cost</li>
                <li>✓ Preserves original floors and character</li>
                <li>✓ Removes scratches, stains, and wear</li>
                <li>✓ 2-3 days total project time</li>
                <li>✓ Sustainable choice - no waste</li>
                <li>✓ Can change color with staining</li>
              </ul>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            Floor refinishing is particularly valuable in North London's period properties, where original Victorian and Edwardian floors represent significant historical and monetary value. These floors, often over 100 years old, can be restored to look better than new while maintaining their authentic character and charm.
          </p>
        </section>

        {/* Our Floor Restoration Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Professional Floor Restoration Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Professional floor sanding requires specialized equipment, experience, and systematic approach. Our process ensures optimal results while minimizing dust and disruption to your home.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Room Preparation</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  All furniture is removed and rooms are sealed with dust barriers to contain the majority of sanding dust. We inspect floors for protruding nails, loose boards, or damage that needs addressing before sanding begins.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Initial Coarse Sanding</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  The first pass uses coarse grit (40-60) to remove old finishes, deep scratches, and level uneven boards. This aggressive sanding removes the damaged surface layer and creates a uniform base for subsequent passes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Medium & Fine Sanding Passes</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Progressive sanding with medium (80-100 grit) and fine (120-150 grit) papers removes scratches from previous passes and creates the smooth surface needed for finishing. Each pass removes the marks from the previous grit.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Edge Sanding & Detail Work</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Specialized edge sanders reach areas the main machine can't access - around radiators, in corners, and along skirting boards. Hand sanding ensures consistent finish right to the room edges.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Dust Extraction & Cleaning</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Our industrial dust extraction system captures 95% of sanding dust at source. Thorough vacuuming and tack cloth cleaning removes remaining particles, ensuring perfect adhesion for the finish coats.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Staining (Optional)</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  If color change is desired, wood stain is applied evenly across the entire floor. Multiple coats may be needed for deeper colors. Stain must dry completely before sealing begins.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">7</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Three Coats of Finish</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We apply three coats of premium floor finish - typically polyurethane lacquer or hard-wax oil. Each coat is allowed proper drying time and lightly abraded between coats for optimal adhesion and durability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Finish */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Floor Finish Options
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            The choice of floor finish affects both appearance and performance. We work with premium brands including Pallmann, Bona, and Osmo to provide finishes suited to your lifestyle and aesthetic preferences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Polyurethane Lacquer</h3>
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                The most durable option for high-traffic areas. Creates a protective film on the wood surface that resists scratches, water, and daily wear. Available in matte, satin, or gloss sheens.
              </p>
              <div className="space-y-2">
                <div><strong className="text-alba-primary">Matte:</strong> <span className="text-sm text-alba-charcoal/80">Natural appearance, hides minor scratches</span></div>
                <div><strong className="text-alba-primary">Satin:</strong> <span className="text-sm text-alba-charcoal/80">Most popular choice, subtle sheen, easy maintenance</span></div>
                <div><strong className="text-alba-primary">Gloss:</strong> <span className="text-sm text-alba-charcoal/80">High shine, shows every mark but very durable</span></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Hard-Wax Oil</h3>
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                Penetrates wood fibers rather than forming a surface film. Provides natural appearance and feel while offering good protection. Popular choice for those wanting to maintain wood's natural character.
              </p>
              <div className="space-y-2 text-sm text-alba-charcoal/80">
                <div>✓ Natural wood feel and appearance</div>
                <div>✓ Easy to repair and maintain</div>
                <div>✓ Breathable finish</div>
                <div>✓ Environmentally friendly</div>
              </div>
            </div>
          </div>
          
          <div className="bg-alba-warm-white p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Choosing the Right Finish</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              <strong>High-traffic areas</strong> (hallways, kitchens) benefit from polyurethane's durability. <strong>Bedrooms and living rooms</strong> can use either finish based on aesthetic preference. <strong>Period properties</strong> often suit hard-wax oil for authentic appearance. We'll recommend the best option based on your specific needs and usage patterns.
            </p>
          </div>
        </section>

        {/* Realistic Expectations */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Setting Realistic Expectations
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            While floor sanding can dramatically improve appearance, it's important to understand what can and cannot be achieved. Honest assessment during quotation prevents disappointment and ensures you make informed decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">What We Can Fix</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>✓ Surface scratches and scuff marks</li>
                <li>✓ Most water stains and discoloration</li>
                <li>✓ Worn and damaged finish</li>
                <li>✓ Minor dents and dings</li>
                <li>✓ Uneven sheen and patchy areas</li>
                <li>✓ Pet scratches (if not too deep)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Limitations to Consider</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Natural gaps between boards remain</li>
                <li>• Deep gouges may still be visible</li>
                <li>• Black water stains may not fully remove</li>
                <li>• Wood grain and natural variation preserved</li>
                <li>• Very thin floors may not sand well</li>
                <li>• Engineered floors have limited sanding depth</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-alba-cream p-6 rounded-xl mt-6">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Period Property Considerations</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              Victorian and Edwardian floors often have character features like gaps between boards, natural wear patterns, and color variation that are part of their charm. We preserve these authentic characteristics while removing damage and applying protective finishes. The goal is restoration, not perfection.
            </p>
          </div>
        </section>

        {/* Timeline & Cost Factors */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Timeline & Investment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Typical Project Timeline</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Day 1:</strong> Preparation, coarse and medium sanding</li>
                <li><strong>Day 2:</strong> Fine sanding, edge work, first coat application</li>
                <li><strong>Day 3:</strong> Second and third coats with drying time</li>
                <li><strong>+24 hours:</strong> Light foot traffic allowed</li>
                <li><strong>+48 hours:</strong> Furniture can be moved back</li>
                <li><strong>+7 days:</strong> Full cure, normal use</li>
              </ul>
              
              <div className="bg-alba-warm-white p-4 rounded-xl mt-4">
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  <strong>Room Size Impact:</strong> A typical living room (4m x 5m) takes 2 full days. Larger rooms or multiple rooms extend the timeline proportionally.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Cost Factors</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Room Size:</strong> Charged per square meter</li>
                <li><strong>Wood Condition:</strong> Heavily damaged floors need more work</li>
                <li><strong>Finish Type:</strong> Premium finishes cost more</li>
                <li><strong>Staining:</strong> Color changes add to timeline and cost</li>
                <li><strong>Access:</strong> Difficult access may affect pricing</li>
                <li><strong>Furniture Moving:</strong> We can arrange if needed</li>
              </ul>
              
              <div className="bg-alba-cream p-4 rounded-xl mt-4">
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  <strong>Typical Investment:</strong> £15-25 per m² for standard sanding and three-coat finish. Staining and premium finishes may increase costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance After Refinishing */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Maintaining Your Newly Refinished Floors
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Proper maintenance extends the life of your floor finish and keeps floors looking their best. Simple precautions and regular care prevent premature wear and maintain the investment you've made in restoration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Protection Measures</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Furniture Pads:</strong> Use felt pads under all furniture legs</li>
                <li><strong>Entry Mats:</strong> Place mats at doorways to trap dirt and grit</li>
                <li><strong>Area Rugs:</strong> Protect high-traffic areas and under dining tables</li>
                <li><strong>Humidity Control:</strong> Maintain 30-50% relative humidity</li>
                <li><strong>Prompt Cleanup:</strong> Wipe spills immediately</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Regular Maintenance</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Daily:</strong> Sweep or vacuum to remove grit</li>
                <li><strong>Weekly:</strong> Damp mop with wood floor cleaner</li>
                <li><strong>Monthly:</strong> Deep clean with appropriate products</li>
                <li><strong>Annually:</strong> Professional assessment and maintenance</li>
                <li><strong>5-7 Years:</strong> Consider refresh sanding and recoating</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-alba-warm-white p-6 rounded-xl mt-6">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">What to Avoid</h3>
            <ul className="space-y-2 text-alba-charcoal/80">
              <li>• Never use steam mops or excessive water</li>
              <li>• Avoid harsh chemicals or abrasive cleaners</li>
              <li>• Don't drag furniture across floors</li>
              <li>• Prevent pet nails from scratching surfaces</li>
              <li>• Don't ignore spills or standing water</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Restore Your Floors to Their Former Glory
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Transform your tired wooden floors with professional sanding and refinishing. Get a free assessment and quote to discover how we can bring new life to your floors at a fraction of replacement cost.
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
              Request Floor Assessment
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80 mb-4">
            Serving Barnet, Enfield, Watford, St Albans, Harrow, Stevenage and throughout North London & Hertfordshire
          </p>
          <p className="text-xs text-alba-cream/70">
            95% dust-free sanding • Premium finishes • Period property specialists • Realistic expectations
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
            "serviceType": "Floor Sanding and Varnishing Services",
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
            "description": "Professional floor sanding, refinishing and restoration services for wooden floors. Dust-controlled sanding with premium finishes including polyurethane and hard-wax oil."
          })
        }}
      />
    </main>
  );
}