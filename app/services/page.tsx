import { Building2, HardHat, GraduationCap, Scale, Handshake, ShieldAlert, Sparkles, Milestone, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'MSME Support Desk',
      description: 'Handholding micro and small enterprises through registration awareness, cluster development information, digital cataloguing, and credit readiness.',
      icon: Building2,
      benefits: ['Udyam Registration guidance', 'Export cluster information', 'Smart factory awareness']
    },


    {
      title: 'Training & Awareness',
      description: 'Regular sessions focusing on GST, tax compliance, labor laws, environmental codes, quality standards, and export compliance.',
      icon: GraduationCap,
      benefits: ['GST compliance workshops', 'Labor law compliance guides', 'ISO / ZED quality workshops']
    },
    {
      title: 'Government Liaison',
      description: 'Representing industry feedback and policy concerns to government departments, financial institutions, and relevant public bodies.',
      icon: Scale,
      benefits: ['Policy memorandum inputs', 'Regulatory panel representation', 'Credit policy feedback']
    },
    {
      title: 'Vendor Development Program',
      description: 'Helping small manufacturers understand procurement readiness, GeM portal basics, and public sector buyer expectations.',
      icon: Handshake,
      benefits: ['GeM Portal registration guides', 'PSU Vendor Meet information', 'Buyer-seller program awareness']
    },
    {
      title: 'SC/ST Entrepreneur Support',
      description: 'Special facilitation desk guiding entrepreneurs toward Stand-Up India awareness, hub connectivity, and procurement opportunities.',
      icon: HeartHandshake,
      benefits: ['Stand-Up India awareness', 'NSIC SC/ST hub connectivity', 'Subsidized stall information']
    },
    {
      title: 'Trade Fairs & Exhibitions',
      description: 'Supporting chamber participation in domestic and international trade fairs, delegations, and industrial exhibitions.',
      icon: Milestone,
      benefits: ['Exhibition information', 'B2B delegation meets', 'Product showcase platforms']
    },
    {
      title: 'Skill Development Center',
      description: 'Skill programs and certification awareness in partnership areas such as shopfloor safety, CNC, welding, and automation.',
      icon: Sparkles,
      benefits: ['NSDC course awareness', 'Shopfloor safety training', 'CNC and PLC programming guidance']
    },


  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Chamber Desks</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Services & Facilitation Desks
        </h1>
        <p className="text-sm text-slate-500">
          MSECCIA provides structured support for business processes, policy representation, credit access, digital readiness, procurement facilitation, and industrial coordination through its chamber desks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-primary/5 text-primary rounded-2xl w-fit shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">{service.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
                <hr className="border-slate-100" />
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Deliverables</span>
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <section className="bg-primary text-white rounded-3xl p-6 md:p-10 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Offline Assistance</span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display">Need details about any desk?</h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Connect with the secretariat for membership support, scheme guidance, vendor readiness, events, and grievance coordination. Digital workflows and database-backed modules remain available for operational use.
          </p>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xs text-slate-100 space-y-2">
          <p><strong className="text-white">Phone:</strong> +91 (22) 2623-1111</p>
          <p><strong className="text-white">Email:</strong> info@mseccia.org.in</p>
          <p><strong className="text-white">Hours:</strong> Mon - Fri, 9:30 AM to 6:00 PM</p>
        </div>
      </section>
    </div>
  );
}

