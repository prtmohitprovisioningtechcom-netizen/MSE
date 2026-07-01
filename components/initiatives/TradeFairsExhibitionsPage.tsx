'use client';

import {
  Globe,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  MessageCircle,
  Package,
  Presentation,
  Rocket,
  ShoppingBag,
  Sparkles,
  Users,
} from 'lucide-react';

const intro =
  'Trade Fairs and Exhibitions (व्यापार मेले एवं प्रदर्शनियाँ) ऐसे आयोजन होते हैं जहाँ उद्योग, MSMEs, स्टार्टअप, निर्माता और सेवा प्रदाता अपने उत्पादों एवं सेवाओं का प्रदर्शन करते हैं और संभावित ग्राहकों, वितरकों तथा निवेशकों से जुड़ते हैं।';

const mainObjectives = [
  'उत्पादों और सेवाओं का प्रचार-प्रसार।',
  'नए ग्राहकों और खरीदारों से संपर्क स्थापित करना।',
  'व्यवसाय और बिक्री बढ़ाना।',
  'नए बाज़ारों और निर्यात के अवसर तलाशना।',
  'उद्योगों के बीच नेटवर्किंग और साझेदारी को बढ़ावा देना।',
];

const fairActivities = [
  { text: 'उत्पादों की प्रदर्शनी (Product Display)', icon: Package },
  { text: 'नए उत्पादों का लॉन्च', icon: Rocket },
  { text: 'Buyer–Seller Meet', icon: Handshake },
  { text: 'B2B (Business-to-Business) बैठकें', icon: Users },
  { text: 'व्यापारिक सेमिनार और कार्यशालाएँ', icon: GraduationCap },
  { text: 'निवेशकों और वितरकों के साथ चर्चा', icon: Presentation },
  { text: 'सरकारी योजनाओं और सहायता की जानकारी', icon: Landmark },
];

const msmeBenefits = [
  { text: 'नए ऑर्डर और व्यावसायिक अवसर प्राप्त होते हैं।', icon: ShoppingBag },
  { text: 'ब्रांड की पहचान (Brand Visibility) बढ़ती है।', icon: Sparkles },
  { text: 'ग्राहकों से सीधे फीडबैक मिलता है।', icon: MessageCircle },
  { text: 'घरेलू और अंतरराष्ट्रीय बाज़ार तक पहुँच आसान होती है।', icon: Globe },
  { text: 'प्रतिस्पर्धी उत्पादों और नई तकनीकों की जानकारी मिलती है।', icon: Lightbulb },
];

const closing =
  'भारत में ऐसे व्यापार मेलों और प्रदर्शनियों का आयोजन Ministry of Micro, Small and Medium Enterprises, India Trade Promotion Organisation, राज्य सरकारों, उद्योग संघों और विभिन्न व्यापारिक संगठनों द्वारा समय-समय पर किया जाता है।';

function SectionTitle({
  children,
  accent = 'secondary',
}: {
  children: React.ReactNode;
  accent?: 'secondary' | 'accent' | 'primary';
}) {
  const accentClass =
    accent === 'accent' ? 'bg-accent' : accent === 'primary' ? 'bg-primary' : 'bg-secondary';

  return (
    <h2 className="font-hindi text-lg md:text-2xl font-bold text-primary flex items-start gap-3 leading-snug">
      <span className={`mt-1.5 h-8 w-1.5 shrink-0 rounded-full ${accentClass}`} />
      <span className="wrap-break-word">{children}</span>
    </h2>
  );
}

function BulletCard({
  children,
  icon: Icon,
  variant = 'default',
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'default' | 'amber' | 'rose';
}) {
  const styles = {
    default: 'border-slate-100 bg-white',
    amber: 'border-amber-100 bg-amber-50/50',
    rose: 'border-rose-100 bg-rose-50/40',
  };

  const iconStyles = {
    default: 'bg-primary/10 text-primary',
    amber: 'bg-amber-100 text-amber-700',
    rose: 'bg-rose-100 text-rose-700',
  };

  return (
    <div className={`rounded-2xl border p-4 md:p-5 shadow-sm ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        {Icon ? (
          <div
            className={`shrink-0 h-10 w-10 rounded-xl flex items-center justify-center ${iconStyles[variant]}`}
          >
            <Icon className="h-5 w-5" />
          </div>
        ) : (
          <span className="shrink-0 text-secondary font-bold text-lg leading-none mt-0.5">•</span>
        )}
        <p className="font-hindi text-sm md:text-base text-slate-800 leading-relaxed wrap-anywhere min-w-0 flex-1">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function TradeFairsExhibitionsPage() {
  return (
    <div className="bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-amber-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <Megaphone className="h-3.5 w-3.5" />
            Market Access
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word">
            Trade Fairs and Exhibitions
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere">
            व्यापार मेले एवं प्रदर्शनियाँ
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
          <SectionTitle>मुख्य उद्देश्य</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {mainObjectives.map((item) => (
              <BulletCard key={item}>{item}</BulletCard>
            ))}
          </div>
        </section>

        <section className="space-y-4 md:space-y-5">
          <SectionTitle accent="accent">व्यापार मेले में क्या होता है?</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {fairActivities.map((item) => (
              <BulletCard key={item.text} icon={item.icon} variant="amber">
                {item.text}
              </BulletCard>
            ))}
          </div>
        </section>

        <section className="space-y-4 md:space-y-5">
          <SectionTitle accent="primary">MSMEs के लिए लाभ</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {msmeBenefits.map((item) => (
              <BulletCard key={item.text} icon={item.icon} variant="rose">
                {item.text}
              </BulletCard>
            ))}
          </div>
        </section>

        <div className="rounded-3xl border border-primary/20 bg-primary p-6 md:p-8 shadow-lg">
          <p className="font-hindi text-sm md:text-base text-white leading-relaxed md:leading-8 wrap-anywhere">
            {closing}
          </p>
        </div>
      </div>
    </div>
  );
}
