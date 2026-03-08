import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { QuoteButton } from '@/components/QuoteButton';

export const metadata: Metadata = {
  title: 'Cabinet Painting vs Replacement: 2025 Costs',
  description: 'Should you paint or replace your kitchen cabinets in 2025? Our comprehensive cost comparison guide reveals potential savings of £8,000+. Expert advice from Alba Decor professionals.',
  keywords: 'kitchen cabinet painting cost 2025, cabinet replacement vs painting, kitchen renovation costs London, hand painted kitchen cabinets, kitchen makeover budget, Alba Decor kitchen painting',
  alternates: {
    canonical: 'https://albadecor.co.uk/blog/kitchen-cabinet-painting-vs-replacement-cost-guide-2025',
  },
  openGraph: {
    title: 'Kitchen Cabinet Painting vs Replacement: Save £8,000+ in 2025',
    description: 'Comprehensive cost guide comparing cabinet painting vs replacement. Expert insights from Alba Decor professionals.',
    url: 'https://albadecor.co.uk/blog/kitchen-cabinet-painting-vs-replacement-cost-guide-2025',
    images: [
      {
        url: 'https://albadecor.co.uk/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp',
        width: 1200,
        height: 630,
        alt: 'Kitchen Cabinet Painting Cost Guide 2025',
      },
    ],
  },
};



const blogPostSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Kitchen Cabinet Painting vs Replacement: Complete 2025 Cost Guide",
  "datePublished": "2025-01-21",
  "dateModified": "2025-01-21",
  "author": {
    "@type": "Organization",
    "name": "Alba Decor",
    "url": "https://albadecor.co.uk"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Alba Decor",
    "logo": {
      "@type": "ImageObject",
      "url": "https://albadecor.co.uk/images/alba-decor-logo.png"
    }
  },
  "image": "https://albadecor.co.uk/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://albadecor.co.uk/blog/kitchen-cabinet-painting-vs-replacement-cost-guide-2025"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does painted cabinet finish last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With professional preparation and premium paints, painted cabinets last 10-15 years. Alba Decor uses only the highest quality primers and topcoats for maximum durability."
      }
    },
    {
      "@type": "Question",
      "name": "Can you paint over laminate cabinets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Modern bonding primers allow us to paint over laminate, melamine, and even glossy surfaces. The key is proper surface preparation and using the right products."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best paint for kitchen cabinets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend Farrow & Ball Estate Eggshell or Little Greene Intelligent Eggshell for their durability and beautiful finish. These paints resist moisture, grease, and daily wear."
      }
    },
    {
      "@type": "Question",
      "name": "How much disruption will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimal! We work around your schedule, and you can still use your kitchen for basic tasks. Most projects are completed in 2-3 days with full functionality restored each evening."
      }
    }
  ]
};

