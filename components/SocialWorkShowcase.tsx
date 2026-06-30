'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';
import { socialWorkImages } from '@/lib/socialWork';

export default function SocialWorkShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-emerald-200/70 bg-linear-to-br from-emerald-50 via-white to-primary/5 p-6 md:p-8 lg:p-10 shadow-[0_12px_40px_rgba(16,185,129,0.1)]"
    >
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative space-y-6 md:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <HeartHandshake className="h-3.5 w-3.5" />
              Community Impact
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary font-display tracking-tight">
              Social Work
            </h3>
            <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
              Outreach programs, entrepreneur support and community development initiatives by MSE-CCIA.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 mx-6 bg-linear-to-r from-emerald-200 to-transparent mb-3" />
          <p className="text-4xl md:text-5xl font-black text-emerald-100 font-display leading-none select-none">
            MSE
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4">
          {socialWorkImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-white ring-2 ring-white shadow-md hover:shadow-xl hover:ring-emerald-300/80 transition-all duration-300"
            >
              <Image
                src={encodeURI(image.src)}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 45vw, 18vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-950/45 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-white/90 text-emerald-800 text-[10px] font-bold shadow-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
