import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://albahomes.co.uk';

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Service category pages
  const serviceCategories = [
    'painting-decorating',
    'interior-decorating',
    'wallpaper-installation'
  ];

  const serviceCategoryPages = serviceCategories.map(category => ({
    url: `${baseUrl}/services/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Individual service pages - Painting & Decorating
  const paintingServices = [
    'interior-painting',
    'exterior-painting',
    'cabinet-painting',
    'hand-painted-kitchens',
    'deck-painting',
    'door-painting',
    'drywall-painting',
    'drywall-repair',
    'faux-finishes',
    'furniture-painting',
    'mural-painting',
    'speciality-design-painting',
    'spray-painting',
    'wallpaper-hanging',
    'wallpaper-removal',
    'wood-painting',
    'wood-staining',
    'wood-varnishing',
    'venetian-plaster',
    'textured-walls',
    'floor-sanding',
    'floor-varnishing',
    'hand-painted-wardrobes',
    'bathroom-silicone-removal-and-application',
    'kitchen-silicone-removal-and-application',
    'commercial-painting',
    'residential-painting',
    'hotel-painting',
    'pub-painting',
    'newly-built-house-painting'
  ];

  const paintingServicePages = paintingServices.map(service => ({
    url: `${baseUrl}/services/painting-decorating/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Interior Decorating services
  const interiorServices = [
    'venetian-plaster',
    'decorative-wall-finishes',
    'textured-wall-design',
    'feature-wall-design',
    'mural-design-and-painting',
    'hand-painted-kitchen-cabinets',
    'hand-painted-wardrobes',
    'custom-furniture-painting',
    'color-consultation',
    'interior-paint-color-selection',
    'decorative-plasterwork',
    'specialty-paint-finishes',
    'faux-finishing',
    'wall-art-and-murals',
    'bespoke-interior-painting',
    'luxury-interior-finishes'
  ];

  const interiorServicePages = interiorServices.map(service => ({
    url: `${baseUrl}/services/interior-decorating/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Wallpaper services
  const wallpaperServices = [
    'wallpaper-hanging',
    'wallpaper-removal',
    'wallpaper-installation',
    'feature-wall-wallpapering',
    'commercial-wallpaper-installation',
    'residential-wallpaper-services',
    'wallpaper-repair',
    'designer-wallpaper-hanging',
    'vinyl-wallpaper-installation',
    'textured-wallpaper',
    'accent-wall-wallpaper'
  ];

  const wallpaperServicePages = wallpaperServices.map(service => ({
    url: `${baseUrl}/services/wallpaper-installation/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Location pages
  const locations = [
    'barnet',
    'watford',
    'st-albans',
    'harrow',
    'enfield',
    'stevenage',
    'hertford',
    'potters-bar'
  ];

  const locationPages = locations.map(location => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...mainPages,
    ...serviceCategoryPages,
    ...paintingServicePages,
    ...interiorServicePages,
    ...wallpaperServicePages,
    ...locationPages,
  ];
}