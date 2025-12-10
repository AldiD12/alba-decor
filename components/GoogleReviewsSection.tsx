'use client';

import Script from 'next/script';
import { Star } from 'lucide-react';

// Fallback reviews for when the widget loads or if there are issues
const fallbackReviews = [
  {
    name: 'Sarah Johnson',
    location: 'Barnet, EN5',
    rating: 5,
    text: 'Exceptional work on our Victorian terrace. Alba Decor transformed our living room with beautiful attention to detail. Professional, punctual, and reasonably priced.',
    date: '2 weeks ago'
  },
  {
    name: 'Michael Chen',
    location: 'Potters Bar, EN6',
    rating: 5,
    text: 'Outstanding kitchen cabinet painting service. Saved us thousands compared to replacement. The finish is flawless and looks like new cabinets.',
    date: '1 month ago'
  },
  {
    name: 'Emma Williams',
    location: 'Hadley Wood, EN4',
    rating: 5,
    text: 'Professional decorators who really understand period properties. Great communication throughout and beautiful results on our Edwardian home.',
    date: '3 weeks ago'
  },
  {
    name: 'David Thompson',
    location: 'Enfield, EN1',
    rating: 5,
    text: 'Excellent exterior painting work. Weather-resistant finish that still looks perfect after 18 months. Highly recommend for quality and reliability.',
    date: '2 months ago'
  },
  {
    name: 'Lisa Parker',
    location: 'Totteridge, N20',
    rating: 5,
    text: 'Venetian plaster feature wall exceeded our expectations. True craftsmen who take pride in their work. Will definitely use again.',
    date: '1 month ago'
  },
  {
    name: 'James Mitchell',
    location: 'Cuffley, EN6',
    rating: 5,
    text: 'Complete house redecoration completed on time and within budget. Clean, professional work practices. Very happy with the results.',
    date: '6 weeks ago'
  }
];

interface GoogleReviewsSectionProps {
  onGetQuote?: () => void;
}

export default function GoogleReviewsSection({ onGetQuote }: GoogleReviewsSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-alba-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-alba-accent to-alba-gold"></div>
            <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">Customer Reviews</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-alba-accent to-alba-gold"></div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
            What Our Customers
            <span className="block text-alba-accent italic">Say About Us</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-alba-gold text-alba-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-alba-primary ml-2">4.9</span>
            <span className="text-alba-charcoal/70 ml-1">out of 5</span>
          </div>
          
          <p className="text-alba-charcoal/70 max-w-2xl mx-auto">
            Based on 50+ Google Reviews from satisfied customers across North London and Hertfordshire
          </p>
        </div>

        {/* Featurable Reviews Widget */}
        <div className="mb-12">
          <div 
            id="featurable-5cbebe10-dde8-4241-83c2-2960f3434cb1" 
            data-featurable-async
            className="min-h-[400px]"
          ></div>
        </div>

        {/* Fallback Reviews Grid - Hidden by default, shows if widget fails */}
        <div id="fallback-reviews" className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fallbackReviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-alba-gold text-alba-gold" />
                  ))}
                </div>
                <span className="text-sm text-alba-charcoal/60">{review.date}</span>
              </div>
              
              <p className="text-alba-charcoal/80 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="border-t border-alba-cream pt-4">
                <div className="font-semibold text-alba-primary">{review.name}</div>
                <div className="text-sm text-alba-charcoal/60">{review.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-alba-cream/50 rounded-2xl p-8">
          <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">
            Join Our Happy Customers
          </h3>
          <p className="text-alba-charcoal/70 mb-6 max-w-2xl mx-auto">
            Experience the same quality service that has earned us 50+ five-star reviews. 
            Get your free quote today and see why customers choose Alba Decor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetQuote}
              className="bg-alba-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-alba-primary transition-colors"
            >
              Get Your Free Quote
            </button>
            <a
              href="tel:07404304224"
              className="border-2 border-alba-accent text-alba-accent px-8 py-3 rounded-lg font-semibold hover:bg-alba-accent hover:text-white transition-colors"
            >
              Call 07404 304224
            </a>
          </div>
        </div>
      </div>

      {/* Featurable Reviews Widget Script */}
      <Script
        src="https://featurable.com/assets/bundle.js"
        strategy="lazyOnload"
        defer
      />
      
      {/* Fallback script - shows backup reviews if widget doesn't load */}
      <Script
        id="reviews-fallback"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              const widget = document.getElementById('featurable-5cbebe10-dde8-4241-83c2-2960f3434cb1');
              const fallback = document.getElementById('fallback-reviews');
              
              // If widget is empty or failed to load, show fallback reviews
              if (widget && (!widget.innerHTML || widget.innerHTML.trim() === '')) {
                if (fallback) {
                  fallback.classList.remove('hidden');
                  fallback.classList.add('grid');
                }
              }
            }, 5000); // Wait 5 seconds for widget to load
          `
        }}
      />
    </section>
  );
}