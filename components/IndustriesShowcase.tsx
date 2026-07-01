'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialWorkShowcase from '@/components/SocialWorkShowcase';
import OtherIndustriesShowcase from '@/components/OtherIndustriesShowcase';
import PartnerLogoCarousel from '@/components/PartnerLogoCarousel';

const industries = [
  { name: 'Garments Industry', slug: 'garments' },
  { name: 'Leather Industries', slug: 'leather' },
  { name: 'Shoes Industries', slug: 'shoes' },
  { name: 'Glass Industries', slug: 'glass' },
  { name: 'IT Industries', slug: 'it' },
  { name: 'Wood Industries', slug: 'wood' },
  { name: 'Food Industry', slug: 'food' },
  { name: 'Textile Industry', slug: 'textile' },
  { name: 'Hardware Industries', slug: 'hardware' },
  { name: 'Sport Industries', slug: 'sport' },
  { name: 'Electricity Industries', slug: 'electricity' },
];

function IndustryPhotos({ name, slug }: { name: string; slug: string }) {
  const photos = [1, 2, 3, 4, 5].map((n) => `/industries/${slug}/${n}.jpeg`);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
      {photos.map((photo, photoIdx) => (
        <div
          key={photoIdx}
          className="group relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100 hover:shadow-md transition-all"
        >
          <Image
            src={photo}
            alt={`${name} - ${photoIdx + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
        </div>
      ))}
    </div>
  );
}

export default function IndustriesShowcase() {
  return (
    <section className="bg-white border-t border-slate-200 py-16">
      <PartnerLogoCarousel />

      <div className="max-w-6xl mx-auto space-y-14 px-6">
        <div className="text-center space-y-2">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Industrial Sectors</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display">
            Supported Industry Verticals
          </h2>
        </div>

        {industries.map((industry, idx) => (
          <motion.div
            key={industry.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="space-y-4"
          >
            <h3 className="text-lg md:text-xl font-bold text-primary border-l-4 border-secondary pl-4 font-display">
              {industry.name}
            </h3>
            <IndustryPhotos name={industry.name} slug={industry.slug} />
            {industry.slug === 'electricity' ? <OtherIndustriesShowcase /> : null}
          </motion.div>
        ))}

        <SocialWorkShowcase />
      </div>
    </section>
  );
}
