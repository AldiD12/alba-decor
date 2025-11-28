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
    keyAreas: ['The Causeway', 'Darkes Lane', 'Mutton Lane', 'Little Heath']
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
    keyAreas: ['High Barnet', 'East Barnet', 'New Barnet', 'Chipping Barnet']
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
    keyAreas: ['Camlet Way', 'Beech Hill', 'Crescent West', 'Lancaster Avenue']
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
    keyAreas: ['Totteridge Green', 'Totteridge Lane', 'Totteridge Common', 'Laurel Way']
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
    keyAreas: ['Enfield Town', 'Enfield Highway', 'Enfield Lock', 'Bush Hill Park']
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
    keyAreas: ['Cockfosters Road', 'Chalk Lane', 'Bramley Road', 'Cat Hill']
  },
  {
    slug: 'southgate',
    name: 'Southgate',
    postcode: 'N14',
    postcodes: 'N14',
    geo: { lat: 51.6322, lng: -0.1275 },
    landmarks: ['Southgate Station', 'Grovelands Park', 'The Bourne'],
    landmarksText: 'the iconic Art Deco Southgate Station, Grovelands Park, and The Bourne',
    description: 'Affluent area with Art Deco architecture and excellent transport connections',
    intro: 'Specializing in the distinctive Art Deco properties around Southgate Station and elegant homes near Grovelands Park, we understand the unique character of this affluent area.',
    population: 14949,
    keyAreas: ['Southgate Green', 'The Bourne', 'Cannon Hill', 'Winchmore Hill Road']
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
    keyAreas: ['The Green', 'Station Road', 'Hoppers Road', 'Vicars Moor Lane']
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
    keyAreas: ['Station Road', 'Maynard Place', 'Cattlegate Road', 'The Ridgeway']
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
    keyAreas: ['Northaw Village', 'Coopers Lane Road', 'Judges Hill', 'Vineyards Road']
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