import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { organization } from '@/lib/siteContent';
import type { HomeInitiative } from '@/lib/homeInitiatives';

export default function InitiativePageContent({ initiative }: { initiative: HomeInitiative }) {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-14">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">{initiative.badge}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-tight">
          {initiative.title}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">{initiative.summary}</p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-extrabold text-primary font-display">About this initiative</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{initiative.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {initiative.points.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-linear-to-br from-primary to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
          <h3 className="text-xl font-extrabold font-display">Key services</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {initiative.services.map((service) => (
              <li key={service} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
            <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-secondary" /> {organization.address}</p>
            <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-secondary" /> {organization.phone}</p>
            <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-secondary" /> {organization.email}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-primary font-display">Need support under this program?</h3>
          <p className="text-sm text-slate-500 mt-1">Contact the MSE-CCIA office for guidance and facilitation.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl shadow-md transition-all uppercase tracking-wider"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
