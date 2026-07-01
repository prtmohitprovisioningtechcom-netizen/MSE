'use client';

import {
  BadgeCheck,
  ClipboardList,
  Cpu,
  GraduationCap,
  Megaphone,
  MessageCircle,
  Users,
  Wallet,
  Factory,
} from 'lucide-react';

const heroQuestion =
  'इंडस्ट्रीज अवेयरनेस प्रोग्राम में क्या होता है, किस तरीके से ये किए जाते हैं?';

const intro =
  'इंडस्ट्री अवेयरनेस प्रोग्राम (Industry Awareness Program) का उद्देश्य युवाओं, उद्यमियों, छात्रों और MSME मालिकों को उद्योग स्थापित करने, सरकारी योजनाओं और व्यवसाय संचालन की जानकारी देना होता है। ऐसे कार्यक्रम केंद्र सरकार के MSME मंत्रालय, राज्य उद्योग विभाग, जिला उद्योग केंद्र (DIC), उद्योग संघों और तकनीकी संस्थानों द्वारा आयोजित किए जाते हैं।';

const sectionTitle = 'आमतौर पर एक इंडस्ट्री अवेयरनेस प्रोग्राम इस प्रकार आयोजित किया जाता है:';

const programSteps = [
  {
    title: 'पंजीकरण (Registration)',
    text: 'प्रतिभागियों का रजिस्ट्रेशन किया जाता है।',
    icon: ClipboardList,
  },
  {
    title: 'उद्घाटन सत्र',
    text: 'कार्यक्रम का उद्देश्य और उद्योगों के अवसरों के बारे में जानकारी दी जाती है।',
    icon: Megaphone,
  },
  {
    title: 'विशेषज्ञ व्याख्यान',
    text: 'उद्योग विशेषज्ञ और सरकारी अधिकारी बताते हैं कि उद्योग कैसे शुरू करें, कौन-कौन सी सरकारी योजनाएँ उपलब्ध हैं और वित्तीय सहायता कैसे प्राप्त करें।',
    icon: GraduationCap,
  },
  {
    title: 'तकनीकी सत्र',
    text: 'प्रोजेक्ट रिपोर्ट बनाना, मशीनरी का चयन, गुणवत्ता मानक, मार्केटिंग, डिजिटल बिज़नेस और लाइसेंस संबंधी जानकारी दी जाती है।',
    icon: Cpu,
  },
  {
    title: 'बैंक एवं वित्तीय संस्थानों की जानकारी',
    text: 'बैंक ऋण, सब्सिडी, CGTMSE, PMEGP, मुद्रा योजना आदि के बारे में बताया जाता है।',
    icon: Wallet,
  },
  {
    title: 'प्रश्नोत्तर (Q&A)',
    text: 'प्रतिभागी अपने प्रश्न पूछते हैं और विशेषज्ञ उनका समाधान देते हैं।',
    icon: MessageCircle,
  },
  {
    title: 'नेटवर्किंग',
    text: 'उद्यमियों, उद्योगपतियों और सरकारी अधिकारियों से संपर्क बनाने का अवसर मिलता है।',
    icon: Users,
  },
  {
    title: 'प्रमाणपत्र',
    text: 'कई कार्यक्रमों में भाग लेने पर प्रमाणपत्र भी दिया जाता है।',
    icon: BadgeCheck,
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-hindi text-lg md:text-2xl font-bold text-primary leading-snug">
      <span className="inline-block h-2 w-2 rounded-full bg-secondary mr-2 align-middle" />
      <span className="inline align-middle wrap-break-word">{children}</span>
    </h2>
  );
}

function StepCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="w-full rounded-2xl border border-sky-100 bg-sky-50/40 p-4 md:p-5 shadow-sm">
      <div className="w-full min-w-0">
        <div className="mb-3">
          <div className="inline-flex h-10 w-10 rounded-xl items-center justify-center bg-sky-100 text-sky-700">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed wrap-anywhere">
          <span className="text-sky-700 font-bold mr-1">•</span>
          <span className="font-bold text-slate-900">{title}:</span>{' '}
          {text}
        </p>
      </div>
    </div>
  );
}

export default function IndustryAwarenessProgramPage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-sky-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <Factory className="h-3.5 w-3.5 shrink-0" />
            Industry Awareness
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Industry Awareness Program
          </h1>
          <p className="font-hindi text-base md:text-lg font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            {heroQuestion}
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
          <SectionTitle>{sectionTitle}</SectionTitle>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {programSteps.map((item) => (
              <StepCard
                key={item.title}
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
