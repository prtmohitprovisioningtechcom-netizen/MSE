import type { ReactNode } from 'react';

type AboutInfoPageProps = {
  badge: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function AboutInfoPage({ badge, title, subtitle, children }: AboutInfoPageProps) {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">{badge}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-display tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle ? <p className="text-sm text-slate-500 font-hindi leading-relaxed">{subtitle}</p> : null}
      </div>
      <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-10 shadow-sm space-y-4 text-sm md:text-base text-slate-600 leading-relaxed font-hindi">
        {children}
      </div>
    </div>
  );
}
