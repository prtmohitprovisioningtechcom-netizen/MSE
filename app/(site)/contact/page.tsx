import { MapPin, Phone, Mail, Clock, Building2, Globe, HeartHandshake } from 'lucide-react';
import { officeContacts } from '@/lib/siteContent';

export default function ContactPage() {
  const desks = [
    'Membership and chamber information',
    'Government scheme guidance',
    'Vendor development and GeM awareness',
    'Industrial grievance coordination',
    'Training, events, and exhibition information',
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Get In Touch</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Contact Secretariat
        </h1>
        <p className="text-sm text-slate-500">
          Reach the chamber team for membership, government scheme guidance, vendor development, events, and industrial support desk coordination.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-bold text-primary font-display border-b border-slate-100 pb-2">Chamber Directory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officeContacts.map((office) => (
              <div key={office.title} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 text-xs md:col-span-2">
                <h4 className="font-bold text-slate-900 text-sm font-display flex items-center gap-1.5">
                  <Building2 className="h-4.5 w-4.5 text-secondary" /> {office.title}
                </h4>
                <ul className="space-y-3 text-slate-500">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-slate-600">{office.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-secondary shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-slate-600 hover:text-primary">
                      {office.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-secondary shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-slate-600 hover:text-primary break-all">
                      {office.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-secondary shrink-0" />
                    <span className="text-slate-600">{office.hours}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-linear-to-br from-primary to-slate-900 text-white rounded-3xl space-y-4 shadow-xl relative overflow-hidden text-xs">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/15 rounded-full blur-2xl" />
            <h4 className="font-bold text-white flex items-center gap-1.5 text-base">
              <HeartHandshake className="h-5 w-5 text-secondary" /> Secretariat Helpdesk
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Please call or email the head office for details. The team can guide visitors about schemes, memberships, event participation, and industry support desks.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-primary font-display">Support Areas</h3>
            <ul className="space-y-3 text-xs text-slate-600">
              {desks.map((desk) => (
                <li key={desk} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  <span>{desk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-primary font-display flex items-center gap-2">
          <Globe className="h-5 w-5 text-secondary" /> Office Location
        </h3>
        <div className="w-full h-80 rounded-3xl bg-slate-200 relative overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center text-center p-6 text-slate-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-slate-200/50 via-slate-300 to-slate-400 opacity-80" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] mix-blend-overlay opacity-30 bg-cover bg-center" />
          <div className="relative z-10 space-y-3 max-w-sm">
            <Building2 className="h-10 w-10 text-primary mx-auto opacity-70" />
            <h4 className="font-bold text-slate-900 text-sm">MSE Head Office, Firozabad</h4>
            <p className="text-[11px] leading-relaxed text-slate-600">
              14/396 Arya Nagar, Firozabad — central office for visitors and partner organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
