'use client';

import Link from 'next/link';
import {
  BadgeCheck,
  Building2,
  FileText,
  HandHelping,
  Landmark,
  Receipt,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { mayIHelpYou } from '@/lib/aboutContent';
import { organization } from '@/lib/siteContent';

const serviceIcons = [
  Building2,
  FileText,
  Receipt,
  BadgeCheck,
  Receipt,
  FileText,
  FileText,
  FileText,
  Scale,
  Landmark,
  ShieldCheck,
  BadgeCheck,
  ShieldCheck,
  BadgeCheck,
  FileText,
  Landmark,
  Landmark,
  Building2,
  Building2,
  HandHelping,
];

function ServiceCard({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  const Icon = serviceIcons[index] ?? FileText;

  return (
    <div className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 md:p-5 shadow-sm hover:border-primary/25 hover:shadow-md transition-all">
      <div className="shrink-0 flex flex-col items-center gap-1">
        <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[10px] font-bold text-secondary">{index + 1}</span>
      </div>
      <p className="flex-1 min-w-0 pt-2 text-sm md:text-base font-semibold text-slate-800 leading-relaxed wrap-anywhere">
        {label}
      </p>
    </div>
  );
}

export default function MayIHelpYouPageContent() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-slate-900 via-primary to-blue-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <HandHelping className="h-3.5 w-3.5 shrink-0" />
            {mayIHelpYou.badge}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            {mayIHelpYou.title}
          </h1>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {mayIHelpYou.services.map((service, index) => (
            <ServiceCard key={service} label={service} index={index} />
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-primary to-slate-900 text-white p-6 md:p-8 shadow-lg space-y-3 text-sm md:text-base">
          <p>
            <strong className="text-secondary">Helpline:</strong> {organization.phone}
          </p>
          <p>
            <strong className="text-secondary">Email:</strong> {organization.email}
          </p>
          <Link href="/contact" className="inline-block pt-1 font-bold text-amber-200 hover:text-white transition-colors">
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
