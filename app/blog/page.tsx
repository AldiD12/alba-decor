import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Alba Decor Blog | Painting & Decorating Tips, Guides & Inspiration',
  description: 'Expert painting and decorating advice from Alba Decor. Get professional tips, cost guides, and inspiration for your home improvement projects in London & Hertfordshire.',
  keywords: 'painting tips, decorating advice, home improvement blog, kitchen painting guide, interior design tips, Alba Decor blog',
  openGraph: {
    title: 'Alba Decor Blog | Professional Painting & Decorating Advice',
    description: 'Expert painting and decorating advice from Alba Decor professionals.',
    url: 'https://albadecor.co.uk/blog',
  },
};

const blogPosts = [
  {
    slug: 'kitchen-cabinet-painting-vs-replacement-cost-guide-2025',
    title: 'Kitchen Cabinet Painting vs Replacement: Complete 2025 Cost Guide',
    excerpt: 'Discover whether painting or replacing your kitchen cabinets offers better value. Our comprehensive guide includes real costs, pros & cons, and expert recommendations for London & Hertfordshire homeowners.',
    date: '2025-01-21',
    readTime: '8 min read',
    author: 'Alba Decor Team',
    category: 'Kitchen Renovation',
    image: '/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp',
    featured: true
  }
];

export default function BlogPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-alba-primary via-alba-secondary to-alba-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-alba-accent/10 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-alba-gold to-alba-cream"></div>
              <span className="text-alba-gold font-semibold text-sm tracking-wider uppercase">Expert Advice</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-alba-gold to-alba-cream"></div>
            </div>
            
            <h1 className="font-display text-hero-mobile md:text-6xl font-bold mb-6 decorative-line">
              Alba Decor
              <span className="block text-alba-gold italic">Blog</span>
            </h1>
            
            <p className="text-subheading-mobile text-alba-cream/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Professional painting and decorating advice, tips, and inspiration from our expert team. Transform your space with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-alba-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.slug} className="mb-16">
                <div className="bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-alba-gold text-alba-primary px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-alba-charcoal/60 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      
                      <span className="text-alba-accent text-sm font-semibold mb-3">
                        {post.category}
                      </span>
                      
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-alba-primary mb-4 leading-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-alba-charcoal/80 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-alba-accent font-semibold hover:text-alba-gold transition-colors"
                      >
                        Read Full Article
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon */}
            <div className="text-center py-16">
              <h3 className="font-display text-2xl font-bold text-alba-primary mb-4">
                More Expert Content Coming Soon
              </h3>
              <p className="text-alba-charcoal/70 max-w-2xl mx-auto">
                We're preparing more comprehensive guides on interior painting, exterior decorating, 
                wallpaper installation, and home transformation tips. Stay tuned for professional 
                insights from our Alba Decor experts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}