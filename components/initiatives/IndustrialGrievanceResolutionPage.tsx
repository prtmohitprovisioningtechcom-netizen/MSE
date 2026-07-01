'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileWarning,
  Landmark,
  Scale,
  Shield,
  Users,
  Zap,
} from 'lucide-react';

const intro =
  'Industrial Grievance Resolution (औद्योगिक शिकायत निवारण) का अर्थ है उद्योगों, उद्यमियों या कर्मचारियों की समस्याओं और शिकायतों का समयबद्ध एवं निष्पक्ष समाधान करना, ताकि उद्योग सुचारु रूप से चल सके।';

const mainObjectives = [
  'उद्योगों की समस्याओं का शीघ्र समाधान।',
  'व्यापार करने में आने वाली बाधाओं को कम करना।',
  'उद्योगों और सरकारी विभागों के बीच बेहतर समन्वय।',
  'निवेश और औद्योगिक विकास को बढ़ावा देना।',
];

const commonGrievances = [
  { text: 'लाइसेंस और अनुमतियों में देरी।', icon: FileWarning },
  { text: 'बिजली, पानी और अन्य बुनियादी सुविधाओं की समस्या।', icon: Zap },
  { text: 'भूमि आवंटन या औद्योगिक क्षेत्र से जुड़ी समस्याएँ।', icon: Building2 },
  { text: 'बैंक ऋण और वित्तीय सहायता में कठिनाई।', icon: Landmark },
  { text: 'कर (Tax) और अन्य सरकारी अनुपालनों (Compliance) से संबंधित समस्याएँ।', icon: Scale },
  { text: 'श्रम एवं औद्योगिक विवाद।', icon: Users },
];

const resolutionProcess = [
  'शिकायत दर्ज करना।',
  'संबंधित विभाग द्वारा शिकायत की जाँच।',
  'विभागों के बीच समन्वय और समाधान की कार्यवाही।',
  'निर्धारित समय में शिकायत का निस्तारण।',
  'समाधान की समीक्षा और आवश्यक होने पर आगे की कार्रवाई।',
];

const benefits = [
  'उद्योगों का संचालन सुचारु होता है।',
  'निवेशकों का विश्वास बढ़ता है।',
  'व्यापार करने में आसानी (Ease of Doing Business) में सुधार होता है।',
  'औद्योगिक विकास और रोजगार सृजन को बढ़ावा मिलता है।',
];

export default function IndustrialGrievanceResolutionPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-br from-slate-900 via-primary to-slate-800" />
      <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-secondary via-white to-accent" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 space-y-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Support Desk
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white font-display leading-tight">
            Industrial Grievance Resolution
          </h1>
          <p className="font-hindi text-sm md:text-base text-white/85 font-medium">औद्योगिक शिकायत निवारण</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-3xl border border-white/60 bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl"
        >
          <p className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed md:leading-8">{intro}</p>
        </motion.div>

        <section className="space-y-5">
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3"
          >
            <span className="h-10 w-1.5 rounded-full bg-secondary" />
            मुख्य उद्देश्य
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mainObjectives.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="font-hindi rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm md:text-base text-slate-700 leading-relaxed shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <span className="text-secondary font-bold mr-2">•</span>
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3"
          >
            <span className="h-10 w-1.5 rounded-full bg-accent" />
            सामान्य शिकायतें
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonGrievances.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group flex gap-4 rounded-2xl border border-red-100 bg-linear-to-r from-red-50/50 to-white p-5 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-hindi text-sm md:text-[15px] text-slate-700 leading-relaxed pt-2">
                    <span className="text-red-500 font-bold mr-1">•</span>
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="space-y-5">
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3"
          >
            <span className="h-10 w-1.5 rounded-full bg-primary" />
            शिकायत निवारण की प्रक्रिया
          </motion.h2>
          <div className="relative space-y-0">
            {resolutionProcess.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {index < resolutionProcess.length - 1 && (
                  <span className="absolute left-5 top-12 bottom-0 w-px bg-primary/20" />
                )}
                <div className="relative z-10 shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {index + 1}
                </div>
                <div className="font-hindi flex-1 rounded-2xl border border-primary/10 bg-white px-5 py-4 text-sm md:text-base text-slate-700 leading-relaxed shadow-sm -mt-1">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3"
          >
            <span className="h-10 w-1.5 rounded-full bg-secondary" />
            लाभ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((item, index) => {
              const icons = [CheckCircle2, Shield, ClipboardList, AlertCircle];
              const Icon = icons[index] ?? CheckCircle2;
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="font-hindi flex gap-4 rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-white p-5 shadow-sm"
                >
                  <div className="shrink-0 h-10 w-10 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1.5">
                    <span className="text-accent font-bold mr-1">•</span>
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
