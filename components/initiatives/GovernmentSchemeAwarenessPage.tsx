'use client';

import { motion } from 'framer-motion';
import {
  BadgeIndianRupee,
  BookOpen,
  Building,
  FileText,
  GraduationCap,
  HandCoins,
  Landmark,
  Lightbulb,
  Rocket,
  Shield,
  Sprout,
  Target,
  Users,
} from 'lucide-react';

const openingQuestion =
  'औद्योगिक विकास और उद्यम के लिए भारत सरकार की अनुदानित योजनाएँ एवं सहायता वाली योजनाएँ कौन-कौन सी हैं?';

const schemesIntro =
  'यदि आप नया उद्योग शुरू करना चाहते हैं या अपने MSME का विस्तार करना चाहते हैं, तो भारत सरकार की प्रमुख अनुदान (Subsidy), ऋण (Loan) और सहायता योजनाएँ निम्न हैं:';

const governmentSchemes = [
  {
    title: 'प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)',
    points: [
      'नया उद्योग शुरू करने के लिए।',
      'विनिर्माण (Manufacturing) और सेवा (Service) दोनों क्षेत्रों के लिए।',
      'पात्रता के अनुसार बैंक ऋण पर 15% से 35% तक सब्सिडी मिल सकती है।',
    ],
    icon: Sprout,
  },
  {
    title: 'CGTMSE',
    points: [
      'MSME को बिना संपार्श्विक (Collateral) बैंक ऋण दिलाने में सहायता।',
      'सरकार बैंक को क्रेडिट गारंटी देती है, जिससे ऋण प्राप्त करना आसान होता है।',
    ],
    icon: Shield,
  },
  {
    title: 'प्रधानमंत्री मुद्रा योजना (PMMY)',
    points: [
      'छोटे व्यवसायों के लिए ऋण।',
      'शिशु, किशोर और तरुण श्रेणियों में ऋण उपलब्ध।',
    ],
    icon: HandCoins,
  },
  {
    title: 'स्टार्टअप इंडिया',
    points: [
      'नवाचार आधारित स्टार्टअप के लिए।',
      'टैक्स लाभ, फंडिंग सहायता और मेंटरशिप जैसी सुविधाएँ।',
    ],
    icon: Rocket,
  },
  {
    title: 'ASPIRE',
    points: ['ग्रामीण उद्योग, नवाचार और उद्यमिता को बढ़ावा देने के लिए।'],
    icon: Lightbulb,
  },
  {
    title: 'MSE-CDP',
    points: [
      'औद्योगिक क्लस्टर, कॉमन फैसिलिटी सेंटर और बुनियादी ढाँचे के विकास के लिए सहायता।',
    ],
    icon: Building,
  },
  {
    title: 'SFURTI',
    points: ['पारंपरिक उद्योगों जैसे खादी, हस्तशिल्प और ग्रामोद्योग के विकास के लिए।'],
    icon: Users,
  },
  {
    title: 'RAMP',
    points: ['MSME की प्रतिस्पर्धात्मकता, गुणवत्ता और क्षमता बढ़ाने के लिए सहायता।'],
    icon: Target,
  },
  {
    title: 'राष्ट्रीय SC-ST हब',
    points: [
      'अनुसूचित जाति एवं जनजाति के उद्यमियों के लिए विशेष सहायता, प्रशिक्षण और बाज़ार समर्थन।',
    ],
    icon: GraduationCap,
  },
  {
    title: 'उद्यम पंजीकरण ( Udyam Registration)',
    points: [
      'MSME के रूप में पंजीकरण कराने पर विभिन्न सरकारी योजनाओं, सब्सिडी और टेंडर लाभों का लाभ मिलता है।',
    ],
    icon: FileText,
  },
];

const upNote =
  'यदि आप उत्तर प्रदेश में उद्योग लगाना चाहते हैं, तो केंद्र सरकार की योजनाओं के अलावा राज्य सरकार की MSME नीति, ODOP और अन्य प्रोत्साहन योजनाओं का भी लाभ मिल सकता है।';

const awarenessIntro =
  'Government Schemes Awareness (सरकारी योजनाओं के प्रति जागरूकता) का उद्देश्य नागरिकों, उद्यमियों, किसानों, महिलाओं, युवाओं और MSMEs को विभिन्न सरकारी योजनाओं की जानकारी देना है, ताकि वे उनका लाभ उठा सकें।';

const mainObjectives = [
  'सरकारी योजनाओं की सही जानकारी पहुँचाना।',
  'पात्र लाभार्थियों को योजना का लाभ दिलाना।',
  'रोजगार, स्वरोजगार और उद्यमिता को बढ़ावा देना।',
  'आर्थिक एवं सामाजिक विकास को प्रोत्साहित करना।',
];

