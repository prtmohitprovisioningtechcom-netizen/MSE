import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Quote } from 'lucide-react';
import { directorMessage } from '@/lib/aboutContent';
import { organization } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Director Message',
  description: 'Message from the Director of MSE Chambers of Commerce & Industry Association.',
};

export default function DirectorMessagePage() {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-14">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">{directorMessage.badge}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-tight">
          {directorMessage.title}
        </h1>
        <p className="text-sm text-slate-500">{directorMessage.organization}</p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Quote className="h-8 w-8 text-secondary shrink-0" />
            <h2 className="text-2xl font-extrabold font-display">Message from the Director</h2>
          </div>

          <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
            {directorMessage.message.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="text-sm font-semibold text-primary border-t border-slate-100 pt-4">{directorMessage.closing}</p>

          <div className="pt-2">
            <p className="font-bold text-slate-900">{directorMessage.name}</p>
            <p className="text-xs text-slate-500">{directorMessage.organization}</p>
          </div>
        </div>

        <div className="lg:col-span-4 bg-linear-to-br from-primary to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
          <h3 className="text-xl font-extrabold font-display">Contact the Chamber</h3>
          <div className="space-y-3 text-sm text-slate-200">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span>{organization.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary shrink-0" />
              <span>{organization.phone}</span>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span className="break-all">{organization.email}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
