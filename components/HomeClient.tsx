'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
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
  priority = false,
}: {
  image: (typeof sideImages)[number];
  priority?: boolean;
}) {
  return (
    <div className="group relative h-full min-h-38 sm:min-h-44 lg:min-h-0 overflow-hidden rounded-xl md:rounded-2xl ring-1 ring-white/20 shadow-lg">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 45vw, 22vw"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
    </div>
  );
}

export default function HomeClient() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-primary to-slate-900" />
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/60 to-slate-900/25" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-left">
            <div className="relative overflow-hidden rounded-xl border border-white/25 bg-linear-to-br from-white/12 via-white/6 to-white/3 px-3.5 py-3 md:px-4 md:py-3.5 shadow-lg max-w-xl">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-secondary via-white to-accent" />

              <div className="relative space-y-1 md:space-y-1.5">
                <p className="font-hindi text-sm sm:text-base md:text-lg font-semibold text-white leading-snug">
                  {homeHero.hindiSlogan.line1}
                </p>
                <p className="font-hindi text-xs sm:text-sm md:text-base font-medium text-secondary leading-snug">
                  {homeHero.hindiSlogan.line2}
                </p>
              </div>
            </div>

            <h1 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed tracking-normal">
              {homeHero.lines.map((line, index) => (
                <span key={index} className="block mb-1 last:mb-0">
                  {line}
                </span>
              ))}
            </h1>

            <div className="rounded-2xl bg-primary/85 border border-white/10 p-4 md:p-5 shadow-xl">
              <p className="text-[11px] md:text-xs text-white/95 leading-relaxed">{homeIntroParagraph}</p>
            </div>

            <div className="rounded-2xl bg-slate-900/55 border border-white/15 p-4 md:p-5 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <p className="text-[10px] md:text-[11px] font-bold text-white/90 uppercase tracking-[0.18em]">
                  Skill Development Program
                </p>
                <Link
                  href="/student-registration"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-secondary bg-secondary/20 px-3 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-white hover:bg-secondary hover:border-secondary transition-colors shrink-0 text-center leading-tight max-w-[10rem] sm:max-w-none"
                >
                  <GraduationCap className="h-3.5 w-3.5 shrink-0" />
                  <span>Student & Industry Participation Form</span>
                </Link>
              </div>
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
          </div>

          <div className="lg:col-span-5 flex h-full">
            <div className="w-full h-full min-h-88 sm:min-h-104 lg:min-h-0 rounded-3xl border border-white/20 bg-white/5 p-4 md:p-5 shadow-2xl flex flex-col gap-4 md:gap-5">
              <div className="relative overflow-hidden rounded-xl border border-amber-300/30 bg-linear-to-br from-amber-500/15 via-white/8 to-primary/10 px-3.5 py-3.5 md:px-4 md:py-4 shadow-lg shrink-0">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-secondary to-transparent" />
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="h-px flex-1 bg-linear-to-r from-transparent to-white/40" />
                  <span className="text-white/50 text-[10px] tracking-[0.3em] shrink-0">— — —</span>
                  <span className="h-px flex-1 bg-linear-to-l from-transparent to-white/40" />
                </div>
                <p className="font-hindi text-xs sm:text-sm md:text-[15px] font-semibold text-white leading-relaxed md:leading-7 wrap-anywhere text-center">
                  {homeHero.industrialSlogan}
                </p>
                <div className="flex items-center gap-2 mt-2.5">
                  <span className="h-px flex-1 bg-linear-to-r from-transparent to-white/30" />
                  <span className="text-white/40 text-[10px] tracking-widest shrink-0">— — —</span>
                  <span className="h-px flex-1 bg-linear-to-l from-transparent to-white/30" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
                {sideImages.slice(0, 2).map((image) => (
                  <SideImageCard key={image.src} image={image} priority />
                ))}
              </div>

              <div className="h-px bg-white/15 shrink-0" />

              <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
                {sideImages.slice(2, 4).map((image) => (
                  <SideImageCard key={image.src} image={image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
