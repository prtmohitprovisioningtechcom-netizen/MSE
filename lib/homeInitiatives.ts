export type HomeInitiative = {
  slug: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  points: string[];
  services: string[];
};

export const homeInitiatives: HomeInitiative[] = [
  {
    slug: 'promotion-of-msmes',
    title: 'Promotion of MSMEs',
    badge: 'MSME Growth',
    summary: 'सूक्ष्म, लघु एवं मध्यम उद्यमों का संवर्धन — स्थापना, विकास और प्रतिस्पर्धात्मक क्षमता को बढ़ावा।',
    description:
      'Promotion of MSMEs का अर्थ है MSMEs की स्थापना, विकास और प्रतिस्पर्धात्मक क्षमता को बढ़ावा देना।',
    points: [
      'उद्यमिता जागरूकता',
      'कौशल विकास एवं प्रशिक्षण',
      'वित्तीय सहायता',
      'तकनीकी उन्नयन',
    ],
    services: ['MSME मंत्रालय योजनाएँ', 'जिला उद्योग केंद्र (DIC)', 'बैंक ऋण सहायता', 'प्रदर्शनी एवं निर्यात सहायता'],
  },
  {
    slug: 'sc-st-entrepreneur-support',
    title: 'SC/ST entrepreneur support',
    badge: 'Inclusive Growth',
    summary: 'SC/ST उद्यमी सहायता — अनुसूचित जाति और जनजाति के उद्यमियों को व्यवसाय शुरू करने और बढ़ाने में सहायता।',
    description:
      'SC/ST Entrepreneur Support का उद्देश्य SC और ST उद्यमियों को नया व्यवसाय शुरू करने, विस्तार करने और प्रतिस्पर्धी बनाने में सहायता प्रदान करना है।',
    points: [
      'उद्यमिता विकास प्रशिक्षण (EDP)',
      'वित्तीय सहायता',
      'मार्केटिंग सहायता',
      'विक्रेता विकास कार्यक्रम',
    ],
    services: ['National SC-ST Hub', 'Stand-Up India guidance', 'Public Procurement support', 'Mentorship & training'],
  },
  {
    slug: 'skill-development',
    title: 'Skill development',
    badge: 'Skill Building',
    summary: 'कौशल विकास — रोजगार, उद्यमिता और बेहतर कार्य प्रदर्शन के लिए प्रशिक्षण और व्यावहारिक कौशल।',
    description:
      'Skill Development का अर्थ है लोगों को ऐसा ज्ञान, प्रशिक्षण और व्यावहारिक कौशल प्रदान करना जिससे वे रोजगार प्राप्त कर सकें।',
    points: [
      'युवाओं को रोजगार योग्य बनाना',
      'उद्यमिता को बढ़ावा देना',
      'कुशल मानव संसाधन तैयार करना',
      'उत्पादकता और आय बढ़ाना',
    ],
    services: ['Technical Skills', 'Digital Skills', 'Soft Skills', 'Financial Literacy'],
  },
  {
    slug: 'industrial-grievance-resolution',
    title: 'Industrial grievance resolution',
    badge: 'Support Desk',
    summary: 'औद्योगिक शिकायत निवारण — उद्योगों और उद्यमियों की समस्याओं का समयबद्ध एवं निष्पक्ष समाधान।',
    description:
      'Industrial Grievance Resolution का अर्थ है उद्योगों, उद्यमियों या कर्मचारियों की समस्याओं और शिकायतों का समयबद्ध एवं निष्पक्ष समाधान करना।',
    points: [
      'उद्योगों की समस्याओं का शीघ्र समाधान',
      'व्यापार करने में बाधाओं को कम करना',
      'सरकारी विभागों के बीच समन्वय',
      'निवेश और औद्योगिक विकास को बढ़ावा',
    ],
    services: ['Grievance desk review', 'Document verification support', 'Department liaison', 'Policy route guidance'],
  },
  {
    slug: 'vendor-development-programs',
    title: 'Vendor development programs',
    badge: 'Vendor Connect',
    summary: 'विक्रेता विकास कार्यक्रम — MSMEs को बड़े उद्योगों और सरकारी संस्थानों के लिए आपूर्तिकर्ता बनने में सहायता।',
    description:
      'Vendor Development Program का उद्देश्य MSMEs, स्टार्टअप और नए उद्यमियों को Vendor/Supplier बनने में सहायता करना है।',
    points: [
      'सरकारी और निजी खरीदारों से जोड़ना',
      'खरीद प्रक्रियाओं की जानकारी',
      'Make in India को बढ़ावा',
      'नए व्यावसायिक अवसर पैदा करना',
    ],
    services: ['GeM onboarding support', 'Vendor registration guidance', 'Buyer meet alerts', 'Tender readiness workshops'],
  },
  {
    slug: 'government-scheme-awareness',
    title: 'Government scheme awareness',
    badge: 'Scheme Desk',
    summary: 'सरकारी योजनाओं के प्रति जागरूकता — अनुदान, ऋण और MSME सहायता योजनाओं की जानकारी।',
    description:
      'Government Schemes Awareness का उद्देश्य उद्यमियों और MSMEs को विभिन्न सरकारी योजनाओं की जानकारी देना है।',
    points: [
      'PMEGP, PMMY, CGTMSE',
      'Startup India, Udyam Registration',
      'National SC-ST Hub',
      'Skill India Mission',
    ],
    services: ['Scheme briefing sessions', 'Eligibility review support', 'Application documentation help', 'Official portal references'],
  },
  {
    slug: 'trade-fairs-exhibitions',
    title: 'Trade fairs & exhibitions',
    badge: 'Market Access',
    summary: 'Participation support for trade fairs, exhibitions and buyer exposure programs at state and national level.',
    description:
      'MSE-CCIA helps members explore exhibition opportunities, stall coordination and product showcase platforms for business growth.',
    points: [
      'National and state exhibition alerts',
      'MSME pavilion participation guidance',
      'Product display and branding support',
      'Buyer networking at trade events',
    ],
    services: ['Exhibition calendar updates', 'Stall registration guidance', 'Trade fair orientation', 'Export showcase support'],
  },
  {
    slug: 'msme-support',
    title: 'MSME support',
    badge: 'MSME Desk',
    summary: 'End-to-end facilitation for registration, documentation, credit readiness and business growth.',
    description:
      'The MSME support desk assists enterprises with Udyam, compliance awareness, subsidy information and operational guidance.',
    points: [
      'Udyam and business documentation support',
      'Credit and subsidy readiness guidance',
      'Compliance and certification awareness',
      'Startup and scale-up facilitation',
    ],
    services: ['Udyam registration help', 'Business documentation review', 'Subsidy scheme guidance', 'Growth advisory sessions'],
  },
  {
    slug: 'industrial-development',
    title: 'Industries development',
    badge: 'Industry Growth',
    summary: 'इंडस्ट्री विकास — पूंजी, तकनीक, बुनियादी ढांचा और औद्योगिक विकास के माध्यम से उत्पादन व रोजगार में वृद्धि।',
    description:
      'Industrial Development (औद्योगिक विकास) का अर्थ है किसी क्षेत्र या देश में उद्योगों की स्थापना, विस्तार, आधुनिकीकरण और उत्पादन क्षमता में वृद्धि करना।',
    points: [
      'पूंजी, तकनीक और बुनियादी ढांचा',
      'कुशल श्रमिक और R&D',
      'सरकारी नीतियाँ और निवेश',
      'रोजगार व आर्थिक विकास',
    ],
    services: ['Industry growth orientation', 'Infrastructure awareness', 'Investment promotion guidance', 'MSME industrial expansion support'],
  },
  {
    slug: 'training-awareness',
    title: 'Training and awareness',
    badge: 'Awareness Programs',
    summary: 'प्रशिक्षण एवं जागरूकता — कौशल, उद्यमिता, सरकारी योजनाएँ और रोजगार के अवसरों की जानकारी।',
    description:
      'Training and Awareness का उद्देश्य लोगों, उद्यमियों, छात्रों और कर्मचारियों को आवश्यक ज्ञान, कौशल तथा सरकारी योजनाओं की जानकारी प्रदान करना है।',
    points: [
      'कौशल और उद्यमिता विकास',
      'सरकारी योजनाओं की जागरूकता',
      'डिजिटल और गुणवत्ता प्रशिक्षण',
      'रोजगार व स्वरोजगार सहायता',
    ],
    services: ['Entrepreneurship sessions', 'Skill development workshops', 'Scheme awareness programs', 'Expert Q&A guidance'],
  },
  {
    slug: 'government-license',
    title: 'Government License',
    badge: 'Compliance Desk',
    summary: 'सरकारी लाइसेंस — व्यवसाय और उद्योग को कानूनी रूप से संचालित करने के लिए आधिकारिक अनुमति और पंजीकरण।',
    description:
      'Government License (सरकारी लाइसेंस) वह आधिकारिक अनुमति है जो किसी व्यक्ति, व्यवसाय या उद्योग को सरकार या संबंधित विभाग द्वारा कानूनी रूप से संचालित करने के लिए दी जाती है।',
    points: [
      'व्यवसाय को कानूनी मान्यता',
      'Udyam, GST, PAN/TAN पंजीकरण',
      'Factory, Trade, FSSAI, IEC लाइसेंस',
      'पर्यावरण एवं अनुपालन सहायता',
    ],
    services: ['Udyam registration guidance', 'GST & tax registration awareness', 'License compliance orientation', 'Industry-specific registration support'],
  },
  {
    slug: 'government-liaison',
    title: 'Government liaison',
    badge: 'Policy Connect',
    summary: 'गवर्नमेंट लायज़न — संस्था और सरकारी विभागों के बीच संपर्क, समन्वय और नीतियों तक पहुँच।',
    description:
      'Government Liaison (गवर्नमेंट लायज़न) वह व्यक्ति या विभाग होता है जो किसी संस्था, कंपनी, उद्योग, संगठन या एसोसिएशन और सरकारी विभागों के बीच संपर्क (Coordination) का कार्य करता है।',
    points: [
      'सरकारी विभागों से समन्वय',
      'लाइसेंस और मंजूरी सहायता',
      'योजनाओं की जानकारी',
      'उद्योग-सरकार सेतु कार्य',
    ],
    services: ['Department coordination', 'Policy and scheme liaison', 'Meeting facilitation', 'Grievance representation support'],
  },
  {
    slug: 'business-plan',
    title: 'Business Plan',
    badge: 'Business Planning',
    summary: 'बिजनेस प्लान — बेहतर उद्योग स्थापित करने के लिए योजना, प्रबंधन, बाजार और 12 आवश्यक कदम।',
    description:
      'एक बेहतर और सफल उद्योग स्थापित करने के लिए सही योजना, प्रबंधन और बाजार की समझ आवश्यक होती है।',
    points: [
      'व्यवसाय चयन और मार्केट रिसर्च',
      'बिजनेस प्लान और पूंजी व्यवस्था',
      'तकनीक, गुणवत्ता और लाइसेंस',
      'मार्केटिंग और सरकारी योजनाएँ',
    ],
    services: ['Business plan orientation', 'Market research guidance', 'Investment planning awareness', 'Startup step-by-step advisory'],
  },
  {
    slug: 'government-awards',
    title: 'Government Awards',
    badge: 'Industry Recognition',
    summary: 'केंद्र और राज्य सरकार के उद्योग पुरस्कार — MSME, नवाचार, निर्यात, गुणवत्ता और उद्यमिता।',
    description:
      'उद्योगों के उत्कृष्ट प्रदर्शन, नवाचार, निर्यात, गुणवत्ता और उद्यमिता को बढ़ावा देने के लिए केंद्र और राज्य सरकारें विभिन्न पुरस्कार प्रदान करती हैं।',
    points: [
      'National MSME Awards',
      'Entrepreneurship & Export Awards',
      'ZED Certification',
      'UP ODOP & Export Promotion Awards',
    ],
    services: ['Awards awareness sessions', 'Eligibility orientation', 'Application guidance support', 'National & state awards listing'],
  },
  {
    slug: 'industry-awareness-program',
    title: 'Industry Awareness Program',
    badge: 'Industry Awareness',
    summary: 'इंडस्ट्री अवेयरनेस प्रोग्राम — उद्योग स्थापना, सरकारी योजनाएँ और व्यवसाय संचालन की जानकारी।',
    description:
      'इंडस्ट्री अवेयरनेस प्रोग्राम का उद्देश्य युवाओं, उद्यमियों, छात्रों और MSME मालिकों को उद्योग स्थापित करने और सरकारी योजनाओं की जानकारी देना है।',
    points: [
      'पंजीकरण और उद्घाटन सत्र',
      'विशेषज्ञ व्याख्यान',
      'तकनीकी और वित्तीय सत्र',
      'Q&A, नेटवर्किंग और प्रमाणपत्र',
    ],
    services: ['Program registration support', 'Expert session orientation', 'Scheme awareness guidance', 'Industry startup facilitation'],
  },
  {
    slug: 'mse-ccia',
    title: 'MSE-CCIA AWARD',
    badge: 'Business Award',
    summary: 'एमएसई चैंबर ऑफ कॉमर्स एंड इंडस्ट्री एसोसिएशन — उद्योग, व्यापार और उद्यमिता को प्रोत्साहित करने वाले सम्मान और पुरस्कार।',
    description:
      'एमएसई चैंबर ऑफ कॉमर्स एंड इंडस्ट्री एसोसिएशन अपने संविधान और उद्देश्य के अनुरूप उद्योग, व्यापार और उद्यमिता को प्रोत्साहित करने के लिए सम्मान और पुरस्कार प्रदान करते हैं।',
    points: [
      'एमएसई उद्योग रत्न सम्मान',
      'युवा व महिला उद्यमी पुरस्कार',
      'निर्यात व गुणवत्ता उत्कृष्टता',
      'ग्रीन इंडस्ट्री व CSR सम्मान',
    ],
    services: ['Award nomination guidance', 'Eligibility orientation', 'Application documentation support', 'Transparent evaluation process'],
  },
  {
    slug: 'shubhkamna-sandesh',
    title: 'Shubhkamna sandesh',
    badge: 'Messages',
    summary: 'शुभकामना संदेश (Greetings and Messages).',
    description: '',
    points: [],
    services: [],
  },
  {
    slug: 'achivement',
    title: 'Achivement',
    badge: 'Achievements',
    summary: 'उपलब्धियां (Achievements and Milestones).',
    description: '',
    points: [],
    services: [],
  },
];

export function getInitiativeBySlug(slug: string) {
  return homeInitiatives.find((item) => item.slug === slug);
}

export function getAllInitiativeSlugs() {
  return homeInitiatives.map((item) => item.slug);
}
