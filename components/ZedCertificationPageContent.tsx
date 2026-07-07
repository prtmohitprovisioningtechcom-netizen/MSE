'use client';

import { Award, BadgeCheck, CheckCircle2 } from 'lucide-react';

const openingLine =
  'ZED Certification क्या है, किस तरीके से होता है, और इससे क्या लाभ मिलता है.';

const intro =
  'यदि आपका मतलब ZED Certification (Zero Defect, Zero Effect) से है, तो यह भारत सरकार के सक्षम, लघु एवं मध्यम उद्यम मंत्रालय (MSME Ministry) की एक महत्वपूर्ण योजना है। इसका उद्देश्य MSME उद्योगों में उच्च गुणवत्ता वाले उत्पाद बनाना और उत्पादन का पर्यावरण पर न्यूनतम प्रभाव सुनिश्चित करना है।';

const processSteps = [
  'सबसे पहले आपके उद्योग का Udyam Registration होना चाहिए।',
  'ZED पोर्टल पर पंजीकरण कर आवेदन करना होता है।',
  'अपनी यूनिट का ऑनलाइन Self-Assessment भरना होता है।',
  'आवश्यक दस्तावेज़ जमा किए जाते हैं।',
  'अधिकृत एजेंसी द्वारा निरीक्षण (Assessment/Audit) किया जाता है।',
  'सभी मानकों पर खरा उतरने पर Bronze, Silver या Gold स्तर का ZED प्रमाणपत्र जारी किया जाता है।',
];

const benefits = [
  'उत्पाद की गुणवत्ता में सुधार।',
  'ग्राहकों और बड़े उद्योगों का विश्वास बढ़ता है।',
  'सरकारी योजनाओं और कुछ प्रोत्साहनों का लाभ मिल सकता है।',
  'निर्यात (Export) और बड़े खरीदारों के साथ व्यापार के अवसर बढ़ सकते हैं।',
  'उत्पादन लागत, ऊर्जा की खपत और अपशिष्ट (Waste) कम करने में सहायता मिलती है।',
  'सरकार द्वारा पात्र MSMEs को प्रमाणन शुल्क पर सब्सिडी भी दी जाती है।',
];

export default function ZedCertificationPageContent() {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="relative rounded-3xl border-4 border-amber-400/80 bg-linear-to-br from-amber-50 via-white to-emerald-50 p-1 shadow-2xl shadow-amber-200/40">
        <div className="absolute inset-3 rounded-2xl border-2 border-dashed border-amber-300/70 pointer-events-none" />

        <div className="relative rounded-2xl bg-white/95 px-5 sm:px-8 py-8 sm:py-10 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-white shadow-lg mx-auto">
              <Award className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-amber-700">
                MSME Ministry · Government of India
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-display leading-tight">
                ZED Certification
              </h1>
            </div>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-amber-300 to-transparent" />

          <section className="space-y-3">
            <h2 className="font-hindi text-lg sm:text-xl font-bold text-primary leading-relaxed">
              {openingLine}
            </h2>
            <p className="font-hindi text-sm sm:text-base text-slate-700 leading-relaxed bg-amber-50/80 border border-amber-100 rounded-xl px-4 py-3">
              {intro}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-hindi text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-secondary shrink-0" />
              ZED Certification कैसे होता है?
            </h2>
            <ol className="space-y-3">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                >
                  <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <p className="font-hindi text-sm sm:text-base text-slate-700 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-hindi text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
              ZED Certification के लाभ
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="font-hindi text-sm text-slate-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
