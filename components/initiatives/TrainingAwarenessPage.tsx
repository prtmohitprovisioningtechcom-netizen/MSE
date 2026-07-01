'use client';

import {
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Landmark,
  Megaphone,
  MessageCircle,
  Rocket,
  Store,
  TrendingUp,
  Users,
  Wallet,
  BookOpen,
} from 'lucide-react';

const intro =
  'Training and Awareness (प्रशिक्षण एवं जागरूकता) का उद्देश्य लोगों, उद्यमियों, छात्रों और कर्मचारियों को आवश्यक ज्ञान, कौशल तथा सरकारी योजनाओं की जानकारी प्रदान करना है, ताकि वे बेहतर रोजगार प्राप्त कर सकें, अपना व्यवसाय शुरू कर सकें और उपलब्ध अवसरों का लाभ उठा सकें।';

const mainObjectives = [
  'कौशल और क्षमता का विकास करना।',
  'उद्यमिता और स्वरोजगार को बढ़ावा देना।',
  'सरकारी योजनाओं एवं सेवाओं के प्रति जागरूकता बढ़ाना।',
  'नई तकनीकों, गुणवत्ता मानकों और डिजिटल सेवाओं की जानकारी देना।',
  'रोजगार और औद्योगिक विकास को प्रोत्साहित करना।',
];

const programs = [
  { text: 'उद्यमिता विकास (Entrepreneurship Development)', icon: Rocket },
  { text: 'कौशल विकास (Skill Development)', icon: GraduationCap },
  { text: 'सरकारी योजनाओं की जानकारी', icon: Landmark },
  { text: 'व्यवसाय प्रबंधन एवं वित्तीय साक्षरता', icon: Briefcase },
  { text: 'डिजिटल मार्केटिंग और ई-कॉमर्स', icon: Megaphone },
  { text: 'गुणवत्ता, प्रमाणन और मानकों की जानकारी', icon: BadgeCheck },
  { text: 'बैंक ऋण, सब्सिडी और अन्य वित्तीय सहायता की जानकारी', icon: Wallet },
  { text: 'प्रश्नोत्तर (Q&A) और विशेषज्ञों का मार्गदर्शन', icon: MessageCircle },
];

const benefits = [
  { text: 'रोजगार और स्वरोजगार के अवसर बढ़ते हैं।', icon: Users },
  { text: 'नए उद्योग और व्यवसाय स्थापित करने में सहायता मिलती है।', icon: Store },
  { text: 'सरकारी योजनाओं का अधिक लाभ मिलता है।', icon: Landmark },
  { text: 'व्यवसाय की उत्पादकता और प्रतिस्पर्धात्मकता बढ़ती है।', icon: TrendingUp },
  { text: 'आत्मनिर्भरता और आर्थिक विकास को बढ़ावा मिलता है।', icon: Rocket },
];

function SectionTitle({
  children,
  accent = 'secondary',
}: {
  children: React.ReactNode;
  accent?: 'secondary' | 'accent' | 'violet';
}) {
  const accentClass =
    accent === 'accent' ? 'bg-accent' : accent === 'violet' ? 'bg-violet-500' : 'bg-secondary';

  return (
    <h2 className="font-hindi text-lg md:text-2xl font-bold text-primary leading-snug">
      <span className={`inline-block h-2 w-2 rounded-full ${accentClass} mr-2 align-middle`} />
      <span className="inline align-middle wrap-break-word">{children}</span>
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
  variant?: 'default' | 'violet' | 'green';
}) {
  const styles = {
    default: 'border-slate-100 bg-white',
    violet: 'border-violet-100 bg-violet-50/50',
    green: 'border-emerald-100 bg-emerald-50/50',
  };

  const iconStyles = {
    default: 'bg-primary/10 text-primary',
    violet: 'bg-violet-100 text-violet-700',
    green: 'bg-emerald-100 text-emerald-700',
  };

  return (
    <div className={`w-full rounded-2xl border p-4 md:p-5 shadow-sm ${styles[variant]}`}>
      <div className="w-full min-w-0">
        {Icon ? (
          <div className="mb-3">
            <div
              className={`inline-flex h-10 w-10 rounded-xl items-center justify-center ${iconStyles[variant]}`}
            >
              <Icon className="h-5 w-5" />
            </div>
          </div>
        ) : null}
        <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed wrap-anywhere">
          {!Icon ? <span className="text-secondary font-bold mr-2">•</span> : null}
          {children}
        </p>
      </div>
    </div>
  );
}

export default function TrainingAwarenessPage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-violet-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <BookOpen className="h-3.5 w-3.5 shrink-0" />
            Awareness Programs
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Training and Awareness
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            प्रशिक्षण एवं जागरूकता
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
          <SectionTitle>मुख्य उद्देश्य</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {mainObjectives.map((item) => (
              <BulletCard key={item}>{item}</BulletCard>
            ))}
          </div>
        </section>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle accent="violet">प्रशिक्षण एवं जागरूकता कार्यक्रमों में क्या होता है?</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {programs.map((item) => (
              <BulletCard key={item.text} icon={item.icon} variant="violet">
                {item.text}
              </BulletCard>
            ))}
          </div>
        </section>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle accent="accent">लाभ</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {benefits.map((item) => (
              <BulletCard key={item.text} icon={item.icon} variant="green">
                {item.text}
              </BulletCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