const awarenessTopics = [
  'विभिन्न सरकारी योजनाओं की पात्रता (Eligibility)।',
  'आवेदन प्रक्रिया (Application Process)।',
  'आवश्यक दस्तावेज।',
  'अनुदान (Subsidy), ऋण (Loan) और अन्य लाभ।',
  'ऑनलाइन पोर्टल और पंजीकरण की जानकारी।',
  'शिकायत निवारण और सहायता सेवाओं की जानकारी।',
];

const keyIndustrySchemes = [
  'प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)',
  'प्रधानमंत्री मुद्रा योजना (PMMY)',
  'CGTMSE',
  'उद्यम पंजीकरण (Udyam Registration)',
  'National SC-ST Hub',
  'Skill India Mission',
  'Startup India',
  'Stand-Up India',
];

const benefits = [
  'योजनाओं का अधिक से अधिक लाभार्थियों तक पहुँचना।',
  'नए उद्योग और व्यवसाय स्थापित होने में सहायता।',
  'रोजगार और स्वरोजगार के अवसर बढ़ना।',
  'उद्यमियों की वित्तीय एवं तकनीकी सहायता तक पहुँच आसान होना।',
  'देश में समावेशी आर्थिक विकास को बढ़ावा मिलना।',
];

export default function GovernmentSchemeAwarenessPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-96 bg-linear-to-br from-emerald-800 via-primary to-slate-900" />
      <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-secondary via-white to-accent" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Scheme Desk
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white font-display leading-tight">
            Government Scheme Awareness
          </h1>
          <p className="font-hindi text-sm md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto px-2">
            {openingQuestion}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="rounded-3xl border border-white/60 bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl"
        >
          <p className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed md:leading-8">{schemesIntro}</p>
        </motion.div>

        <section className="space-y-5">
          <div className="grid grid-cols-1 gap-4">
            {governmentSchemes.map((scheme, index) => {
              const Icon = scheme.icon;
              return (
                <motion.div
                  key={scheme.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="rounded-2xl border border-slate-100 bg-white p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all"
                >
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <span className="h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-hindi text-base md:text-lg font-bold text-primary leading-snug">
                        {scheme.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {scheme.points.map((point) => (
                          <li key={point} className="font-hindi text-sm md:text-[15px] text-slate-700 leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-secondary/30 bg-linear-to-r from-secondary/10 to-orange-50 p-6 md:p-8"
        >
          <p className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed md:leading-8">{upNote}</p>
        </motion.div>

        <section className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-primary font-display">
              Government Scheme Awareness
            </h2>
            <p className="font-hindi text-sm md:text-base text-slate-700 leading-relaxed md:leading-8">{awarenessIntro}</p>
          </motion.div>

          <div className="space-y-5">
            <h3 className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-10 w-1.5 rounded-full bg-secondary" />
              मुख्य उद्देश्य
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mainObjectives.map((item) => (
                <div
                  key={item}
                  className="font-hindi rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5 text-sm md:text-base text-slate-700 leading-relaxed"
                >
                  <span className="text-secondary font-bold mr-2">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-10 w-1.5 rounded-full bg-accent" />
              जागरूकता कार्यक्रमों में क्या बताया जाता है?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {awarenessTopics.map((item) => (
                <div
                  key={item}
                  className="font-hindi flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3.5 text-sm md:text-base text-slate-700 leading-relaxed"
                >
                  <BookOpen className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <span className="text-emerald-700 font-bold mr-1">•</span>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-10 w-1.5 rounded-full bg-primary" />
              उद्योग एवं MSME से संबंधित प्रमुख योजनाएँ
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {keyIndustrySchemes.map((item) => (
                <span
                  key={item}
                  className="font-hindi inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs md:text-sm font-medium text-primary"
                >
                  • {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-hindi text-xl md:text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-10 w-1.5 rounded-full bg-secondary" />
              लाभ
            </h3>
            <div className="space-y-3">
              {benefits.map((item, index) => {
                const icons = [Users, Landmark, BadgeIndianRupee, HandCoins, Target];
                const Icon = icons[index] ?? Users;
                return (
                  <div
                    key={item}
                    className="font-hindi flex gap-4 rounded-2xl border border-accent/20 bg-linear-to-r from-accent/5 to-white px-5 py-4"
                  >
                    <div className="shrink-0 h-10 w-10 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1.5">
                      <span className="text-accent font-bold mr-1">•</span>
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
