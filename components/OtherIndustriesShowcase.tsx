'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { otherIndustriesImages } from '@/lib/otherIndustries';

export default function OtherIndustriesShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="space-y-4 pt-6 mt-2 border-t border-slate-100"
    >
      <h3 className="text-lg md:text-xl font-bold text-primary border-l-4 border-secondary pl-4 font-display">
        Other Industries
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
        {otherIndustriesImages.map((image) => (
          <div
            key={image.src}
            className="group relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100 hover:shadow-md transition-all"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
