import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Painting Services London | Alba Decor',
  description: 'Professional commercial painting for offices, retail, restaurants & hotels across London & Hertfordshire. Minimal disruption, flexible scheduling, fully insured. Call 07404304224',
  keywords: 'commercial painting London, office painting Hertfordshire, retail painting, restaurant painting, hotel painting, commercial decorators, business painting services, Barnet commercial painters',
  openGraph: {
    title: 'Commercial Painting Services London | Alba Decor',
    description: 'Professional commercial painting for offices, retail, restaurants & hotels across London & Hertfordshire. Minimal disruption, flexible scheduling, fully insured.',
    url: 'https://albadecor.co.uk/services/commercial-painting',
  },
};

export default function CommercialPainting() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6">
            Commercial Painting Services for Businesses Across North London
          </h1>
          <p className="text-xl text-alba-charcoal/80 leading-relaxed mb-8">
            Keep your business looking professional with expert commercial painting services across London and Hertfordshire. Alba Decor specializes in minimal-disruption painting for offices, retail spaces, restaurants, and hotels, working around your schedule to maintain business operations.
          </p>
        </header>

        {/* Minimize Disruption */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Minimize Disruption to Your Business
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            We understand that business continuity is paramount. Our commercial painting approach prioritizes minimal disruption through flexible scheduling, efficient processes, and careful planning. Most projects can be completed outside business hours or in phases that allow normal operations to continue.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-display text-lg font-bold text-blue-800 mb-3">Flexible Scheduling</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Evening and weekend work</li>
                <li>• Bank holiday availability</li>
                <li>• Phased project approach</li>
                <li>• Work around peak business hours</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-display text-lg font-bold text-green-800 mb-3">Efficient Processes</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Fast-drying, low-VOC paints</li>
                <li>• Experienced commercial teams</li>
                <li>• Systematic room-by-room approach</li>
                <li>• Clean-as-you-go methodology</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h3 className="font-display text-lg font-bold text-amber-800 mb-3">Professional Standards</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• £5M public liability insurance</li>
                <li>• Health & safety compliant</li>
                <li>• Uniformed, professional teams</li>
                <li>• Minimal noise and disruption</li>
              </ul>
            </div>
          </div>
          
          <p className="text-alba-charcoal/80 leading-relaxed">
            Our commercial clients across North London and Hertfordshire appreciate our understanding of business needs. We've successfully completed projects for everything from small offices in Barnet to large retail spaces in Watford, always prioritizing your operational requirements.
          </p>
        </section>

        {/* Commercial Spaces We Serve */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Commercial Spaces We Serve
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Every commercial space has unique requirements, from brand color matching to specific health and safety considerations. Our experience spans diverse business sectors, giving us the expertise to handle any commercial painting challenge.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Offices & Corporate Spaces</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Professional environments require sophisticated color schemes and durable finishes. We work with facilities managers to create inspiring workspaces that reflect company culture while maintaining productivity during the painting process.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Typical timeline:</strong> 1,000 sq ft office takes 3-5 days
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Retail Shops & Showrooms</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Retail spaces need finishes that enhance product displays and create welcoming environments for customers. We understand the importance of brand consistency and can match corporate colors precisely.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Specialties:</strong> Brand color matching, display area enhancement
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Restaurants, Cafes & Pubs</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Hospitality venues require finishes that withstand heavy use while creating the right atmosphere. We understand licensing requirements and can work around operating schedules to minimize revenue loss.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Experience:</strong> Licensed premises, food safety compliance
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Hotels & Hospitality Venues</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Guest-facing areas require impeccable finishes and minimal disruption to bookings. We coordinate with hotel management to work around occupancy schedules and maintain guest satisfaction.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Approach:</strong> Room-by-room scheduling, guest area protection
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Warehouses & Industrial Units</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Industrial spaces need robust finishes that can handle harsh conditions while maintaining professional appearance. We use commercial-grade paints designed for high-traffic, demanding environments.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Products:</strong> Industrial-grade paints, anti-slip coatings
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-alba-cream">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-3">Schools & Educational Facilities</h3>
                <p className="text-alba-charcoal/80 mb-3 leading-relaxed">
                  Educational environments require child-safe, durable finishes that create positive learning environments. We schedule work during holidays and use low-VOC paints for occupied buildings.
                </p>
                <p className="text-sm text-alba-charcoal/60">
                  <strong>Compliance:</strong> Child-safe paints, DBS-checked operatives available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Businesses Choose Alba Decor */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Why Businesses Choose Alba Decor
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Commercial painting requires more than just technical skill – it demands understanding of business operations, health and safety compliance, and the ability to deliver professional results on tight schedules. Our commercial clients return to us because we consistently deliver on these requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Operational Excellence</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Flexible Scheduling:</strong> Evening, weekend, and holiday work to suit your business needs</li>
                <li><strong>Phased Approach:</strong> Work in sections to maintain partial operations during painting</li>
                <li><strong>Fast Turnaround:</strong> Efficient teams and fast-drying paints minimize downtime</li>
                <li><strong>Clean Operations:</strong> Dust sheets, careful masking, and daily cleanup protect your business</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Professional Standards</h3>
              <ul className="space-y-3 text-alba-charcoal/80">
                <li><strong>Fully Insured:</strong> £5M public liability insurance for complete peace of mind</li>
                <li><strong>Health & Safety:</strong> Full compliance with commercial H&S requirements</li>
                <li><strong>Professional Teams:</strong> Uniformed, experienced operatives who understand business environments</li>
                <li><strong>Quality Assurance:</strong> Systematic quality checks and final walkthrough with management</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-alba-warm-white p-6 rounded-xl">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Commercial-Grade Materials</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              We use premium commercial paints from Dulux Trade and Crown Trade ranges, specifically formulated for high-traffic commercial environments. These products offer superior durability, faster drying times, and low-VOC formulations suitable for occupied buildings. Brand color matching ensures consistency with your corporate identity.
            </p>
          </div>
        </section>

        {/* Commercial Painting Process */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Our Commercial Painting Process
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Successful commercial projects require careful planning, clear communication, and systematic execution. Our proven process ensures projects are completed on time, within budget, and with minimal disruption to your business operations.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Site Assessment & Detailed Quote</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We conduct thorough site visits to understand your space, operational requirements, and any special considerations. This allows us to provide accurate quotes and realistic timelines that account for your business needs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Color Consultation & Brand Alignment</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We work with your team to select colors that align with brand guidelines and create the desired atmosphere. Our color matching service ensures consistency with existing corporate materials and signage.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Equipment & Stock Protection</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  All furniture, equipment, and stock is carefully protected with appropriate coverings. We use specialized protection for sensitive equipment like computers and ensure all valuable items are safeguarded.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Efficient Team Approach</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Our experienced commercial teams work systematically to maximize efficiency while maintaining quality. We coordinate multiple operatives to complete projects quickly without compromising standards.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Clean-As-You-Go Methodology</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  Daily cleanup ensures your business remains presentable throughout the project. We remove all protection and debris at the end of each work session, leaving areas ready for business use.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-alba-accent text-alba-primary rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h3 className="font-display text-lg font-bold text-alba-primary mb-2">Final Walkthrough & Handover</h3>
                <p className="text-alba-charcoal/80 leading-relaxed">
                  We conduct a comprehensive final inspection with your management team, addressing any concerns and ensuring complete satisfaction before project completion and final invoicing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Contracts */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Ongoing Maintenance Contracts
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Many of our commercial clients prefer scheduled maintenance programs that keep their premises looking professional year-round. These contracts provide cost predictability and ensure your business always presents its best face to customers and clients.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Maintenance Program Benefits</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>✓ Scheduled refresh programs (annually or bi-annually)</li>
                <li>✓ Priority booking and preferential rates</li>
                <li>✓ Consistent quality and familiar team</li>
                <li>✓ Budget predictability for facilities management</li>
                <li>✓ Proactive maintenance prevents major repainting</li>
                <li>✓ Emergency touch-up services included</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Ideal for</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Multi-site retail chains</li>
                <li>• Hotel and restaurant groups</li>
                <li>• Office complexes and business parks</li>
                <li>• Educational institutions</li>
                <li>• Healthcare facilities</li>
                <li>• Property management companies</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-alba-cream p-6 rounded-xl mt-6">
            <h3 className="font-display text-lg font-bold text-alba-primary mb-3">Facilities Management Partnership</h3>
            <p className="text-alba-charcoal/80 leading-relaxed">
              We work closely with facilities managers and property management companies to provide seamless service across multiple locations. Our systematic approach and detailed reporting make us a trusted partner for maintaining professional standards across your property portfolio.
            </p>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Recent Project: Restaurant Refresh in Enfield
          </h2>
          <div className="bg-alba-warm-white p-8 rounded-xl border-l-4 border-alba-accent">
            <h3 className="font-display text-xl font-bold text-alba-primary mb-4">The Challenge</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              A popular family restaurant in Enfield needed a complete interior refresh to modernize their dining areas and comply with new licensing requirements. The challenge was completing the work during their brief closure period between Christmas and New Year – just 5 days total.
            </p>
            
            <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Our Solution</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              We deployed a team of 6 experienced commercial painters working 12-hour days. The project included complete repainting of 3 dining areas, bar area, and customer toilets. We used fast-drying, low-odor paints to ensure no lingering smells when the restaurant reopened.
            </p>
            
            <h3 className="font-display text-xl font-bold text-alba-primary mb-4">The Result</h3>
            <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
              The restaurant reopened on schedule with a fresh, modern appearance that delighted returning customers. The owner reported increased bookings and positive customer feedback about the updated atmosphere. Total project value: £4,800 completed in 5 days.
            </p>
            
            <p className="text-alba-primary font-semibold italic">
              "Alba Decor understood our tight deadline and delivered exactly what they promised. The transformation is incredible and we reopened on time. Highly recommended for any restaurant owner." - Maria, Restaurant Owner
            </p>
          </div>
        </section>

        {/* Getting a Quote */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-alba-primary mb-6">
            Getting Your Commercial Quote
          </h2>
          <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
            Commercial projects require detailed assessment to provide accurate quotes and realistic timelines. We conduct thorough site visits to understand your specific requirements, operational constraints, and any special considerations that might affect the project.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">What We Assess</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Total area and surface conditions</li>
                <li>• Access requirements and restrictions</li>
                <li>• Business operational schedules</li>
                <li>• Special health and safety considerations</li>
                <li>• Brand color matching requirements</li>
                <li>• Equipment and stock protection needs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-alba-primary mb-4">Quote Includes</h3>
              <ul className="space-y-2 text-alba-charcoal/80">
                <li>• Detailed breakdown of all costs</li>
                <li>• Realistic timeline with milestones</li>
                <li>• Material specifications and quantities</li>
                <li>• Insurance and compliance documentation</li>
                <li>• Payment terms and schedule</li>
                <li>• References from similar projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-alba-primary to-alba-secondary text-white p-10 rounded-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Keep Your Business Looking Professional
          </h2>
          <p className="text-lg mb-6 text-alba-cream/90 leading-relaxed">
            Get a detailed commercial painting quote tailored to your business needs. We'll work around your schedule to deliver professional results with minimal disruption to your operations.
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
              Request Commercial Quote
            </a>
          </div>
          
          <p className="text-sm text-alba-cream/80 mb-4">
            Serving London, Hertfordshire & M25 corridor including Barnet, Enfield, Watford, St Albans, Harrow, Stevenage
          </p>
          <p className="text-xs text-alba-cream/70">
            £5M public liability • Flexible scheduling • Commercial-grade materials • Maintenance contracts available
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
            "serviceType": "Commercial Painting Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Alba Decor",
              "telephone": "07404304224",
              "url": "https://albadecor.co.uk"
            },
            "areaServed": [
              "London",
              "Hertfordshire",
              "Barnet",
              "Enfield",
              "Watford",
              "St Albans",
              "Harrow",
              "Stevenage",
              "M25 corridor"
            ],
            "description": "Professional commercial painting services for offices, retail spaces, restaurants, hotels and business premises. Flexible scheduling, minimal disruption, fully insured commercial painters."
          })
        }}
      />
    </main>
  );
}