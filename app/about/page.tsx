import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

// SEO Metadata for About page
export const metadata: Metadata = {
  title: 'About Alba Decor | Professional Painters & Decorators London & Hertfordshire',
  description: 'Learn about Alba Decor - expert painters & decorators serving London & Hertfordshire since 2015. Professional, reliable, and trusted by hundreds of satisfied customers.',
  keywords: 'about Alba Decor, painters London, decorators Hertfordshire, painting company, professional decorators, painting contractors',
  openGraph: {
    title: 'About Alba Decor | Professional Painters & Decorators',
    description: 'Learn about Alba Decor - expert painters & decorators serving London & Hertfordshire.',
    url: 'https://albadecor.co.uk/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}