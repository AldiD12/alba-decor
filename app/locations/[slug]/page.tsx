import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Check, MapPin, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { locations, getLocationBySlug } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { QuoteButton } from '@/components/QuoteButton';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `Painters & Decorators in ${location.name} | Alba Decor | Call 07404 304224`,
    description: `Professional painting and decorating services in ${location.name} (${location.postcodes || location.postcode}). Local painters with 20+ years experience. Free quotes, competitive prices.`,
  };
}

const services = [
  'Interior Painting',
  'Exterior Painting', 
  'Wallpaper Installation',
  'Hand Painted Kitchens',
  'Venetian Plaster',
  'Commercial Painting',
  'Residential Decorating',
  'Color Consultation'
];

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.slug);
  
  if (!location) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Locations', url: '/locations' },
    { name: location.name, url: `/locations/${location.slug}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Alba Decor - Painters & Decorators ${location.name}`,
            "description": `Professional painting and decorating services in ${location.name}`,
            "telephone": "07404304224",
            "url": `https://albadecor.co.uk/locations/${location.slug}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location.name,
              "addressRegion": location.postcode.startsWith('EN') ? "Hertfordshire" : "Greater London",
              "addressCountry": "GB",
              "postalCode": location.postcodes || location.postcode
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": location.geo.lat,
              "longitude": location.geo.lng
            },
            "areaServed": {
              "@type": "PostalAddress",
              "addressLocality": location.name,
              "postalCode": location.postcodes || location.postcode
            },
            "serviceType": [
              "Interior Painting",
              "Exterior Painting",
              "Wallpaper Installation",
              "Decorating Services"
            ]
          })
        }}
      />

      <main className="pt-32">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-alba-accent" />
                  <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">{location.name} Painters & Decorators</span>
                </div>
                
                <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                  Professional Painters
                  <span className="block text-alba-accent italic">& Decorators in {location.name}</span>
                </h1>
                
                <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                  Expert painting and decorating services throughout {location.name} ({location.postcodes || location.postcode}). 
                  {location.description} Professional, reliable service with over 20 years experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <QuoteButton locationName={location.name} />
                  <Button variant="outline" className="btn-alba-secondary">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 07404 304224
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white p-2 rounded-2xl shadow-elegant">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={`Professional painting services in ${location.name}`}
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-28 bg-alba-warm-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
                Painting & Decorating Services in {location.name}
              </h2>
              <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
                Comprehensive painting and decorating solutions for {location.name} homes and businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2 group text-center"
                >
                  <Check className="w-6 h-6 text-alba-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-alba-primary group-hover:text-alba-accent transition-colors mb-2">
                    {service}
                  </h3>
                  <p className="text-alba-charcoal/70 text-sm">
                    Professional {service.toLowerCase()} in {location.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Areas Section */}
        <section className="py-20 md:py-28 bg-alba-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
                {location.name} Areas We Cover
              </h2>
              <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
                Professional painting and decorating services across {location.name} and surrounding areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {location.landmarks.map((landmark, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-elegant text-center">
                  <MapPin className="w-5 h-5 text-alba-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-alba-primary mb-1">{landmark}</h3>
                  <p className="text-alba-charcoal/60 text-sm">{location.postcodes || location.postcode}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="py-20 md:py-28 bg-alba-warm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-heading-mobile md:text-4xl font-bold text-alba-primary mb-8">
                  Professional Painting Services in {location.name}
                </h2>
                
                <p className="text-alba-charcoal/80 leading-relaxed mb-6">
                  We are the trusted decorators for homes near {location.landmarksText || location.landmarks.join(', ')}. 
                  {location.description} Our extensive experience in {location.name} means we understand 
                  the unique character and requirements of properties throughout the area.
                </p>

                <p className="text-alba-charcoal/80 leading-relaxed mb-8">
                  Our team knows the area well and understands the specific challenges that come with 
                  different property types in {location.name}. Whether you need interior painting, 
                  exterior decoration, or specialist finishes, we deliver quality results every time.
                </p>

                <h3 className="font-display text-2xl font-bold text-alba-primary mb-6">
                  What We Do in {location.name}
                </h3>

                <p className="text-alba-charcoal/80 leading-relaxed mb-6">
                  Most of our work in {location.name} includes living rooms, bedrooms, hallways, and full house redecorations. 
                  We handle all the preparation work - moving furniture, protecting floors, filling cracks, 
                  sanding surfaces, and applying primer where needed.
                </p>

                <ul className="list-disc list-inside space-y-2 mb-8 text-alba-charcoal/80">
                  <li>Complete interior painting and decorating</li>
                  <li>Exterior painting and maintenance</li>
                  <li>Wallpaper removal and hanging</li>
                  <li>Woodwork painting and staining</li>
                  <li>Ceiling painting and repairs</li>
                  <li>Color consultation and advice</li>
                </ul>

                <h3 className="font-display text-2xl font-bold text-alba-primary mb-6">
                  How We Work
                </h3>

                <p className="text-alba-charcoal/80 leading-relaxed mb-6">
                  Give us a call and we'll arrange to visit your property in {location.name}, 
                  usually within a couple of days. We'll assess the work needed, discuss your 
                  requirements, and provide a detailed quote on the spot.
                </p>

                <p className="text-alba-charcoal/80 leading-relaxed mb-8">
                  Most single rooms take 2-3 days to complete, while whole house projects 
                  typically take 1-2 weeks depending on the size and scope. We work Monday 
                  to Friday, 8am to 5pm, and can arrange weekend work if needed.
                </p>

                <h3 className="font-display text-2xl font-bold text-alba-primary mb-6">
                  Typical Pricing for {location.name}
                </h3>

                <div className="bg-alba-cream/50 border-l-4 border-alba-accent p-8 my-8 rounded-r-lg">
                  <h4 className="font-bold text-alba-primary mb-4 text-lg">Approximate Costs:</h4>
                  <ul className="space-y-2 text-alba-charcoal/80">
                    <li>• Standard bedroom: £400-600</li>
                    <li>• Living room: £600-900</li>
                    <li>• Hallway with stairs: £800-1200</li>
                    <li>• Kitchen: £500-800</li>
                    <li>• Bathroom: £300-500</li>
                  </ul>
                  <p className="text-sm text-alba-charcoal/60 mt-4">
                    Prices include all materials, preparation, and cleanup. 
                    Additional work like wallpaper removal quoted separately.
                  </p>
                </div>

                <h3 className="font-display text-2xl font-bold text-alba-primary mb-6">
                  Why Choose Us for Your {location.name} Project?
                </h3>

                <p className="text-alba-charcoal/80 leading-relaxed mb-6">
                  We're local to the area and have built our reputation on quality work and 
                  reliable service. Most of our business comes from repeat customers and 
                  referrals from satisfied clients in {location.name} and surrounding areas.
                </p>

                <ul className="list-disc list-inside space-y-2 mb-8 text-alba-charcoal/80">
                  <li>Over 20 years experience in the trade</li>
                  <li>Fully insured and qualified</li>
                  <li>All materials and equipment included</li>
                  <li>Clean, professional work practices</li>
                  <li>Competitive local pricing</li>
                  <li>Guarantee on all completed work</li>
                </ul>

                <h3 className="font-display text-2xl font-bold text-alba-primary mb-6">
                  Areas We Also Cover
                </h3>

                <p className="text-alba-charcoal/80 leading-relaxed">
                  In addition to {location.name}, we regularly work in{' '}
                  <a href="/locations/barnet" className="text-alba-accent hover:underline font-medium">Barnet</a>,{' '}
                  <a href="/locations/hadley-wood" className="text-alba-accent hover:underline font-medium">Hadley Wood</a>,{' '}
                  <a href="/locations/potters-bar" className="text-alba-accent hover:underline font-medium">Potters Bar</a>, and{' '}
                  <a href="/locations/enfield" className="text-alba-accent hover:underline font-medium">Enfield</a>. 
                  We serve the wider North London and South Hertfordshire area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-20 md:py-28 bg-alba-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
                Our Service Area in {location.name}
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-alba-cream/30 rounded-lg p-6">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(location.name + ', UK')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name} showing Alba Decor service area`}
                  />
                </div>
                <p className="text-sm text-alba-charcoal/60 mt-3 text-center">
                  We serve {location.name} and surrounding areas. Contact us for service availability in your specific location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local CTA */}
        <section className="py-20 md:py-28 bg-alba-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-heading-mobile md:text-5xl font-bold mb-6">
              Ready for Professional Painting in {location.name}?
            </h2>
            <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto mb-8">
              Get a free consultation and quote for expert painting and decorating services in {location.name} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton locationName={location.name} variant="gold" />
              <Button variant="outline" className="border-alba-cream text-alba-cream hover:bg-alba-cream hover:text-alba-primary">
                <Phone className="w-4 h-4 mr-2" />
                Call 07404 304224
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}