import { homeInitiatives } from './homeInitiatives';

export const organization = {
  shortName: 'MSE',
  name: 'MSE Chambers of Commerce & Industry Association',
  tagline: 'MSE-CCIA',
  email: 'msmeindus.association@gmail.com',
  phone: '+91 92584 10701',
  address: 'Head Office, 14/396 Arya Nagar, Firozabad',
  addressLine1: 'Head Office, 14/396 Arya Nagar,',
  addressLine2: 'Firozabad',
  website: 'https://www.mseindustryassociation.com/',
  facebook: 'https://www.facebook.com/',
  youtube: 'https://www.youtube.com/',
  hours: 'Monday to Friday, 9:30 AM to 6:00 PM',
};

export const homeHero = {
  hindiSlogan: {
    line1: 'हिंदी हमारी राष्ट्रभाषा, हमारी मातृभाषा है।',
    line2: 'आओ, हम अपना कार्य हिंदी में करें।',
  },
  industrialSlogan:
    'उद्योग से सिर्फ एक व्यक्ति ,परिवार, ही नहीं समाज ,राज्य,और हमारा देश भी मजबूत होता है आओ उद्योग लगाए और देश की अर्थिक स्थिति को और भी अधिक मजबूत, सुदृढ़ और सुनिश्चित करने में अपना सहयोग प्रदान करे',
  lines: [
    'Upgrade Your Skills development and industries development',
    'Seminar awareness government scheme and other programs',
    'and skill development and any program.',
  ],
};

export const homeIntroParagraph =
  'Promotion of MSMEs SC/ST entrepreneur support Skill development, Industrial grievance resolution, Vendor development programs, Government scheme awareness, Trade fairs & exhibitions. MSME support, Industrial development, Training & awareness, Government License, Vendor development. State and National Fair and Exhibation.';

export const serviceDesks = [
  {
    title: 'MSME Support Desk',
    slug: '/services',
    summary: 'Udyam registration guidance, credit readiness, subsidy awareness, business documentation, and scale-up support for micro and small enterprises.',
    points: ['Udyam and business registration guidance', 'Credit and subsidy awareness', 'Startup and cluster support'],
  },
  {
    title: 'Industrial Development',
    slug: '/services',
    summary: 'Investment promotion, industrial estate coordination, infrastructure support, and expansion guidance for manufacturing units.',
    points: ['Industrial estate information', 'Infrastructure and utility coordination', 'Expansion project guidance'],
  },
  {
    title: 'Training & Awareness',
    slug: '/events',
    summary: 'Workshops on GST, quality certification, digital commerce, exports, procurement, safety, and entrepreneurship readiness.',
    points: ['Compliance workshops', 'Skill development programs', 'Entrepreneurship capacity building'],
  },
  {
    title: 'Government Liaison',
    slug: '/contact',
    summary: 'Policy representation, scheme facilitation, administrative coordination, and compliance guidance for member enterprises.',
    points: ['Policy memorandum support', 'Scheme facilitation', 'Department coordination'],
  },
  {
    title: 'Vendor Development',
    slug: '/vendor-development',
    summary: 'Buyer-seller meets, GeM awareness, tender readiness, procurement opportunity updates, and supply-chain development.',
    points: ['GeM and tender awareness', 'PSU buyer connect', 'Vendor registration guidance'],
  },
  {
    title: 'Job & Business Support',
    slug: '/job-business-support',
    summary: 'Official job creation guidelines, business support circulars, employment schemes, and enterprise facilitation documents for MSMEs.',
    points: ['Job creation & employment schemes', 'Business support circulars', 'MS Word document library', 'Enterprise facilitation guides'],
  },
  {
    title: 'SC/ST Entrepreneur Support',
    slug: '/sc-st-support',
    summary: 'Dedicated guidance for SC/ST-owned enterprises through credit schemes, procurement readiness, mentoring, and market access.',
    points: ['Stand-Up India awareness', 'NSSH program guidance', 'Reserved procurement awareness'],
  },
];

export const navServiceLinks = [
  ...serviceDesks.slice(0, 5),
  {
    title: 'State and National Fair and Exhibation',
    slug: '/initiatives/state-national-share-exhibation',
    summary: 'State and national level fair and exhibition participation for MSME product visibility and market reach.',
    points: ['State exhibition coordination', 'National fair programs', 'Showcase platform guidance'],
  },
];

export const initiatives = homeInitiatives.map((item) => item.title);

export const officeContacts = [
  {
    title: 'Head Office',
    address: organization.address,
    phone: organization.phone,
    email: organization.email,
    hours: organization.hours,
  },
];
