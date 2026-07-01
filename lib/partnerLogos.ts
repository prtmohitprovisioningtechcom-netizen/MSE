export type PartnerLogo = {
  name: string;
  src: string;
};

const logoFiles: Array<{ file: string; name: string }> = [
  { file: 'MSME.jpeg', name: 'Ministry of Micro, Small and Medium Enterprises' },
  { file: 'Ministry.jpeg', name: 'Ministry of Commerce and Industry' },
  { file: 'niti.jpeg', name: 'NITI Aayog — National Institution for Transforming India' },
  { file: 'skill india.jpeg', name: 'Skill India — National Skill Development Mission' },
  { file: 'UP.jpeg', name: 'Government of Uttar Pradesh' },
  { file: 'beti.jpeg', name: 'Beti Bachao Beti Padhao' },
  { file: 'save.jpeg', name: 'Save Water Save Life' },
  { file: 'save tree.jpeg', name: 'Save Tree Save Environment' },
  { file: 'environment.jpeg', name: 'Ministry of Environment, Forest and Climate Change' },
  { file: '1.jpeg', name: 'National Development and Industry Initiative' },
];

export const partnerLogos: PartnerLogo[] = logoFiles.map(({ file, name }) => ({
  name,
  src: `/Logo/${encodeURIComponent(file)}`,
}));
