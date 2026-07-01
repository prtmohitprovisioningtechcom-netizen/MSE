'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Cpu,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Rocket,
  Sparkles,
  TrendingUp,
  Wallet,
} from 'lucide-react';

const intro =
  'Skill Development (कौशल विकास) का अर्थ है लोगों को ऐसा ज्ञान, प्रशिक्षण और व्यावहारिक कौशल प्रदान करना जिससे वे रोजगार प्राप्त कर सकें, अपना व्यवसाय शुरू कर सकें या अपने कार्य में बेहतर प्रदर्शन कर सकें।';

const mainObjectives = [
  'युवाओं को रोजगार योग्य बनाना।',
  'उद्यमिता (Entrepreneurship) को बढ़ावा देना।',
  'उद्योगों की आवश्यकता के अनुसार कुशल मानव संसाधन तैयार करना।',
  'उत्पादकता और आय बढ़ाना।',
  'आत्मनिर्भरता और आर्थिक विकास को प्रोत्साहित करना।',
];

const keyAreas = [
  { text: 'तकनीकी कौशल (Technical Skills)', icon: Cpu },
  { text: 'डिजिटल कौशल (Digital Skills)', icon: Sparkles },
  { text: 'संचार एवं व्यक्तित्व विकास (Soft Skills)', icon: MessageCircle },
  { text: 'वित्तीय साक्षरता (Financial Literacy)', icon: Wallet },
  { text: 'उद्यमिता विकास (Entrepreneurship Development)', icon: Rocket },
];

const benefits = [
  'रोजगार और स्वरोजगार के अवसर बढ़ते हैं।',
  'उद्योगों को प्रशिक्षित और कुशल कार्यबल मिलता है।',
  'नए व्यवसाय शुरू करने की क्षमता विकसित होती है।',
  'देश की आर्थिक वृद्धि और प्रतिस्पर्धात्मकता में सुधार होता है।',
];

export default function SkillDevelopmentPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-br from-secondary via-orange-500 to-primary" />
      <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-secondary via-white to-accent" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 space-y-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white">
            Skill Building
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white font-display leading-tight">
            Skill Development
          </h1>
          <p className="font-hindi text-sm md:text-base text-white/90 font-medium">कौशल विकास</p>
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
            कौशल विकास के मुख्य उद्देश्य
          </motion.h2>

          <div className="space-y-3">
            {mainObjectives.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="font-hindi flex items-start gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="shrink-0 h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1">
                  <span className="text-secondary font-bold mr-1">•</span>
                  {item}
                </p>
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
            कौशल विकास के प्रमुख क्षेत्र
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group rounded-2xl border border-accent/15 bg-linear-to-br from-white to-accent/5 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="mb-3 h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-hindi text-sm md:text-[15px] text-slate-700 leading-relaxed">
                    <span className="text-accent font-bold mr-1">•</span>
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
            लाभ
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((item, index) => {
              const icons = [Briefcase, GraduationCap, Lightbulb, TrendingUp];
              const Icon = icons[index] ?? Award;
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="font-hindi flex gap-4 rounded-2xl border border-primary/10 bg-linear-to-r from-primary/5 to-white p-5 shadow-sm"
                >
                  <div className="shrink-0 h-10 w-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1.5">
                    <span className="text-primary font-bold mr-1">•</span>
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
