'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { courses } from '@/lib/courses';
import { homeHero, homeIntroParagraph } from '@/lib/siteContent';

const sideImages = [
  { src: '/sideimages/1.jpeg', alt: 'MSE seminar and training program' },
  { src: '/sideimages/2.jpeg', alt: 'MSE industrial development' },
  { src: '/sideimages/3.jpeg', alt: 'MSE manufacturing and industries' },
  { src: '/sideimages/4.jpeg', alt: 'MSE industrial growth initiative' },
];

function SideImageCard({
  image,
  index,
  priority = false,
}: {
  image: (typeof sideImages)[number];
  index: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.12 + index * 0.07 }}
      className="group relative h-full min-h-38 sm:min-h-44 lg:min-h-0 overflow-hidden rounded-xl md:rounded-2xl ring-1 ring-white/20 shadow-lg"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 45vw, 22vw"
        priority={priority}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
    </motion.div>
  );
}

export default function HomeClient() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/60 to-slate-900/25" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 md:space-y-6 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-xl border border-white/25 bg-linear-to-br from-white/12 via-white/6 to-white/3 backdrop-blur-md px-3.5 py-3 md:px-4 md:py-3.5 shadow-lg max-w-xl"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-secondary via-white to-accent" />

              <div className="relative space-y-1 md:space-y-1.5">
                <p className="font-hindi text-sm sm:text-base md:text-lg font-semibold text-white leading-snug">
                  {homeHero.hindiSlogan.line1}
                </p>
                <p className="font-hindi text-xs sm:text-sm md:text-base font-medium text-secondary leading-snug">
                  {homeHero.hindiSlogan.line2}
                </p>
              </div>
            </motion.div>

            <h1 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed tracking-normal">
              {homeHero.lines.map((line, index) => (
                <span key={index} className="block mb-1 last:mb-0">
                  {line}
                </span>
              ))}
            </h1>

            <div className="rounded-2xl bg-primary/85 border border-white/10 backdrop-blur-sm p-4 md:p-5 shadow-xl">
              <p className="text-[11px] md:text-xs text-white/95 leading-relaxed">{homeIntroParagraph}</p>
            </div>

            <div className="rounded-2xl bg-slate-900/55 border border-white/15 backdrop-blur-md p-4 md:p-5 shadow-2xl">
              <p className="text-[10px] md:text-[11px] font-bold text-white/90 uppercase tracking-[0.18em] mb-3">
                Skill Development Program
              </p>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <span
                    key={course.title}
                    className="inline-flex items-center px-2.5 py-1.5 rounded-full border border-white/80 text-white text-[10px] md:text-[11px] font-medium bg-white/5"
                  >
                    {course.title}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-5 flex h-full"
          >
            <div className="w-full h-full min-h-88 sm:min-h-104 lg:min-h-0 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-4 md:p-5 shadow-2xl flex flex-col gap-5 md:gap-6">
              <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
                {sideImages.slice(0, 2).map((image, index) => (
                  <SideImageCard key={image.src} image={image} index={index} priority />
                ))}
              </div>

              <div className="h-px bg-white/15 shrink-0" />

              <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
                {sideImages.slice(2, 4).map((image, index) => (
                  <SideImageCard key={image.src} image={image} index={index + 2} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
