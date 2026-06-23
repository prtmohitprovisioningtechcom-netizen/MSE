'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Handshake, CheckSquare, Award, ArrowRight, 
  Calendar, MapPin, Tag, Clock, ArrowUpRight, ShieldCheck, HelpCircle, User
} from 'lucide-react';

interface HomeClientProps {
  initialEvents: any[];
  initialNews: any[];
  initialTestimonials: any[];
  initialSchemes: any[];
}

export default function HomeClient({ 
  initialEvents, 
  initialNews, 
  initialTestimonials,
  initialSchemes 
}: HomeClientProps) {
  // Stats counter simulation
  const [counts, setCounts] = useState({ members: 0, meets: 0, resolution: 0, funds: 0 });

  useEffect(() => {
    const duration = 1500;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        members: Math.floor((15000 / steps) * step),
        meets: Math.floor((450 / steps) * step),
        resolution: Math.floor((98 / steps) * step),
        funds: Math.floor((1200 / steps) * step)
      });

      if (step >= steps) {
        setCounts({ members: 15000, meets: 450, resolution: 98, funds: 1200 });
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Fallback Data if DB has none seeded
  const fallbackEvents = [
    {
      _id: '1',
      title: 'National MSME Conclave & Vendor Development Program',
      description: 'Connecting micro and small scale manufacturers with Public Sector Undertakings (PSUs) and large corporate buyers.',
      date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Pragati Maidan, Hall No. 5, New Delhi',
      category: 'Vendor Meet',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop'
    },
    {
      _id: '2',
      title: 'Workshop on Government Credit Schemes & Subsidies',
      description: 'An interactive training session detailing how to apply for CGTMSE, Mudra loans, and technology subsidies.',
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'MSECCIA Conference Hall, Mumbai',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const fallbackNews = [
    {
      _id: '1',
      title: 'MSECCIA Submits Pre-Budget Memorandum to Finance Ministry',
      summary: 'Proposals highlight credit flow improvements, GST simplification, and special export incentives for micro-enterprises.',
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      mediaUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      _id: '2',
      title: 'Skill Development Initiative for SC/ST Entrepreneurs Launched',
      summary: 'A new 6-month specialized entrepreneurship certification program launched in association with NSDC.',
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      mediaUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
    }
  ];

  const fallbackTestimonials = [
    {
      _id: '1',
      name: 'Vikas Mandlewala',
      role: 'Founder & CEO',
      company: 'Vikas Tech-Forgings',
      content: 'MSECCIA is a fantastic partner. Through their Buyer-Seller meets, we secured our first procurement contract with Indian Railways, boosting our company turnover by 40% in a single year.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      _id: '2',
      name: 'Priyanka Sen',
      role: 'Managing Director',
      company: 'Eco-Fab Textiles Pvt Ltd',
      content: 'Their training programs on government scheme awareness helped us qualify for the ZED Green Certification. The liaison support from the chamber resolved our power subsidy grievance within 3 weeks!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  const fallbackSchemes = [
    {
      _id: '1',
      title: 'CGTMSE Credit Guarantee',
      description: 'Collateral-free credit facility up to ₹5 Crores for new and existing micro and small enterprises.',
      eligibility: 'Micro & Small enterprises in manufacturing/service sectors.',
      link: 'https://www.cgtmse.in/'
    },
    {
      _id: '2',
      title: 'Stand-Up India Scheme',
      description: 'Bank loans between ₹10 Lakhs and ₹1 Crore for setting up greenfield enterprises for SC/ST and women.',
      eligibility: 'SC/ST and/or women entrepreneurs above 18 years.',
      link: 'https://www.standupmitra.in/'
    }
  ];

  const events = initialEvents.length > 0 ? initialEvents : fallbackEvents;
  const news = initialNews.length > 0 ? initialNews : fallbackNews;
  const testimonials = initialTestimonials.length > 0 ? initialTestimonials : fallbackTestimonials;
  const schemes = initialSchemes.length > 0 ? initialSchemes : fallbackSchemes;

  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-primary to-slate-950 text-white overflow-hidden px-6 py-16">
        {/* Background Overlay Graphics */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] mix-blend-overlay opacity-15 bg-cover bg-center" />
        
        <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/35 text-secondary text-xs font-bold uppercase tracking-wider">
              <span>Partners In Growth, Nation In Progress</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-display text-white">
              Empowering MSMEs, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                Strengthening India's
              </span> <br />
              Industrial Future
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
              Connecting enterprises, micro-industries, startups, SC/ST entrepreneurs, and Government regulatory bodies for sustainable domestic manufacturing and export growth.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="/membership" 
                className="px-6 py-3 bg-secondary hover:bg-secondary-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-secondary/25 transition-all flex items-center gap-2 group hover:scale-[1.03]"
              >
                <span>Become Member</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-xl backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Access Portal Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 bg-white/10 border border-white/25 rounded-3xl p-6 backdrop-blur-md shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/15 pb-2.5 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-secondary" /> Industrial Desk
            </h3>
            
            <div className="space-y-4">
              <p className="text-xs text-slate-300">Quickly search and track submitted grievances or apply for membership online.</p>
              
              <Link href="/grievance" className="block p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all">
                <span className="block text-xs font-bold text-white">Track Grievance</span>
                <span className="block text-[10px] text-slate-400 mt-0.5">Check complaint status via tracking ID</span>
              </Link>

              <Link href="/membership" className="block p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all">
                <span className="block text-xs font-bold text-white">Online Application</span>
                <span className="block text-[10px] text-slate-400 mt-0.5">Apply for Corporate/MSME/Startup tier</span>
              </Link>

              <Link href="/vendor-development" className="block p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all">
                <span className="block text-xs font-bold text-white">Buyer-Seller Matchmaking</span>
                <span className="block text-[10px] text-slate-400 mt-0.5">Procurement connect program details</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS COUNTDOWN COUNTERS */}
      <section className="max-w-6xl mx-auto px-6 -mt-28 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Registered Members', count: counts.members.toLocaleString() + '+', icon: Users, color: 'text-primary' },
            { label: 'Buyer-Seller Meets', count: counts.meets.toString() + '+', icon: Handshake, color: 'text-secondary' },
            { label: 'Grievance Resolution', count: counts.resolution.toString() + '%', icon: CheckSquare, color: 'text-accent' },
            { label: 'Credit Facilitated', count: '₹' + counts.funds.toString() + ' Cr+', icon: Award, color: 'text-orange-500' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="glass-card rounded-2xl p-5 md:p-6 text-center border border-slate-200 shadow-xl flex flex-col items-center hover:scale-[1.03] transition-all"
            >
              <div className={`p-3 rounded-xl bg-slate-50 ${stat.color} mb-3.5 shadow-sm`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display tracking-tight leading-none">
                {stat.count}
              </h2>
              <p className="text-[11px] md:text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT MSECCIA SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block">About Our Chamber</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight font-display section-title-line">
              Promoting Industrial Growth & Trade Alliances
            </h2>
          </div>
          
          <p className="text-sm text-slate-600 leading-relaxed">
            The MSE Chamber of Commerce & Industry Association (MSECCIA) is an apex independent chamber representing micro, small, and medium businesses across India. We serve as a vital link connecting MSMEs, technology innovators, financial institutes, large industrial houses, and administrative government agencies.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our specialized services promote technology transfer, facilitate credit access, conduct capacity building workshops, and resolve regulatory roadblocks. We place custom emphasis on training SC/ST startup founders and enabling vendor registration setups for Public Sector procurement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="border-l-4 border-primary pl-4 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Our Vision</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                To build a resilient, technology-driven MSME ecosystem in India that acts as a backbone for global manufacturing and domestic employment.
              </p>
            </div>
            <div className="border-l-4 border-secondary pl-4 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Our Mission</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                To simplify ease-of-doing business through advocacy, vendor integration, financial literacy, and dispute resolution models.
              </p>
            </div>
          </div>
        </div>

        {/* Chairman Message Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[350px]">
          <div className="absolute top-0 right-0 w-36 h-36 bg-secondary/15 rounded-full blur-3xl" />
          
          <div className="space-y-4">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest block">President's Message</span>
            <blockquote className="text-xs text-slate-300 italic leading-relaxed">
              "India's journey to a self-reliant $5 Trillion economy is powered directly by our micro and small enterprises. MSECCIA is committed to providing our members with procurement connections, credit pipelines, and a loud voice in policy advocacy to resolve constraints and trigger double-digit industrial growth."
            </blockquote>
          </div>

          <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
            <div className="bg-white/15 p-2 rounded-full text-secondary">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Dr. Ramesh Kumar (IAS Retd.)</h5>
              <p className="text-[10px] text-slate-400">President, MSECCIA Secretariat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Services Directory</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight font-display section-title-line-center">
              Comprehensive Support Infrastructure
            </h2>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              We guide and accelerate businesses at every step, offering specialized desks to resolve hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'MSME Promotion', desc: 'Advocacy, clusters development, and technology training for micro enterprises.', link: '/services' },
              { title: 'Vendor Development', desc: 'Buyer-Seller meets and registration support with Central/State PSUs.', link: '/vendor-development' },
              { title: 'Grievance Resolution', desc: 'Online filing and mediation for delayed payments and utility issues.', link: '/grievance' },
              { title: 'SC/ST Support', desc: 'Mentorship, funding guides, and vendor reservations advocacy for SC/ST founders.', link: '/sc-st-support' },
              { title: 'Scheme Awareness', desc: 'Direct updates and application audits for CGTMSE, ZED, and Mudra programs.', link: '/sc-st-support' },
              { title: 'Trade Fairs', desc: 'Sponsorships and stalls for showcasing components in national industrial expos.', link: '/events' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <h4 className="font-bold text-primary text-base font-display">{service.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
                <Link 
                  href={service.link} 
                  className="mt-6 flex items-center gap-1 text-[11px] font-bold text-secondary uppercase hover:text-secondary-hover transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS & NEWS SPLIT SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Dynamic Events Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex justify-between items-end border-b border-slate-200 pb-3">
            <h3 className="text-2xl font-extrabold text-primary font-display flex items-center gap-2">
              <Calendar className="h-5 w-5 text-secondary" /> Upcoming Events
            </h3>
            <Link href="/events" className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-4">
            {events.map((event: any) => (
              <div 
                key={event._id}
                className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-4"
              >
                {event.image && (
                  <div className="w-full md:w-36 h-24 rounded-lg overflow-hidden shrink-0 bg-slate-100 relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between flex-grow space-y-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-primary/5 text-[9px] font-bold text-primary uppercase tracking-wide">
                      {event.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">{event.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">{event.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-secondary" />
                      {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-accent" />
                      {event.location.split(',')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic News Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex justify-between items-end border-b border-slate-200 pb-3">
            <h3 className="text-2xl font-extrabold text-primary font-display flex items-center gap-2">
              <Tag className="h-5 w-5 text-secondary" /> Latest Announcements
            </h3>
            <Link href="/news" className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">
              <span>Read News</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-5">
            {news.map((item: any) => (
              <div key={item._id} className="space-y-1.5 group">
                <span className="text-[10px] font-bold text-slate-400">
                  {new Date(item.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                <Link href="/news" className="block">
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h4>
                </Link>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEMES SHORTCUT */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Financial Facilitation</span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight font-display section-title-line">
                Key Government MSME Schemes
              </h2>
            </div>
            <Link 
              href="/sc-st-support" 
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              <span>See Eligibility Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schemes.map((scheme: any) => (
              <div 
                key={scheme._id}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-[9px] font-bold text-secondary uppercase">
                    {scheme.category || 'MSME Scheme'}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm font-display line-clamp-2">{scheme.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{scheme.description}</p>
                </div>
                {scheme.link && (
                  <a 
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-primary-hover transition-colors"
                  >
                    <span>Official Portal</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES Slider/Grid */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Success Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight font-display section-title-line-center">
            Testimonials from Chamber Members
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test: any) => (
            <div 
              key={test._id}
              className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-md relative flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute top-6 right-6 text-6xl font-serif text-slate-200 pointer-events-none leading-none select-none">“</div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic z-10">
                "{test.content}"
              </p>
              
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6 shrink-0">
                {test.avatar && (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                    <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <h5 className="font-bold text-xs text-slate-900 leading-none">{test.name}</h5>
                  <p className="text-[10px] text-slate-500 mt-1">{test.role}, {test.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="bg-slate-50/50 border-y border-slate-100 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Partner Support & Affiliate Organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <Building2 className="h-5 w-5" /> Ministry of MSME
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <Building2 className="h-5 w-5" /> SIDBI
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <Building2 className="h-5 w-5" /> NSIC Ltd
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <Building2 className="h-5 w-5" /> NSDC India
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
