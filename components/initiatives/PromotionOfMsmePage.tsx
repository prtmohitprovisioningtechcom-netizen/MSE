const intro =
  'Promotion of MSMEs (सूक्ष्म, लघु एवं मध्यम उद्यमों का संवर्धन) का अर्थ है MSMEs की स्थापना, विकास और प्रतिस्पर्धात्मक क्षमता को बढ़ावा देना। इसके लिए सरकार, उद्योग संगठन और वित्तीय संस्थान मिलकर विभिन्न प्रकार की सहायता प्रदान करते हैं।';

const mainActivities = [
  'उद्यमिता जागरूकता – लोगों को अपना व्यवसाय शुरू करने के लिए प्रेरित करना।',
  'कौशल विकास एवं प्रशिक्षण – तकनीकी, प्रबंधकीय और डिजिटल कौशल का प्रशिक्षण।',
  'वित्तीय सहायता – बैंक ऋण, सब्सिडी, क्रेडिट गारंटी और कार्यशील पूंजी की सुविधा।',
  'तकनीकी उन्नयन – आधुनिक मशीनरी, ऑटोमेशन और नई तकनीकों को अपनाने में सहायता।',
  'मार्केटिंग सहायता – व्यापार मेले, प्रदर्शनियाँ, ई-कॉमर्स और सरकारी खरीद में भागीदारी के अवसर।',
  'गुणवत्ता एवं प्रमाणन – ISO, BIS, ZED जैसी गुणवत्ता प्रणालियों को अपनाने में सहायता।',
  'डिजिटल सशक्तिकरण – डिजिटल भुगतान, ऑनलाइन मार्केटिंग और ई-गवर्नेंस का उपयोग बढ़ाना।',
  'निर्यात प्रोत्साहन – निर्यात से संबंधित प्रशिक्षण, बाज़ार जानकारी और सहायता।',
];

const objectives = [
  'नए उद्यम स्थापित करना।',
  'रोजगार के अवसर बढ़ाना।',
  'स्थानीय उत्पादन और नवाचार को बढ़ावा देना।',
  'MSMEs को राष्ट्रीय और अंतरराष्ट्रीय बाजार में प्रतिस्पर्धी बनाना।',
  'देश की आर्थिक वृद्धि में योगदान बढ़ाना।',
];

const closing =
  'MSME Promotion के लिए भारत सरकार का MSME मंत्रालय, राज्य सरकारों के उद्योग विभाग, जिला उद्योग केंद्र (DIC), बैंक और विभिन्न उद्योग संगठन मिलकर योजनाएँ और सहायता कार्यक्रम संचालित करते हैं।';

export default function PromotionOfMsmePage() {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <article className="rounded-3xl border border-slate-100 bg-white p-6 md:p-10 shadow-sm space-y-8 font-hindi text-sm md:text-base text-slate-800 leading-relaxed md:leading-8">
        <p>{intro}</p>

        <div className="space-y-3">
          <p className="font-bold text-primary text-base md:text-lg">मुख्य गतिविधियाँ:</p>
          <ul className="space-y-2.5 pl-1">
            {mainActivities.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="font-bold text-primary text-base md:text-lg">उद्देश्य:</p>
          <ul className="space-y-2.5 pl-1">
            {objectives.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>{closing}</p>
      </article>
    </div>
  );
}
