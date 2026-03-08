import { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

// SEO Metadata for Contact page
export const metadata: Metadata = {
  title: 'Get a Free Quote | Contact Alba Decor',
  description: 'Contact Alba Decor for professional painting & decorating services. Free quotes, expert advice. Call 07404 304224 or request a callback. Serving London & Hertfordshire.',
  keywords: 'contact Alba Decor, free quote painting, painters London contact, decorators Hertfordshire contact, painting quote',
  alternates: {
    canonical: 'https://albadecor.co.uk/contact',
  },
  openGraph: {
    title: 'Get a Free Quote | Contact Alba Decor',
    description: 'Contact Alba Decor for professional painting & decorating services. Free quotes available.',
    url: 'https://albadecor.co.uk/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}