import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Decorative Finishes & Specialty Painting London | Alba Decor',
  description: 'Bespoke decorative finishes including Venetian plaster, faux effects, textured walls, feature walls & custom murals. Premium artisan techniques in North London & Hertfordshire. Call 07404304224',
  keywords: 'decorative finishes London, Venetian plaster Hertfordshire, faux painting, textured walls, feature walls, custom murals, specialty painting, luxury interior finishes, Barnet decorators',
  openGraph: {
    title: 'Decorative Finishes & Specialty Painting London | Alba Decor',
    description: 'Bespoke decorative finishes including Venetian plaster, faux effects, textured walls, feature walls & custom murals. Premium artisan techniques in North London & Hertfordshire.',
    url: 'https://albadecor.co.uk/services/decorative-finishes',
  },
};

export default function DecorativeFinishes() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Bespoke Decorative Finishes for Distinctive Interiors
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Transform your space with artisan decorative finishes that go far beyond standard painting. Alba Decor specializes in premium techniques including Venetian plaster, faux effects, textured walls, and custom murals across North London and Hertfordshire, creating truly unique interiors for discerning clients.
          </p>
        </header>

        {/* What Are Decorative Finishes */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            What Are Decorative Finishes?
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Decorative finishes are specialty painting and plastering techniques that create texture, depth, and visual interest beyond what standard paint can achieve. These artisan methods have been used for centuries to create luxurious, distinctive interiors in palaces, grand homes, and prestigious commercial spaces.
          </p>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Unlike standard painting where the goal is smooth, even coverage, decorative finishes celebrate texture, pattern, and artistic expression. Each technique requires specialized skills, premium materials, and considerable time to execute properly. The result is a truly bespoke interior that reflects your personal style and creates a lasting impression.
          </p>
          <div className="bg-alba-warm-white p-6 rounded-xl">
            <p className="text-alba-charcoal/80 leading-relaxed italic">
              "Decorative finishes are about creating atmosphere and emotion in a space. Whether it's the timeless elegance of Venetian plaster or the contemporary drama of a geometric feature wall, these techniques transform rooms into works of art." - Alba Decor Master Craftsman
            </p>
          </div>
        </section>

        {/* Our Specialty Techniques */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-8">
            Our Specialty Techniques
          </h2>

          {/* Venetian Plaster */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
            <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">Venetian Plaster</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              The crown jewel of decorative finishes, Venetian plaster creates a polished, marble-like surface with incredible depth and luminosity. This ancient Italian technique involves applying multiple thin layers of lime-based plaster, each burnished to create a smooth, reflective finish that seems to glow from within.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Traditional Venetian Plaster</h4>
                <p className="text-sm text-alba-charcoal/80 mb-3 leading-relaxed">
                  Authentic lime-based plaster applied in 3-4 coats, each troweled and burnished by hand. Creates the classic polished marble appearance with natural variation and movement. Perfect for feature walls, dining rooms, and luxury bathrooms.
                </p>
                <p className="text-xs text-alba-charcoal/60">Timeline: 3-4 days including drying and polishing</p>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Modern Venetian Effects</h4>
                <p className="text-sm text-alba-charcoal/80 mb-3 leading-relaxed">
                  Contemporary interpretations using tinted plasters and metallic waxes. Can achieve subtle shimmer effects, aged patinas, or bold contemporary looks. Suitable for modern homes wanting luxury texture without traditional styling.
                </p>
                <p className="text-xs text-alba-charcoal/60">Timeline: 2-3 days depending on complexity</p>
              </div>
            </div>
          </div>

          {/* Feature Walls */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
            <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">Feature Walls & Accent Designs</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              Create dramatic focal points with expertly designed feature walls. From geometric patterns and color blocking to ombré effects and architectural details, we design and execute accent walls that transform entire rooms.
            </p>
            <ul className="space-y-3 text-alba-charcoal/80">
              <li><strong>Geometric Designs:</strong> Clean lines, bold shapes, and contemporary patterns using precision masking and premium paints</li>
              <li><strong>Color Blocking:</strong> Strategic use of contrasting or complementary colors to define spaces and create visual interest</li>
              <li><strong>Ombré & Gradient Effects:</strong> Subtle color transitions that add depth and sophistication to any room</li>
              <li><strong>Architectural Features:</strong> Painted moldings, panels, and details that add character without structural changes</li>
            </ul>
          </div>

          {/* Textured Finishes */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
            <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">Textured Finishes</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              Add tactile interest and visual depth with professional textured finishes. These techniques create surface variation that catches light beautifully and adds warmth to any interior.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Stippling</h4>
                <p className="text-sm text-alba-charcoal/80">Fine, even texture created with specialized brushes. Subtle but effective for hiding wall imperfections while adding visual interest.</p>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Rag Rolling</h4>
                <p className="text-sm text-alba-charcoal/80">Soft, organic patterns created by rolling textured materials through wet glaze. Creates depth and movement on walls.</p>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Sponging</h4>
                <p className="text-sm text-alba-charcoal/80">Natural sea sponges create irregular, organic textures. Can be subtle or dramatic depending on color choices and technique.</p>
              </div>
            </div>
          </div>

          {/* Faux Effects */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
            <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">Faux Effects & Material Mimicry</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              Achieve the look of expensive materials at a fraction of the cost. Our faux finishing techniques can convincingly replicate marble, wood grain, concrete, metal, and stone surfaces.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Marble & Stone Effects</h4>
                <p className="text-sm text-alba-charcoal/80 mb-2 leading-relaxed">
                  Hand-painted marble veining and stone textures that rival the real thing. Perfect for columns, feature walls, or entire rooms where natural stone isn't practical.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary mb-2">Wood Grain & Metal Patinas</h4>
                <p className="text-sm text-alba-charcoal/80 mb-2 leading-relaxed">
                  Realistic wood graining on MDF or metal surfaces, plus aged metal effects including verdigris, rust, and brushed finishes for contemporary industrial looks.
                </p>
              </div>
            </div>
          </div>

          {/* Custom Murals */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
            <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">Custom Murals & Hand-Painted Art</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              Commission bespoke wall art that reflects your personality and style. From children's bedroom themes to sophisticated botanical designs for living spaces, our artists create one-of-a-kind murals that become the centerpiece of any room.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-alba-primary">Children's Rooms</h4>
                <p className="text-sm text-alba-charcoal/80">Whimsical themes, favorite characters, or educational designs that grow with your child</p>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary">Commercial Spaces</h4>
                <p className="text-sm text-alba-charcoal/80">Brand-appropriate artwork, wayfinding murals, or atmospheric designs for restaurants and offices</p>
              </div>
              <div>
                <h4 className="font-bold text-alba-primary">Residential Art</h4>
                <p className="text-sm text-alba-charcoal/80">Botanical designs, landscapes, abstract art, or trompe-l'oeil effects that create illusion and depth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Where Decorative Finishes Work Best */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Where Decorative Finishes Work Best
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Decorative finishes can transform any space, but certain rooms and applications showcase these techniques particularly well. The key is choosing the right technique for the room's function, lighting, and architectural character.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Residential Applications</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Living Rooms:</strong> Feature walls behind sofas or fireplaces create dramatic focal points</li>
                <li><strong>Dining Rooms:</strong> Venetian plaster adds elegance and sophistication for entertaining spaces</li>
                <li><strong>Bedrooms:</strong> Textured accent walls behind headboards create intimate, luxurious atmospheres</li>
                <li><strong>Bathrooms:</strong> Waterproof decorative plasters work beautifully in powder rooms and luxury bathrooms</li>
                <li><strong>Hallways & Staircases:</strong> Transform transitional spaces into gallery-worthy areas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Commercial Spaces</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Restaurants:</strong> Create atmosphere and brand identity through custom finishes</li>
                <li><strong>Hotels:</strong> Luxury finishes in lobbies and guest rooms enhance the guest experience</li>
                <li><strong>Offices:</strong> Feature walls in reception areas and meeting rooms make lasting impressions</li>
                <li><strong>Retail:</strong> Decorative backgrounds that complement products without overwhelming them</li>
                <li><strong>Spas & Salons:</strong> Calming textures and finishes that enhance the wellness experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Artistry Involved */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            The Artistry Involved
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Decorative finishing is as much art as it is craft. Unlike standard painting where consistency is key, decorative work celebrates the human hand and the subtle variations that make each project unique. Our craftsmen have trained in traditional European techniques while staying current with contemporary applications and materials.
          </p>
          
          <div className="bg-alba-cream p-6 rounded-xl mb-6">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">What Sets Professional Work Apart</h3>
            <ul className="space-y-2 text-alba-charcoal/80">
              <li>✓ Understanding of color theory and how finishes interact with lighting</li>
              <li>✓ Proper surface preparation specific to each decorative technique</li>
              <li>✓ Knowledge of traditional materials and modern alternatives</li>
              <li>✓ Ability to adapt techniques to contemporary interiors</li>
              <li>✓ Skill in blending colors and creating seamless transitions</li>
              <li>✓ Experience in problem-solving when techniques don't go as planned</li>
            </ul>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            This is skilled work that requires years of practice to master. The difference between amateur and professional decorative finishing is immediately apparent in the final result. We invest in ongoing training and use only premium materials to ensure every project meets our exacting standards.
          </p>
        </section>

        {/* Investment & Timeline */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Investment & Timeline
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Decorative finishes require more time and skill than standard painting, and pricing reflects the artisan nature of the work. However, the impact on your space and the longevity of these finishes make them excellent investments in your property.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Typical Timelines</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Feature Wall:</strong> 2-3 days including preparation and drying time</li>
                <li><strong>Venetian Plaster:</strong> 3-4 days for proper application and polishing</li>
                <li><strong>Textured Finishes:</strong> 2-3 days depending on room size and complexity</li>
                <li><strong>Faux Effects:</strong> 3-5 days for detailed work and multiple layers</li>
                <li><strong>Custom Murals:</strong> 3-7 days depending on size and detail level</li>
              </ul>
              <p className="text-sm text-alba-charcoal/60 mt-4 italic">
                Timelines include proper drying and curing time between coats. We never rush decorative work.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Investment Guide</h3>
              <div className="space-y-3">
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Feature Walls</p>
                  <p className="text-lg font-bold text-alba-accent">£400 - £800</p>
                  <p className="text-sm text-alba-charcoal/60">Per wall, depending on size and technique</p>
                </div>
                
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Venetian Plaster</p>
                  <p className="text-lg font-bold text-alba-accent">£80 - £120 per m²</p>
                  <p className="text-sm text-alba-charcoal/60">Including materials and artisan application</p>
                </div>
                
                <div className="bg-alba-warm-white p-4 rounded-xl">
                  <p className="font-semibold text-alba-primary">Custom Murals</p>
                  <p className="text-lg font-bold text-alba-accent">£500 - £2,000+</p>
                  <p className="text-sm text-alba-charcoal/60">Priced by complexity, size, and detail level</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspiration & Consultation */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Inspiration & Design Consultation
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Not sure which decorative technique would work best in your space? We offer comprehensive design consultations where we assess your room's lighting, architecture, and existing décor to recommend the most suitable approaches. We bring samples, color charts, and examples of our previous work to help you visualize the possibilities.
          </p>
          
          <div className="bg-alba-warm-white p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Our Consultation Process</h3>
            <ul className="space-y-2 text-alba-charcoal/80">
              <li>✓ Site visit to assess lighting, architecture, and existing décor</li>
              <li>✓ Discussion of your style preferences and functional requirements</li>
              <li>✓ Presentation of suitable techniques with samples and examples</li>
              <li>✓ Color consultation and material selection</li>
              <li>✓ Detailed written quote with timeline and specifications</li>
              <li>✓ Digital mockups for complex projects (additional service)</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Create Something Extraordinary
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Transform your space with bespoke decorative finishes that reflect your unique style. Book a consultation to explore the possibilities and see how artisan techniques can elevate your interior design.
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
              Book Design Consultation
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80 mb-4">
            Serving Barnet, Enfield, Watford, St Albans, Harrow, Stevenage and throughout North London & Hertfordshire
          </p>
          <p className="text-xs text-alba-cream/70">
            Artisan craftsmen • Premium materials • Bespoke design service • Portfolio of luxury projects
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
            "serviceType": "Decorative Finishes and Specialty Painting",
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
            "description": "Bespoke decorative finishes including Venetian plaster, faux effects, textured walls, feature walls, custom murals and specialty painting techniques for luxury interiors.",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "400",
              "highPrice": "2000",
              "priceCurrency": "GBP"
            }
          })
        }}
      />
    </main>
  );
}