import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Wallpaper Installation & Removal Services London | Alba Decor',
  description: 'Professional wallpaper hanging, removal & repair services in North London & Hertfordshire. Designer wallpaper installation, feature walls & commercial wallpapering. Call 07404304224',
  keywords: 'wallpaper installation London, wallpaper hanging Hertfordshire, wallpaper removal, feature wall wallpaper, designer wallpaper hanging, commercial wallpaper, Barnet wallpaper services',
  openGraph: {
    title: 'Expert Wallpaper Installation & Removal Services London | Alba Decor',
    description: 'Professional wallpaper hanging, removal & repair services in North London & Hertfordshire. Designer wallpaper installation, feature walls & commercial wallpapering.',
    url: 'https://albadecor.co.uk/services/wallpaper-services',
  },
};

export default function WallpaperServices() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Expert Wallpaper Installation & Removal Services
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Transform your space with professional wallpaper installation and removal services across North London and Hertfordshire. From designer feature walls to complete room makeovers, Alba Decor delivers flawless results with precision pattern matching and seamless joins.
          </p>
        </header>

        {/* Professional Wallpaper Hanging */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Professional Wallpaper Hanging vs DIY Disasters
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Wallpapering looks deceptively simple, but achieving professional results requires skill, experience, and the right tools. Poor wallpaper installation is immediately obvious – mismatched patterns, visible seams, bubbles, and crooked lines can ruin expensive wallpaper and waste your investment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="font-display text-lg font-bold text-red-800 mb-3">Common DIY Problems</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ Pattern mismatches at seams</li>
                <li>✗ Visible joins and overlaps</li>
                <li>✗ Air bubbles and wrinkles</li>
                <li>✗ Crooked or uneven hanging</li>
                <li>✗ Waste from incorrect measuring</li>
                <li>✗ Damage to expensive wallpaper</li>
                <li>✗ Poor adhesion leading to peeling</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-lg font-bold text-green-800 mb-3">Professional Results</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ Perfect pattern alignment</li>
                <li>✓ Invisible seams and joins</li>
                <li>✓ Smooth, bubble-free finish</li>
                <li>✓ Precise cutting and trimming</li>
                <li>✓ Accurate quantity calculations</li>
                <li>✓ Protection of valuable wallpaper</li>
                <li>✓ Long-lasting adhesion</li>
              </ul>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            Professional wallpaper hanging is particularly crucial for expensive designer wallpapers, complex patterns, and feature walls where perfection is essential. We have the experience to handle challenging installations and the tools to achieve flawless results every time.
          </p>
        </section>

        {/* Types of Wallpaper */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Types of Wallpaper We Work With
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Different wallpaper types require different installation techniques, adhesives, and handling methods. Our experience spans all wallpaper categories, from traditional papers to modern specialty materials.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Traditional Wallpapers</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-alba-primary mb-2">Paste-the-Wall Papers</h4>
                  <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                    Standard wallpapers requiring paste application to the wall. Includes most designer papers, traditional patterns, and budget-friendly options. Requires careful timing and technique for proper adhesion.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-alba-primary mb-2">Paste-the-Paper</h4>
                  <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                    Traditional method where paste is applied to the wallpaper back. Common with heavier papers and some vintage-style wallpapers. Requires booking time and careful handling.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-alba-primary mb-2">Peel-and-Stick</h4>
                  <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                    Self-adhesive wallpapers that seem easy but require perfect positioning from the start. No room for error – professional installation ensures proper alignment and prevents waste.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Specialty Wallpapers</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-alba-primary mb-2">Vinyl Wallpapers</h4>
                  <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                    Durable, washable wallpapers perfect for kitchens, bathrooms, and high-traffic areas. Requires specific adhesives and techniques for proper installation and longevity.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-alba-primary mb-2">Textured & Embossed</h4>
                  <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                    Papers with raised patterns or textures that add depth and interest. Requires careful handling to avoid crushing the texture and special attention to seam alignment.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-alba-primary mb-2">Designer & Luxury Papers</h4>
                  <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                    High-end wallpapers from brands like Farrow & Ball, Cole & Son, or William Morris. Often expensive and unforgiving – professional installation is essential to protect your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-alba-warm-white p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Feature Wall Installation</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              Feature walls have become increasingly popular as a way to add drama and personality without overwhelming a space. We specialize in creating stunning accent walls behind beds, in dining rooms, or as living room focal points. Perfect pattern centering and precise trimming around fixtures ensure professional results that become the room's centerpiece.
            </p>
          </div>
        </section>

        {/* Wallpaper Removal Services */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Professional Wallpaper Removal Services
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Removing old wallpaper is often more challenging than installation, especially in older North London properties where multiple layers may have been applied over decades. Improper removal can damage walls, requiring expensive repairs before new decoration can begin.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-alba-accent pl-6">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Steam Stripping</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Professional steam stripping equipment softens old paste and allows wallpaper to be removed in large sections. This method is gentler on walls than scraping and more effective than soaking methods. Particularly effective for multiple layers and stubborn vinyl papers.
              </p>
            </div>
            
            <div className="border-l-4 border-alba-accent pl-6">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Chemical Stripping</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Specialized wallpaper removal solutions break down adhesive bonds, making removal easier and reducing wall damage. We use professional-grade products that are more effective than DIY solutions while being safe for indoor use.
              </p>
            </div>
            
            <div className="border-l-4 border-alba-accent pl-6">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Wall Repair After Removal</h3>
              <p className="text-alba-charcoal/80 leading-relaxed">
                Wallpaper removal often reveals wall imperfections, holes from previous fixings, or damage from poor previous removal attempts. We assess and repair walls as needed, ensuring a perfect surface for new decoration whether painting or re-wallpapering.
              </p>
            </div>
          </div>
          
          <div className="bg-alba-cream p-6 rounded-xl mt-6">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Victorian Property Challenges</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              Many Victorian and Edwardian properties in Barnet, Enfield, and surrounding areas have accumulated multiple wallpaper layers over 100+ years. We regularly encounter 3-5 layers of different papers, each requiring different removal techniques. Our experience with period properties means we understand how to work with lime plaster walls and avoid damage to original features.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Professional Wallpapering Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Successful wallpaper installation requires meticulous preparation, precise measuring, and careful execution. Our systematic approach ensures perfect results regardless of wallpaper type or room complexity.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Surface Preparation</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Walls must be clean, smooth, and properly sized before wallpaper application. We fill holes, sand rough areas, and apply appropriate primer or sizing solution to ensure optimal adhesion and prevent future peeling.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Measuring & Planning</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Accurate measuring accounts for pattern repeats, room features, and waste minimization. We plan the starting point to ensure patterns are centered and balanced, particularly important for feature walls and rooms with focal points.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Pattern Matching</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Precise pattern alignment at seams is what separates professional from amateur work. We carefully match patterns both horizontally and vertically, ensuring seamless flow across the entire wall surface.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Installation & Trimming</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Each strip is carefully positioned, smoothed to eliminate air bubbles, and precisely trimmed around fixtures, corners, and edges. We use professional tools to achieve clean cuts and invisible seams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Common Wallpapering Challenges We Solve
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Technical Challenges</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Uneven Walls:</strong> Older properties often have walls that aren't perfectly straight. We use techniques to minimize the appearance of irregularities.</li>
                <li><strong>Complex Patterns:</strong> Large repeat patterns require careful planning to ensure they align properly and look balanced in the room.</li>
                <li><strong>Corners & Angles:</strong> Internal and external corners need special attention to maintain pattern continuity and prevent peeling.</li>
                <li><strong>Electrical Fixtures:</strong> Precise cutting around switches, sockets, and light fittings without damaging expensive wallpaper.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Property-Specific Issues</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Period Properties:</strong> Victorian and Edwardian homes often have picture rails, dado rails, and irregular wall surfaces requiring special techniques.</li>
                <li><strong>Modern Homes:</strong> Contemporary properties may have textured walls or unusual architectural features that need accommodation.</li>
                <li><strong>Moisture Areas:</strong> Bathrooms and kitchens require appropriate wallpaper types and installation methods to prevent peeling.</li>
                <li><strong>High Ceilings:</strong> Tall rooms need professional equipment and techniques for safe, accurate installation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline & Costs */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Timeline & Investment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Typical Timelines</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Single Room:</strong> 1-2 days depending on size and complexity</li>
                <li><strong>Feature Wall:</strong> Half to full day including preparation</li>
                <li><strong>Wallpaper Removal:</strong> Additional 1-2 days depending on layers and wall condition</li>
                <li><strong>Multiple Rooms:</strong> 3-5 days for average house, working room by room</li>
              </ul>
              
              <div className="bg-alba-warm-white p-4 rounded-xl mt-4">
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  <strong>Note:</strong> We work efficiently but never rush wallpaper installation. Proper drying time between preparation and installation is essential for long-lasting results.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Investment Guide</h3>
              <div className="space-y-3">
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Wallpaper Installation</p>
                  <p className="text-lg font-bold text-alba-accent">£25 - £40 per roll</p>
                  <p className="text-sm text-alba-charcoal/60">Labor only - customer provides wallpaper</p>
                </div>
                
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Wallpaper Removal</p>
                  <p className="text-lg font-bold text-alba-accent">£15 - £25 per roll</p>
                  <p className="text-sm text-alba-charcoal/60">Including disposal and basic wall preparation</p>
                </div>
                
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Feature Wall</p>
                  <p className="text-lg font-bold text-alba-accent">£150 - £300</p>
                  <p className="text-sm text-alba-charcoal/60">Depending on wall size and wallpaper complexity</p>
                </div>
              </div>
              
              <p className="text-sm text-alba-charcoal/60 mt-4">
                Typical room requires 2-3 rolls depending on pattern repeat and room size. We provide accurate quantity calculations during quotation.
              </p>
            </div>
          </div>
          
          <div className="bg-alba-cream p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Wallpaper Supply</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              We don't supply wallpaper but can advise on quantities needed and recommend local suppliers. This allows you to choose exactly the wallpaper you want while ensuring we order the correct amount. We can also advise on wallpaper suitability for your specific room and installation requirements.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Perfect Wallpaper Installation Every Time
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Don't risk ruining expensive wallpaper with DIY installation. Get a professional quote for flawless wallpaper hanging, removal, or repair services. We bring the expertise and tools needed for perfect results.
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
            Professional installation • Pattern matching expertise • All wallpaper types • Removal & repair services
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
            "serviceType": "Wallpaper Installation and Removal Services",
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
            "description": "Professional wallpaper hanging, removal and repair services. Expert installation of designer wallpapers, feature walls, vinyl and specialty wallpapers with perfect pattern matching.",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15",
              "highPrice": "40",
              "priceCurrency": "GBP"
            }
          })
        }}
      />
    </main>
  );
}