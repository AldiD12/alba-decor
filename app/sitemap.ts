import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://albadecor.co.uk';

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
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Consolidated service pages (12 main services)
  const consolidatedServices = [
    'interior-painting',
    'exterior-painting',
    'cabinet-furniture-painting',
    'decorative-finishes',
    'wallpaper-services',
    'wood-finishing',
    'floor-sanding-varnishing',
    'silicone-sealing',
    'commercial-painting',
    'residential-painting',
    'spray-painting',
    'color-consultation'
  ];

  const consolidatedServicePages = consolidatedServices.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locations = [
    'potters-bar',
    'barnet',
    'hadley-wood',
    'totteridge',
    'enfield',
    'cockfosters',
    'southgate',
    'winchmore-hill',
    'cuffley',
    'northaw'
  ];

  const locationPages = locations.map(location => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    // CHANGE THIS: Tell Google these are active "Money Pages"
    changeFrequency: 'weekly' as const,
    // CHANGE THIS: Make them as important as your "About" page
    priority: 0.9,
  }));

  return [
    ...mainPages,
    ...consolidatedServicePages,
    ...locationPages,
  ];
}