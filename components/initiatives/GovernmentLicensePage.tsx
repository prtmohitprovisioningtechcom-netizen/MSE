'use client';

import {
  BadgeCheck,
  Building2,
  CreditCard,
  Factory,
  Globe,
  Leaf,
  Receipt,
  Scale,
  Shield,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
  UtensilsCrossed,
} from 'lucide-react';

const intro =
  'Government License (सरकारी लाइसेंस) वह आधिकारिक अनुमति है जो किसी व्यक्ति, व्यवसाय या उद्योग को सरकार या संबंधित विभाग द्वारा किसी विशेष गतिविधि, व्यापार या उद्योग को कानूनी रूप से संचालित करने के लिए दी जाती है।';

const mainObjectives = [
  'व्यवसाय को कानूनी मान्यता देना।',
  'सुरक्षा, गुणवत्ता और पर्यावरण संबंधी नियमों का पालन सुनिश्चित करना।',
  'उपभोक्ताओं और कर्मचारियों के हितों की रक्षा करना।',
  'कानूनों और सरकारी नियमों का अनुपालन सुनिश्चित करना।',
];

const licenses = [
  {
    text: 'उद्यम पंजीकरण (Udyam Registration) – MSME के रूप में पंजीकरण।',
    icon: Building2,
  },
  {
    text: 'GST Registration – वस्तु एवं सेवा कर पंजीकरण (यदि लागू हो)।',
    icon: Receipt,
  },
  {
    text: 'PAN एवं TAN – कर संबंधी पंजीकरण।',
    icon: CreditCard,
  },
  {
    text: 'Factory License – कारखाना संचालन के लिए (यदि लागू हो)।',
    icon: Factory,
  },
  {
    text: 'Trade License – स्थानीय निकाय से व्यापार संचालन की अनुमति (यदि लागू हो)।',
    icon: Store,
  },
  {
    text: 'Pollution Control Board Consent – पर्यावरण संबंधी स्वीकृति (यदि लागू हो)।',
    icon: Leaf,
  },
  {
    text: 'FSSAI License – खाद्य व्यवसायों के लिए।',
    icon: UtensilsCrossed,
  },
  {
    text: 'Import Export Code (IEC) – आयात-निर्यात व्यवसाय के लिए।',
    icon: Globe,
  },
];

const benefits = [
  { text: 'व्यवसाय कानूनी रूप से संचालित होता है।', icon: ShieldCheck },
  { text: 'बैंक ऋण और सरकारी योजनाओं का लाभ लेने में सुविधा होती है।', icon: BadgeCheck },
  { text: 'सरकारी टेंडर और बड़े ग्राहकों के साथ काम करने के अवसर बढ़ते हैं।', icon: TrendingUp },
  { text: 'ग्राहकों और निवेशकों का विश्वास बढ़ता है।', icon: Users },
  { text: 'कानूनी विवाद और दंड के जोखिम कम होते हैं।', icon: Scale },
];

const notice =
  'ध्यान रखें कि हर उद्योग के लिए सभी लाइसेंस आवश्यक नहीं होते। आवश्यक लाइसेंस आपके उद्योग के प्रकार, स्थान और गतिविधियों पर निर्भर करते हैं।';

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

function BulletCard({
  children,
  icon: Icon,
  variant = 'default',
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'default' | 'license' | 'benefit';
}) {
  const styles = {
    default: 'border-slate-100 bg-white',
    license: 'border-blue-100 bg-blue-50/40',
    benefit: 'border-emerald-100 bg-emerald-50/50',
  };

  const iconStyles = {
    default: 'bg-primary/10 text-primary',
    license: 'bg-blue-100 text-blue-700',
    benefit: 'bg-emerald-100 text-emerald-700',
  };

  return (
    <div className={`w-full rounded-2xl border p-4 md:p-5 shadow-sm ${styles[variant]}`}>
      <div className="w-full min-w-0">
        {Icon ? (
          <div className="mb-3 flex items-center gap-3">
            <div
              className={`shrink-0 h-10 w-10 rounded-xl flex items-center justify-center ${iconStyles[variant]}`}
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

export default function GovernmentLicensePage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-slate-900 via-primary to-blue-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Shield className="h-3.5 w-3.5 shrink-0" />
            Compliance Desk
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Government License
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            सरकारी लाइसेंस
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
          <SectionTitle accent="gold">मुख्य उद्देश्य</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {mainObjectives.map((item) => (
              <BulletCard key={item}>{item}</BulletCard>
            ))}
          </div>
        </section>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle accent="accent">उद्योगों के लिए प्रमुख लाइसेंस एवं पंजीकरण</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {licenses.map((item, index) => (
              <BulletCard key={item.text} icon={item.icon} variant="license">
                <span className="text-blue-700 font-bold">{index + 1}. </span>
                {item.text}
              </BulletCard>
            ))}
          </div>
        </section>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle>लाभ</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {benefits.map((item) => (
              <BulletCard key={item.text} icon={item.icon} variant="benefit">
                {item.text}
              </BulletCard>
            ))}
          </div>
        </section>

        <div className="w-full rounded-3xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6 md:p-8 shadow-lg">
          <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
            <span className="text-amber-700 font-bold mr-1">•</span>
            {notice}
          </p>
        </div>
      </div>
    </div>
  );
}
