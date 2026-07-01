'use client';

import {
  BadgeIndianRupee,
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Megaphone,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { aim } from '@/lib/aboutContent';

const objectiveIcons = [
  Building2,
  Users,
  BadgeIndianRupee,
  GraduationCap,
  Megaphone,
  Handshake,
  TrendingUp,
  Globe2,
  Landmark,
  Briefcase,
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-hindi text-lg md:text-2xl font-bold text-primary leading-snug">
      <span className="inline-block h-2 w-2 rounded-full bg-secondary mr-2 align-middle" />
      <span className="inline align-middle wrap-break-word">{children}</span>
    </h2>
  );
}

function ObjectiveCard({
  children,
  index,
  icon: Icon,
}: {
  children: React.ReactNode;
  index: number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="w-full rounded-2xl border border-slate-100 bg-white p-4 md:p-5 shadow-sm hover:border-primary/20 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 md:gap-4">
        <div className="shrink-0 flex flex-col items-center gap-1">
          <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-bold text-secondary">{index + 1}</span>
        </div>
        <p className="font-hindi flex-1 min-w-0 text-sm md:text-base text-slate-800 leading-relaxed wrap-anywhere pt-1">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function AimPageContent() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-slate-900 via-primary to-blue-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Target className="h-3.5 w-3.5 shrink-0" />
            {aim.badge}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            {aim.title}
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            {aim.pageTitle}
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-10 md:space-y-12">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
          <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
            {aim.intro}
          </p>
        </div>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle>{aim.sectionTitle}</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {aim.objectives.map((item, index) => {
              const Icon = objectiveIcons[index] ?? Target;
              return (
                <ObjectiveCard key={item} index={index} icon={Icon}>
                  {item}
                </ObjectiveCard>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
