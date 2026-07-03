export type Course = {
  title: string;
  image?: string;
  line1: string;
  line2: string;
  description: string;
};

type CourseEntry = {
  title: string;
  imageFile?: string;
  line1: string;
  line2: string;
};

/** Fixed sequence — one unique image per course. Two short lines only. */
const courseEntries: CourseEntry[] = [
  {
    title: 'Fashion designing',
    imageFile: 'Fashion designing.jpeg',
    line1: 'Garment sketching and fabric selection.',
    line2: 'For boutique and tailoring work.',
  },
  {
    title: 'Leather goods products training',
    imageFile: 'Leather goods products.jpeg',
    line1: 'Leather cutting, stitching and finishing.',
    line2: 'For bags and footwear units.',
  },
  {
    title: 'Leather stitching opretor',
    imageFile: 'Leather stitching opretor.jpeg',
    line1: 'Industrial leather machine stitching.',
    line2: 'For workshops and export units.',
  },
  {
    title: 'Garments manufacturing',
    imageFile: 'Garments manufacturing.jpeg',
    line1: 'Cutting, sewing and quality check.',
    line2: 'For garment and export houses.',
  },
  {
    title: 'Juet product training',
    imageFile: 'Juet product training.jpeg',
    line1: 'Jute design, weaving and crafts.',
    line2: 'For eco-friendly product business.',
  },
  {
    title: 'Glass art',
    imageFile: 'Glass art.jpeg',
    line1: 'Glass shaping and art finishing.',
    line2: 'For décor and craft enterprise.',
  },
  {
    title: 'Glass designing',
    imageFile: 'Glass designing.jpeg',
    line1: 'Glass design with safety basics.',
    line2: 'For factories and design work.',
  },
  {
    title: 'Computer education',
    imageFile: 'Computer education.jpeg',
    line1: 'MS Office and digital literacy.',
    line2: 'For students and office jobs.',
  },
  {
    title: 'Beautician',
    imageFile: 'Beautician.jpeg',
    line1: 'Skin, hair and salon services.',
    line2: 'For parlour self-employment.',
  },
  {
    title: 'Make up artist',
    imageFile: 'Makeup artist.jpeg',
    line1: 'Bridal and professional makeup.',
    line2: 'For events and freelance work.',
  },
  {
    title: 'Khadi product training',
    imageFile: 'Khadi product.jpeg',
    line1: 'Khadi spinning and weaving.',
    line2: 'For rural textile enterprise.',
  },
  {
    title: 'Stitching opretor',
    imageFile: 'Stitching opretor.jpeg',
    line1: 'Power machine garment stitching.',
    line2: 'For shops and factory work.',
  },
  {
    title: 'Skill development training program',
    imageFile: 'Skill development training.jpeg',
    line1: 'Employability and vocational skills.',
    line2: 'Aligned with MSME industry needs.',
  },
  {
    title: 'Industries training',
    imageFile: 'Industries training.jpeg',
    line1: 'Factory tools, safety and workflow.',
    line2: 'For production environment jobs.',
  },
  {
    title: 'Industries development training',
    imageFile: 'Industries development training.jpeg',
    line1: 'Industrial growth and operations.',
    line2: 'For new and expanding units.',
  },
  {
    title: 'Industries seminar',
    imageFile: 'Industries seminar.jpeg',
    line1: 'Policy, schemes and best practices.',
    line2: 'For MSME owners and trainees.',
  },
  {
    title: 'Industries Mdp and ESDP training program',
    imageFile: 'Industries Mdp esdp training program.jpeg',
    line1: 'MDP and entrepreneurship skills.',
    line2: 'For business and leadership growth.',
  },
  {
    title: 'Mobile repairing',
    imageFile: 'Mobile repairing.jpeg',
    line1: 'Phone hardware and software repair.',
    line2: 'For service shop employment.',
  },
  {
    title: 'Ac repairing',
    imageFile: 'Ac repairing.jpeg',
    line1: 'AC install, gas and servicing.',
    line2: 'For summer service business.',
  },
  {
    title: 'Sollar pannal stolation',
    imageFile: 'Sollar pannal stolation.jpeg',
    line1: 'Solar panel mounting and wiring.',
    line2: 'For green energy service jobs.',
  },
  {
    title: 'Fitter training program',
    imageFile: 'Fitter training program.jpeg',
    line1: 'Fitting, assembly and maintenance.',
    line2: 'For workshop and plant roles.',
  },
  {
    title: 'Motar car repairing',
    imageFile: 'Motar car repairing .jpeg',
    line1: 'Engine and auto repair basics.',
    line2: 'For garage and service centres.',
  },
  {
    title: 'Freeze repairing',
    imageFile: 'Freeze repairing .jpeg',
    line1: 'Fridge cooling system repair.',
    line2: 'For appliance service shops.',
  },
  {
    title: 'Belding machine training program',
    imageFile: 'Belding machine training program.jpeg',
    line1: 'Welding safety and joint work.',
    line2: 'For metal and construction jobs.',
  },
];

export const courses: Course[] = courseEntries.map(({ title, imageFile, line1, line2 }) => ({
  title,
  line1,
  line2,
  ...(imageFile ? { image: `/Course/${imageFile}` } : {}),
  description: `${line1} ${line2}`,
}));
