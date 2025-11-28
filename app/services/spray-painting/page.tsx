import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Spray Painting Services London | Alba Decor',
  description: 'Expert spray painting for kitchen cabinets, doors, furniture & UPVC windows in North London & Hertfordshire. Factory-quality finishes using HVLP systems. Call 07404304224',
  keywords: 'spray painting London, kitchen cabinet spraying Hertfordshire, door spraying, furniture spraying, UPVC window painting, professional spray finishes, Barnet spray painters',
  openGraph: {
    title: 'Professional Spray Painting Services London | Alba Decor',
    description: 'Expert spray painting for kitchen cabinets, doors, furniture & UPVC windows in North London & Hertfordshire. Factory-quality finishes using HVLP systems.',
    url: 'https://albadecor.co.uk/services/spray-painting',
  },
};

export default function SprayPainting() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Professional Spray Painting for Flawless Finishes
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Achieve factory-quality finishes with professional spray painting services across North London and Hertfordshire. Alba Decor uses advanced HVLP spray systems to deliver smooth, durable finishes on kitchen cabinets, doors, furniture, and specialist surfaces that simply cannot be matched by brush or roller application.
          </p>
        </header>

        {/* Why Spray Instead of Brush/Roller */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Spray Instead of Brush or Roller?
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Spray painting represents the pinnacle of paint application technology. While brush and roller methods have their place, spray application delivers results that are simply impossible to achieve through traditional methods, particularly on smooth surfaces like kitchen cabinets and doors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-display text-lg font-bold text-blue-800 mb-3">Superior Finish Quality</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Glass-smooth surface with no brush marks</li>
                <li>• Even coverage without roller stipple</li>
                <li>• Professional factory-like appearance</li>
                <li>• Consistent sheen across entire surface</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-lg font-bold text-green-800 mb-3">Efficiency & Speed</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Faster coverage of large areas</li>
                <li>• Multiple thin coats build quickly</li>
                <li>• Reduced labor time per surface</li>
                <li>• Faster project completion</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h3 className="font-display text-lg font-bold text-amber-800 mb-3">Durability Benefits</h3>
              <ul className="text-sm text-amber-700 space-y-2">
                <li>• Better paint adhesion and penetration</li>
                <li>• More uniform film thickness</li>
                <li>• Enhanced resistance to wear</li>
                <li>• Longer-lasting finish quality</li>
              </ul>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            The difference is immediately apparent when comparing spray-finished surfaces to brush or roller application. Spray painting eliminates texture marks, provides superior coverage in detailed areas, and creates the smooth, professional finish that modern interiors demand.
          </p>
        </section>

        {/* What We Spray Paint */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            What We Spray Paint
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Our professional spray painting service covers a wide range of surfaces and materials. Each application requires specific techniques, equipment settings, and paint formulations to achieve optimal results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Kitchen Cabinets</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Our specialty service that transforms tired kitchen cabinets with factory-quality finishes. Doors are removed and sprayed in controlled conditions, ensuring perfect results that rival new kitchen installations at a fraction of the cost.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Finish quality:</strong> Glass-smooth, durable, easy to clean
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Interior & Exterior Doors</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Panel doors, flush doors, and French doors all benefit from spray application. We can achieve smooth finishes on detailed moldings and panels that would be impossible with brush application.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Advantage:</strong> Perfect coverage in grooves and detailed areas
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Furniture & Built-in Units</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Wardrobes, bookcases, media units, and custom joinery receive professional finishes that enhance their appearance and value. Spray application ensures consistent coverage on complex shapes and detailed work.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Perfect for:</strong> Detailed moldings, complex shapes, large surfaces
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Radiators & Pipework</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Spray application excels at covering the complex shapes and tight spaces of radiators and exposed pipework. We use heat-resistant paints that maintain their appearance and performance.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Benefit:</strong> Complete coverage in difficult-to-reach areas
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Window Frames & UPVC</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Tired UPVC windows and doors can be transformed with specialist spray paints designed for plastic surfaces. This cost-effective alternative to replacement gives frames a fresh, modern appearance.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Specialty:</strong> UPVC-specific paints and primers for lasting adhesion
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Metal Railings & Gates</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Exterior metalwork benefits from spray application's ability to provide even coverage on complex shapes while ensuring complete protection against corrosion and weather damage.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Advantage:</strong> Superior coverage on intricate metalwork details
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Spray Painting Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Professional Spray Painting Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Professional spray painting requires specialized equipment, controlled environments, and meticulous preparation. Our systematic approach ensures consistent, high-quality results that justify the investment in spray technology.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Complete Masking & Protection</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Spray painting creates overspray that must be contained. We use professional masking films and paper to protect all surrounding surfaces, furniture, and fixtures. This preparation is critical for achieving clean results.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Surface Preparation & Priming</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Surfaces are thoroughly cleaned, sanded, and primed as appropriate. Spray application amplifies surface imperfections, so preparation must be meticulous. We use specialized primers for different materials to ensure optimal adhesion.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Multiple Thin Coats Application</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We apply multiple thin coats rather than attempting thick coverage in one pass. This technique prevents runs, ensures even coverage, and builds to the optimal film thickness for durability and appearance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Controlled Environment</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  For interior work, we create dust-free environments using plastic sheeting and air filtration. This prevents contamination during the critical drying period when paint is most vulnerable to defects.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Professional HVLP Equipment</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We use High Volume Low Pressure (HVLP) spray systems that provide superior transfer efficiency and reduced overspray. This professional equipment ensures consistent atomization and optimal finish quality.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Proper Drying Between Coats</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Each coat must dry properly before the next application. We monitor environmental conditions and adjust timing accordingly, never rushing the process to meet artificial deadlines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spray vs Hand-Painted */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Spray vs Hand-Painted: Choosing the Right Method
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            While spray painting offers superior results for many applications, it's not always the best choice. Understanding when to use each method ensures optimal results and value for your specific project.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-display text-xl font-bold text-blue-800 mb-4">Best for Spray Painting</h3>
              <ul className="space-y-2 text-blue-700">
                <li><strong>Kitchen Cabinets:</strong> Factory-quality smooth finish essential</li>
                <li><strong>Smooth Doors:</strong> Flush and panel doors benefit from spray application</li>
                <li><strong>Furniture:</strong> Built-in units and fine furniture requiring perfect finish</li>
                <li><strong>Metal Surfaces:</strong> Radiators, railings, and complex metalwork</li>
                <li><strong>UPVC Windows:</strong> Specialist application for plastic surfaces</li>
                <li><strong>Large Flat Areas:</strong> Where speed and smoothness are priorities</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-xl font-bold text-green-800 mb-4">Better Hand-Painted</h3>
              <ul className="space-y-2 text-green-700">
                <li><strong>Period Properties:</strong> Traditional brush finish maintains authenticity</li>
                <li><strong>Textured Surfaces:</strong> Rough walls and textured finishes</li>
                <li><strong>Exterior Masonry:</strong> Render and brick surfaces</li>
                <li><strong>Small Touch-ups:</strong> Minor repairs and maintenance work</li>
                <li><strong>Shaker-Style Kitchens:</strong> Traditional aesthetic preferences</li>
                <li><strong>Budget Projects:</strong> Where cost is the primary consideration</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-alba-warm-white p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Our Recommendation Process</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              During consultation, we assess your project requirements, aesthetic preferences, and budget to recommend the most appropriate application method. Sometimes we combine both techniques within a single project – spray painting doors and cabinets while hand-painting walls and trim for optimal results and value.
            </p>
          </div>
        </section>

        {/* Perfect for Kitchen Cabinet Refinishing */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Perfect for Kitchen Cabinet Refinishing
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Kitchen cabinet spraying represents the pinnacle of our spray painting service. This application transforms tired kitchens with factory-quality finishes that rival new installations while costing 60-70% less than replacement.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Why Spray Kitchen Cabinets?</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Glass-Smooth Finish:</strong> Eliminates brush marks and roller texture completely</li>
                <li><strong>Even Coverage:</strong> Perfect coverage in grooves, moldings, and detailed areas</li>
                <li><strong>Durability:</strong> Superior film build and adhesion for high-use surfaces</li>
                <li><strong>Professional Appearance:</strong> Indistinguishable from factory-finished cabinets</li>
                <li><strong>Easy Maintenance:</strong> Smooth surfaces are easier to clean and maintain</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Our Cabinet Spray Process</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Complete Removal:</strong> Doors and drawers removed for workshop spraying</li>
                <li><strong>Controlled Environment:</strong> Dust-free spray booth conditions</li>
                <li><strong>Professional Preparation:</strong> Thorough cleaning, sanding, and priming</li>
                <li><strong>Multiple Coats:</strong> Build-up of thin, even coats for optimal finish</li>
                <li><strong>Quality Control:</strong> Inspection and touch-up before reinstallation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-alba-cream p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Typical Kitchen Cabinet Timeline</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              A standard kitchen cabinet spray project takes 5-7 days total. This includes removal (day 1), preparation and spraying (days 2-4), curing time (day 5), and reinstallation (days 6-7). Your kitchen remains partially functional throughout most of the process.
            </p>
          </div>
        </section>

        {/* Indoor vs Outdoor Spraying */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Indoor vs Outdoor Spraying Capabilities
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            We have specialized equipment and techniques for both indoor and outdoor spray applications. Each environment presents unique challenges that require different approaches and equipment configurations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Indoor Spray Painting</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Controlled environment with dust barriers</li>
                <li>• HVLP systems for minimal overspray</li>
                <li>• Air filtration and ventilation systems</li>
                <li>• Low-VOC paints for occupied buildings</li>
                <li>• Complete protection of furnishings and floors</li>
                <li>• Ideal for cabinets, doors, and built-in furniture</li>
              </ul>
              
              <div className="bg-alba-warm-white p-4 rounded-xl mt-4">
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  <strong>Best for:</strong> Kitchen cabinets, interior doors, built-in wardrobes, radiators, and detailed interior woodwork requiring perfect finishes.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Outdoor Spray Painting</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Weather-dependent scheduling for optimal conditions</li>
                <li>• Airless spray systems for larger coverage</li>
                <li>• Wind barriers and overspray protection</li>
                <li>• Weather-resistant paint formulations</li>
                <li>• Landscape and property protection</li>
                <li>• Suitable for gates, railings, and exterior joinery</li>
              </ul>
              
              <div className="bg-alba-cream p-4 rounded-xl mt-4">
                <p className="text-sm text-alba-charcoal/80 leading-relaxed">
                  <strong>Best for:</strong> Metal railings, gates, exterior doors, window frames, and large exterior surfaces requiring smooth, durable finishes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Achieve Factory-Quality Finishes
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Transform your kitchen cabinets, doors, or furniture with professional spray painting that delivers results impossible to achieve by hand. Get a consultation to see if spray painting is right for your project.
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
              Request Spray Quote
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80 mb-4">
            Serving Barnet, Enfield, Watford, St Albans, Harrow, Stevenage and throughout North London & Hertfordshire
          </p>
          <p className="text-xs text-alba-cream/70">
            HVLP spray systems • Factory-quality finishes • Kitchen cabinet specialists • Indoor & outdoor capability
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
            "serviceType": "Professional Spray Painting Services",
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
            "description": "Professional spray painting services using HVLP systems for kitchen cabinets, doors, furniture, UPVC windows and metalwork. Factory-quality finishes with superior durability."
          })
        }}
      />
    </main>
  );
}