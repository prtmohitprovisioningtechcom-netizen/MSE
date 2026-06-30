'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { courses } from '@/lib/courses';
import { homeHero, homeIntroParagraph, organization } from '@/lib/siteContent';

export default function HomeClient() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 md:space-y-6 text-left"
          >
            <h1 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed tracking-normal">
              {homeHero.lines.map((line, index) => (
                <span key={index} className="block mb-1 last:mb-0">
                  {line}
                </span>
              ))}
            </h1>

            <div className="rounded-2xl bg-primary/85 border border-white/10 backdrop-blur-sm p-4 md:p-5 shadow-xl space-y-2.5">
              <p className="text-[11px] md:text-xs text-white/95 leading-relaxed">{homeIntroParagraph}</p>
              <div className="pt-2 border-t border-white/15 space-y-1">
                <p className="text-[10px] md:text-[11px] font-semibold text-white/90">{organization.address}</p>
                <p className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest">MSE-CCIA</p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900/55 border border-white/15 backdrop-blur-md p-4 md:p-5 shadow-2xl">
              <p className="text-[10px] md:text-[11px] font-bold text-white/90 uppercase tracking-[0.18em] mb-3">
                Training Programs Offered
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/10 border border-white/25 rounded-2xl md:rounded-3xl p-5 md:p-6 backdrop-blur-md shadow-2xl relative mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-24">
              <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/10 rounded-full blur-3xl" />
              <Image
                src="/mse.jpeg"
                alt="MSE Logo"
                width={384}
                height={288}
                priority
                className="h-48 md:h-56 lg:h-64 w-full object-contain rounded-lg relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
