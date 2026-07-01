import { Building, ShieldCheck, FileText, HelpCircle } from 'lucide-react';
import { organization } from '@/lib/siteContent';
import MembershipTiersClient from '@/components/MembershipTiersClient';

export const revalidate = 60;

export default function MembershipPage() {
  const process = [
    'Click the membership form button on your chosen tier and submit business details.',
    'Receive the latest membership brochure and fee details from the secretariat.',
    'Submit PAN, GST, Udyam, company profile, and supporting documents for verification.',
    'The chamber panel reviews and confirms membership status.',
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-4">Chamber Network</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-tight">
          <span className="block">Chamber Membership</span>
          <span className="block text-secondary">And Free Consultancy</span>
        </h1>
      </div>

      <MembershipTiersClient />

      <section className="bg-slate-50 rounded-3xl p-6 md:p-12 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Offline Onboarding</span>
          <h2 className="text-3xl font-extrabold text-primary tracking-tight font-display">
            How Membership Works
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Membership applications are reviewed by the secretariat team with clear document checks, category validation, payment guidance, and confirmation support.
          </p>
          <div className="p-5 bg-white border border-slate-100 rounded-2xl text-xs text-slate-600 space-y-2">
            <p className="font-bold text-primary flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-secondary" /> Secretariat Contact
            </p>
            <p>Phone: {organization.phone}</p>
            <p>Email: {organization.email}</p>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {process.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-xs text-slate-600 space-y-3">
              <div className="h-9 w-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center font-extrabold">{idx + 1}</div>
              <p className="font-semibold leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Document Guidance', icon: FileText, desc: 'PAN, GST, Udyam, company profile, and other supporting documents are reviewed offline.' },
          { title: 'Industry Verification', icon: ShieldCheck, desc: 'The chamber team validates eligibility and category based on business information.' },
          { title: 'Member Support', icon: Building, desc: 'Approved members receive access to events, representation, and facilitation desks.' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-3">
              <div className="p-3 bg-primary/5 text-primary rounded-2xl w-fit">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-primary font-display">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
