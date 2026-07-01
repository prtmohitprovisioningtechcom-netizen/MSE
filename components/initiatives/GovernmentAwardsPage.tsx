'use client';

import {
  Award,
  BadgeCheck,
  Building2,
  Globe,
  Leaf,
  Medal,
  Rocket,
  Star,
  Trophy,
  Zap,
} from 'lucide-react';

const heroQuestion =
  'उद्योंग के लिए राज्य सरकार और केंद्र सरकार के पुरस्कार कौन-कौन से हैं?';

const intro =
  'उद्योगों के उत्कृष्ट प्रदर्शन, नवाचार, निर्यात, गुणवत्ता और उद्यमिता को बढ़ावा देने के लिए केंद्र सरकार और राज्य सरकारें विभिन्न पुरस्कार प्रदान करती हैं।';

const centralAwards = [
  {
    number: 1,
    title: 'National MSME Awards',
    text: 'सूक्ष्म, लघु और मध्यम उद्यमों के उत्कृष्ट प्रदर्शन के लिए।',
    icon: Award,
  },
  {
    number: 2,
    title: 'National Awards for Entrepreneurship',
    text: 'सफल उद्यमियों और नवाचार को प्रोत्साहन देने के लिए।',
    icon: Rocket,
  },
  {
    number: 3,
    title: 'EEPC India National Export Excellence Awards',
    text: 'इंजीनियरिंग निर्यात में उत्कृष्ट योगदान के लिए।',
    icon: Globe,
  },
  {
    number: 4,
    title: 'National Energy Conservation Awards',
    text: 'ऊर्जा संरक्षण और दक्षता के क्षेत्र में उत्कृष्ट कार्य के लिए।',
    icon: Leaf,
  },
  {
    number: 5,
    title: 'Zero Defect Zero Effect (ZED) Certification',
    text: 'गुणवत्ता और पर्यावरण-अनुकूल उत्पादन को बढ़ावा देने के लिए।',
    icon: BadgeCheck,
  },
];

const upAwards = [
  {
    number: 1,
    title: 'Udyami Mitra Samman',
    text: 'उत्कृष्ट उद्यमियों और उद्योग विकास में योगदान के लिए।',
    icon: Medal,
  },
  {
    number: 2,
    title: 'One District One Product (ODOP) Awards',
    text: 'ओडीओपी उत्पादों और उद्यमियों को प्रोत्साहन देने के लिए।',
    icon: Star,
  },
  {
    number: 3,
    title: 'Export Promotion Awards',
    text: 'निर्यात बढ़ाने वाले उद्योगों को सम्मानित करने के लिए।',
    icon: Trophy,
  },
];

const otherStates =
  'इनके अलावा कई राज्य सरकारें अपने-अपने औद्योगिक विकास विभागों के माध्यम से नवाचार, महिला उद्यमिता, स्टार्टअप, गुणवत्ता, निर्यात और रोजगार सृजन के लिए भी विशेष पुरस्कार प्रदान करती हैं।';

const chamberNote =
  'यदि आपका उद्देश्य एमएसई चैंबर ऑफ कॉमर्स एंड इंडस्ट्री एसोसिएशन के लिए एक राष्ट्रीय एवं राज्य स्तरीय उद्योग पुरस्कार सूची तैयार करना है, तो मैं विस्तृत सूची बना सकता हूँ, जिसमें प्रत्येक पुरस्कार की पात्रता, आवेदन प्रक्रिया और संबंधित मंत्रालय/विभाग का विवरण भी शामिल होगा।';

function SectionTitle({
  children,
  accent = 'secondary',
}: {
  children: React.ReactNode;
  accent?: 'secondary' | 'accent' | 'gold';
}) {
  const accentClass =
    accent === 'accent' ? 'bg-accent' : accent === 'gold' ? 'bg-amber-400' : 'bg-secondary';

  return (
    <h2 className="font-hindi text-lg md:text-2xl font-bold text-primary leading-snug">
      <span className={`inline-block h-2 w-2 rounded-full ${accentClass} mr-2 align-middle`} />
      <span className="inline align-middle wrap-break-word">{children}</span>
    </h2>
  );
}

function AwardCard({
  number,
  title,
  text,
  icon: Icon,
  variant = 'central',
}: {
  number: number;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  variant?: 'central' | 'state';
}) {
  const styles =
    variant === 'state'
      ? 'border-orange-100 bg-orange-50/40'
      : 'border-amber-100 bg-amber-50/40';

  const badge =
    variant === 'state' ? 'bg-orange-600 text-white' : 'bg-amber-600 text-white';

  const iconBox =
    variant === 'state' ? 'bg-orange-100 text-orange-700' : 'bg-amber-100 text-amber-700';

  return (
    <div className={`w-full rounded-2xl border p-4 md:p-5 shadow-sm ${styles}`}>
      <div className="flex items-start gap-3 mb-2">
        <span
          className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${badge}`}
        >
          {number}
        </span>
        <div className={`shrink-0 h-8 w-8 rounded-lg flex items-center justify-center ${iconBox}`}>
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-hindi text-base md:text-lg font-bold text-slate-900 leading-snug wrap-anywhere min-w-0 flex-1 pt-0.5">
          {title}
        </h3>
      </div>
      <p className="font-hindi text-sm md:text-base text-slate-700 leading-relaxed wrap-anywhere md:pl-11">
        {text}
      </p>
    </div>
  );
}

export default function GovernmentAwardsPage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-amber-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Trophy className="h-3.5 w-3.5 shrink-0" />
            Industry Recognition
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Government Awards
          </h1>
          <p className="font-hindi text-base md:text-lg font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            {heroQuestion}
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-10 md:space-y-12">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
          <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
            {intro}
          </p>
        </div>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle accent="gold">केंद्र सरकार के प्रमुख पुरस्कार</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {centralAwards.map((item) => (
              <AwardCard
                key={item.number}
                number={item.number}
                title={item.title}
                text={item.text}
                icon={item.icon}
                variant="central"
              />
            ))}
          </div>
        </section>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle accent="accent">उत्तर प्रदेश सरकार के प्रमुख पुरस्कार</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {upAwards.map((item) => (
              <AwardCard
                key={item.number}
                number={item.number}
                title={item.title}
                text={item.text}
                icon={item.icon}
                variant="state"
              />
            ))}
          </div>
        </section>

        <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-secondary shrink-0 mt-1" />
            <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
              {otherStates}
            </p>
          </div>
        </div>

        <div className="w-full rounded-3xl border border-primary/20 bg-primary p-5 sm:p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
            <p className="font-hindi w-full text-sm md:text-base text-white leading-relaxed md:leading-8 wrap-anywhere">
              {chamberNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
