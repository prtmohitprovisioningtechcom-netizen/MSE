import Link from 'next/link';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { initiatives, organization, serviceDesks } from '@/lib/siteContent';

export default function Footer() {
  return (
    <footer className="mt-12 bg-primary text-white border-t border-primary/20">
      <div className="tricolor-bar" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/mse.jpeg" alt="MSE Logo" className="h-14 w-20 object-contain bg-white rounded-lg p-1" />
            <div>
              <h3 className="font-extrabold font-display leading-tight">{organization.shortName}</h3>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider">{organization.tagline}</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Professional facilitation for MSME promotion, industrial development, vendor readiness, government scheme awareness, and member support.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-secondary mb-3">Quick Links</h4>
          <nav className="space-y-2 text-xs text-slate-300">
            <Link href="/" className="block hover:text-white">Home</Link>
            <Link href="/membership" className="block hover:text-white">Membership</Link>
            <Link href="/events" className="block hover:text-white">News & Events</Link>
            <Link href="/grievance" className="block hover:text-white">Grievance Desk</Link>
            <Link href="/job-business-support" className="block hover:text-white">Job & Business Support</Link>
            <Link href="/contact" className="block hover:text-white">Contact Us</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-bold text-secondary mb-3">Services</h4>
          <nav className="space-y-2 text-xs text-slate-300">
            {serviceDesks.slice(0, 5).map((service) => (
              <Link key={service.title} href={service.slug} className="block hover:text-white">{service.title}</Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-bold text-secondary mb-3">Contact Details</h4>
          <div className="space-y-3 text-xs text-slate-300">
            <p className="flex gap-2"><MapPin className="h-4 w-4 text-secondary shrink-0" />{organization.address}</p>
            <p className="flex gap-2"><Phone className="h-4 w-4 text-secondary shrink-0" />{organization.phone}</p>
            <p className="flex gap-2"><Mail className="h-4 w-4 text-secondary shrink-0" />{organization.email}</p>
            <p className="flex gap-2"><Building2 className="h-4 w-4 text-secondary shrink-0" />{initiatives.length} active support initiatives</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 px-6 text-center text-[11px] text-slate-300">
        Designed by Provisioningtech
      </div>
    </footer>
  );
}
