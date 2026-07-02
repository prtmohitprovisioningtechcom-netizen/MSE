'use client';

import { useEffect, useState } from 'react';
import {
  Briefcase,
  Building2,
  Check,
  FileText,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  User,
  X,
} from 'lucide-react';
import { openMembershipWhatsApp, type MembershipWhatsAppPayload } from '@/lib/membershipWhatsApp';

const tiers = [
  {
    name: 'Startup',
    type: 'Startup',
    price: '₹7,500',
    period: 'per year',
    description: 'Ideal for early-stage ventures seeking mentorship, funding awareness, and business network access.',
    features: [
      'Free Consultancy',
      'Mentorship connectivity desk',
      'Credit pathway guidance',
      'Pitch review support',
      'Digital webinar access',
    ],
    tag: 'Startup Desk Support',
  },
  {
    name: 'MSME',
    type: 'MSME',
    price: '₹10,000',
    period: 'per year',
    description: 'Designed for micro and small manufacturers looking to scale, handle delayed payment issues, and explore PSU bidding.',
    features: [
      'Free Consultancy',
      'PSU vendor meet information',
      'Delayed payment guidance',
      'Trade expo support information',
      'ZED and ISO awareness',
    ],
    tag: 'Recommended for Manufacturers',
    popular: true,
  },
  {
    name: 'Corporate',
    type: 'Corporate',
    price: '₹25,000',
    period: 'per year',
    description: 'For medium-to-large organizations seeking policy advocacy, B2B procurement visibility, and industry roundtable participation.',
    features: [
      'Free Consultancy',
      'Dedicated secretariat coordination',
      'Policy roundtable invitations',
      'Buyer delegation access',
      'Corporate-to-MSME connect',
    ],
    tag: 'Enterprise Services',
  },
  {
    name: 'Lifetime Member',
    type: 'Lifetime Member',
    price: '₹11,000',
    period: 'lifetime',
    description: 'Permanent chamber membership with long-term representation, consultancy, and full association privileges.',
    features: [
      'Free Consultancy',
      'Lifetime membership certificate',
      'Priority chamber representation',
      'Events and program access',
      'Government liaison support',
    ],
    tag: 'Lifetime Membership',
    popular: true,
  },
  {
    name: 'Patron Member',
    type: 'Patron Member',
    price: '₹5,100',
    period: '2 years',
    description: 'Two-year patron membership for established businesses seeking enhanced chamber engagement and support.',
    features: [
      'Free Consultancy',
      '2-year membership validity',
      'Industry networking access',
      'Scheme and policy awareness',
      'Vendor and exhibition guidance',
    ],
    tag: 'Patron — 2 Years',
  },
  {
    name: 'General Member',
    type: 'General Member',
    price: '₹2,100',
    period: '1 year',
    description: 'One-year general membership for entrepreneurs and MSMEs joining the chamber network.',
    features: [
      'Free Consultancy',
      '1-year membership validity',
      'Chamber desk support',
      'Training and awareness programs',
      'Membership certificate on approval',
    ],
    tag: 'General — 1 Year',
  },
] as const;

type Tier = (typeof tiers)[number];
type TierType = Tier['type'];

function isPopularTier(tier: Tier): tier is Tier & { popular: true } {
  return 'popular' in tier && tier.popular === true;
}

const industryOptions = [
  'Garments',
  'Leather',
  'Shoes',
  'Glass',
  'IT',
  'Wood',
  'Food',
  'Textile',
  'Hardware',
  'Sport',
  'Electricity',
  'Other',
];

const emptyForm = {
  membershipFee: '',
  ownerName: '',
  email: '',
  companyName: '',
  phone: '',
  address: '',
  industryType: '',
  panNumber: '',
  gstNumber: '',
  udyamNumber: '',
  website: '',
  message: '',
};

const inputClass =
  'w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10';

function FormSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <h4 className="text-sm font-bold text-primary font-display">{title}</h4>
        {subtitle ? <p className="text-[11px] text-slate-500 mt-0.5">{subtitle}</p> : null}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </section>
  );
}

function Field({
  label,
  required,
  span = 1,
  children,
}: {
  label: string;
  required?: boolean;
  span?: 1 | 2;
  children: React.ReactNode;
}) {
  return (
    <label className={`space-y-2 ${span === 2 ? 'sm:col-span-2' : ''}`}>
      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
        {label}
        {required ? <span className="text-secondary ml-0.5">*</span> : null}
      </span>
      {children}
    </label>
  );
}

export default function MembershipTiersClient() {
  const [activeTier, setActiveTier] = useState<TierType | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const selectedTier = tiers.find((item) => item.type === activeTier);

  useEffect(() => {
    if (!activeTier) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeTier]);

  const openForm = (tier: TierType) => {
    const selected = tiers.find((item) => item.type === tier);
    setActiveTier(tier);
    setForm({ ...emptyForm, membershipFee: selected?.price ?? '' });
    setFeedback(null);
  };

  const closeForm = () => {
    setActiveTier(null);
    setForm(emptyForm);
    setFeedback(null);
  };

  const updateField = (field: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTier) return;

    const tier = tiers.find((item) => item.type === activeTier);
    const payload: MembershipWhatsAppPayload = {
      ...form,
      type: activeTier,
      price: form.membershipFee || tier?.price,
      period: tier?.period,
    };

    openMembershipWhatsApp(payload);

    window.alert(
      'WhatsApp is opening on 9258410701.\n\nPlease tap Send to submit your membership form details.',
    );

    setFeedback({
      type: 'success',
      text: 'WhatsApp opened on 9258410701. Please tap Send to complete your application.',
    });
    setForm(emptyForm);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-white border rounded-3xl p-6 md:p-8 flex flex-col justify-between relative transition-all ${
              isPopularTier(tier) ? 'border-secondary shadow-xl scale-[1.02]' : 'border-slate-100 shadow-sm'
            }`}
          >
            {isPopularTier(tier) && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-[9px] font-extrabold uppercase tracking-widest text-white rounded-full">
                Most Popular
              </span>
            )}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{tier.tag}</span>
                <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">{tier.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">{tier.description}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-primary font-display">{tier.price}</span>
                <span className="text-xs text-slate-400 font-semibold">/ {tier.period}</span>
              </div>
              <hr className="border-slate-100" />
              <ul className="space-y-3.5 text-xs text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className={feature === 'Free Consultancy' ? 'font-bold text-primary' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => openForm(tier.type)}
              className={`mt-8 w-full rounded-2xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                isPopularTier(tier)
                  ? 'bg-secondary hover:bg-secondary-hover text-white shadow-md'
                  : 'bg-primary hover:bg-primary-hover text-white'
              }`}
            >
              Membership Form
            </button>
          </div>
        ))}
      </div>

      {activeTier && selectedTier && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/70 backdrop-blur-md"
          onClick={closeForm}
          role="presentation"
        >
          <div
            className="relative w-full sm:max-w-2xl max-h-[94vh] sm:max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="membership-form-title"
          >
            <div className="h-1 bg-linear-to-r from-secondary via-white to-accent shrink-0" />

            <div className="relative shrink-0 bg-linear-to-br from-primary via-primary to-slate-900 px-5 sm:px-7 py-5 sm:py-6 text-white overflow-hidden">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0 space-y-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Membership Application
                  </span>
                  <h3 id="membership-form-title" className="text-xl sm:text-2xl font-extrabold font-display leading-tight wrap-break-word">
                    {selectedTier.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-extrabold text-secondary text-lg">{selectedTier.price}</span>
                    <span className="text-white/70">/ {selectedTier.period}</span>
                    <span className="rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Free Consultancy
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeForm}
                  className="shrink-0 p-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close form"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col min-h-0 flex-1 bg-white">
              <div className="overflow-y-auto px-5 sm:px-7 py-6 space-y-8">
                <FormSection title="Contact Information" subtitle="Primary person for chamber communication">
                  <Field label="Owner / Contact Name" required span={2}>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        value={form.ownerName}
                        onChange={(e) => updateField('ownerName', e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder="Full name"
                      />
                    </div>
                  </Field>
                  <Field label="Email" required>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder="email@example.com"
                      />
                    </div>
                  </Field>
                  <Field label="Phone" required>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder="+91 92584 10701"
                      />
                    </div>
                  </Field>
                </FormSection>

                <FormSection title="Business Details" subtitle="Company profile and location">
                  <Field label="Membership Fees" required>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        value={form.membershipFee}
                        onChange={(e) => updateField('membershipFee', e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder="₹10,000"
                      />
                    </div>
                  </Field>
                  <Field label="Company / Business Name" required span={2}>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        value={form.companyName}
                        onChange={(e) => updateField('companyName', e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder="Registered business name"
                      />
                    </div>
                  </Field>
                  <Field label="Business Address" required span={2}>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <textarea
                        required
                        rows={2}
                        value={form.address}
                        onChange={(e) => updateField('address', e.target.value)}
                        className={`${inputClass} pl-10 resize-none`}
                        placeholder="Full office / factory address"
                      />
                    </div>
                  </Field>
                  <Field label="Industry Sector" required>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                      <select
                        required
                        value={form.industryType}
                        onChange={(e) => updateField('industryType', e.target.value)}
                        className={`${inputClass} pl-10 appearance-none cursor-pointer`}
                      >
                        <option value="">Select sector</option>
                        {industryOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Field>
                  <Field label="Website">
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="url"
                        value={form.website}
                        onChange={(e) => updateField('website', e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder="https://"
                      />
                    </div>
                  </Field>
                </FormSection>

                <FormSection title="Registration & Tax" subtitle="PAN required; GST and Udyam if available">
                  <Field label="PAN Number" required>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        value={form.panNumber}
                        onChange={(e) => updateField('panNumber', e.target.value.toUpperCase())}
                        className={`${inputClass} pl-10 uppercase`}
                        placeholder="ABCDE1234F"
                      />
                    </div>
                  </Field>
                  <Field label="GST Number">
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        value={form.gstNumber}
                        onChange={(e) => updateField('gstNumber', e.target.value.toUpperCase())}
                        className={`${inputClass} pl-10 uppercase`}
                        placeholder="Optional"
                      />
                    </div>
                  </Field>
                  <Field label="Udyam Number" span={2}>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        value={form.udyamNumber}
                        onChange={(e) => updateField('udyamNumber', e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder="Optional MSME Udyam registration"
                      />
                    </div>
                  </Field>
                </FormSection>

                <FormSection title="Additional Notes" subtitle="Tell us about your business goals">
                  <Field label="Business Details / Message" span={2}>
                    <div className="relative">
                      <MessageCircle className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        className={`${inputClass} pl-10 resize-none`}
                        placeholder="Brief about your business and membership requirement"
                      />
                    </div>
                  </Field>
                </FormSection>

                {feedback && (
                  <div
                    className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-xs font-semibold ${
                      feedback.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    <Check className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{feedback.text}</span>
                  </div>
                )}
              </div>

              <div className="shrink-0 border-t border-slate-100 bg-slate-50/90 px-5 sm:px-7 py-4 sm:py-5">
                <p className="text-[10px] text-slate-500 text-center mb-3 leading-relaxed">
                  Application opens in WhatsApp on <strong className="text-primary">9258410701</strong>. Tap Send to complete.
                </p>
                <div className="flex flex-col-reverse sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-slate-900 hover:from-primary-hover hover:to-slate-950 text-white px-4 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/25 transition-all hover:shadow-xl"
                  >
                    <Send className="h-4 w-4" />
                    Submit via WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
