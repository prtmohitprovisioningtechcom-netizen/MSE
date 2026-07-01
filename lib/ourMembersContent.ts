export type ChamberMember = {
  name: string;
  role?: string;
  organization?: string;
  additionalOrganization?: string;
  industry?: string;
  image?: string;
};

export const ourMembers = {
  title: 'Our Members',
  pageTitle: 'हमारे सदस्य',
  badge: 'Member Network',
};

export const chamberMembers: ChamberMember[] = [
  {
    name: 'Dr Sandeep Kumar gupta',
    role: 'Director',
    organization: 'HGL AND GLASS DECORATION',
    image: '/Members/Sandeep Kumar.jpeg',
  },
  {
    name: 'Dr rashmi gupta',
    role: 'Director',
    organization: 'S r group',
    industry: 'Garments manufacturing industry',
    image: '/Members/Rashmi Gupta.jpeg',
  },
  {
    name: 'Satyam prateek yadav',
    role: 'Director',
    organization: 'Satyam event and decoration',
    image: '/Members/Satyam Prateek.jpeg',
  },
  {
    name: 'Snehlata',
    role: 'Director',
    organization: 'Sneha handicrafts',
    image: '/Members/Snehlata.jpeg',
  },
  {
    name: 'Ragini yadav',
    role: 'Director',
    organization: 'Ragini garments',
    image: '/Members/Ragini.jpeg',
  },
  {
    name: 'Akash jain',
    role: 'Director',
    organization: 'Akash it solutions',
    additionalOrganization: 'Maa padmavati grah udhyog',
    image: '/Members/Akash jain.jpeg',
  },
  {
    name: 'Dr rachana upadhyay',
    role: 'Director',
    organization: 'Vaishnavi institute of education',
    image: '/Members/Rachna .jpeg',
  },
  {
    name: 'Dr kavya jindal',
    role: 'Director',
    organization: 'Caprihan Chemical Glass Works',
    image: '/Members/Kavya jindal.jpeg',
  },
];
