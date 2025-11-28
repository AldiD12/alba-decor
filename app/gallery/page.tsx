import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery - Alba Decor Project Portfolio | Painting & Decorating London & Hertfordshire',
  description: 'View our portfolio of professional painting, decorating, and interior design projects across London and Hertfordshire. See quality craftsmanship and transformations by Alba Decor.',
  keywords: 'Alba Decor gallery, painting projects London, decorating portfolio Hertfordshire, interior design gallery, kitchen painting examples, exterior painting projects, wallpaper installation gallery',
  openGraph: {
    title: 'Alba Decor Project Gallery | Professional Painting & Decorating Portfolio',
    description: 'View our portfolio of professional painting, decorating, and interior design projects across London and Hertfordshire.',
    url: 'https://albadecor.co.uk/gallery',
    images: [
      {
        url: 'https://albadecor.co.uk/images/gallery/interior/interior-living-room-modern.webp',
        width: 1200,
        height: 630,
        alt: 'Alba Decor Professional Painting Project Gallery',
      },
    ],
  },
};

// Alba Decor project gallery - using only existing images
const galleryImages = [
  // Interior Painting Projects
  {
    src: '/images/gallery/interior/living-room-1.webp',
    alt: 'Professional interior painting project by Alba Decor',
    title: 'Living Room Transformation',
    category: 'Interior Painting'
  },
  {
    src: '/images/gallery/interior/interior-living-room-modern.webp',
    alt: 'Modern living room painting by Alba Decor',
    title: 'Modern Living Room',
    category: 'Interior Painting'
  },
  {
    src: '/images/gallery/interior/interior-bedroom-elegant.webp',
    alt: 'Elegant bedroom painting by Alba Decor',
    title: 'Elegant Bedroom',
    category: 'Interior Painting'
  },
  {
    src: '/images/gallery/interior/interior-dining-room-classic.webp',
    alt: 'Classic dining room painting by Alba Decor',
    title: 'Classic Dining Room',
    category: 'Interior Painting'
  },
  {
    src: '/images/gallery/interior/interior-hallway-contemporary.webp',
    alt: 'Contemporary hallway painting by Alba Decor',
    title: 'Contemporary Hallway',
    category: 'Interior Painting'
  },
  {
    src: '/images/gallery/interior/interior-office-professional.webp',
    alt: 'Professional office painting by Alba Decor',
    title: 'Professional Office',
    category: 'Interior Painting'
  },
  {
    src: '/images/gallery/interior/interior-bathroom-luxury.webp',
    alt: 'Luxury bathroom painting by Alba Decor',
    title: 'Luxury Bathroom',
    category: 'Interior Painting'
  },
  {
    src: '/images/gallery/interior/interior-staircase-feature.webp',
    alt: 'Feature staircase painting by Alba Decor',
    title: 'Feature Staircase',
    category: 'Interior Painting'
  },

  // Kitchen Projects
  {
    src: '/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp',
    alt: 'Hand-painted kitchen cabinets by Alba Decor',
    title: 'Hand-Painted Kitchen Cabinets',
    category: 'Kitchen Painting'
  },
  {
    src: '/images/gallery/kitchen/kitchen-island-feature.webp',
    alt: 'Kitchen island feature by Alba Decor',
    title: 'Kitchen Island Feature',
    category: 'Kitchen Painting'
  },
  {
    src: '/images/gallery/kitchen/kitchen-modern-transformation.webp',
    alt: 'Modern kitchen transformation by Alba Decor',
    title: 'Modern Kitchen Transformation',
    category: 'Kitchen Painting'
  },
  {
    src: '/images/gallery/kitchen/kitchen-painting-1.webp',
    alt: 'Professional kitchen painting by Alba Decor',
    title: 'Kitchen Painting Project',
    category: 'Kitchen Painting'
  },
  {
    src: '/images/gallery/kitchen/kitchen-shaker-style.webp',
    alt: 'Shaker style kitchen by Alba Decor',
    title: 'Shaker Style Kitchen',
    category: 'Kitchen Painting'
  },
  {
    src: '/images/gallery/kitchen/kitchen-traditional-makeover.webp',
    alt: 'Traditional kitchen makeover by Alba Decor',
    title: 'Traditional Kitchen Makeover',
    category: 'Kitchen Painting'
  },

  // Exterior Projects
  {
    src: '/images/gallery/exterior/exterior-modern-home.webp',
    alt: 'Modern home exterior painting by Alba Decor',
    title: 'Modern Home Exterior',
    category: 'Exterior Painting'
  },
  {
    src: '/images/gallery/exterior/exterior-period-property.webp',
    alt: 'Period property exterior by Alba Decor',
    title: 'Period Property Restoration',
    category: 'Exterior Painting'
  },
  {
    src: '/images/gallery/exterior/exterior-commercial-building.webp',
    alt: 'Commercial building exterior by Alba Decor',
    title: 'Commercial Building',
    category: 'Exterior Painting'
  },
  {
    src: '/images/gallery/exterior/exterior-victorian-house.webp',
    alt: 'Victorian house exterior by Alba Decor',
    title: 'Victorian House Restoration',
    category: 'Exterior Painting'
  },
  {
    src: '/images/gallery/exterior/exterior-render-painting.webp',
    alt: 'Render painting by Alba Decor',
    title: 'Render Painting Project',
    category: 'Exterior Painting'
  },
  {
    src: '/images/gallery/exterior/exterior-front-door-feature.webp',
    alt: 'Front door feature painting by Alba Decor',
    title: 'Front Door Feature',
    category: 'Exterior Painting'
  },

  // Wallpaper Projects
  {
    src: '/images/gallery/wallpaper/wallpaper-feature-wall-dining.webp',
    alt: 'Feature wall dining room wallpaper by Alba Decor',
    title: 'Dining Room Feature Wall',
    category: 'Wallpaper Installation'
  },
  {
    src: '/images/gallery/wallpaper/wallpaper-bedroom-luxury.webp',
    alt: 'Luxury bedroom wallpaper by Alba Decor',
    title: 'Luxury Bedroom Wallpaper',
    category: 'Wallpaper Installation'
  },
  {
    src: '/images/gallery/wallpaper/wallpaper-hallway-statement.webp',
    alt: 'Statement hallway wallpaper by Alba Decor',
    title: 'Statement Hallway',
    category: 'Wallpaper Installation'
  },
  {
    src: '/images/gallery/wallpaper/wallpaper-living-room-accent.webp',
    alt: 'Living room accent wallpaper by Alba Decor',
    title: 'Living Room Accent Wall',
    category: 'Wallpaper Installation'
  },
  {
    src: '/images/gallery/wallpaper/wallpaper-office-professional.webp',
    alt: 'Professional office wallpaper by Alba Decor',
    title: 'Professional Office',
    category: 'Wallpaper Installation'
  },
  {
    src: '/images/gallery/wallpaper/wallpaper-bathroom-designer.webp',
    alt: 'Designer bathroom wallpaper by Alba Decor',
    title: 'Designer Bathroom',
    category: 'Wallpaper Installation'
  },

  // Decorative Projects
  {
    src: '/images/gallery/decorative/decorative-venetian-plaster.webp',
    alt: 'Venetian plaster finish by Alba Decor',
    title: 'Venetian Plaster Finish',
    category: 'Decorative Finishes'
  },
  {
    src: '/images/gallery/decorative/decorative-textured-finish.webp',
    alt: 'Textured decorative finish by Alba Decor',
    title: 'Textured Wall Finish',
    category: 'Decorative Finishes'
  },
  {
    src: '/images/gallery/decorative/decorative-mural-art.webp',
    alt: 'Mural artwork by Alba Decor',
    title: 'Custom Mural Art',
    category: 'Decorative Finishes'
  },
  {
    src: '/images/gallery/decorative/decorative-faux-finish.webp',
    alt: 'Faux decorative finish by Alba Decor',
    title: 'Faux Finish Technique',
    category: 'Decorative Finishes'
  },
  {
    src: '/images/gallery/decorative/decorative-metallic-accent.webp',
    alt: 'Metallic accent finish by Alba Decor',
    title: 'Metallic Accent Wall',
    category: 'Decorative Finishes'
  },
  {
    src: '/images/gallery/decorative/decorative-stencil-work.webp',
    alt: 'Decorative stencil work by Alba Decor',
    title: 'Custom Stencil Work',
    category: 'Decorative Finishes'
  },

  // Commercial Projects
  {
    src: '/images/gallery/commercial/commercial-office-space.webp',
    alt: 'Commercial office space painting by Alba Decor',
    title: 'Office Space Transformation',
    category: 'Commercial Projects'
  },
  {
    src: '/images/gallery/commercial/commercial-retail-store.webp',
    alt: 'Retail store painting by Alba Decor',
    title: 'Retail Store Project',
    category: 'Commercial Projects'
  },
  {
    src: '/images/gallery/commercial/commercial-restaurant-interior.webp',
    alt: 'Restaurant interior painting by Alba Decor',
    title: 'Restaurant Interior',
    category: 'Commercial Projects'
  },
  {
    src: '/images/gallery/commercial/commercial-hotel-lobby.webp',
    alt: 'Hotel lobby painting by Alba Decor',
    title: 'Hotel Lobby Design',
    category: 'Commercial Projects'
  },
  {
    src: '/images/gallery/commercial/commercial-warehouse-industrial.webp',
    alt: 'Industrial warehouse painting by Alba Decor',
    title: 'Industrial Warehouse',
    category: 'Commercial Projects'
  },

  // Transformations - Before & After
  {
    src: '/images/gallery/transformations/transformation-kitchen-before.png',
    alt: 'Kitchen before transformation by Alba Decor',
    title: 'Kitchen Before',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-kitchen-after.png',
    alt: 'Kitchen after transformation by Alba Decor',
    title: 'Kitchen After',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-living-room-before.png',
    alt: 'Living room before transformation by Alba Decor',
    title: 'Living Room Before',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-living-room-after.png',
    alt: 'Living room after transformation by Alba Decor',
    title: 'Living Room After',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-bedroom-before.png',
    alt: 'Bedroom before transformation by Alba Decor',
    title: 'Bedroom Before',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-bedroom-after.png',
    alt: 'Bedroom after transformation by Alba Decor',
    title: 'Bedroom After',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-exterior-before.png',
    alt: 'Exterior before transformation by Alba Decor',
    title: 'Exterior Before',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-exterior-after.png',
    alt: 'Exterior after transformation by Alba Decor',
    title: 'Exterior After',
    category: 'Transformations'
  },
  {
    src: '/images/gallery/transformations/transformation-office-complete.png',
    alt: 'Complete office transformation by Alba Decor',
    title: 'Office Transformation',
    category: 'Transformations'
  }
];

export default function GalleryPage() {
  return (
    <main>
      <GalleryClient galleryImages={galleryImages} />
    </main>
  );
}