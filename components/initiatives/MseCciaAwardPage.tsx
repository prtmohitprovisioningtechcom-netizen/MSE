'use client';

import {
  Award,
  BadgeCheck,
  Cpu,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  Medal,
  Rocket,
  Star,
  Trophy,
  Users,
} from 'lucide-react';

const intro =
  'एमएसई चैंबर ऑफ कॉमर्स एंड इंडस्ट्री एसोसिएशन अपने संविधान और उद्देश्य के अनुरूप उद्योग, व्यापार और उद्यमिता को प्रोत्साहित करने के लिए सम्मान और पुरस्कार प्रदान करते हैं।';

const awards = [
  {
    number: 1,
    title: 'एमएसई उद्योग रत्न सम्मान',
    text: 'उत्कृष्ट औद्योगिक योगदान के लिए।',
    icon: Medal,
  },
  {
    number: 2,
    title: 'एमएसई उद्यमी गौरव सम्मान',
    text: 'सफल उद्यमियों के लिए।',
    icon: Trophy,
  },
  {
    number: 3,
    title: 'एमएसई युवा उद्यमी पुरस्कार',
    text: '18–40 वर्ष के नवाचार करने वाले उद्यमियों के लिए।',
    icon: Rocket,
  },
  {
    number: 4,
    title: 'एमएसई महिला उद्यमिता सम्मान',
    text: 'महिला उद्यमियों के लिए।',
    icon: Star,
  },
  {
    number: 5,
    title: 'एमएसई स्टार्टअप एक्सीलेंस अवॉर्ड',
    text: 'नवाचार आधारित स्टार्टअप के लिए।',
    icon: Lightbulb,
  },
  {
    number: 6,
    title: 'एमएसई निर्यात उत्कृष्टता पुरस्कार',
    text: 'निर्यात बढ़ाने वाले उद्योगों के लिए।',
    icon: Globe,
  },
  {
    number: 7,
    title: 'एमएसई गुणवत्ता उत्कृष्टता पुरस्कार',
    text: 'उच्च गुणवत्ता वाले उत्पाद बनाने वाली इकाइयों के लिए।',
    icon: BadgeCheck,
  },
  {
    number: 8,
    title: 'एमएसई ग्रीन इंडस्ट्री अवॉर्ड',
    text: 'पर्यावरण-अनुकूल उद्योगों के लिए।',
    icon: Leaf,
  },
  {
    number: 9,
    title: 'एमएसई रोजगार सृजन सम्मान',
    text: 'अधिक रोजगार उपलब्ध कराने वाले उद्योगों के लिए।',
    icon: Users,
  },
  {
    number: 10,
    title: 'एमएसई लाइफटाइम अचीवमेंट अवॉर्ड',
    text: 'उद्योग एवं व्यापार में दीर्घकालीन योगदान के लिए।',
    icon: Award,
  },
  {
    number: 11,
    title: 'एमएसई सामाजिक उत्तरदायित्व (CSR) सम्मान',
    text: 'समाज सेवा और CSR कार्यों के लिए।',
    icon: Heart,
  },
  {
    number: 12,
    title: 'एमएसई इनोवेशन एंड टेक्नोलॉजी अवॉर्ड',
    text: 'नई तकनीक और नवाचार अपनाने वाले उद्योगों के लिए।',
    icon: Cpu,
  },
];

const credibility =
  'इन पुरस्कारों की विश्वसनीयता बनाए रखने के लिए स्वतंत्र जूरी, स्पष्ट पात्रता मानदंड, पारदर्शी मूल्यांकन प्रक्रिया और दस्तावेज़ आधारित चयन प्रक्रिया हो';

function AwardCard({
  number,
  title,
  text,
  icon: Icon,
}: {
  number: number;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="w-full rounded-2xl border border-primary/15 bg-linear-to-r from-primary/5 to-white p-4 md:p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-2">
        <span className="shrink-0 h-8 w-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
          {number}
        </span>
        <div className="shrink-0 h-8 w-8 rounded-lg bg-secondary/15 text-primary flex items-center justify-center">
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

export default function MseCciaAwardPage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-primary via-slate-900 to-indigo-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <Trophy className="h-3.5 w-3.5 shrink-0" />
            Business Award
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            MSE-CCIA AWARD
          </h1>
          <p className="font-hindi text-sm md:text-base font-semibold text-white/90 leading-relaxed wrap-anywhere px-1">
            एमएसई चेंबर ऑफ कॉमर्स इंडस्ट्री एसोसिएशन Business Award
          </p>
          <p className="font-hindi text-base md:text-lg font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            एमएसई चैंबर ऑफ कॉमर्स एंड इंडस्ट्री एसोसिएशन
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-8 md:space-y-10">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
          <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
            {intro}
          </p>
        </div>

        <section className="w-full space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {awards.map((item) => (
              <AwardCard
                key={item.number}
                number={item.number}
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>
        </section>

        <div className="w-full rounded-3xl border border-secondary/30 bg-linear-to-r from-secondary/10 via-white to-secondary/5 p-5 sm:p-6 md:p-8 shadow-lg">
          <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
            {credibility}
          </p>
        </div>
      </div>
    </div>
  );
}
