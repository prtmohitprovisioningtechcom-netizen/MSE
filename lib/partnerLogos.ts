export type PartnerLogo = {
  name: string;
  src: string;
};

const logoFiles: Array<{ file: string; name: string }> = [
  { file: 'Ministry.jpeg', name: 'Ministry of Corporate Affairs' },
  { file: 'niti.jpeg', name: 'NITI Aayog' },
  { file: 'UP.jpeg', name: 'Government of Uttar Pradesh' },
  { file: 'MSME.jpeg', name: 'MSME - Government of India' },
  { file: 'skill india.jpeg', name: 'Skill India' },
  { file: 'Gem(6).png', name: 'GeM Portal' },
  { file: 'Registrar.jpeg', name: 'Registrar, Firms Societies & Chits - Uttar Pradesh' },
  { file: 'ATG logo.jpeg', name: 'ATG' },
  { file: '12A (8).jpeg', name: '12A' },
  { file: 'beti.jpeg', name: 'Beti Bachao Beti Padhao' },
];

export const partnerLogos: PartnerLogo[] = logoFiles.map(({ file, name }) => ({
  name,
  src: `/Logo/${encodeURIComponent(file)}`,
}));
