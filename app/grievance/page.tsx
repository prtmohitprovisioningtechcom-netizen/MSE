import { ShieldAlert, FileText, CheckCircle2, Clock, Phone, Mail, UserCheck } from 'lucide-react';

export default function GrievancePage() {
  const categories = [
    'GST & Taxation',
    'Infrastructure & Power',
    'Credit & Finance',
    'Policy & Liaison',
    'Vendor Dispute',
    'Delayed Payments'
  ];

  const steps = [
    { title: 'Initial Discussion', desc: 'Share the issue with the chamber secretariat by phone or email.', icon: Phone },
    { title: 'Document Review', desc: 'The desk may request invoices, correspondence, approvals, or supporting papers offline.', icon: FileText },
    { title: 'Mediation Guidance', desc: 'The chamber suggests liaison, mediation, or relevant statutory forum guidance.', icon: ShieldAlert },
    { title: 'Follow-up', desc: 'Members can coordinate with the office team for updates and next steps.', icon: UserCheck }
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Chamber Mediation</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Industrial Grievance Desk
        </h1>
        <p className="text-sm text-slate-500">
          Online grievance lodging and tracking forms are disabled for now. Please contact the secretariat directly for mediation and liaison support.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
          <div>
            <h3 className="text-xl font-bold text-primary font-display border-b border-slate-100 pb-3">How The Desk Supports You</h3>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              The grievance desk assists industries with delayed payments, clearance delays, procurement disputes, utility issues, and policy representation matters through guided offline coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3 text-xs">
                  <div className="p-2.5 bg-primary/5 text-primary rounded-xl w-fit"><Icon className="h-5 w-5" /></div>
                  <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 space-y-4 text-xs leading-relaxed">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <ShieldAlert className="h-4.5 w-4.5 text-secondary" /> Grievance Categories
            </h4>
            <ul className="space-y-3 text-slate-600">
              {categories.map((category) => (
                <li key={category} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary text-white rounded-3xl p-6 shadow-xl space-y-4 text-xs">
            <h4 className="font-bold text-white text-sm flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /> Direct Helpdesk</h4>
            <p className="text-slate-200 leading-relaxed">For urgent industrial grievance coordination, contact the chamber office during working hours.</p>
            <div className="space-y-2 text-slate-100">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +91 (22) 2623-1111</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@mseccia.org.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
