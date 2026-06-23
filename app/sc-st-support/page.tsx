import dbConnect from '@/lib/db';
import GovernmentScheme from '@/models/GovernmentScheme';
import { 
  HeartHandshake, Compass, BookOpen, GraduationCap, Award, 
  ArrowUpRight, ArrowRight, ShieldCheck, Flame, UserCheck
} from 'lucide-react';
import Link from 'next/link';

export const revalidate = 0;

export default async function ScStSupportPage() {
  let schemes = [];

  try {
    await dbConnect();
    const dbSchemes = await GovernmentScheme.find({ category: 'SC/ST Entrepreneurship' }).sort({ createdAt: -1 });
    schemes = JSON.parse(JSON.stringify(dbSchemes));
  } catch (error) {
    console.error('Error fetching SC/ST schemes:', error);
  }

  // Fallbacks if DB is not seeded
  const fallbackSchemes = [
    {
      _id: 'sc1',
      title: 'Stand-Up India Scheme',
      description: 'Facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower per bank branch for setting up greenfield enterprises.',
      eligibility: 'SC/ST and/or women entrepreneurs above 18 years of age. Green-field projects only.',
      benefits: 'Term loan and working capital guide, low interest rates, bank credit guarantee cover.',
      link: 'https://www.standupmitra.in/'
    },
    {
      _id: 'sc2',
      title: 'National SC-ST Hub (NSSH) Scheme',
      description: 'An initiative by the Ministry of MSME to provide professional support to Scheduled Caste and Scheduled Tribe entrepreneurs to enable participation in public procurement.',
      eligibility: 'SC/ST owned MSEs (registered under Udyam).',
      benefits: 'Stall fee concessions in exhibitions, 4% mandatory procurement quota fulfillment support, training reimbursements.',
      link: 'https://www.nationalscsthub.in/'
    }
  ];

  const displaySchemes = schemes.length > 0 ? schemes : fallbackSchemes;

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Empowerment Hub</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          SC/ST Entrepreneur Support
        </h1>
        <p className="text-sm text-slate-500">
          Providing specialized incubation, credit access guidance, mentoring, and policy representations to Scheduled Caste & Scheduled Tribe entrepreneurs.
        </p>
      </div>

      {/* Core Support Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Funding Guide', desc: 'Guidance on Stand-Up India bank credit, Venture Capital funds for SCs, and soft loan subsidies.', icon: HeartHandshake, color: 'text-primary' },
          { title: 'Mentorship matching', desc: 'Pairing early stage SC/ST startups with veteran business leaders for scale advice.', icon: Compass, color: 'text-secondary' },
          { title: 'Capacity training', desc: 'Conferences and certifications on cost control, finance audits, and export bidding.', icon: GraduationCap, color: 'text-accent' },
          { title: 'Procurement quota', desc: 'Support to qualify for the 4% mandatory PSU reservation quota for SC/ST-owned enterprises.', icon: Award, color: 'text-orange-500' }
        ].map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-3.5">
              <div className={`p-3 bg-slate-50 ${pillar.color} rounded-2xl w-fit shadow-xs`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm font-display">{pillar.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Split: Incubation Cohort Sign Up & Success Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-100">
        
        {/* Sign Up Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Incubation Desk</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight font-display">
              Stand-Up India Cohort 2026
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We are opening registrations for our next incubator batch. Receive 12 weeks of step-by-step assistance in preparing credit projects, registering company PANs, obtaining Udyam, and connecting with branch managers.
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-accent shrink-0" />
              <span>Full project report validation support.</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-accent shrink-0" />
              <span>Liaison guidance with SIDBI / lead banks.</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-accent shrink-0" />
              <span>Exclusive stalls in upcoming Central PSU Vendor Meets.</span>
            </div>
          </div>

          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl shadow-md transition-all uppercase tracking-wider"
          >
            <span>Apply to Cohort</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Success Case study */}
        <div className="lg:col-span-5 bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          <span className="text-secondary text-[10px] font-bold uppercase tracking-widest block">NSSH Success Story</span>
          
          <h4 className="font-bold text-sm font-display text-white leading-tight">
            How Harish Sonawane expanded Sonawane Engineering by ₹1.2 Crore
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            "We applied for Stand-Up India credit using the MSECCIA facilitation helpdesk. They guided us on creating the project report and connecting with Union Bank of India. Not only did we get the credit sanctioned within 30 days, but they also helped us register on GeM to secure central PSU orders under the SC/ST quota."
          </p>
          
          <div className="pt-4 border-t border-white/10 text-xs">
            <span className="font-bold block text-white">Harish Sonawane</span>
            <span className="text-[10px] text-slate-400">MD, Sonawane Engineering Ltd.</span>
          </div>
        </div>
      </div>

      {/* SC/ST Specific Government Schemes */}
      <div className="space-y-8">
        <h3 className="text-2xl font-extrabold text-primary font-display border-b border-slate-100 pb-2.5">
          Government Schemes for SC/ST Founders
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displaySchemes.map((scheme: any) => (
            <div 
              key={scheme._id}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 text-[9px] font-bold text-accent uppercase">
                  SC/ST Hub Scheme
                </span>
                <h4 className="font-bold text-slate-900 text-base font-display">{scheme.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{scheme.description}</p>
                
                <hr className="border-slate-100" />
                
                <div className="space-y-1.5 text-xs">
                  <p><strong className="text-slate-700">Eligibility:</strong> <span className="text-slate-500">{scheme.eligibility}</span></p>
                  {scheme.benefits && <p><strong className="text-slate-700">Key Benefits:</strong> <span className="text-slate-500">{scheme.benefits}</span></p>}
                </div>
              </div>

              {scheme.link && (
                <a 
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-primary-hover transition-colors"
                >
                  <span>Access Official Portal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
