import type { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Areas We Cover in North London & Hertfordshire | Alba Decor',
  description: 'Professional painting and decorating services across North London and Hertfordshire. Covering Barnet, Potters Bar, Hadley Wood, Enfield and surrounding areas.',
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://albadecor.co.uk"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Areas Covered",
                "item": "https://albadecor.co.uk/locations"
              }
            ]
          })
        }}
      />
      
      <main className="pt-32">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            Areas Covered
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-alba-primary">
              Areas We Cover in North London & Hertfordshire
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional painting and decorating services across North London and Hertfordshire. 
              We've been transforming homes in these areas for over 20 years.
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gray-100 rounded-lg p-8 mb-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-alba-primary">Our Service Territory</h2>
              <p className="text-gray-600 mb-6">
                We cover a wide area across North London and South Hertfordshire, 
                typically within a 15-mile radius of Potters Bar.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                {locations.map((location) => (
                  <div key={location.slug} className="bg-alba-cream/30 rounded p-2">
                    <span className="font-semibold">{location.name}</span>
                    <br />
                    <span className="text-gray-600">{location.postcode}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Locations Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-alba-primary">
              All Areas We Serve
            </h2>
            <p className="text-lg text-alba-charcoal/80 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Alba Decor provides professional painting and decorating services across North London and Hertfordshire. 
              Browse our service locations below to find your local painter and discover our comprehensive range of services in your area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-alba-cream hover:border-alba-accent group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-alba-primary group-hover:text-alba-accent transition-colors">
                      Painters in {location.name}
                    </h3>
                    <span className="text-sm bg-alba-cream px-2 py-1 rounded text-alba-charcoal">
                      {location.postcode}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {location.description}
                  </p>
                  
                  {location.landmarks && location.landmarks.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-alba-charcoal mb-2">Key Areas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {location.landmarks.slice(0, 3).map((landmark, index) => (
                          <span
                            key={index}
                            className="text-xs bg-alba-cream/50 px-2 py-1 rounded text-alba-charcoal"
                          >
                            {landmark}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {location.population ? `Pop: ${location.population.toLocaleString()}` : ''}
                    </span>
                    <span className="text-alba-accent group-hover:text-alba-gold transition-colors font-medium">
                      {location.name} Painting Services →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-alba-primary to-alba-accent rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-6 text-alba-cream">
              Get a free quote for your painting and decorating project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07404304224"
                className="bg-alba-gold text-alba-primary px-8 py-3 rounded-lg font-semibold hover:bg-alba-cream transition-colors"
              >
                Call 07404 304224
              </a>
              <Link
                href="/contact"
                className="border-2 border-alba-cream text-alba-cream px-8 py-3 rounded-lg font-semibold hover:bg-alba-cream hover:text-alba-primary transition-colors"
              >
                Get Online Quote
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-alba-cream/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-alba-primary">Why Choose Local?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Quick response times - usually same day</li>
                <li>• We know the local architecture and common issues</li>
                <li>• Established relationships with local suppliers</li>
                <li>• References available from neighbors</li>
                <li>• No travel charges within our coverage area</li>
              </ul>
            </div>
            
            <div className="bg-alba-cream/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-alba-primary">Our Promise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free, no-obligation quotes</li>
                <li>• Fully insured and qualified tradesmen</li>
                <li>• Clean, professional work practices</li>
                <li>• Competitive local pricing</li>
                <li>• Guarantee on all work completed</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}