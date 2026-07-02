'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone, Quote, UserRound } from 'lucide-react';
import OrganizationAddress from '@/components/OrganizationAddress';
import { directorMessage } from '@/lib/aboutContent';
import { organization } from '@/lib/siteContent';

export default function DirectorMessagePageContent() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-slate-900 via-primary to-blue-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <UserRound className="h-3.5 w-3.5 shrink-0" />
            {directorMessage.badge}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            {directorMessage.title}
          </h1>
          <p className="font-hindi text-sm md:text-base text-white/90 leading-relaxed wrap-anywhere px-1">
            {directorMessage.organization}
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-8">
        <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">
          <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />

          <div className="p-6 sm:p-8 md:p-10 border-b border-slate-100 bg-linear-to-br from-primary/5 via-white to-amber-50/30">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
              <div className="relative shrink-0">
                <div className="relative h-52 w-44 sm:h-60 sm:w-48 md:h-64 md:w-52 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl border border-slate-200/80">
                  <Image
                    src={directorMessage.photo}
                    alt={directorMessage.name}
                    width={416}
                    height={520}
                    sizes="(max-width: 640px) 176px, 208px"
                    priority
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-full bg-linear-to-r from-secondary via-amber-400 to-accent shadow-sm" />
              </div>

              <div className="flex-1 min-w-0 text-center sm:text-left space-y-3 pt-1 sm:pt-2">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  {directorMessage.designation}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary font-display leading-tight wrap-break-word">
                  {directorMessage.name}
                </h2>
                <p className="font-hindi text-sm md:text-base text-slate-600 leading-relaxed wrap-anywhere">
                  {directorMessage.organization}
                </p>
                <div className="hidden sm:block h-px w-full max-w-xs bg-linear-to-r from-secondary/60 via-amber-300/40 to-transparent mt-2" />
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 space-y-6 md:space-y-7">
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Quote className="h-6 w-6" />
              </div>
              <p className="font-hindi text-base md:text-lg font-semibold text-primary leading-relaxed wrap-anywhere pt-2">
                {directorMessage.salutation}
              </p>
            </div>

            <div className="space-y-5 md:space-y-6 border-l-4 border-secondary/30 pl-5 md:pl-6">
              {directorMessage.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-hindi text-sm md:text-base text-slate-700 leading-relaxed md:leading-8 wrap-anywhere"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="font-hindi text-sm md:text-base text-slate-700 leading-relaxed md:leading-8 wrap-anywhere font-medium">
              {directorMessage.thanks}
            </p>

            <div className="rounded-2xl border border-primary/15 bg-linear-to-br from-primary/5 via-white to-amber-50/40 p-5 md:p-7 space-y-1">
              <p className="font-hindi text-sm md:text-base text-slate-600">{directorMessage.signOff}</p>
              <p className="text-lg md:text-xl font-extrabold text-primary font-display wrap-break-word">
                {directorMessage.name}
              </p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                {directorMessage.designation}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-3xl border border-slate-200 bg-linear-to-br from-primary to-slate-900 text-white p-6 md:p-8 shadow-lg space-y-4">
          <h2 className="text-lg md:text-xl font-extrabold font-display">Contact the Chamber</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-200">
            <p className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <OrganizationAddress className="font-hindi" />
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-secondary shrink-0" />
              <span>{organization.phone}</span>
            </p>
            <p className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span className="break-all">{organization.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
