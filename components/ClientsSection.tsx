import { Star, Quote } from 'lucide-react';

interface ClientsSectionProps {
  onGetQuote?: () => void;
}

const checkatradeReviews = [
  {
    location: 'N8',
    rating: 10,
    date: 'September 2024',
    review: "I use Checkatrade quite a lot and often have a little something to complain about, even if it's minimal, and even with 5-star traders. Not this time though: we hired Fjorentin to paint our building and our communal hallway, and he was great on all levels: communication, professionalism, tidiness, price, speed, etc. Couldn't be happier, 10/10!",
    service: 'Exterior Painting'
  },
  {
    location: 'N18',
    rating: 10,
    date: 'October 2025',
    review: "I recently hired this company for an interior painting project, and I couldn’t be happier with the results. Their attention to detail, professionalism, and respect for my space were outstanding. The job was completed on time and within budget, with clean lines and smooth finishes throughout. Highly recommended for anyone looking for quality painting work!",
    service: 'Interior Painting'
  },
  {
    location: 'EN4',
    rating: 10,
    date: 'January 2022',
    review: 'Brilliant job!Efficient,polite,tidy and very professional. I look forward to having them back to decorate the rest of my home!',
    service: 'Wallpaper Installation'
  },
  {
    location: 'N11',
    rating: 10,
    date: 'January 2022',
    review: 'Excellent service, needed nursery doing on short notice at weekend. Came on time, no fuss whatsoever, finished early and top quality',
    service: 'Commercial Design'
  }
];

export default function ClientsSection({ onGetQuote }: ClientsSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-alba-warm-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-alba-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-alba-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-alba-accent to-alba-gold"></div>
            <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Client Reviews</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-alba-accent to-alba-gold"></div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-alba-primary mb-6 decorative-line">
            What Our Clients
            <span className="block text-alba-accent italic">Say</span>
          </h2>

          <p className="text-alba-charcoal/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Real reviews from real customers on Checkatrade
          </p>

          {/* Checkatrade Badge */}
          <div className="inline-flex items-center gap-3 bg-alba-cream/50 px-6 py-3 rounded-full border border-alba-gold/20">
            <div className="w-8 h-8 bg-alba-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="font-semibold text-alba-primary">Verified on Checkatrade</span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-alba-primary">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-alba-gold text-alba-gold" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {checkatradeReviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-alba-gold/10 rounded-full flex items-center justify-center group-hover:bg-alba-gold/20 transition-colors">
                <Quote className="w-6 h-6 text-alba-gold" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-alba-gold text-alba-gold" />
                    ))}
                  </div>
                  <span className="font-bold text-alba-primary">{review.rating}/10</span>
                </div>
                <span className="text-alba-charcoal/60 text-sm">{review.date}</span>
              </div>

              {/* Review text */}
              <p className="text-alba-charcoal/80 leading-relaxed mb-6 text-base">
                "{review.review}"
              </p>

              {/* Customer info */}
              <div className="flex items-center justify-between pt-4 border-t border-alba-cream">
                <div>
                  <div className="font-semibold text-alba-primary">{review.location}</div>
                  <div className="text-alba-charcoal/60 text-sm">Customer Location</div>
                </div>
                <div className="text-right">
                  <div className="text-alba-accent font-medium text-sm">{review.service}</div>
                  <div className="text-alba-charcoal/60 text-xs">Service Type</div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-alba-accent/10 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-alba-primary to-alba-secondary p-8 rounded-2xl text-white">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-alba-cream/90 mb-6 max-w-2xl mx-auto">
              Experience the Alba Decor difference. Get your free consultation and see why we're the top-rated decorating service on Checkatrade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onGetQuote} className="bg-white text-alba-primary hover:bg-alba-primary hover:text-white border-2 border-white hover:border-alba-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Get Free Quote
              </button>
              <a
                href="https://www.checkatrade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-alba-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                View All Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
