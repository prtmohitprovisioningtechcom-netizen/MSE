'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  HandCoins,
  LineChart,
  ShieldCheck,
  Store,
  Users,
  Wifi,
} from 'lucide-react';

const intro =
  'SC/ST Entrepreneur Support (SC/ST उद्यमी सहायता) का उद्देश्य अनुसूचित जाति (SC) और अनुसूचित जनजाति (ST) के उद्यमियों को नया व्यवसाय शुरू करने, उसका विस्तार करने और प्रतिस्पर्धी बनाने में सहायता प्रदान करना है।';

const mainSupport = [
  {
    text: 'उद्यमिता विकास प्रशिक्षण (EDP) – व्यवसाय शुरू करने और चलाने का प्रशिक्षण।',
    icon: GraduationCap,
  },
  {
    text: 'वित्तीय सहायता – बैंक ऋण, क्रेडिट गारंटी और विभिन्न सरकारी योजनाओं तक पहुँच।',
    icon: HandCoins,
  },
  {
    text: 'मार्केटिंग सहायता – सरकारी खरीद (Public Procurement), व्यापार मेलों और प्रदर्शनियों में भागीदारी का अवसर।',
    icon: Store,
  },
  {
    text: 'विक्रेता विकास कार्यक्रम (Vendor Development) – बड़े उद्योगों और सरकारी संस्थानों के साथ व्यवसायिक संबंध स्थापित करने में सहायता।',
    icon: Briefcase,
  },
  {
    text: 'कौशल एवं क्षमता विकास – तकनीकी, प्रबंधकीय और डिजिटल कौशल का प्रशिक्षण।',
    icon: LineChart,
  },
  {
    text: 'मेंटरशिप एवं परामर्श – अनुभवी विशेषज्ञों से व्यवसाय संबंधी मार्गदर्शन।',
    icon: Users,
  },
  {
    text: 'गुणवत्ता एवं प्रमाणन सहायता – गुणवत्ता मानकों और प्रमाणपत्र प्राप्त करने में सहयोग।',
    icon: ShieldCheck,
  },
  {
    text: 'डिजिटल एवं ई-मार्केटिंग सहायता – ऑनलाइन व्यापार और डिजिटल प्लेटफ़ॉर्म के उपयोग का प्रशिक्षण।',
    icon: Wifi,
  },
];

const objectives = [
  'SC/ST समुदाय में उद्यमिता को बढ़ावा देना।',
  'रोजगार के नए अवसर सृजित करना।',
  'सरकारी एवं निजी क्षेत्र की आपूर्ति श्रृंखला (Supply Chain) में SC/ST उद्यमियों की भागीदारी बढ़ाना।',
  'व्यवसाय को आत्मनिर्भर और प्रतिस्पर्धी बनाना।',
];

const closing =
  'इस उद्देश्य के लिए भारत सरकार के MSME मंत्रालय द्वारा National SC-ST Hub जैसी पहल संचालित की जाती है, जो SC/ST उद्यमियों को प्रशिक्षण, बाज़ार संपर्क और सरकारी योजनाओं का लाभ दिलाने में सहायता करती है।';

export default function ScStEntrepreneurSupportPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-br from-primary via-primary to-slate-900" />
      <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-secondary via-white to-accent" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 space-y-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Inclusive Growth
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white font-display leading-tight">
            SC/ST Entrepreneur Support
          </h1>
          <p className="font-hindi text-sm md:text-base text-white/80 font-medium">
            SC/ST उद्यमी सहायता
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-3xl border border-white/60 bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl"
        >
          <p className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed md:leading-8">
            {intro}
          </p>
        </motion.div>

        <section className="space-y-5">
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3"
          >
            <span className="h-10 w-1.5 rounded-full bg-secondary" />
            मुख्य सहायता इस प्रकार है:
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainSupport.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0 h-11 w-11 rounded-xl bg-linear-to-br from-primary/10 to-secondary/15 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-hindi text-sm md:text-[15px] text-slate-700 leading-relaxed">
                      <span className="text-secondary font-bold mr-1">•</span>
                      {item.text}
                    </p>
                  </div>
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
            <span className="h-10 w-1.5 rounded-full bg-accent" />
            मुख्य उद्देश्य:
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {objectives.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="font-hindi rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-white px-5 py-4 text-sm md:text-base text-slate-700 leading-relaxed shadow-sm"
              >
                <span className="text-accent font-bold mr-2">•</span>
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-linear-to-r from-primary to-slate-900 p-6 md:p-8 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
          <p className="relative font-hindi text-sm md:text-base leading-relaxed md:leading-8 text-white/95">
            {closing}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
