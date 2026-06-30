'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function HomeClient() {
  return (
    <div className="space-y-20 pb-20">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-linear-to-br from-slate-900 via-primary to-slate-950 text-white overflow-hidden px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent opacity-60" />
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
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-orange-400">
                Strengthening India&apos;s
              </span> <br />
              Industrial Future
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
              Connecting enterprises, micro-industries, startups, SC/ST entrepreneurs, and Government regulatory bodies for sustainable domestic manufacturing and export growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 bg-white/10 border border-white/25 rounded-3xl p-6 backdrop-blur-md shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <Image
              src="/mse.jpeg"
              alt="MSE Logo"
              width={384}
              height={288}
              priority
              className="h-64 w-80 md:h-72 md:w-96 object-contain rounded-lg mx-auto p-2"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT MSE SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block">About Our Chamber</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight font-display section-title-line">
              Promoting Industrial Growth & Trade Alliances
            </h2>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            The MSE Chamber of Commerce & Industry Association is an apex independent chamber representing micro, small, and medium businesses across India. We serve as a vital link connecting MSMEs, technology innovators, financial institutes, large industrial houses, and administrative government agencies.
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

        <div className="lg:col-span-5 bg-linear-to-br from-primary to-slate-900 text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-87.5">
          <div className="absolute top-0 right-0 w-36 h-36 bg-secondary/15 rounded-full blur-3xl" />

          <div className="space-y-4">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest block">President&apos;s Message</span>
            <blockquote className="text-xs text-slate-300 italic leading-relaxed">
              &quot;India&apos;s journey to a self-reliant $5 Trillion economy is powered directly by our micro and small enterprises. MSE is committed to providing our members with procurement connections, credit pipelines, and a loud voice in policy advocacy to resolve constraints and trigger double-digit industrial growth.&quot;
            </blockquote>
          </div>

          <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
            <div className="bg-white/15 p-2 rounded-full text-secondary">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Dr. Ramesh Kumar (IAS Retd.)</h5>
              <p className="text-[10px] text-slate-400">President, MSE Secretariat</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
