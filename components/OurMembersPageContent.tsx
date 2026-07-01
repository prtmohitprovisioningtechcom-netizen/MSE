'use client';

import Image from 'next/image';
import { Users } from 'lucide-react';
import { chamberMembers, ourMembers, type ChamberMember } from '@/lib/ourMembersContent';

function memberImageSrc(path: string) {
  return encodeURI(path);
}

function MemberCard({ member, index }: { member: ChamberMember; index: number }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg hover:border-primary/25 transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="h-1 bg-linear-to-r from-secondary via-amber-400 to-accent" />

      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <div className="relative w-full sm:w-52 md:w-56 shrink-0 h-72 sm:h-auto sm:min-h-80 overflow-hidden bg-slate-100">
          <Image
            src={memberImageSrc(member.image!)}
            alt={member.name}
            width={360}
            height={450}
            sizes="(max-width: 640px) 100vw, 224px"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2.5 p-5 md:p-6 min-w-0 sm:border-l border-slate-100">
          <h3 className="text-lg md:text-xl font-extrabold text-primary font-display leading-snug wrap-break-word">
            {member.name}
          </h3>

          {member.role ? (
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.14em] text-secondary">
              {member.role}
            </p>
          ) : null}

          {member.organization ? (
            <p className="text-base md:text-lg font-semibold text-slate-800 leading-relaxed wrap-anywhere">
              {member.organization}
            </p>
          ) : null}

          {member.additionalOrganization ? (
            <p className="text-base md:text-lg font-semibold text-slate-800 leading-relaxed wrap-anywhere">
              {member.additionalOrganization}
            </p>
          ) : null}

          {member.industry ? (
            <p className="text-sm text-slate-500 leading-relaxed wrap-anywhere italic border-l-2 border-amber-400 pl-3">
              {member.industry}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function OurMembersPageContent() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-14">
      <div className="bg-linear-to-br from-slate-900 via-primary to-blue-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 text-center space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Users className="h-3.5 w-3.5 shrink-0" />
            {ourMembers.badge}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word">
            {ourMembers.title}
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere">
            {ourMembers.pageTitle}
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {chamberMembers.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
