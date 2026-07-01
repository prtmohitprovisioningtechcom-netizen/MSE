'use client';

import {
  Building2,
  Cpu,
  Factory,
  Globe,
  Landmark,
  Lightbulb,
  Package,
  Rocket,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';

const howIntro =
  'इंडस्ट्री (उद्योग) का विकास कई महत्वपूर्ण कारकों पर निर्भर करता है। मुख्य तरीके इस प्रकार हैं:';

const developmentFactors = [
  {
    number: 1,
    title: 'पूंजी (Capital)',
    text: 'उद्योग स्थापित करने और उसका विस्तार करने के लिए पर्याप्त निवेश आवश्यक होता है।',
    icon: Wallet,
  },
  {
    number: 2,
    title: 'कच्चे माल की उपलब्धता',
    text: 'उद्योग के लिए आवश्यक कच्चा माल आसानी से और उचित कीमत पर मिलना चाहिए।',
    icon: Package,
  },
  {
    number: 3,
    title: 'कुशल श्रमिक',
    text: 'प्रशिक्षित और अनुभवी श्रमिक उत्पादन की गुणवत्ता और दक्षता बढ़ाते हैं।',
    icon: Users,
  },
  {
    number: 4,
    title: 'तकनीक और नवाचार',
    text: 'आधुनिक मशीनों और नई तकनीकों के उपयोग से उत्पादन बढ़ता है और लागत कम होती है।',
    icon: Cpu,
  },
  {
    number: 5,
    title: 'बुनियादी ढांचा (Infrastructure)',
    text: 'अच्छी सड़कें, बिजली, पानी, इंटरनेट और परिवहन सुविधाएँ उद्योग के विकास में महत्वपूर्ण भूमिका निभाती हैं।',
    icon: Building2,
  },
  {
    number: 6,
    title: 'सरकारी नीतियाँ',
    text: 'कर में रियायत, सब्सिडी, आसान ऋण और उद्योग-अनुकूल नीतियाँ विकास को प्रोत्साहित करती हैं।',
    icon: Landmark,
  },
  {
    number: 7,
    title: 'बाजार की उपलब्धता',
    text: 'उत्पादों की मांग और उन्हें बेचने के लिए स्थानीय एवं अंतरराष्ट्रीय बाजार का होना आवश्यक है।',
    icon: Globe,
  },
  {
    number: 8,
    title: 'अनुसंधान एवं विकास (R&D)',
    text: 'नए उत्पाद और बेहतर उत्पादन प्रक्रियाएँ विकसित करने से उद्योग प्रतिस्पर्धी बनता है।',
    icon: Lightbulb,
  },
];

const howClosing =
  'इन सभी कारकों के संतुलित विकास से किसी भी उद्योग का तेजी से और टिकाऊ विकास संभव होता है।';

const industrialIntro =
  'Industrial Development (औद्योगिक विकास) का अर्थ है किसी क्षेत्र या देश में उद्योगों की स्थापना, विस्तार, आधुनिकीकरण और उनकी उत्पादन क्षमता में वृद्धि करना, जिससे आर्थिक विकास और रोजगार के अवसर बढ़ें।';

const mainObjectives = [
  'नए उद्योगों की स्थापना को प्रोत्साहन देना।',
  'रोजगार के अवसर सृजित करना।',
  'उत्पादन और निर्यात बढ़ाना।',
  'निवेश आकर्षित करना।',
  'क्षेत्रीय एवं संतुलित आर्थिक विकास सुनिश्चित करना।',
  'नई तकनीक और नवाचार को बढ़ावा देना।',
];

const keyComponents = [
  'उद्योगों के लिए भूमि, बिजली, पानी और परिवहन जैसी आधारभूत सुविधाएँ।',
  'वित्तीय सहायता, ऋण और सब्सिडी।',
  'कौशल विकास एवं उद्यमिता प्रशिक्षण।',
  'आधुनिक तकनीक और मशीनरी का उपयोग।',
  'सरकारी नीतियाँ और निवेश प्रोत्साहन।',
  'गुणवत्ता सुधार और बाज़ार तक पहुँच।',
];

const benefits = [
  { text: 'रोजगार और आय में वृद्धि।', icon: Users },
  { text: 'स्थानीय उद्योगों और MSMEs का विकास।', icon: Factory },
  { text: 'आर्थिक विकास और औद्योगिक उत्पादन में वृद्धि।', icon: TrendingUp },
  { text: 'निर्यात और विदेशी निवेश को बढ़ावा।', icon: Globe },
  { text: 'जीवन स्तर में सुधार और आत्मनिर्भरता को प्रोत्साहन।', icon: Rocket },
];

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
  variant?: 'default' | 'slate' | 'green';
}) {
  const styles = {
    default: 'border-slate-100 bg-white',
    slate: 'border-slate-200 bg-slate-50/60',
    green: 'border-emerald-100 bg-emerald-50/50',
  };

  const iconStyles = {
    default: 'bg-primary/10 text-primary',
    slate: 'bg-slate-200 text-slate-700',
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

export default function IndustrialDevelopmentPage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-slate-800 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <Factory className="h-3.5 w-3.5 shrink-0" />
            Industry Growth
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Industries Development
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            इंडस्ट्री डेवलपमेंट किस तरीके से होता है?
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-10 md:space-y-12">
        <section className="w-full space-y-4 md:space-y-5">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
            <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
              {howIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {developmentFactors.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="w-full rounded-2xl border border-orange-100 bg-orange-50/40 p-4 md:p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                      {item.number}
                    </span>
                    <div className="shrink-0 h-8 w-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-hindi text-base md:text-lg font-bold text-slate-900 leading-snug wrap-anywhere min-w-0 flex-1 pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-hindi text-sm md:text-base text-slate-700 leading-relaxed wrap-anywhere pl-0 md:pl-11">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full rounded-3xl border border-primary/20 bg-primary p-5 sm:p-6 md:p-8 shadow-lg">
            <p className="font-hindi w-full text-sm md:text-base text-white leading-relaxed md:leading-8 wrap-anywhere">
              {howClosing}
            </p>
          </div>
        </section>

        <section className="w-full space-y-4 md:space-y-5 pt-2 border-t border-slate-200">
          <div className="text-center space-y-2 pt-4">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-secondary">
              Industrial Development
            </p>
            <h2 className="font-hindi text-xl md:text-3xl font-extrabold text-primary wrap-break-word">
              औद्योगिक विकास
            </h2>
          </div>

          <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
            <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
              {industrialIntro}
            </p>
          </div>

          <SectionTitle accent="gold">औद्योगिक विकास के मुख्य उद्देश्य</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {mainObjectives.map((item) => (
              <BulletCard key={item}>{item}</BulletCard>
            ))}
          </div>

          <SectionTitle accent="accent">औद्योगिक विकास के प्रमुख घटक</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {keyComponents.map((item) => (
              <BulletCard key={item} icon={Zap} variant="slate">
                {item}
              </BulletCard>
            ))}
          </div>

          <SectionTitle>औद्योगिक विकास के लाभ</SectionTitle>
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
