import { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Painting & Decorating Services | Alba Decor',
  description: 'Professional painting, decorating, spray painting, wallpapering and more across North London & Hertfordshire. Fully insured, 15yr experience. Get a free quote today.',
  keywords: 'painting services London, decorating services Hertfordshire, spray painting, wallpapering, interior painting, exterior painting, kitchen cabinet painting, Alba Decor',
  alternates: {
    canonical: 'https://albadecor.co.uk/services',
  },
  openGraph: {
    title: 'Painting & Decorating Services | Alba Decor',
    description: 'Professional painting, decorating, spray painting, wallpapering and more across North London & Hertfordshire.',
    url: 'https://albadecor.co.uk/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
