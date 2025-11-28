import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Wood Staining & Varnishing Services London | Alba Decor',
  description: 'Expert wood finishing services including staining, varnishing & sealing for staircases, doors, floors & interior woodwork in North London & Hertfordshire. Call 07404304224',
  keywords: 'wood staining London, wood varnishing Hertfordshire, wood finishing, staircase refinishing, door staining, wood sealing, interior wood treatment, Barnet wood finishing',
  openGraph: {
    title: 'Professional Wood Staining & Varnishing Services London | Alba Decor',
    description: 'Expert wood finishing services including staining, varnishing & sealing for staircases, doors, floors & interior woodwork in North London & Hertfordshire.',
    url: 'https://albadecor.co.uk/services/wood-finishing',
  },
};

export default function WoodFinishing() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Professional Wood Staining & Varnishing Services
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Enhance and protect your interior woodwork with expert wood finishing services across North London and Hertfordshire. From staircase refinishing to door staining, Alba Decor delivers beautiful, durable finishes that showcase the natural beauty of wood while providing long-lasting protection.
          </p>
        </header>

        {/* Enhance & Protect Your Wood */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Enhance & Protect Your Wood
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Wood finishing serves two essential purposes: enhancing the natural beauty of timber and protecting it from daily wear, moisture, and UV damage. Unfinished or poorly finished wood deteriorates quickly, losing its appeal and structural integrity over time.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-alba-warm-white p-6 rounded-xl">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Beauty Enhancement</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>✓ Brings out natural wood grain patterns</li>
                <li>✓ Enriches color and depth</li>
                <li>✓ Creates consistent appearance across surfaces</li>
                <li>✓ Adds warmth and character to interiors</li>
                <li>✓ Increases property value and appeal</li>
              </ul>
            </div>
            
            <div className="bg-alba-cream p-6 rounded-xl">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Protection Benefits</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>✓ Prevents moisture penetration and warping</li>
                <li>✓ Protects against scratches and dents</li>
                <li>✓ Reduces UV damage and fading</li>
                <li>✓ Makes cleaning and maintenance easier</li>
                <li>✓ Extends wood lifespan significantly</li>
              </ul>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            Professional wood finishing is particularly important in North London's period properties, where original Victorian and Edwardian woodwork represents significant historical and monetary value. Proper finishing preserves these features for future generations while maintaining their functionality and beauty.
          </p>
        </section>

        {/* What We Finish */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            What We Finish
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Our wood finishing expertise covers all interior timber surfaces, from structural elements to decorative features. Each type of woodwork requires specific techniques and products to achieve optimal results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Staircases & Banisters</h3>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Complete staircase refinishing including treads, risers, handrails, and spindles. We work with solid wood and engineered stairs, matching existing finishes or creating completely new looks. High-traffic areas receive extra-durable finishes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Interior Doors</h3>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Panel doors, flush doors, and period doors all benefit from professional finishing. We can match existing door finishes throughout your home or update all doors to a consistent new appearance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Window Frames & Sills</h3>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Interior window woodwork requires finishes that can handle temperature changes and occasional moisture. We use appropriate sealers and topcoats to ensure longevity while maintaining appearance.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Wooden Floors</h3>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Floor sanding, staining, and sealing services for solid wood and engineered floors. We offer both water-based and oil-based finishes depending on your preferences and usage requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Built-in Shelving & Units</h3>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Alcove shelving, fitted wardrobes, and custom joinery all benefit from professional finishing. We can match existing furniture or create coordinated looks throughout your home.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Exposed Beams</h3>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Ceiling beams and structural timber features require specialized treatments that enhance their character while providing protection. We work with both new and reclaimed timber.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Staining vs Varnishing vs Painting */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Staining vs Varnishing vs Painting: Choosing the Right Finish
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Different wood finishing approaches serve different purposes and create different aesthetic effects. Understanding the options helps you choose the best treatment for your specific needs and preferences.
          </p>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-display text-xl font-bold text-blue-800 mb-3">Wood Staining</h3>
              <p className="text-blue-700 mb-3 leading-relaxed">
                Penetrates wood fibers to change color while allowing grain patterns to show through. Stains enhance natural wood character and can dramatically alter appearance without hiding texture.
              </p>
              <p className="text-sm text-blue-600"><strong>Best for:</strong> Showcasing wood grain, matching existing finishes, creating rich color depth, period property restoration</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-xl font-bold text-green-800 mb-3">Clear Varnishing</h3>
              <p className="text-green-700 mb-3 leading-relaxed">
                Protective clear coating that preserves natural wood color while providing durability. Available in matte, satin, or gloss finishes depending on desired sheen level.
              </p>
              <p className="text-sm text-green-600"><strong>Best for:</strong> Natural wood preservation, high-traffic areas, moisture protection, maintaining original appearance</p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h3 className="font-display text-xl font-bold text-amber-800 mb-3">Wood Painting</h3>
              <p className="text-amber-700 mb-3 leading-relaxed">
                Opaque coating that completely covers wood grain and natural color. Offers unlimited color options and can hide imperfections in lower-grade timber.
              </p>
              <p className="text-sm text-amber-600"><strong>Best for:</strong> Color coordination, hiding wood defects, modern aesthetics, MDF and engineered materials</p>
            </div>
          </div>
        </section>

        {/* Our Wood Finishing Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Professional Wood Finishing Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Achieving beautiful, long-lasting wood finishes requires meticulous preparation and proper application techniques. We follow a systematic process that ensures optimal results regardless of wood type or finish choice.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Assessment & Preparation</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We assess wood condition, identify any repairs needed, and protect surrounding areas. Old finishes are stripped if necessary, and any damage is repaired before proceeding with new finishing.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Sanding & Surface Preparation</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Progressive sanding with appropriate grits creates the perfect surface for finish adhesion. We sand with the grain and ensure all surfaces are smooth and dust-free before applying any products.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Stain Application</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Stains are applied evenly using appropriate techniques for each wood type. Multiple coats may be needed to achieve desired color depth. Each coat is allowed proper penetration time before proceeding.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Sealing & Protection</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Protective topcoats seal the stain and provide durability. We use polyurethane, lacquer, or oil-based sealers depending on the application and desired finish characteristics.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Final Inspection & Cleanup</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Each surface is inspected for coverage and quality. Any necessary touch-ups are completed, and all protection is removed, leaving your space clean and ready to enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Stain Colors */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Popular Stain Colors & Finishes
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Stain color choice dramatically affects the final appearance and can complement or transform your interior design. We work with premium stain brands including Osmo, Ronseal, and Cuprinol to achieve consistent, beautiful results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{backgroundColor: '#D2B48C'}}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Natural Oak</h4>
                  <p className="text-sm text-alba-charcoal/80">Enhances natural wood tones, perfect for traditional and contemporary interiors</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{backgroundColor: '#3C2415'}}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Dark Walnut</h4>
                  <p className="text-sm text-alba-charcoal/80">Rich, sophisticated finish ideal for formal spaces and period properties</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{backgroundColor: '#8B4513'}}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Medium Mahogany</h4>
                  <p className="text-sm text-alba-charcoal/80">Warm, classic finish that works well with both traditional and modern décor</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{backgroundColor: '#A0A0A0'}}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Grey Wash</h4>
                  <p className="text-sm text-alba-charcoal/80">Contemporary finish popular in modern and Scandinavian-style interiors</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{backgroundColor: '#F5F5DC'}}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">White Wash</h4>
                  <p className="text-sm text-alba-charcoal/80">Light, airy finish that brightens spaces while maintaining wood texture</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{backgroundColor: '#654321'}}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Jacobean</h4>
                  <p className="text-sm text-alba-charcoal/80">Deep, dramatic finish perfect for creating statement features</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-alba-warm-white p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Water-Based vs Oil-Based Finishes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Water-Based</h4>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Fast-drying, low-odor, and environmentally friendly. Maintains natural wood color without yellowing. Ideal for light woods and contemporary finishes.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Oil-Based</h4>
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  Deeper penetration and richer color development. More durable for high-traffic areas. Traditional choice for period properties and formal spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Maintenance */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Timeline & Maintenance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Typical Project Timelines</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Single Door:</strong> 1-2 days including drying time</li>
                <li><strong>Staircase Refinish:</strong> 3-4 days for complete project</li>
                <li><strong>Multiple Doors:</strong> 2-3 days depending on quantity</li>
                <li><strong>Built-in Units:</strong> 2-4 days based on size and complexity</li>
                <li><strong>Floor Refinishing:</strong> 3-5 days including sanding and multiple coats</li>
              </ul>
              
              <div className="bg-alba-cream p-4 rounded-xl mt-4">
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  <strong>Drying Times:</strong> Proper curing between coats is essential. We never rush the process as this compromises durability and appearance.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Maintenance Tips</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Regular Cleaning:</strong> Dust regularly with microfiber cloth, clean spills immediately</li>
                <li><strong>Avoid Harsh Chemicals:</strong> Use wood-specific cleaners, avoid ammonia-based products</li>
                <li><strong>Protect from Scratches:</strong> Use furniture pads, avoid dragging objects across surfaces</li>
                <li><strong>Monitor Humidity:</strong> Maintain consistent indoor humidity to prevent wood movement</li>
                <li><strong>Periodic Refresh:</strong> Light sanding and re-coating every 5-7 years maintains appearance</li>
              </ul>
              
              <div className="bg-alba-warm-white p-4 rounded-xl mt-4">
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  <strong>Professional Maintenance:</strong> We offer touch-up and refresh services to keep your wood finishes looking their best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Enhance Your Wood's Natural Beauty
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Transform your interior woodwork with professional staining and finishing services. Get a free consultation and quote to discover how we can enhance and protect your wood features.
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
              Request Quote
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80 mb-4">
            Serving Barnet, Enfield, Watford, St Albans, Harrow, Stevenage and throughout North London & Hertfordshire
          </p>
          <p className="text-xs text-alba-cream/70">
            Expert wood finishing • Premium stains & varnishes • Staircase specialists • Period property experience
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
            "serviceType": "Wood Finishing and Staining Services",
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
            "description": "Professional wood staining, varnishing and finishing services for staircases, doors, floors and interior woodwork. Expert application of stains, sealers and protective coatings."
          })
        }}
      />
    </main>
  );
}