export default function KitchenCabinetCostGuidePage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <main className="pt-32">
      {/* Article Header */}
      <section className="py-12 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-alba-charcoal/60">
                <Link href="/" className="hover:text-alba-accent">Home</Link>
                <span>→</span>
                <Link href="/blog" className="hover:text-alba-accent">Blog</Link>
                <span>→</span>
                <span>Kitchen Cabinet Cost Guide</span>
              </div>
            </nav>

            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-alba-charcoal/60 mb-6">
              <div className="flex items-center gap-2">
                <span>📅</span>
                21 January 2025
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                8 min read
              </div>
              <div className="flex items-center gap-2">
                <span>👤</span>
                Alba Decor Team
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl font-bold text-alba-primary mb-6 leading-tight">
              Kitchen Cabinet Painting vs Replacement: Complete 2025 Cost Guide
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-alba-charcoal/80 mb-8 leading-relaxed">
              Thinking about updating your kitchen cabinets? Discover whether painting or replacing offers better value, with real 2025 costs and expert recommendations for London & Hertfordshire homeowners.
            </p>

            {/* Featured Image */}
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp"
                alt="Professional hand painted kitchen cabinets by Alba Decor"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                Hand painted kitchen cabinets by Alba Decor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Answer Box */}
            <div className="bg-alba-gold/10 border-l-4 border-alba-gold p-6 rounded-r-lg mb-12">
              <h3 className="font-bold text-alba-primary mb-3 flex items-center gap-2">
                <span>📈</span>
                Quick Answer: Which is Better?
              </h3>
              <p className="text-alba-charcoal mb-4">
                <strong>Cabinet painting wins for most homeowners in 2025.</strong> You'll save £8,000-£15,000 compared to replacement while achieving a stunning transformation that lasts 10-15 years with proper preparation.
              </p>
              <p className="text-sm text-alba-charcoal/70">
                Only replace if cabinets are structurally damaged or you're changing the layout entirely.
              </p>
            </div>

            {/* Cost Comparison Table */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-alba-primary mb-6">2025 Cost Comparison: London & Hertfordshire</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-elegant rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-alba-primary text-white">
                      <th className="p-4 text-left">Option</th>
                      <th className="p-4 text-left">Small Kitchen (8 units)</th>
                      <th className="p-4 text-left">Medium Kitchen (12 units)</th>
                      <th className="p-4 text-left">Large Kitchen (16+ units)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-alba-cream">
                      <td className="p-4 font-semibold text-alba-primary">Professional Painting</td>
                      <td className="p-4">£1,200 - £2,000</td>
                      <td className="p-4">£1,800 - £3,200</td>
                      <td className="p-4">£2,500 - £4,500</td>
                    </tr>
                    <tr className="border-b border-alba-cream bg-alba-warm-white">
                      <td className="p-4 font-semibold text-alba-primary">Full Replacement</td>
                      <td className="p-4">£8,000 - £15,000</td>
                      <td className="p-4">£12,000 - £25,000</td>
                      <td className="p-4">£18,000 - £35,000</td>
                    </tr>
                    <tr className="bg-alba-gold/10">
                      <td className="p-4 font-bold text-alba-primary">Potential Savings</td>
                      <td className="p-4 font-bold text-green-600">£6,800 - £13,000</td>
                      <td className="p-4 font-bold text-green-600">£10,200 - £21,800</td>
                      <td className="p-4 font-bold text-green-600">£15,500 - £30,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-alba-charcoal/70 mt-4">
                *Prices include materials and professional installation. London prices typically 15-20% higher than Hertfordshire.
              </p>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Painting Pros/Cons */}
              <div className="bg-alba-warm-white p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-4 flex items-center gap-2">
                  <span>🎨</span>
                  Cabinet Painting
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                    <span>✅</span>
                    Advantages
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 70-85% cost savings vs replacement</li>
                    <li>• 2-3 day project vs 2-3 weeks</li>
                    <li>• No structural work required</li>
                    <li>• Eco-friendly option</li>
                    <li>• Unlimited color choices</li>
                    <li>• Maintains kitchen functionality</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <span>❌</span>
                    Limitations
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Can't change cabinet layout</li>
                    <li>• Won't fix structural issues</li>
                    <li>• Limited style transformation</li>
                    <li>• Requires quality preparation</li>
                  </ul>
                </div>
              </div>

              {/* Replacement Pros/Cons */}
              <div className="bg-alba-cream p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-alba-primary mb-4 flex items-center gap-2">
                  <span>🏠</span>
                  Cabinet Replacement
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                    <span>✅</span>
                    Advantages
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Complete style transformation</li>
                    <li>• Can change layout entirely</li>
                    <li>• Modern storage solutions</li>
                    <li>• Fixes structural problems</li>
                    <li>• Higher property value increase</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <span>❌</span>
                    Disadvantages
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 5-10x more expensive</li>
                    <li>• 2-3 week disruption</li>
                    <li>• Requires permits/planning</li>
                    <li>• Generates significant waste</li>
                    <li>• Complex project management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* When to Choose Each Option */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-alba-primary mb-6">When to Choose Each Option</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h3 className="font-bold text-green-800 mb-4">Choose Painting When:</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>✓ Cabinets are structurally sound</li>
                    <li>✓ Happy with current layout</li>
                    <li>✓ Budget under £5,000</li>
                    <li>✓ Want quick transformation</li>
                    <li>✓ Doors/drawers function properly</li>
                    <li>✓ Style is classic/timeless</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-800 mb-4">Choose Replacement When:</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>✓ Cabinets are damaged/warped</li>
                    <li>✓ Want to change layout</li>
                    <li>✓ Budget over £15,000</li>
                    <li>✓ Doors don't close properly</li>
                    <li>✓ Need more storage space</li>
                    <li>✓ Planning full kitchen renovation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Alba Decor Process */}
            <div className="bg-alba-primary text-white p-8 rounded-2xl mb-12">
              <h2 className="font-display text-2xl font-bold mb-6 text-alba-gold">Alba Decor's Professional Cabinet Painting Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-alba-cream">Day 1: Preparation</h3>
                  <ul className="space-y-2 text-alba-cream/90 text-sm">
                    <li>• Remove all doors and hardware</li>
                    <li>• Deep clean and degrease surfaces</li>
                    <li>• Sand and prime all surfaces</li>
                    <li>• Protect surrounding areas</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-alba-cream">Day 2-3: Painting</h3>
                  <ul className="space-y-2 text-alba-cream/90 text-sm">
                    <li>• Apply premium base coats</li>
                    <li>• Hand-paint with precision brushes</li>
                    <li>• Multiple thin coats for durability</li>
                    <li>• Reinstall with new hardware</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-alba-gold/20 rounded-lg">
                <p className="text-alba-cream text-sm">
                  <strong>Our Guarantee:</strong> 5-year warranty on all cabinet painting work with premium Farrow & Ball or Little Greene paints.
                </p>
              </div>
            </div>

            {/* ROI Analysis */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-alba-primary mb-6">Return on Investment Analysis</h2>
              
              <div className="bg-alba-warm-white p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-alba-accent mb-2">85%</div>
                    <div className="text-sm text-alba-charcoal">Cost Savings vs Replacement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-alba-accent mb-2">£12,000</div>
                    <div className="text-sm text-alba-charcoal">Average Savings (Medium Kitchen)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-alba-accent mb-2">10-15</div>
                    <div className="text-sm text-alba-charcoal">Years Lifespan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-alba-primary mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-alba-cream pb-4">
                  <h3 className="font-semibold text-alba-primary mb-2">How long does painted cabinet finish last?</h3>
                  <p className="text-alba-charcoal/80">With professional preparation and premium paints, painted cabinets last 10-15 years. Alba Decor uses only the highest quality primers and topcoats for maximum durability.</p>
                </div>
                
                <div className="border-b border-alba-cream pb-4">
                  <h3 className="font-semibold text-alba-primary mb-2">Can you paint over laminate cabinets?</h3>
                  <p className="text-alba-charcoal/80">Yes! Modern bonding primers allow us to paint over laminate, melamine, and even glossy surfaces. The key is proper surface preparation and using the right products.</p>
                </div>
                
                <div className="border-b border-alba-cream pb-4">
                  <h3 className="font-semibold text-alba-primary mb-2">What's the best paint for kitchen cabinets?</h3>
                  <p className="text-alba-charcoal/80">We recommend Farrow & Ball Estate Eggshell or Little Greene Intelligent Eggshell for their durability and beautiful finish. These paints resist moisture, grease, and daily wear.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-alba-primary mb-2">How much disruption will there be?</h3>
                  <p className="text-alba-charcoal/80">Minimal! We work around your schedule, and you can still use your kitchen for basic tasks. Most projects are completed in 2-3 days with full functionality restored each evening.</p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-alba-gold/10 p-8 rounded-2xl mb-12">
              <h2 className="font-display text-2xl font-bold text-alba-primary mb-4">The Bottom Line</h2>
              <p className="text-alba-charcoal mb-4">
                For most London and Hertfordshire homeowners in 2025, <strong>professional cabinet painting offers exceptional value</strong>. You'll save thousands while achieving a stunning transformation that rivals a full replacement.
              </p>
              <p className="text-alba-charcoal mb-6">
                The key is choosing experienced professionals who understand proper preparation, use premium materials, and stand behind their work with comprehensive warranties.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton className="w-full sm:w-auto" />
                <Link href="/services/painting-decorating/hand-painted-kitchens">
                  <Button variant="outline" className="border-alba-primary text-alba-primary hover:bg-alba-primary hover:text-white w-full">
                    View Our Kitchen Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-white border border-alba-cream p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-alba-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AD
                </div>
                <div>
                  <h3 className="font-semibold text-alba-primary mb-2">Alba Decor Team</h3>
                  <p className="text-alba-charcoal/80 text-sm mb-3">
                    Professional painters and decorators serving London and Hertfordshire since 2015. Specialists in hand-painted kitchens, interior decorating, and premium finishes.
                  </p>
                  <Link href="/about" className="text-alba-accent text-sm font-semibold hover:text-alba-gold">
                    Learn more about our team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-alba-primary mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/services/painting-decorating/hand-painted-kitchens" className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all group">
                <h3 className="font-semibold text-alba-primary mb-2 group-hover:text-alba-accent">
                  Hand Painted Kitchen Services
                </h3>
                <p className="text-alba-charcoal/70 text-sm">
                  Discover our professional hand-painted kitchen cabinet services across London and Hertfordshire.
                </p>
              </Link>
              
              <Link href="/gallery" className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all group">
                <h3 className="font-semibold text-alba-primary mb-2 group-hover:text-alba-accent">
                  Kitchen Transformation Gallery
                </h3>
                <p className="text-alba-charcoal/70 text-sm">
                  View our portfolio of stunning kitchen cabinet painting projects and transformations.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}