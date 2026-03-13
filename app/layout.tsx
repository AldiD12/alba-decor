import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Spray Painting Specialists North London | Kitchen Cabinets & Exteriors | Alba Decor',
  description: 'Expert spray painting for kitchen cabinets, furniture & exteriors in Hertfordshire & North London. Flawless finish, dust-free process. 15yr exp. Free quote: 07404 304224',
  keywords: 'spray painting hertfordshire, spray painting north london, kitchen cabinet spray painting, furniture spray painting, exterior spray painting, HVLP spray painting, airless spray painting',
  authors: [{ name: 'Alba Decor' }],
  creator: 'Alba Decor',
  publisher: 'Alba Decor',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://albadecor.co.uk',
    siteName: 'Alba Decor',
    title: 'Spray Painting Specialists North London | Kitchen Cabinets & Exteriors | Alba Decor',
    description: 'Expert spray painting for kitchen cabinets, furniture & exteriors in Hertfordshire & North London. Flawless finish, dust-free process. 15yr exp.',
    images: [
      {
        url: '/images/alba-decor-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alba Decor - Professional Painting & Decorating Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alba Decor - Professional Painting & Decorating',
    description: 'Expert painting & decorating services in London & Hertfordshire. Free quotes.',
    images: ['/images/alba-decor-twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://albadecor.co.uk',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero-kitchen.webp" />
        <link rel="preload" as="image" href="/images/alba-decor-logo.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#162F4F" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
