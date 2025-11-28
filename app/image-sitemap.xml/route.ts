import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://albadecor.co.uk';
  
  // Gallery images organized by category
  const galleryImages = [
    // Interior Painting Projects
    {
      loc: `${baseUrl}/images/gallery/interior/living-room-1.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 1 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/interior/interior-living-room-modern.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 2 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/interior/interior-bedroom-elegant.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 3 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/interior/interior-dining-room-classic.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 4 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/interior/interior-hallway-contemporary.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 5 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/interior/interior-office-professional.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 6 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/interior/interior-bathroom-luxury.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 7 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/interior/interior-staircase-feature.webp`,
      title: 'Professional Interior Painting Project by Alba Decor',
      caption: 'Interior Project 8 - Professional painting and decorating services in London and Hertfordshire',
      license: `${baseUrl}/gallery`
    },

    // Kitchen Painting Projects
    {
      loc: `${baseUrl}/images/gallery/kitchen/kitchen-painting-1.webp`,
      title: 'Professional Kitchen Painting Project by Alba Decor',
      caption: 'Kitchen Project 1 - Hand painted kitchen cabinets and professional kitchen painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/kitchen/kitchen-cabinets-hand-painted.webp`,
      title: 'Professional Kitchen Painting Project by Alba Decor',
      caption: 'Kitchen Project 2 - Hand painted kitchen cabinets and professional kitchen painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/kitchen/kitchen-modern-transformation.webp`,
      title: 'Professional Kitchen Painting Project by Alba Decor',
      caption: 'Kitchen Project 3 - Hand painted kitchen cabinets and professional kitchen painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/kitchen/kitchen-traditional-makeover.webp`,
      title: 'Professional Kitchen Painting Project by Alba Decor',
      caption: 'Kitchen Project 4 - Hand painted kitchen cabinets and professional kitchen painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/kitchen/kitchen-island-feature.webp`,
      title: 'Professional Kitchen Painting Project by Alba Decor',
      caption: 'Kitchen Project 5 - Hand painted kitchen cabinets and professional kitchen painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/kitchen/kitchen-shaker-style.webp`,
      title: 'Professional Kitchen Painting Project by Alba Decor',
      caption: 'Kitchen Project 6 - Hand painted kitchen cabinets and professional kitchen painting services',
      license: `${baseUrl}/gallery`
    },

    // Exterior Painting Projects
    {
      loc: `${baseUrl}/images/gallery/exterior/exterior-victorian-house.webp`,
      title: 'Professional Exterior Painting Project by Alba Decor',
      caption: 'Exterior Project 1 - Professional exterior painting and house painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/exterior/exterior-modern-home.webp`,
      title: 'Professional Exterior Painting Project by Alba Decor',
      caption: 'Exterior Project 2 - Professional exterior painting and house painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/exterior/exterior-front-door-feature.webp`,
      title: 'Professional Exterior Painting Project by Alba Decor',
      caption: 'Exterior Project 3 - Professional exterior painting and house painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/exterior/exterior-render-painting.webp`,
      title: 'Professional Exterior Painting Project by Alba Decor',
      caption: 'Exterior Project 4 - Professional exterior painting and house painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/exterior/exterior-period-property.webp`,
      title: 'Professional Exterior Painting Project by Alba Decor',
      caption: 'Exterior Project 5 - Professional exterior painting and house painting services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/exterior/exterior-commercial-building.webp`,
      title: 'Professional Exterior Painting Project by Alba Decor',
      caption: 'Exterior Project 6 - Professional exterior painting and house painting services',
      license: `${baseUrl}/gallery`
    },

    // Wallpaper Installation
    {
      loc: `${baseUrl}/images/gallery/wallpaper/wallpaper-feature-wall-dining.webp`,
      title: 'Professional Wallpaper Installation by Alba Decor',
      caption: 'Wallpaper Project 1 - Professional wallpaper hanging and installation services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/wallpaper/wallpaper-bedroom-luxury.webp`,
      title: 'Professional Wallpaper Installation by Alba Decor',
      caption: 'Wallpaper Project 2 - Professional wallpaper hanging and installation services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/wallpaper/wallpaper-living-room-accent.webp`,
      title: 'Professional Wallpaper Installation by Alba Decor',
      caption: 'Wallpaper Project 3 - Professional wallpaper hanging and installation services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/wallpaper/wallpaper-hallway-statement.webp`,
      title: 'Professional Wallpaper Installation by Alba Decor',
      caption: 'Wallpaper Project 4 - Professional wallpaper hanging and installation services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/wallpaper/wallpaper-office-professional.webp`,
      title: 'Professional Wallpaper Installation by Alba Decor',
      caption: 'Wallpaper Project 5 - Professional wallpaper hanging and installation services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/wallpaper/wallpaper-bathroom-designer.webp`,
      title: 'Professional Wallpaper Installation by Alba Decor',
      caption: 'Wallpaper Project 6 - Professional wallpaper hanging and installation services',
      license: `${baseUrl}/gallery`
    },

    // Decorative Finishes
    {
      loc: `${baseUrl}/images/gallery/decorative/decorative-venetian-plaster.webp`,
      title: 'Professional Decorative Finish by Alba Decor',
      caption: 'Decorative Project 1 - Venetian plaster and decorative wall finishes',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/decorative/decorative-textured-finish.webp`,
      title: 'Professional Decorative Finish by Alba Decor',
      caption: 'Decorative Project 2 - Venetian plaster and decorative wall finishes',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/decorative/decorative-metallic-accent.webp`,
      title: 'Professional Decorative Finish by Alba Decor',
      caption: 'Decorative Project 3 - Venetian plaster and decorative wall finishes',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/decorative/decorative-faux-finish.webp`,
      title: 'Professional Decorative Finish by Alba Decor',
      caption: 'Decorative Project 4 - Venetian plaster and decorative wall finishes',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/decorative/decorative-stencil-work.webp`,
      title: 'Professional Decorative Finish by Alba Decor',
      caption: 'Decorative Project 5 - Venetian plaster and decorative wall finishes',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/decorative/decorative-mural-art.webp`,
      title: 'Professional Decorative Finish by Alba Decor',
      caption: 'Decorative Project 6 - Venetian plaster and decorative wall finishes',
      license: `${baseUrl}/gallery`
    },

    // Commercial Projects
    {
      loc: `${baseUrl}/images/gallery/commercial/commercial-office-space.webp`,
      title: 'Professional Commercial Painting by Alba Decor',
      caption: 'Commercial Project 1 - Professional commercial painting and decorating services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/commercial/commercial-retail-store.webp`,
      title: 'Professional Commercial Painting by Alba Decor',
      caption: 'Commercial Project 2 - Professional commercial painting and decorating services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/commercial/commercial-restaurant-interior.webp`,
      title: 'Professional Commercial Painting by Alba Decor',
      caption: 'Commercial Project 3 - Professional commercial painting and decorating services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/commercial/commercial-hotel-lobby.webp`,
      title: 'Professional Commercial Painting by Alba Decor',
      caption: 'Commercial Project 4 - Professional commercial painting and decorating services',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/commercial/commercial-warehouse-industrial.webp`,
      title: 'Professional Commercial Painting by Alba Decor',
      caption: 'Commercial Project 5 - Professional commercial painting and decorating services',
      license: `${baseUrl}/gallery`
    },

    // Project Transformations
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-kitchen-before.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project Before - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-kitchen-after.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project After - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-living-room-before.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project Before - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-living-room-after.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project After - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-bedroom-before.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project Before - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-bedroom-after.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project After - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-exterior-before.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project Before - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-exterior-after.png`,
      title: 'Alba Decor Project Transformation',
      caption: 'Project After - Professional painting and decorating transformation',
      license: `${baseUrl}/gallery`
    },
    {
      loc: `${baseUrl}/images/gallery/transformations/transformation-office-complete.png`,
      title: 'Alba Decor Completed Project',
      caption: 'Completed Project - Professional painting and decorating services',
      license: `${baseUrl}/gallery`
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/gallery</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    ${galleryImages.map(image => `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
      <image:license>${image.license}</image:license>
    </image:image>`).join('')}
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}