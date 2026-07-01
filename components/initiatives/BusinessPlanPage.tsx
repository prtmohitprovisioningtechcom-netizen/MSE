'use client';

import {
  BadgeCheck,
  BarChart3,
  Building2,
  ClipboardList,
  Cpu,
  FileCheck,
  Landmark,
  MapPin,
  Megaphone,
  RefreshCw,
  Target,
  Users,
  Wallet,
} from 'lucide-react';

const intro =
  'एक बेहतर और सफल उद्योग (Industry) स्थापित करने के लिए केवल पूंजी ही नहीं, बल्कि सही योजना, प्रबंधन और बाजार की समझ भी आवश्यक होती है। इसके लिए निम्नलिखित कदम अपनाने चाहिए:';

const steps = [
  {
    number: 1,
    title: 'व्यवसाय का सही चयन करें',
    text: 'अपनी रुचि, अनुभव और बाजार की मांग के अनुसार उद्योग चुनें।',
    icon: Target,
  },
  {
    number: 2,
    title: 'मार्केट रिसर्च करें',
    text: 'ग्राहकों की जरूरत, प्रतिस्पर्धा और उत्पाद की मांग का अध्ययन करें।',
    icon: BarChart3,
  },
  {
    number: 3,
    title: 'विस्तृत बिजनेस प्लान बनाएं',
    text: 'निवेश, उत्पादन, बिक्री, विपणन और लाभ का स्पष्ट खाका तैयार करें।',
    icon: ClipboardList,
  },
  {
    number: 4,
    title: 'पूंजी की व्यवस्था करें',
    text: 'स्वयं की पूंजी, बैंक ऋण या सरकारी योजनाओं का उपयोग करें।',
    icon: Wallet,
  },
  {
    number: 5,
    title: 'उचित स्थान का चयन करें',
    text: 'जहाँ बिजली, पानी, परिवहन, श्रमिक और बाजार की सुविधा उपलब्ध हो।',
    icon: MapPin,
  },
  {
    number: 6,
    title: 'आधुनिक तकनीक अपनाएँ',
    text: 'अच्छी मशीनरी और नई तकनीक से गुणवत्ता और उत्पादन क्षमता बढ़ती है।',
    icon: Cpu,
  },
  {
    number: 7,
    title: 'गुणवत्ता बनाए रखें',
    text: 'उच्च गुणवत्ता वाले उत्पाद ग्राहकों का विश्वास बढ़ाते हैं।',
    icon: BadgeCheck,
  },
  {
    number: 8,
    title: 'कानूनी पंजीकरण और लाइसेंस प्राप्त करें',
    text: 'आवश्यक सभी सरकारी अनुमतियाँ और पंजीकरण समय पर कराएँ।',
    icon: FileCheck,
  },
  {
    number: 9,
    title: 'कुशल कर्मचारियों की टीम बनाएं',
    text: 'प्रशिक्षित और ईमानदार कर्मचारियों का चयन करें।',
    icon: Users,
  },
  {
    number: 10,
    title: 'मार्केटिंग और ब्रांडिंग करें',
    text: 'डिजिटल मार्केटिंग, सोशल मीडिया और प्रचार-प्रसार के माध्यम से ग्राहकों तक पहुँचें।',
    icon: Megaphone,
  },
  {
    number: 11,
    title: 'सरकारी योजनाओं का लाभ लें',
    text: 'एमएसएमई, स्टार्टअप और अन्य प्रोत्साहन योजनाओं का उपयोग करें।',
    icon: Landmark,
  },
  {
    number: 12,
    title: 'निरंतर सुधार करें',
    text: 'ग्राहकों की प्रतिक्रिया के आधार पर उत्पाद और सेवाओं में लगातार सुधार करते रहें।',
    icon: RefreshCw,
  },
];

const conclusion =
  'एक सफल उद्योग वही होता है जो सही योजना, अच्छी गुणवत्ता, आधुनिक तकनीक, कुशल प्रबंधन और ग्राहक संतुष्टि पर आधारित हो। यदि इन सभी बातों का ध्यान रखा जाए, तो उद्योग के सफल होने की संभावना काफी बढ़ जाती है।';

export default function BusinessPlanPage() {
  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-indigo-900 via-primary to-slate-900 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            <Building2 className="h-3.5 w-3.5 shrink-0" />
            Business Planning
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Business Plan
          </h1>
          <p className="font-hindi text-base md:text-lg font-semibold text-white/95 leading-relaxed wrap-anywhere px-1">
            एक बेहतर उद्योग लगाने के लिए हमें क्या करना चाहिए?
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-8 md:space-y-10">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
          <p className="font-hindi w-full text-sm md:text-base text-slate-800 leading-relaxed md:leading-8 wrap-anywhere">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="w-full rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 md:p-5 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                  <div className="shrink-0 h-8 w-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-hindi text-base md:text-lg font-bold text-slate-900 leading-snug wrap-anywhere min-w-0 flex-1 pt-0.5">
                    {step.title}
                  </h3>
                </div>
                <p className="font-hindi text-sm md:text-base text-slate-700 leading-relaxed wrap-anywhere md:pl-11">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full rounded-3xl border border-primary/20 bg-primary p-5 sm:p-6 md:p-8 shadow-lg">
          <h2 className="font-hindi text-lg md:text-xl font-bold text-secondary mb-3">निष्कर्ष:</h2>
          <p className="font-hindi w-full text-sm md:text-base text-white leading-relaxed md:leading-8 wrap-anywhere">
            {conclusion}
          </p>
        </div>
      </div>
    </div>
  );
}
