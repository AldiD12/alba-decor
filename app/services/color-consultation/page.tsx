import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Color Consultation & Design Advice London | Alba Decor',
  description: 'Expert color consultation services in North London & Hertfordshire. Interior paint color selection, design advice & color matching. Perfect your space with professional guidance. Call 07404304224',
  keywords: 'color consultation London, interior color advice Hertfordshire, paint color selection, color matching services, interior design advice, color psychology, Barnet color consultants',
  openGraph: {
    title: 'Professional Color Consultation & Design Advice London | Alba Decor',
    description: 'Expert color consultation services in North London & Hertfordshire. Interior paint color selection, design advice & color matching. Perfect your space with professional guidance.',
    url: 'https://albadecor.co.uk/services/color-consultation',
  },
};

export default function ColorConsultation() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Professional Color Consultation to Perfect Your Space
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Transform your home with expert color guidance from Alba Decor's design professionals. Serving North London and Hertfordshire, we help you navigate the overwhelming world of paint colors to create spaces that reflect your style and enhance your daily life.
          </p>
        </header>

        {/* Why Color Choice Matters */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Color Choice Matters
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            With thousands of paint colors available from brands like Farrow & Ball, Dulux, and Crown, choosing the right shades can feel overwhelming. Many people find themselves paralyzed by choice, worried about making expensive mistakes. Color affects far more than just appearance - it influences mood, space perception, light quality, and even property value.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Mood & Psychology</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Energizing vs Relaxing:</strong> Consider room purpose when selecting colors</li>
                <li><strong>Emotional Response:</strong> Colors directly affect how you feel in a space</li>
                <li><strong>Sleep Quality:</strong> Bedroom colors influence rest and relaxation</li>
                <li><strong>Productivity:</strong> Office colors can improve focus and motivation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Space & Light</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Space Perception:</strong> Light colors make rooms feel larger (but not always white)</li>
                <li><strong>Light Enhancement:</strong> Colors look completely different in various lighting</li>
                <li><strong>Property Value:</strong> Well-chosen colors appeal to potential buyers</li>
                <li><strong>Cohesive Flow:</strong> Coordinated colors create harmonious environments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Color Consultation Service */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Color Consultation Service
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Our color consultation goes beyond simply suggesting paint colors. We assess your space holistically, considering lighting, architecture, existing elements, and your personal style to create a cohesive color scheme that works beautifully in your specific environment.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">In-Home Consultation</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We visit your property to see your spaces in their actual lighting conditions. Colors behave completely differently in north-facing vs south-facing rooms, under artificial lighting, and at different times of day. This on-site assessment is essential for accurate color selection.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Review of Lighting (Natural and Artificial)</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We evaluate both natural light direction and intensity, plus your artificial lighting setup. Warm vs cool bulbs, placement, and dimming options all dramatically affect how colors appear throughout the day and seasons.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Discussion of Your Style and Needs</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We discuss your personal style preferences, how you use each space, and any specific requirements. Whether you need energizing colors for a home office or relaxing tones for a bedroom, we tailor recommendations to your lifestyle.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Sample Recommendations</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We provide specific paint recommendations from Farrow & Ball, Dulux, Crown, and other quality ranges. Sample pots are essential - we'll guide you on proper testing methods since colors look different in different lights.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Consideration of Existing Furniture/Fixtures</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We coordinate with your existing flooring, furniture, and fixtures to ensure new colors complement rather than clash. We can also color-match from fabric, wallpaper, or existing paint to create perfect harmony.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Room-to-Room Flow</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Open-plan spaces need cohesive color flow while maintaining individual room character. We plan color transitions that create natural flow throughout your home, especially important in modern open-plan living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Color Challenges */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Common Color Challenges We Solve
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Every home presents unique color challenges. Our experience with North London and Hertfordshire properties means we understand the specific issues common to our area and how to address them effectively.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">North-Facing Rooms (Lack of Light)</h3>
              <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                North-facing rooms need warm colors to counteract cold light. These spaces receive cool, indirect light that can make colors appear flat and unwelcoming. We recommend warm undertones and specific color families that bring life to these challenging spaces.
              </p>
              <p className="text-sm text-alba-charcoal/60">
                <strong>Solutions:</strong> Warm whites, soft yellows, peachy pinks, warm grays with yellow undertones
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Small Spaces (Making Them Feel Larger)</h3>
              <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                Small rooms benefit from light colors, but not always white. We use color strategically to create the illusion of space while maintaining personality. Sometimes darker colors can actually make small rooms feel more spacious by creating depth and intimacy.
              </p>
              <p className="text-sm text-alba-charcoal/60">
                <strong>Techniques:</strong> Light-reflecting colors, strategic accent walls, ceiling color tricks, mirrors and lighting coordination
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Open-Plan Color Flow</h3>
              <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                Open-plan spaces need cohesive color flow while defining different functional areas. We create schemes that allow each zone to have its own identity within a harmonious overall palette, essential for modern living spaces.
              </p>
              <p className="text-sm text-alba-charcoal/60">
                <strong>Approach:</strong> Tonal variations, coordinated accent walls, complementary but not identical colors
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Period Property Appropriate Colors</h3>
              <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                Period properties often suit heritage colors that respect their architectural character. We understand the National Trust palette and traditional color schemes while adapting them for contemporary living needs.
              </p>
              <p className="text-sm text-alba-charcoal/60">
                <strong>Expertise:</strong> National Trust palette, Farrow & Ball heritage range, Victorian and Edwardian appropriate schemes
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
              <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Clashing with Existing Elements</h3>
              <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                When colors clash with existing flooring, furniture, or fixtures, we find harmonious solutions. We can color-match from fabric, wallpaper, or existing paint to create perfect coordination with elements you want to keep.
              </p>
              <p className="text-sm text-alba-charcoal/60">
                <strong>Services:</strong> Color matching from samples, coordination with existing décor, complementary color theory
              </p>
            </div>
          </div>
        </section>

        {/* Trending Colors for 2025 */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Trending Colors for 2025
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            While trends shouldn't dictate your color choices, understanding current directions can provide inspiration and ensure your home feels fresh and contemporary. Here are the colors we're seeing most often in our North London and Hertfordshire projects.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#E8E5DC' }}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Warm Neutrals</h4>
                  <p className="text-sm text-alba-charcoal/80">Creamy whites and soft beiges that add warmth without overwhelming</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#7A9B76' }}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Earthy Greens</h4>
                  <p className="text-sm text-alba-charcoal/80">Sage, olive, and forest greens that bring nature indoors</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#9B8B7E' }}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Sophisticated Grays</h4>
                  <p className="text-sm text-alba-charcoal/80">Warm grays with brown or green undertones, avoiding cold blue-grays</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#1C3A4E' }}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Deep Blues</h4>
                  <p className="text-sm text-alba-charcoal/80">Navy and midnight blues for dramatic accent walls and sophisticated spaces</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#D4A574' }}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Warm Terracotta</h4>
                  <p className="text-sm text-alba-charcoal/80">Earthy oranges and clay colors that add warmth and personality</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-alba-cream">
                <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#6B4E71' }}></div>
                <div>
                  <h4 className="font-bold text-alba-primary">Muted Purples</h4>
                  <p className="text-sm text-alba-charcoal/80">Soft lavenders and plums for bedrooms and relaxing spaces</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-alba-cream p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Timeless vs Trendy</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              While trends provide inspiration, we always recommend balancing current colors with timeless choices. Use trending colors as accents or in easily changeable elements, while keeping main wall colors in classic, versatile shades that won't date quickly.
            </p>
          </div>
        </section>

        {/* Testing Before Committing */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Testing Before Committing
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Sample pots are essential - colors look different in different lights. The most important step in color selection is proper testing. Colors can look dramatically different between the paint chip, your home's lighting, and adjacent surfaces. We guide you through effective testing methods that prevent expensive mistakes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Proper Testing Method</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Sample Pots:</strong> We recommend 3-4 colors for testing based on your requirements</li>
                <li><strong>Painting Test Patches:</strong> Paint large samples (A4 size minimum) on different walls</li>
                <li><strong>Multiple Lighting:</strong> View samples in morning, afternoon, and evening light</li>
                <li><strong>Adjacent Testing:</strong> See how colors work with existing flooring and furniture</li>
                <li><strong>Live-With Period:</strong> Observe colors for several days before final decision</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">What Changes to Expect</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Undertone Shifts:</strong> Colors reveal different undertones in various lighting</li>
                <li><strong>Intensity Changes:</strong> Colors may appear stronger or weaker than expected</li>
                <li><strong>Time of Day:</strong> Natural light changes dramatically throughout the day</li>
                <li><strong>Artificial Light:</strong> Warm vs cool bulbs completely change color appearance</li>
                <li><strong>Seasonal Variation:</strong> Light quality changes between summer and winter</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Color Psychology */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Color Psychology
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Colors affect mood and perception more than most people realize. Understanding color psychology helps create spaces that support your lifestyle and wellbeing.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-display text-lg font-bold text-blue-800 mb-3">Calming Colors</h3>
              <p className="text-blue-700 mb-3 text-sm leading-relaxed">
                Blues, soft greens, and muted purples create relaxing environments perfect for bedrooms and bathrooms.
              </p>
              <p className="text-xs text-blue-600"><strong>Best for:</strong> Bedrooms, bathrooms, reading nooks</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="font-display text-lg font-bold text-orange-800 mb-3">Energizing Colors</h3>
              <p className="text-orange-700 mb-3 text-sm leading-relaxed">
                Warm yellows, oranges, and reds stimulate energy and conversation, ideal for social spaces.
              </p>
              <p className="text-xs text-orange-600"><strong>Best for:</strong> Kitchens, dining rooms, home offices</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-lg font-bold text-green-800 mb-3">Balancing Colors</h3>
              <p className="text-green-700 mb-3 text-sm leading-relaxed">
                Neutral greens and warm grays provide balance, working well in any room while supporting focus.
              </p>
              <p className="text-xs text-green-600"><strong>Best for:</strong> Living rooms, hallways, multi-purpose spaces</p>
            </div>
          </div>
        </section>

        {/* Included with Painting Services */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Included with Our Painting Services
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Basic color advice is included free with all our painting projects, while in-depth consultation is available for complex projects requiring extensive color planning.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-xl font-bold text-green-800 mb-4">Free Basic Color Advice</h3>
              <p className="text-green-700 mb-3 leading-relaxed">
                Included with every painting project - general recommendations, undertone guidance, and coordination with your existing elements.
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Color recommendations from our experience</li>
                <li>• Undertone and lighting considerations</li>
                <li>• Coordination with existing flooring and furniture</li>
                <li>• Sample pot suggestions from quality ranges</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-display text-xl font-bold text-blue-800 mb-4">In-Depth Consultation Available</h3>
              <p className="text-blue-700 mb-3 leading-relaxed">
                Comprehensive design consultation for complex projects, whole-house schemes, or when you need extensive color planning support.
              </p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Detailed in-home lighting assessment</li>
                <li>• Written color scheme recommendations</li>
                <li>• Room-by-room flow planning</li>
                <li>• Color matching from existing elements</li>
                <li>• Follow-up support during testing phase</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Working with Existing Elements */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Working with Existing Elements
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Coordinating with flooring, furniture, and fixtures is often the biggest challenge. We use existing elements as starting points rather than limitations, creating harmonious schemes that work with what you already have.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Elements We Coordinate With</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Existing flooring (carpet, wood, tile, stone)</li>
                <li>• Kitchen units and worktops</li>
                <li>• Bathroom suites and tiles</li>
                <li>• Built-in furniture and joinery</li>
                <li>• Favorite furniture pieces you're keeping</li>
                <li>• Artwork and decorative items</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Our Coordination Methods</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Color matching from fabric, wallpaper, existing paint</li>
                <li>• Extracting colors from patterns or textures</li>
                <li>• Using complementary color theory principles</li>
                <li>• Creating tonal variations for depth</li>
                <li>• Balancing warm and cool elements throughout</li>
                <li>• Planning for future updates and changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Get Your Colors Right the First Time
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Don't leave your color choices to chance. Get professional guidance that ensures your colors work beautifully in your specific space and lighting conditions. Book a consultation to explore your options with confidence.
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
              Book Color Consultation
            </a>
          </div>

          <p className="text-sm text-alba-cream/80 mb-4">
            Serving Barnet, Enfield, Watford, St Albans, Harrow, Stevenage and throughout North London & Hertfordshire
          </p>
          <p className="text-xs text-alba-cream/70">
            Professional color advice • In-home consultations • Color matching services • Trend guidance
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
            "serviceType": "Color Consultation and Interior Design Advice",
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
            "description": "Professional color consultation and interior design advice services. Expert paint color selection, color matching, and design guidance for residential and commercial properties."
          })
        }}
      />
    </main>
  );
}