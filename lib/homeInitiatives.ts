export type HomeInitiative = {
  slug: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  points: string[];
  services: string[];
};

export const homeInitiatives: HomeInitiative[] = [
  {
    slug: 'promotion-of-msmes',
    title: 'Promotion of MSMEs',
    badge: 'MSME Growth',
    summary: 'Supporting micro, small and medium enterprises through advocacy, awareness and market access.',
    description:
      'MSE-CCIA works to promote MSME participation in domestic manufacturing, exports, procurement and industrial clusters across India.',
    points: [
      'MSME policy awareness and chamber representation',
      'Business registration and Udyam facilitation guidance',
      'Cluster development and local industry promotion',
      'Export readiness and market linkage support',
    ],
    services: ['Udyam registration guidance', 'Industry seminars', 'Member networking programs', 'Policy memorandum support'],
  },
  {
    slug: 'sc-st-entrepreneur-support',
    title: 'SC/ST entrepreneur support',
    badge: 'Inclusive Growth',
    summary: 'Dedicated support for Scheduled Caste and Scheduled Tribe entrepreneurs through schemes, mentoring and procurement readiness.',
    description:
      'The chamber helps SC/ST founders access credit schemes, training, reserved procurement opportunities and business documentation support.',
    points: [
      'Stand-Up India and NSSH scheme awareness',
      'Credit project report and bank liaison guidance',
      'Reserved procurement quota facilitation',
      'Mentoring and entrepreneurship capacity building',
    ],
    services: ['Stand-Up India guidance', 'NSSH program support', 'Procurement quota awareness', 'Incubation desk assistance'],
  },
  {
    slug: 'skill-development',
    title: 'Skill development',
    badge: 'Skill Building',
    summary: 'Training programs for employability, entrepreneurship and industry-ready technical skills.',
    description:
      'MSE-CCIA conducts and promotes skill development programs across fashion, leather, glass, computer education, repairing trades, food processing and more.',
    points: [
      'Industry-linked vocational training programs',
      'Seminars on government skill schemes',
      'Entrepreneurship and self-employment training',
      'Placement and enterprise support awareness',
    ],
    services: ['Fashion & garment training', 'Technical repairing courses', 'Computer education', 'Industries MDP & ESDP programs'],
  },
  {
    slug: 'industrial-grievance-resolution',
    title: 'Industrial grievance resolution',
    badge: 'Support Desk',
    summary: 'Facilitation for delayed payments, utility issues, compliance bottlenecks and administrative coordination.',
    description:
      'Members and enterprises can approach the chamber for structured grievance review, documentation support and responsible escalation.',
    points: [
      'Delayed payment guidance under MSMED Act',
      'Industrial utility and clearance coordination',
      'Tender and procurement dispute facilitation',
      'Department follow-up and status tracking',
    ],
    services: ['Grievance desk review', 'Document verification support', 'Department liaison', 'Policy route guidance'],
  },
  {
    slug: 'vendor-development-programs',
    title: 'Vendor development programs',
    badge: 'Vendor Connect',
    summary: 'Programs that prepare MSMEs for public procurement, buyer meets and supply-chain integration.',
    description:
      'Vendor development initiatives help enterprises understand GeM, tender readiness, PSU buyer requirements and quality compliance.',
    points: [
      'GeM seller registration awareness',
      'Buyer-seller meet participation',
      'Tender documentation readiness',
      'Quality and certification guidance',
    ],
    services: ['GeM onboarding support', 'Vendor registration guidance', 'Buyer meet alerts', 'Tender readiness workshops'],
  },
  {
    slug: 'government-scheme-awareness',
    title: 'Government scheme awareness',
    badge: 'Scheme Desk',
    summary: 'Information sessions and guidance on central and state MSME, industry and entrepreneurship schemes.',
    description:
      'The chamber regularly shares updates on subsidies, credit schemes, cluster development programs and ministry notifications relevant to MSMEs.',
    points: [
      'Ministry of MSME scheme updates',
      'Credit-linked subsidy awareness',
      'State industrial incentive information',
      'Application process guidance',
    ],
    services: ['Scheme briefing sessions', 'Eligibility review support', 'Application documentation help', 'Official portal references'],
  },
  {
    slug: 'trade-fairs-exhibitions',
    title: 'Trade fairs & exhibitions',
    badge: 'Market Access',
    summary: 'Participation support for trade fairs, exhibitions and buyer exposure programs at state and national level.',
    description:
      'MSE-CCIA helps members explore exhibition opportunities, stall coordination and product showcase platforms for business growth.',
    points: [
      'National and state exhibition alerts',
      'MSME pavilion participation guidance',
      'Product display and branding support',
      'Buyer networking at trade events',
    ],
    services: ['Exhibition calendar updates', 'Stall registration guidance', 'Trade fair orientation', 'Export showcase support'],
  },
  {
    slug: 'msme-support',
    title: 'MSME support',
    badge: 'MSME Desk',
    summary: 'End-to-end facilitation for registration, documentation, credit readiness and business growth.',
    description:
      'The MSME support desk assists enterprises with Udyam, compliance awareness, subsidy information and operational guidance.',
    points: [
      'Udyam and business documentation support',
      'Credit and subsidy readiness guidance',
      'Compliance and certification awareness',
      'Startup and scale-up facilitation',
    ],
    services: ['Udyam registration help', 'Business documentation review', 'Subsidy scheme guidance', 'Growth advisory sessions'],
  },
  {
    slug: 'industrial-development',
    title: 'Industrial development',
    badge: 'Industry Growth',
    summary: 'Support for manufacturing expansion, industrial coordination and investment promotion.',
    description:
      'MSE-CCIA promotes industrial development through seminars, infrastructure coordination awareness and enterprise expansion guidance.',
    points: [
      'Industrial estate and cluster information',
      'Manufacturing expansion advisory',
      'Investment promotion awareness',
      'Infrastructure and utility coordination guidance',
    ],
    services: ['Industry seminars', 'Expansion project guidance', 'Cluster coordination support', 'Investment awareness sessions'],
  },
  {
    slug: 'training-awareness',
    title: 'Training & awareness',
    badge: 'Awareness Programs',
    summary: 'Workshops and awareness sessions on GST, exports, procurement, safety, quality and entrepreneurship.',
    description:
      'Regular training programs help members stay updated on compliance, technology adoption, quality standards and government programs.',
    points: [
      'GST and compliance workshops',
      'Export and procurement awareness',
      'Quality certification orientation',
      'Digital commerce and safety training',
    ],
    services: ['Compliance workshops', 'Entrepreneurship sessions', 'Procurement awareness', 'Industry MDP programs'],
  },
  {
    slug: 'government-liaison',
    title: 'Government liaison',
    badge: 'Policy Connect',
    summary: 'Representation and coordination with government departments for MSME and industrial matters.',
    description:
      'The chamber acts as a liaison body connecting enterprises with relevant departments, schemes and administrative offices.',
    points: [
      'Policy representation and memoranda',
      'Department coordination support',
      'Scheme facilitation follow-up',
      'Administrative query routing',
    ],
    services: ['Department liaison', 'Policy memorandum support', 'Scheme follow-up assistance', 'Official correspondence guidance'],
  },
  {
    slug: 'vendor-development',
    title: 'Vendor development',
    badge: 'Supply Chain',
    summary: 'Supply-chain development, procurement opportunity updates and vendor ecosystem building.',
    description:
      'Vendor development support helps MSMEs become reliable suppliers for PSUs, large buyers and institutional procurement channels.',
    points: [
      'Procurement opportunity updates',
      'Supplier capability development',
      'Institutional buyer connect programs',
      'Supply-chain readiness guidance',
    ],
    services: ['Procurement alerts', 'Vendor ecosystem meets', 'Supplier documentation support', 'Institutional buyer orientation'],
  },
  {
    slug: 'state-national-share-exhibation',
    title: 'State and National Fair and Exhibation',
    badge: 'Exhibition Network',
    summary: 'State and national level fair and exhibition participation for MSME product visibility.',
    description:
      'MSE-CCIA facilitates member participation in state and national exhibitions, fair programs and showcase platforms for wider market reach.',
    points: [
      'State-level exhibition participation',
      'National showcase and fair programs',
      'MSME product visibility support',
      'Delegation and pavilion coordination',
    ],
    services: ['State exhibition coordination', 'National event participation', 'Showcase platform guidance', 'Delegation support desk'],
  },
  {
    slug: 'mse-ccia',
    title: 'MSE-CCIA',
    badge: 'Chamber Profile',
    summary: 'MSE Chambers of Commerce & Industry Association — partners in MSME and industrial growth.',
    description:
      'MSE-CCIA is an apex chamber representing micro, small and medium enterprises, connecting industry, government and entrepreneurs for sustainable development.',
    points: [
      'Chamber membership and representation',
      'MSME advocacy and industry coordination',
      'Training, vendor and grievance support desks',
      'State and national program participation',
    ],
    services: ['Membership enrollment', 'Industry representation', 'Multi-desk facilitation', 'National chamber networking'],
  },
];

export function getInitiativeBySlug(slug: string) {
  return homeInitiatives.find((item) => item.slug === slug);
}

export function getAllInitiativeSlugs() {
  return homeInitiatives.map((item) => item.slug);
}
