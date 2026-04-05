export interface Location {
  slug: string;
  name: string;
  postcode: string;
  postcodes?: string; // For display purposes
  geo: {
    lat: number;
    lng: number;
  };
  landmarks: string[];
  landmarksText?: string; // Formatted for content injection
  description: string;
  intro?: string; // Unique intro text for each location
  population?: number;
  keyAreas?: string[];
  nearbyLocations?: string[]; // Slugs of adjacent locations for cluster interlinking
  localStreets?: string[]; // Hyper-local street names for content hooks
  recentProject?: {
    type: string; // e.g., "full house renovation", "exterior rendering", "kitchen cabinet painting"
    savings: string; // e.g., "£800", "£1,200"
  };
  propertyInsights?: string[]; // Unique architectural insights to break programmatic boilerplate
}

export const locations: Location[] = [
  {
    slug: 'potters-bar',
    name: 'Potters Bar',
    postcode: 'EN6',
    postcodes: 'EN6',
    geo: { lat: 51.6906, lng: -0.1781 },
    landmarks: ['Potters Bar Station', 'The Causeway', 'Darkes Lane'],
    landmarksText: 'Potters Bar Station, The Causeway, and Darkes Lane',
    description: 'Affluent town in Hertfordshire with excellent transport links to London',
    intro: 'From executive homes near The Causeway to period properties along Darkes Lane, we provide premium painting and decorating services throughout Potters Bar.',
    population: 21618,
    keyAreas: ['The Causeway', 'Darkes Lane', 'Mutton Lane', 'Little Heath'],
    nearbyLocations: ['cuffley', 'northaw', 'hadley-wood', 'barnet'],
    localStreets: ['The Causeway', 'Darkes Lane', 'Mutton Lane', 'The Walk', 'Cranborne Road'],
    recentProject: {
      type: 'exterior rendering and painting project',
      savings: '£1,200'
    },
    propertyInsights: [
      "Potters Bar's housing stock is dominated by substantial 1930s and post-war semi-detached and detached homes, particularly along The Causeway and Cranborne Road. These properties typically feature pebbledash or smooth render exteriors that require specialist masonry paint rated for the Hertfordshire climate, along with careful preparation to prevent moisture ingress behind the render.",
      "The executive homes near Darkes Lane and Little Heath represent the premium end of Potters Bar's property market. Many of these larger detached houses feature extensive woodwork — fascias, soffits, bay windows and timber-framed conservatories — that benefit from our specialist exterior wood treatment service to preserve the timber against the freeze-thaw cycles common in this area.",
      "Interior work in Potters Bar frequently involves modernising the older open-plan layouts that became popular in the 1970s and 80s. We regularly undertake full interior repaints, wallpaper stripping, and colour consultations to help homeowners update these spacious properties with a contemporary palette while retaining their classic proportions."
    ]
  },
  {
    slug: 'barnet',
    name: 'Barnet',
    postcode: 'EN5',
    postcodes: 'EN5 and N20',
    geo: { lat: 51.6506, lng: -0.2017 },
    landmarks: ['The Spires Shopping Centre', 'High Barnet Station', 'Barnet Market'],
    landmarksText: 'High Barnet Station, The Spires Shopping Centre, and Arkley',
    description: 'Historic market town in North London with Victorian and Edwardian properties',
    intro: 'From Victorian terraces in High Barnet to modern apartments near The Spires Shopping Centre, we are the trusted decorators for homes throughout this historic market town.',
    population: 57765,
    keyAreas: ['High Barnet', 'East Barnet', 'New Barnet', 'Chipping Barnet'],
    nearbyLocations: ['hadley-wood', 'totteridge', 'potters-bar', 'cockfosters'],
    localStreets: ['High Street', 'Wood Street', 'Barnet Hill', 'Union Street', 'Moxon Street'],
    recentProject: {
      type: 'full house renovation',
      savings: '£800'
    },
    propertyInsights: [
      "Barnet\'s housing stock is wonderfully diverse, with a significant concentration of Victorian and Edwardian properties, particularly around High Barnet and Chipping Barnet. These period homes often feature intricate cornicing, ceiling roses, and original sash windows that require specialist preparation before painting.",
      "Many of the inter-war semi-detached houses in New Barnet and East Barnet present unique challenges with external rendering and pebbledash. Our exterior painting services specifically address weathering issues common to North London, utilizing high-quality masonry paints that allow the brickwork to breathe while protecting it from the elements.",
      "Over the past 15 years, we\'ve completed numerous interior overhauls in the area, specifically focusing on modernizing the older layouts while preserving their historic charm. Whether it\'s a quick room refresh near The Spires or a full kitchen cabinet spray painting job on Wood Street, our local expertise ensures a flawless, long-lasting finish."
    ]
  },
  {
    slug: 'hadley-wood',
    name: 'Hadley Wood',
    postcode: 'EN4',
    postcodes: 'EN4',
    geo: { lat: 51.6667, lng: -0.1833 },
    landmarks: ['Hadley Wood Golf Club', 'Hadley Wood Station', 'Beech Hill Park'],
    landmarksText: 'Hadley Wood Golf Club, Beech Hill Park, and the exclusive Camlet Way area',
    description: 'Exclusive residential area known for luxury homes and green spaces',
    intro: 'Specializing in luxury homes near Hadley Wood Golf Club and the prestigious properties along Camlet Way, we deliver exceptional painting services to this exclusive enclave.',
    population: 4500,
    keyAreas: ['Camlet Way', 'Beech Hill', 'Crescent West', 'Lancaster Avenue'],
    nearbyLocations: ['barnet', 'cockfosters', 'potters-bar', 'enfield'],
    localStreets: ['Camlet Way', 'Crescent West', 'Beech Hill', 'Lancaster Avenue', 'Wagon Road'],
    recentProject: {
      type: 'luxury kitchen cabinet hand-painting',
      savings: '£2,400'
    },
    propertyInsights: [
      "Hadley Wood is one of the most exclusive residential enclaves in the London commuter belt, with properties along Camlet Way and Crescent West typically valued at £2M+. These substantial detached homes feature large reception rooms with high ceilings, ornate cornicing, and picture rails that demand a decorator with experience in premium finishes and meticulous preparation.",
      "Many Hadley Wood properties boast extensive bespoke joinery — hand-built bookcases, window seat storage, and fitted studies — that owners frequently choose to transform with our airless spray painting service. The result is a factory-smooth, durable finish that completely modernises the joinery without the disruption or cost of replacement.",
      "The proximity to Hadley Wood Golf Club and Beech Hill Park means many of these homes are surrounded by mature landscaping, which affects the microclimate. We account for this when scheduling exterior work, ensuring paint is applied in ideal temperature and humidity conditions for maximum adhesion and longevity."
    ]
  },
  {
    slug: 'totteridge',
    name: 'Totteridge',
    postcode: 'N20',
    postcodes: 'N20',
    geo: { lat: 51.6333, lng: -0.2000 },
    landmarks: ['Totteridge Green', 'Totteridge & Whetstone Station', 'Laurel Farm'],
    landmarksText: 'Totteridge Green, Laurel Farm, and the village conservation area',
    description: 'Prestigious village area with large detached houses and rural feel',
    intro: 'From grand detached houses around Totteridge Green to characterful properties near Laurel Farm, we provide bespoke decorating services in this prestigious village.',
    population: 5000,
    keyAreas: ['Totteridge Green', 'Totteridge Lane', 'Totteridge Common', 'Laurel Way'],
    nearbyLocations: ['barnet', 'southgate', 'cockfosters'],
    localStreets: ['Totteridge Lane', 'Totteridge Village', 'Laurel Way', 'Totteridge Common', 'The Green'],
    recentProject: {
      type: 'period property restoration with Venetian plaster',
      savings: '£1,800'
    },
    propertyInsights: [
      "Totteridge is a Conservation Area, and many of the properties along Totteridge Lane and The Green are listed or locally listed, meaning any exterior work must respect the original character. Our team has extensive experience working within conservation area guidelines, using traditional lime-based paints and historically appropriate colours that satisfy local planning requirements while delivering a premium finish.",
      "The large detached homes on Totteridge Common often feature extensive garden buildings, garages, and outbuildings that become part of a full exterior repaint project. We treat all outbuildings as extensions of the main property, ensuring colour consistency and finish quality across every structure on the plot.",
      "Interior work in Totteridge frequently incorporates Venetian plaster and specialist decorative finishes, particularly in dining rooms and principal bedrooms where homeowners want to create a truly bespoke aesthetic that reflects the prestige of the village location. Our team trained in traditional European plastering techniques delivers finishes that rival the finest London townhouses."
    ]
  },
  {
    slug: 'enfield',
    name: 'Enfield',
    postcode: 'EN1-EN3',
    postcodes: 'EN1, EN2, and EN3',
    geo: { lat: 51.6523, lng: -0.0831 },
    landmarks: ['Enfield Town Station', 'Palace Gardens Shopping Centre', 'Forty Hall'],
    landmarksText: 'Enfield Town Station, Palace Gardens Shopping Centre, and historic Forty Hall',
    description: 'Large North London borough with diverse housing from Victorian terraces to modern developments',
    intro: 'Serving everything from Victorian terraces in Enfield Town to modern developments near Palace Gardens Shopping Centre, we handle diverse painting projects across this vibrant borough.',
    population: 156858,
    keyAreas: ['Enfield Town', 'Enfield Highway', 'Enfield Lock', 'Bush Hill Park'],
    nearbyLocations: ['cockfosters', 'winchmore-hill', 'southgate', 'hadley-wood'],
    localStreets: ['Church Street', 'Silver Street', 'London Road', 'Windmill Hill', 'Chase Side'],
    recentProject: {
      type: 'commercial office repaint',
      savings: '£950'
    },
    propertyInsights: [
      "Enfield is one of the largest and most architecturally diverse boroughs in North London, spanning Victorian terraces in Enfield Town, 1930s semis in Bush Hill Park, and modern developments near Palace Gardens. This diversity means our decorating team adapts its approach significantly across the borough — using breathable heritage paints on period properties, modern masonry systems on rendered interwar homes, and contemporary finishes on newer builds.",
      "The historic core around the Town, Church Street, and Forty Hall Estate features many Georgian and Victorian properties with original sash windows, deep reveals, and elaborate external detailing. Exterior painting of these properties is skilled work, requiring careful preparation of the timber, multiple coats of flexible gloss, and precise brushwork around glazing bars that a quality decorator can execute where a quick-turnaround operative cannot.",
      "Commercial painting in Enfield is a significant part of our work — from retail units on Palace Gardens to restaurant and office spaces throughout the High Street and Chase Farm areas. Our commercial service offers out-of-hours scheduling, rapid turnaround, and the clean professional finish that business premises demand."
    ]
  },
  {
    slug: 'cockfosters',
    name: 'Cockfosters',
    postcode: 'EN4',
    postcodes: 'EN4',
    geo: { lat: 51.6519, lng: -0.1496 },
    landmarks: ['Cockfosters Station', 'Trent Park', 'Cockfosters Road'],
    landmarksText: 'Cockfosters Station, Trent Park, and the leafy residential streets',
    description: 'Residential area at the northern end of the Piccadilly line with period properties',
    intro: 'From period properties near Trent Park to family homes along Cockfosters Road, we provide expert painting services at the northern end of the Piccadilly line.',
    population: 8000,
    keyAreas: ['Cockfosters Road', 'Chalk Lane', 'Bramley Road', 'Cat Hill'],
    nearbyLocations: ['hadley-wood', 'southgate', 'enfield', 'barnet'],
    localStreets: ['Cockfosters Road', 'Chalk Lane', 'Bramley Road', 'Cat Hill', 'Snakes Lane'],
    recentProject: {
      type: 'Victorian terrace interior refresh',
      savings: '£650'
    },
    propertyInsights: [
      "Cockfosters occupies the quiet northern end of the Piccadilly line and is defined by its generous, leafy residential streets. The housing stock is predominantly inter-war and includes a particularly fine collection of Arts and Crafts-influenced properties around Cat Hill and Chalk Lane that feature exposed timber framing, leaded lights, and decorative brickwork requiring careful exterior attention.",
      "Trent Park forms the green backdrop to many Cockfosters properties, and the woodland microclimate means north-facing exterior walls can suffer from damp and algae growth more than elsewhere. Our exterior painting service always includes a specialist fungicidal wash and appropriate masonry primer before topcoat application — essential steps often skipped by less experienced decorators that significantly extend the life of any paint system.",
      "Interior projects in Cockfosters frequently involve modernising the original layout of 1930s and 1940s homes while retaining period features. We regularly work alongside clients to restore original picture rails, dado rails and coving that add significant character, before applying a carefully chosen paint scheme that honours the vintage of the property."
    ]
  },
  {
    slug: 'southgate',
    name: 'Southgate',
    postcode: 'N14',
    postcodes: 'N14',
    geo: { lat: 51.6322, lng: -0.1275 },
    landmarks: ['Southgate Station', 'Grovelands Park', 'The Bourne'],
    landmarksText: 'the iconic Art Deco Southgate Station, Grovelands Park, and The Bourne',
    description: 'Affluent area with Art Deco architecture and excellent transport connections. Specialist exterior painters for period properties.',
    intro: 'Specializing in exterior painting for the distinctive Art Deco properties around Southgate Station and elegant homes near Grovelands Park. Expert in period property exterior restoration.',
    population: 14949,
    keyAreas: ['Southgate Green', 'The Bourne', 'Cannon Hill', 'Winchmore Hill Road'],
    nearbyLocations: ['winchmore-hill', 'cockfosters', 'enfield', 'totteridge'],
    localStreets: ['High Street', 'Chase Side', 'The Bourne', 'Cannon Hill', 'Waterfall Road'],
    recentProject: {
      type: 'Art Deco exterior painting and render refresh',
      savings: '£1,400'
    },
    propertyInsights: [
      "Southgate is architecturally renowned for its striking 1930s Art Deco properties, particularly in the Minchenden Estate and the areas expanding outward from the iconic Charles Holden-designed tube station. These properties boast distinctive curved bays, Crittall windows, and flat roofs that demand a completely different approach to exterior decorating than older period homes.",
      "Beyond the Art Deco homes, Southgate features substantial Edwardian houses near Grovelands Park and The Bourne. For these properties, we frequently undertake detailed woodwork restoration and specialist exterior rendering to maintain their commanding curb appeal while ensuring they are fully weather-proofed.",
      "Inside, many Southgate homeowners are opting for our premium airless spray painting services for kitchen cabinets and built-in wardrobes. Because many of these homes feature original, high-quality timber fixtures, spray painting provides a factory-smooth finish that completely modernizes the interior at a fraction of the cost of a full replacement."
    ]
  },
  {
    slug: 'winchmore-hill',
    name: 'Winchmore Hill',
    postcode: 'N21',
    postcodes: 'N21',
    geo: { lat: 51.6294, lng: -0.1019 },
    landmarks: ['Winchmore Hill Station', 'Grovelands Park', 'The Green'],
    landmarksText: 'The Green village center, Grovelands Park, and the charming Station Road area',
    description: 'Charming suburban area with village atmosphere and period properties',
    intro: 'From the village charm around The Green to period properties near Grovelands Park, we bring expert craftsmanship to Winchmore Hill\'s distinctive homes.',
    population: 18000,
    keyAreas: ['The Green', 'Station Road', 'Hoppers Road', 'Vicars Moor Lane'],
    nearbyLocations: ['southgate', 'enfield', 'cockfosters'],
    localStreets: ['The Green', 'Station Road', 'Hoppers Road', 'Vicars Moor Lane', 'Compton Road'],
    recentProject: {
      type: 'wallpaper installation and ceiling work',
      savings: '£720'
    },
    propertyInsights: [
      "Winchmore Hill retains a genuine village character centred around The Green, which is surrounded by substantial Edwardian and late Victorian villas. These properties often feature impressive entrance halls with dado rails, cornicing, and staircase details that require a precise, multi-tone painting approach to do justice to the original architecture.",
      "The streets around Vicars Moor Lane and Hoppers Road include many 1930s semi-detached homes with bay windows and pebbledash renders. Exterior painting of these properties demands specialist masonry paint applied to a properly prepared surface — we use a breathable, flexible system that accommodates the natural movement of pebbledash and prevents cracking or flaking.",
      "Winchmore Hill's proximity to the Grovelands Park conservation area means many homeowners are choosing to restore rather than replace period features. We frequently undertake specialist stripping and restoration of original Victorian and Edwardian sash windows, returning them to full working order before repainting with a premium flexible exterior gloss that dramatically extends their life."
    ]
  },
  {
    slug: 'cuffley',
    name: 'Cuffley',
    postcode: 'EN6',
    postcodes: 'EN6',
    geo: { lat: 51.7000, lng: -0.1167 },
    landmarks: ['Cuffley Station', 'Northaw Great Wood', 'The Plough'],
    landmarksText: 'Cuffley Station, Northaw Great Wood, and the village center near The Plough',
    description: 'Village in Hertfordshire with rural character and commuter convenience',
    intro: 'Combining rural village charm with commuter convenience, we serve characterful homes from Cuffley Station to the woodland edges of Northaw Great Wood.',
    population: 4000,
    keyAreas: ['Station Road', 'Maynard Place', 'Cattlegate Road', 'The Ridgeway'],
    nearbyLocations: ['northaw', 'potters-bar'],
    localStreets: ['Station Road', 'Maynard Place', 'Cattlegate Road', 'The Ridgeway', 'Plough Hill'],
    recentProject: {
      type: 'cottage exterior woodwork restoration',
      savings: '£580'
    },
    propertyInsights: [
      "Cuffley is a small but sought-after village in the Hertfordshire greenbelt, where the housing stock ranges from 1930s semis near the station to larger detached homes and bungalows along the ridge. The rural setting means many properties have substantial timber features — large garages, wooden fencing, garden rooms, and pergolas — that benefit from our specialist exterior wood staining and treatment service.",
      "Many of the older cottages and detached homes backing onto Northaw Great Wood face north or are partially shaded by mature trees, creating ideal conditions for green algae and lichen growth on exterior walls and timber. Our comprehensive exterior wash-down, fungicidal treatment, and repainting process specifically addresses this challenge and provides lasting protection.",
      "Interior work in Cuffley often reflects the village aesthetic — warm, natural palettes, textured feature walls, and wallpaper in dining rooms and bedrooms. We bring colour consultation expertise to help homeowners strike the right balance between contemporary comfort and the characterful rural setting that makes Cuffley such a desirable address."
    ]
  },
  {
    slug: 'northaw',
    name: 'Northaw',
    postcode: 'EN6',
    postcodes: 'EN6',
    geo: { lat: 51.7167, lng: -0.1500 },
    landmarks: ['Northaw Great Wood', 'The Sun Inn', 'Northaw Village Hall'],
    landmarksText: 'Northaw Great Wood, The Sun Inn, and the historic village center',
    description: 'Historic village surrounded by countryside with characterful properties',
    intro: 'Nestled in countryside near Northaw Great Wood, we specialize in preserving and enhancing the character of this historic village\'s unique properties.',
    population: 2500,
    keyAreas: ['Northaw Village', 'Coopers Lane Road', 'Judges Hill', 'Vineyards Road'],
    nearbyLocations: ['cuffley', 'potters-bar'],
    localStreets: ['Coopers Lane Road', 'Judges Hill', 'Vineyards Road', 'Northaw Road East', 'The Ridgeway'],
    recentProject: {
      type: 'heritage property interior and exterior refresh',
      savings: '£1,350'
    },
    propertyInsights: [
      "Northaw is one of Hertfordshire's most historic villages, with a conservation area centred on the old village core around The Sun Inn and Northaw village hall. Many properties here are genuinely old — some dating from the 17th and 18th centuries — with lime render, timber-framing, and natural stone features that require specialist heritage decorating skills and breathable lime-based paints rather than modern synthetic systems.",
      "The isolated rural setting of Northaw means larger properties often have working farms, equestrian facilities, and extensive outbuildings alongside the main house. Full exterior projects frequently encompass stables, garages, and cart lodges in addition to the principal dwelling, requiring consistent colour application across a wide variety of surfaces and substrates.",
      "Interior work in Northaw properties often focuses on restoration and preservation — stripping decades of paint from original beams and joinery, repairing lime plaster walls, and applying traditional finishes that respect the age and character of these exceptional properties. Our team takes pride in its heritage decorating expertise and approaches each historic property with the care and research it deserves."
    ]
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
};

export const getLocationsByPostcode = (postcode: string): Location[] => {
  return locations.filter(location => location.postcode.includes(postcode));
};

// Top 5 most important locations for footer
export const topLocations = locations.slice(0, 5);