import { Handshake, Landmark, ArrowUpRight, ShieldCheck, Award, Building2, CheckSquare } from 'lucide-react';

export default function VendorDevelopmentPage() {
  const psuMandates = [
    { label: 'Mandatory MSME Procurements', value: '25%', detail: 'Central Government ministries, departments, and PSUs procure a portion of annual requirements from MSMEs.' },
    { label: 'SC/ST Owned MSME Quota', value: '4%', detail: 'A sub-target supports procurement from MSMEs owned by Scheduled Caste or Scheduled Tribe founders.' },
    { label: 'Women-Owned MSME Quota', value: '3%', detail: 'A procurement sub-target supports MSMEs owned and led by women entrepreneurs.' }
  ];

  const opportunities = [
    { title: 'Indian Railways (CR & WR)', products: 'Forged couplers, coach internal fittings, brake pads, electrical cabling bundles.', date: 'Close Date: 12 Jul 2026' },
    { title: 'Bharat Petroleum Corp. Ltd. (BPCL)', products: 'Stainless steel high-pressure valves, industrial gas containers, structural gaskets.', date: 'Close Date: 20 Jul 2026' },
    { title: 'NTPC Power Generation Plants', products: 'Ash handling valves, pipe insulation, boiler maintenance accessories.', date: 'Close Date: 05 Aug 2026' }
  ];

  const support = [
    { title: 'GeM Awareness', desc: 'Understand seller registration, catalogue setup, and bid participation basics.', icon: Building2 },
    { title: 'Tender Readiness', desc: 'Review product categories, certifications, and buyer requirements before bidding.', icon: CheckSquare },
    { title: 'Buyer-Seller Meets', desc: 'Participate in chamber-led programs and procurement awareness sessions.', icon: Handshake },
    { title: 'Reserved Procurement', desc: 'Learn about MSME, SC/ST, and women-owned procurement policy opportunities.', icon: ShieldCheck }
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">B2B Integration</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Vendor Development & PSU Connect
        </h1>
        <p className="text-sm text-slate-500">
          Learn about public procurement, GeM portal readiness, buyer-seller development programs, and supply-chain opportunities for MSMEs.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-primary font-display border-b border-slate-100 pb-2 flex items-center gap-2">
          <Landmark className="h-5 w-5 text-secondary" /> Public Procurement Mandates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {psuMandates.map((quota) => (
            <div key={quota.label} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-3xl font-extrabold text-secondary font-display block">{quota.value}</span>
                <h4 className="font-bold text-slate-900 text-sm">{quota.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{quota.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2 flex items-center gap-2">
            <Handshake className="h-5 w-5 text-secondary" /> Vendor Development Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {support.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-3">
                  <div className="p-3 bg-primary/5 text-primary rounded-2xl w-fit"><Icon className="h-5 w-5" /></div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2 flex items-center gap-2">
            <Award className="h-5 w-5 text-secondary" /> Procurement Alerts
          </h3>
          <div className="space-y-4">
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-4.5 space-y-2 text-xs">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-slate-900 leading-tight">{opp.title}</h4>
                  <span className="px-2 py-0.5 rounded bg-rose-50 border border-rose-100 text-[9px] font-bold text-rose-600 shrink-0 uppercase tracking-wide">
                    Tender Alert
                  </span>
                </div>
                <p className="text-slate-500 leading-relaxed"><strong className="text-slate-600 font-semibold">Requirement:</strong> {opp.products}</p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-1 border-t border-slate-200/50">
                  <span>{opp.date}</span>
                  <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-0.5">
                    View GeM <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-xs text-primary leading-relaxed space-y-2">
            <strong className="font-bold block">Need GeM Portal Help?</strong>
            <p className="text-slate-600">Contact the MSE office for offline guidance on vendor registration, catalogue preparation, and tender awareness.</p>
            <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold uppercase tracking-wider text-[10px] text-secondary hover:text-secondary-hover flex items-center gap-1">
              Visit GeM Portal <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

