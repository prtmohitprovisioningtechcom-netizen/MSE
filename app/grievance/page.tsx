import { AlertCircle, CheckCircle2, Clock, FileText, Scale, ShieldCheck } from 'lucide-react';

export default function GrievancePage() {
  const supportAreas = [
    'Delayed payment guidance under the MSMED Act and MSEFC process',
    'Industrial utility concerns related to power, water, and local clearances',
    'Tender participation issues, documentation gaps, and buyer communication',
    'Scheme application follow-up and administrative coordination',
  ];

  const process = [
    'Submit grievance details with supporting documents through the chamber desk.',
    'Secretariat reviews category, urgency, and available policy route.',
    'Matter is routed to the relevant department, buyer, bank, or facilitation body.',
    'Member receives status updates until closure or next-step recommendation.',
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-14">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Industrial Support Desk</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Grievance Resolution & Facilitation
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          A dedicated support channel for MSMEs facing delayed payments, compliance bottlenecks, utility issues, and scheme coordination challenges.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/5 text-primary rounded-2xl">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-primary font-display">How the desk helps</h2>
              <p className="text-xs text-slate-500">Structured review, documentation support, and responsible escalation.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportAreas.map((area) => (
              <div key={area} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
          <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest">
            <AlertCircle className="h-4 w-4" />
            Priority Cases
          </div>
          <h3 className="text-2xl font-extrabold font-display">Delayed payments and urgent industrial issues get priority routing.</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Keep invoices, purchase orders, communication records, Udyam details, and department references ready before raising a matter.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
              <Clock className="h-5 w-5 text-secondary mb-2" />
              <strong className="block">Review Window</strong>
              <span className="text-slate-300">2-3 working days</span>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
              <Scale className="h-5 w-5 text-secondary mb-2" />
              <strong className="block">Policy Route</strong>
              <span className="text-slate-300">MSMED / department desk</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 space-y-6">
        <h2 className="text-2xl font-extrabold text-primary font-display flex items-center gap-2">
          <FileText className="h-5 w-5 text-secondary" /> Resolution Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {process.map((step, index) => (
            <div key={step} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-xs text-slate-600 space-y-3">
              <div className="h-9 w-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center font-extrabold">
                {index + 1}
              </div>
              <p className="font-semibold leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
