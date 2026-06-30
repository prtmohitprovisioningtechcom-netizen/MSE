export type Course = {
  title: string;
  image: string;
  description: string;
};

const fallbackImage = '/Course/Industries training.jpeg';

export const courses: Course[] = [
  { title: 'Fashion designing', image: '/Course/Fashion designing.jpeg', description: 'Fashion designing training program.' },
  { title: 'Leather goods products training', image: '/Course/Leather goods products.jpeg', description: 'Leather goods products training program.' },
  { title: 'Leather stitching opretor', image: '/Course/Leather stitching opretor.jpeg', description: 'Leather stitching opretor training program.' },
  { title: 'Garments manufacturing', image: '/Course/Garments manufacturing.jpeg', description: 'Garments manufacturing training program.' },
  { title: 'Juet product training', image: '/Course/Juet product training.jpeg', description: 'Juet product training program.' },
  { title: 'Glass art', image: '/Course/Glass art.jpeg', description: 'Glass art training program.' },
  { title: 'Glass designing', image: '/Course/Glass designing.jpeg', description: 'Glass designing training program.' },
  { title: 'Computer education', image: '/Course/Computer education.jpeg', description: 'Computer education training program.' },
  { title: 'Beautician', image: '/Course/Beautician.jpeg', description: 'Beautician training program.' },
  { title: 'Make up artist', image: '/Course/Makeup artist.jpeg', description: 'Make up artist training program.' },
  { title: 'Khadi product training', image: '/Course/Khadi product.jpeg', description: 'Khadi product training program.' },
  { title: 'Stitching opretor', image: '/Course/Stitching opretor.jpeg', description: 'Stitching opretor training program.' },
  { title: 'Skill development training program', image: '/Course/Skill development training.jpeg', description: 'Skill development training program.' },
  { title: 'Industries training', image: '/Course/Industries training.jpeg', description: 'Industries training program.' },
  { title: 'Industries development training', image: '/Course/Industries development training.jpeg', description: 'Industries development training program.' },
  { title: 'Industries seminar', image: '/Course/Industries seminar.jpeg', description: 'Industries seminar program.' },
  { title: 'Industries Mdp and ESDP training program', image: '/Course/Industries Mdp esdp training program.jpeg', description: 'Industries Mdp and ESDP training program.' },
  { title: 'Electricians', image: fallbackImage, description: 'Electricians training program.' },
  { title: 'Mobile repairing', image: '/Course/Mobile repairing.jpeg', description: 'Mobile repairing training program.' },
  { title: 'Ac repairing', image: fallbackImage, description: 'Ac repairing training program.' },
  { title: 'Sollar pannal stolation', image: '/Course/Sollar pannal stolation.jpeg', description: 'Sollar pannal stolation training program.' },
  { title: 'Fitter training program', image: '/Course/Fitter training program.jpeg', description: 'Fitter training program.' },
  { title: 'Motar car repairing', image: '/Course/Motar car repairing .jpeg', description: 'Motar car repairing training program.' },
  { title: 'Freeze repairing', image: '/Course/Freeze repairing .jpeg', description: 'Freeze repairing training program.' },
  { title: 'Belding machine training program', image: fallbackImage, description: 'Belding machine training program.' },
  { title: 'Food Proceising', image: fallbackImage, description: 'Food Proceising training program.' },
];
