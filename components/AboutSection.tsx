import { Button } from '@/components/ui/button';

interface AboutSectionProps {
  onGetQuote?: () => void;
}

export default function AboutSection({ onGetQuote }: AboutSectionProps) {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-alba-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-alba-accent/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            {/* Enhanced section label */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-alba-accent to-alba-gold"></div>
              <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">About Alba Decor</span>
            </div>
            
            {/* Better typography hierarchy */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-alba-primary leading-tight decorative-line">
              Your Trusted Painting, Decorating
              <span className="block text-alba-accent italic">& Interior Design Specialists</span>
            </h2>
            
            <div className="space-y-6 text-alba-charcoal/80">
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                Alba Decor Homes is a professional <strong>painting and decorating company</strong> serving London, Hertfordshire, and the M25 area.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                As qualified <strong>painters and decorators</strong>, we offer comprehensive services across three main categories:
              </p>
              
              {/* Three main service categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-alba-cream/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🎨</span>
                    <h4 className="font-semibold text-alba-primary">Painting & Decorating</h4>
                  </div>
                  <p className="text-sm text-alba-charcoal/70">Complete interior and exterior painting services for homes and businesses.</p>
                </div>
                
                <div className="bg-alba-cream/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">✨</span>
                    <h4 className="font-semibold text-alba-primary">Interior Decorating</h4>
                  </div>
                  <p className="text-sm text-alba-charcoal/70">Specialty finishes including Venetian plaster, textured walls, and custom hand-painted features.</p>
                </div>
                
                <div className="bg-alba-cream/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📐</span>
                    <h4 className="font-semibold text-alba-primary">Wallpaper Installation</h4>
                  </div>
                  <p className="text-sm text-alba-charcoal/70">Professional wallpaper hanging and removal with meticulous attention to detail.</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg leading-relaxed">
                With years of experience and commitment to quality, we transform spaces across London and Hertfordshire.
              </p>
            </div>
            
            {/* Enhanced feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-alba-accent/10 rounded-full flex items-center justify-center group-hover:bg-alba-accent/20 transition-colors">
                  <span className="text-alba-accent text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-alba-primary mb-1">Complete Satisfaction</h4>
                  <p className="text-sm text-alba-charcoal/70">Guaranteed quality on every project</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-alba-accent/10 rounded-full flex items-center justify-center group-hover:bg-alba-accent/20 transition-colors">
                  <span className="text-alba-accent text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-alba-primary mb-1">Expert Craftsmen</h4>
                  <p className="text-sm text-alba-charcoal/70">Skilled professionals with attention to detail</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-alba-accent/10 rounded-full flex items-center justify-center group-hover:bg-alba-accent/20 transition-colors">
                  <span className="text-alba-accent text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-alba-primary mb-1">Full Service</h4>
                  <p className="text-sm text-alba-charcoal/70">Painting, decorating, design & wallpaper</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-alba-accent/10 rounded-full flex items-center justify-center group-hover:bg-alba-accent/20 transition-colors">
                  <span className="text-alba-accent text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-alba-primary mb-1">Local Expertise</h4>
                  <p className="text-sm text-alba-charcoal/70">Serving London & Hertfordshire</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <Button onClick={onGetQuote} className="btn-alba-primary text-lg">
                Request Free Consultation
              </Button>
            </div>
          </div>

          <div className="relative group lg:order-last">
            {/* Enhanced image container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-alba-accent/20 to-alba-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500">
                <img
                  src="/images/living-room-painting.webp"
                  alt="Professional decorator working"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-xl"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-alba-primary text-white p-6 rounded-xl shadow-elegant animate-float">
                <div className="text-2xl font-bold text-alba-gold">500+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
