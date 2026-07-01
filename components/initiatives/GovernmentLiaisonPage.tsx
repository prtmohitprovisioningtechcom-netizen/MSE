'use client';

import {
  BadgeCheck,
  Building2,
  FileCheck,
  Handshake,
  Landmark,
  Link2,
  Megaphone,
  Users,
} from 'lucide-react';

const intro =
  'Government Liaison (गवर्नमेंट लायज़न) वह व्यक्ति या विभाग होता है जो किसी संस्था, कंपनी, उद्योग, संगठन या एसोसिएशन और सरकारी विभागों के बीच संपर्क (Coordination) का कार्य करता है।';

const mainFunctions = [
  {
    text: 'सरकारी विभागों से संवाद और समन्वय करना।',
    icon: Building2,
  },
  {
    text: 'लाइसेंस, पंजीकरण, अनुमतियाँ और सरकारी मंजूरियों में सहायता करना।',
    icon: FileCheck,
  },
  {
    text: 'सरकारी योजनाओं, नीतियों और नियमों की जानकारी संस्था तक पहुँचाना।',
    icon: Landmark,
  },
  {
    text: 'संस्था की समस्याओं और सुझावों को सरकार के सामने प्रस्तुत करना।',
    icon: Megaphone,
  },
  {
    text: 'सरकारी अधिकारियों के साथ बैठकों और पत्राचार का समन्वय करना।',
    icon: Users,
  },
];

const example =
  'उदाहरण के लिए, यदि कोई चैंबर ऑफ कॉमर्स किसी उद्योग की समस्या को सरकार तक पहुँचाता है और संबंधित विभागों के साथ बैठक आयोजित कर समाधान का प्रयास करता है, तो यह Government Liaison का कार्य माना जाता है।';

const mseContext =
  'यदि आप एमएसई चैंबर ऑफ कॉमर्स एंड इंडस्ट्री एसोसिएशन के संदर्भ में पूछ रहे हैं, तो Government Liaison का अर्थ होगा कि एसोसिएशन उद्योगों और सरकार के बीच एक सेतु (Bridge) के रूप में कार्य करे, ताकि उद्यमियों को सरकारी योजनाओं, अनुमतियों और नीतियों का लाभ आसानी से मिल सके।';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-hindi text-lg md:text-2xl font-bold text-primary leading-snug">
      <span className="inline-block h-2 w-2 rounded-full bg-secondary mr-2 align-middle" />
      <span className="inline align-middle wrap-break-word">{children}</span>
    </h2>
  );
}

function FunctionCard({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="w-full rounded-2xl border border-teal-100 bg-teal-50/40 p-4 md:p-5 shadow-sm">
      <div className="w-full min-w-0">
        <div className="mb-3">
          <div className="inline-flex h-10 w-10 rounded-xl items-center justify-center bg-teal-100 text-teal-700">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed wrap-anywhere">
          <span className="text-teal-700 font-bold mr-1">•</span>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function GovernmentLiaisonPage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-teal-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <Link2 className="h-3.5 w-3.5 shrink-0" />
            Policy Connect
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Government Liaison
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            गवर्नमेंट लायज़न
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-10 md:space-y-12">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex shrink-0 h-14 w-14 rounded-2xl bg-primary/10 text-primary items-center justify-center">
              <Handshake className="h-7 w-7" />
            </div>
            <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
              {intro}
            </p>
          </div>
        </div>

        <section className="w-full space-y-4 md:space-y-5">
          <SectionTitle>इसके मुख्य कार्य हैं:</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {mainFunctions.map((item) => (
              <FunctionCard key={item.text} icon={item.icon}>
                {item.text}
              </FunctionCard>
            ))}
          </div>
        </section>

        <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-3 mb-3">
            <BadgeCheck className="h-5 w-5 text-secondary shrink-0 mt-1" />
            <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
              {example}
            </p>
          </div>
        </div>

        <div className="w-full rounded-3xl border border-primary/20 bg-primary p-5 sm:p-6 md:p-8 shadow-lg">
          <p className="font-hindi w-full text-sm md:text-base text-white leading-relaxed md:leading-8 wrap-anywhere">
            {mseContext}
          </p>
        </div>
      </div>
    </div>
  );
}
