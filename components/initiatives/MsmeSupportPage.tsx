'use client';

import {
  BadgeCheck,
  Briefcase,
  Cpu,
  Globe,
  GraduationCap,
  Landmark,
  Megaphone,
  Rocket,
  Store,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';

const intro =
  'MSME Support (सूक्ष्म, लघु एवं मध्यम उद्यम सहायता) का अर्थ है MSMEs की स्थापना, संचालन, विस्तार और प्रतिस्पर्धात्मक क्षमता बढ़ाने के लिए सरकार और विभिन्न संस्थाओं द्वारा प्रदान की जाने वाली वित्तीय, तकनीकी और व्यावसायिक सहायता।';

const supportAreas = [
  {
    number: 1,
    title: 'वित्तीय सहायता (Financial Support)',
    icon: Wallet,
    items: ['बैंक ऋण', 'सब्सिडी (Subsidy)', 'क्रेडिट गारंटी', 'कार्यशील पूंजी (Working Capital)'],
    variant: 'emerald' as const,
  },
  {
    number: 2,
    title: 'उद्यमिता विकास (Entrepreneurship Development)',
    icon: Rocket,
    items: [
      'व्यवसाय शुरू करने का प्रशिक्षण',
      'प्रोजेक्ट रिपोर्ट तैयार करने में सहायता',
      'व्यवसाय परामर्श (Business Counselling)',
    ],
    variant: 'indigo' as const,
  },
  {
    number: 3,
    title: 'कौशल विकास (Skill Development)',
    icon: GraduationCap,
    items: ['तकनीकी प्रशिक्षण', 'डिजिटल कौशल', 'प्रबंधकीय एवं नेतृत्व प्रशिक्षण'],
    variant: 'sky' as const,
  },
  {
    number: 4,
    title: 'मार्केटिंग सहायता (Marketing Support)',
    icon: Megaphone,
    items: [
      'व्यापार मेले एवं प्रदर्शनियाँ',
      'Buyer–Seller Meets',
      'ई-कॉमर्स और डिजिटल मार्केटिंग',
      'सरकारी खरीद (Public Procurement)',
    ],
    variant: 'amber' as const,
  },
  {
    number: 5,
    title: 'तकनीकी सहायता (Technology Support)',
    icon: Cpu,
    items: [
      'नई मशीनरी और तकनीक अपनाने में सहयोग',
      'गुणवत्ता सुधार',
      'उत्पाद विकास',
    ],
    variant: 'violet' as const,
  },
  {
    number: 6,
    title: 'गुणवत्ता एवं प्रमाणन (Quality & Certification)',
    icon: BadgeCheck,
    items: [
      'ISO, ZED और अन्य गुणवत्ता प्रमाणन के लिए सहायता',
      'परीक्षण (Testing) और मानकीकरण',
    ],
    variant: 'rose' as const,
  },
  {
    number: 7,
    title: 'निर्यात सहायता (Export Support)',
    icon: Globe,
    items: [
      'निर्यात प्रशिक्षण',
      'अंतरराष्ट्रीय बाज़ार की जानकारी',
      'निर्यात दस्तावेज़ीकरण में सहायता',
    ],
    variant: 'teal' as const,
  },
];

const benefits = [
  { text: 'नया उद्योग स्थापित करने में सहायता।', icon: Store },
  { text: 'व्यवसाय का विस्तार और उत्पादकता में वृद्धि।', icon: TrendingUp },
  { text: 'रोजगार के अवसरों में वृद्धि।', icon: Users },
  { text: 'वित्तीय और तकनीकी संसाधनों तक आसान पहुँच।', icon: Landmark },
  { text: 'राष्ट्रीय एवं अंतरराष्ट्रीय बाज़ार में प्रतिस्पर्धात्मक क्षमता बढ़ना।', icon: Globe },
];

const areaStyles = {
  emerald: {
    card: 'border-emerald-100 bg-emerald-50/40',
    badge: 'bg-emerald-600 text-white',
    icon: 'bg-emerald-100 text-emerald-700',
    bullet: 'text-emerald-600',
  },
  indigo: {
    card: 'border-indigo-100 bg-indigo-50/40',
    badge: 'bg-indigo-600 text-white',
    icon: 'bg-indigo-100 text-indigo-700',
    bullet: 'text-indigo-600',
  },
  sky: {
    card: 'border-sky-100 bg-sky-50/40',
    badge: 'bg-sky-600 text-white',
    icon: 'bg-sky-100 text-sky-700',
    bullet: 'text-sky-600',
  },
  amber: {
    card: 'border-amber-100 bg-amber-50/40',
    badge: 'bg-amber-600 text-white',
    icon: 'bg-amber-100 text-amber-700',
    bullet: 'text-amber-600',
  },
  violet: {
    card: 'border-violet-100 bg-violet-50/40',
    badge: 'bg-violet-600 text-white',
    icon: 'bg-violet-100 text-violet-700',
    bullet: 'text-violet-600',
  },
  rose: {
    card: 'border-rose-100 bg-rose-50/40',
    badge: 'bg-rose-600 text-white',
    icon: 'bg-rose-100 text-rose-700',
    bullet: 'text-rose-600',
  },
  teal: {
    card: 'border-teal-100 bg-teal-50/40',
    badge: 'bg-teal-600 text-white',
    icon: 'bg-teal-100 text-teal-700',
    bullet: 'text-teal-600',
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-hindi text-lg md:text-2xl font-bold text-primary flex items-start gap-3 leading-snug">
      <span className="mt-1.5 h-8 w-1.5 shrink-0 rounded-full bg-secondary" />
      <span className="wrap-break-word">{children}</span>
    </h2>
  );
}

function BenefitCard({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-primary/10 bg-white p-4 md:p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="shrink-0 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed wrap-anywhere min-w-0 flex-1 pt-1.5">
          <span className="text-secondary font-bold mr-1">•</span>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function MsmeSupportPage() {
  return (
    <div className="bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-emerald-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <Briefcase className="h-3.5 w-3.5" />
            MSME Desk
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word">
            MSME Support
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere">
            सूक्ष्म, लघु एवं मध्यम उद्यम सहायता
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 -mt-6 md:-mt-8 space-y-10 md:space-y-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
          <p className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
            {intro}
          </p>
        </div>

        <section className="space-y-4 md:space-y-5">
          <SectionTitle>MSME Support के प्रमुख क्षेत्र</SectionTitle>
          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {supportAreas.map((area) => {
              const Icon = area.icon;
              const style = areaStyles[area.variant];

              return (
                <div
                  key={area.number}
                  className={`rounded-2xl border p-5 md:p-6 shadow-sm ${style.card}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className={`shrink-0 h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold ${style.badge}`}
                    >
                      {area.number}
                    </span>
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div
                        className={`shrink-0 h-10 w-10 rounded-xl flex items-center justify-center ${style.icon}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-hindi text-base md:text-lg font-bold text-slate-900 leading-snug wrap-break-word pt-1.5">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2.5 pl-1 md:pl-14">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed wrap-anywhere flex items-start gap-2"
                      >
                        <span className={`shrink-0 font-bold mt-0.5 ${style.bullet}`}>•</span>
                        <span className="min-w-0 flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-4 md:space-y-5">
          <SectionTitle>MSME Support के लाभ</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {benefits.map((item) => (
              <BenefitCard key={item.text} icon={item.icon}>
                {item.text}
              </BenefitCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
