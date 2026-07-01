'use client';

import {
  BadgeCheck,
  Building2,
  Globe,
  Handshake,
  Landmark,
  Link2,
  Package,
  ShoppingCart,
  Store,
  TrendingUp,
  Users,
} from 'lucide-react';

const intro =
  'Vendor Development Program का उद्देश्य MSMEs, स्टार्टअप और नए उद्यमियों को बड़े उद्योगों तथा सरकारी संस्थानों के लिए आपूर्तिकर्ता (Vendor/Supplier) बनने में सहायता करना है।';

const mainObjectives = [
  'MSMEs को सरकारी और निजी क्षेत्र के खरीदारों से जोड़ना।',
  'नए विक्रेताओं को खरीद प्रक्रियाओं की जानकारी देना।',
  'स्थानीय उत्पादों और "Make in India" को बढ़ावा देना।',
  'छोटे उद्योगों के लिए नए व्यावसायिक अवसर पैदा करना।',
];

const programActivities = [
  {
    text: 'बड़े उद्योगों और सरकारी संस्थानों द्वारा अपनी खरीद (Procurement) आवश्यकताओं की जानकारी दी जाती है।',
    icon: Building2,
  },
  {
    text: 'Vendor Registration की प्रक्रिया समझाई जाती है।',
    icon: BadgeCheck,
  },
  {
    text: 'गुणवत्ता मानकों, परीक्षण और प्रमाणन (Certification) की जानकारी दी जाती है।',
    icon: Package,
  },
  {
    text: 'GeM (Government e-Marketplace) और ई-टेंडरिंग की जानकारी दी जाती है।',
    icon: Globe,
  },
  {
    text: 'बैंक ऋण, MSME योजनाओं और सरकारी सहायता के बारे में जानकारी दी जाती है।',
    icon: Landmark,
  },
  {
    text: 'Buyer–Seller Meet आयोजित की जाती है, जहाँ उद्यमी सीधे खरीदारों से मिलते हैं।',
    icon: Handshake,
  },
];

const benefits = [
  { text: 'नए ग्राहकों और बड़े खरीदारों तक पहुँच।', icon: Users },
  { text: 'सरकारी टेंडरों में भाग लेने के अवसर।', icon: ShoppingCart },
  { text: 'बिक्री और व्यवसाय का विस्तार।', icon: TrendingUp },
  { text: 'बाज़ार की आवश्यकताओं को समझने का अवसर।', icon: Store },
  { text: 'उद्योगों के साथ दीर्घकालिक व्यावसायिक संबंध विकसित करना।', icon: Link2 },
];

const closing =
  'Vendor Development Programs का आयोजन अक्सर Ministry of Micro, Small and Medium Enterprises, National Small Industries Corporation, विभिन्न सरकारी विभागों, सार्वजनिक उपक्रमों (PSUs) और उद्योग संघों द्वारा किया जाता है।';

function SectionTitle({ children, accent = 'secondary' }: { children: React.ReactNode; accent?: 'secondary' | 'accent' | 'primary' }) {
  const accentClass =
    accent === 'accent' ? 'bg-accent' : accent === 'primary' ? 'bg-primary' : 'bg-secondary';

  return (
    <h2 className={`font-hindi text-lg md:text-2xl font-bold text-primary flex items-start gap-3 leading-snug`}>
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
  variant?: 'default' | 'indigo' | 'green';
}) {
  const styles = {
    default: 'border-slate-100 bg-white',
    indigo: 'border-indigo-100 bg-indigo-50/40',
    green: 'border-emerald-100 bg-emerald-50/50',
  };

  const iconStyles = {
    default: 'bg-primary/10 text-primary',
    indigo: 'bg-indigo-100 text-indigo-700',
    green: 'bg-emerald-100 text-emerald-700',
  };

  return (
    <div className={`rounded-2xl border p-4 md:p-5 shadow-sm ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        {Icon ? (
          <div className={`shrink-0 h-10 w-10 rounded-xl flex items-center justify-center ${iconStyles[variant]}`}>
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

export default function VendorDevelopmentProgramsPage() {
  return (
    <div className="bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-indigo-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Vendor Connect
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word">
            Vendor Development Programs
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere">
            Vendor Development Program (VDP) – विक्रेता विकास कार्यक्रम
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
          <SectionTitle accent="accent">कार्यक्रम में क्या होता है?</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {programActivities.map((item) => (
              <BulletCard key={item.text} icon={item.icon} variant="indigo">
                {item.text}
              </BulletCard>
            ))}
          </div>
        </section>

        <section className="space-y-4 md:space-y-5">
          <SectionTitle accent="primary">लाभ</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {benefits.map((item) => (
              <BulletCard key={item.text} icon={item.icon} variant="green">
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
