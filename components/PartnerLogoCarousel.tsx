'use client';

import Image from 'next/image';
import { partnerLogos } from '@/lib/partnerLogos';

const marqueeLogos = [...partnerLogos, ...partnerLogos];

export default function PartnerLogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-6 md:py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 md:w-24 bg-linear-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 md:w-24 bg-linear-to-l from-white via-white/80 to-transparent" />

      <div className="partner-logo-marquee flex w-max items-start gap-10 sm:gap-14 md:gap-20 lg:gap-24 px-6 sm:px-10 md:px-16">
        {marqueeLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="group flex w-36 sm:w-44 md:w-52 lg:w-60 shrink-0 flex-col items-center gap-3"
          >
            <div className="relative h-28 w-full sm:h-32 md:h-36 lg:h-44 rounded-2xl border border-slate-100/90 bg-slate-50/70 p-3 md:p-4 shadow-xs transition-all group-hover:bg-white group-hover:shadow-sm">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 240px"
                className="object-contain p-1 opacity-95"
              />
            </div>
            <p className="w-full text-center text-[10px] sm:text-[11px] md:text-xs font-medium leading-snug text-slate-600 px-1">
              {logo.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
