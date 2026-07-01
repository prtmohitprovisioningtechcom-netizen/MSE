'use client';

import {
  Compass,
  GraduationCap,
  Handshake,
  Landmark,
  Network,
  Rocket,
} from 'lucide-react';
import { mission } from '@/lib/aboutContent';

const highlightIcons = [GraduationCap, Compass, Network, Landmark, Handshake];

export default function MissionPageContent() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-slate-900 via-primary to-blue-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Rocket className="h-3.5 w-3.5 shrink-0" />
            {mission.badge}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            {mission.title}
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            {mission.pageTitle}
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-8 md:space-y-10">
        <div className="w-full rounded-3xl border border-emerald-200 bg-linear-to-br from-white via-emerald-50/40 to-white p-6 sm:p-8 md:p-10 shadow-lg">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Rocket className="h-7 w-7" />
          </div>
          <p className="font-hindi w-full text-center text-base md:text-xl text-slate-800 leading-relaxed md:leading-9 wrap-anywhere font-medium">
            {mission.statement}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {mission.highlights.map((item, index) => {
            const Icon = highlightIcons[index] ?? Rocket;
            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div className="shrink-0 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-hindi text-sm md:text-base font-semibold text-slate-800 wrap-anywhere">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
