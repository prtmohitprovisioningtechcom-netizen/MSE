import { Check, Building, ShieldCheck, FileText, HelpCircle } from 'lucide-react';

export const revalidate = 60;

export default function MembershipPage() {
  const tiers = [
    {
      name: 'Startup',
      price: 'Rs. 7,500',
      period: 'per year',
      description: 'Ideal for early-stage ventures seeking mentorship, funding awareness, and business network access.',
      features: ['Mentorship connectivity desk', 'Credit pathway guidance', 'Pitch review support', 'Digital webinar access'],
      tag: 'Startup Desk Support'
    },
    {
      name: 'MSME',
      price: 'Rs. 12,500',
      period: 'per year',
      description: 'Designed for micro and small manufacturers looking to scale, handle delayed payment issues, and explore PSU bidding.',
      features: ['PSU vendor meet information', 'Delayed payment guidance', 'Trade expo support information', 'ZED and ISO awareness'],
      tag: 'Recommended for Manufacturers',
      popular: true
    },
    {
      name: 'Corporate',
      price: 'Rs. 50,000',
      period: 'per year',
      description: 'For medium-to-large organizations seeking policy advocacy, B2B procurement visibility, and industry roundtable participation.',
      features: ['Dedicated secretariat coordination', 'Policy roundtable invitations', 'Buyer delegation access', 'Corporate-to-MSME connect'],
      tag: 'Enterprise Services'
    }
  ];

  const process = [
    'Start the application through the membership desk or connect with the secretariat.',
    'Receive the latest membership brochure and fee details.',
    'Submit PAN, GST, Udyam, company profile, and supporting documents for verification.',
    'The chamber panel reviews and confirms membership status.'
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Chamber Network</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Chamber Membership Tiers
        </h1>
        <p className="text-sm text-slate-500">
          Explore MSECCIA membership categories, benefits, onboarding flow, and chamber support available for startups, MSMEs, and corporate partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`bg-white border rounded-3xl p-6 md:p-8 flex flex-col justify-between relative transition-all ${
              tier.popular ? 'border-secondary shadow-xl scale-[1.02]' : 'border-slate-100 shadow-sm'
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-[9px] font-extrabold uppercase tracking-widest text-white rounded-full">
                Most Popular
              </span>
            )}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{tier.tag}</span>
                <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">{tier.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">{tier.description}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-primary font-display">{tier.price}</span>
                <span className="text-xs text-slate-400 font-semibold">/ {tier.period}</span>
              </div>
              <hr className="border-slate-100" />
              <ul className="space-y-3.5 text-xs text-slate-600">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

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
            <p>Phone: +91 (22) 2623-1111</p>
            <p>Email: info@mseccia.org.in</p>
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
          { title: 'Member Support', icon: Building, desc: 'Approved members receive access to events, representation, and facilitation desks.' }
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

