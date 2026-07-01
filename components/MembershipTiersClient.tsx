'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { openMembershipWhatsApp, type MembershipWhatsAppPayload } from '@/lib/membershipWhatsApp';

const tiers = [
  {
    name: 'Startup',
    type: 'Startup',
    price: 'Rs. 7,500',
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
    price: 'Rs. 10,000',
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
    price: 'Rs. 25,000',
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

export default function MembershipTiersClient() {
  const [activeTier, setActiveTier] = useState<TierType | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const openForm = (tier: TierType) => {
    setActiveTier(tier);
    setForm(emptyForm);
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

    const payload: MembershipWhatsAppPayload = { ...form, type: activeTier };

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {activeTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Membership Application</p>
                <h3 className="text-lg font-bold text-primary font-display">{activeTier} Tier</h3>
              </div>
              <button
                type="button"
                onClick={closeForm}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
                aria-label="Close form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-1.5 sm:col-span-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Owner / Contact Name *</span>
                  <input
                    required
                    value={form.ownerName}
                    onChange={(e) => updateField('ownerName', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="Full name"
                  />
                </label>

                <label className="space-y-1.5 sm:col-span-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Company / Business Name *</span>
                  <input
                    required
                    value={form.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="Registered business name"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Email *</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="email@example.com"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Phone *</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="+91"
                  />
                </label>

                <label className="space-y-1.5 sm:col-span-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Business Address *</span>
                  <textarea
                    required
                    rows={2}
                    value={form.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary resize-none"
                    placeholder="Full office / factory address"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Industry Sector *</span>
                  <select
                    required
                    value={form.industryType}
                    onChange={(e) => updateField('industryType', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary bg-white"
                  >
                    <option value="">Select sector</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">PAN Number *</span>
                  <input
                    required
                    value={form.panNumber}
                    onChange={(e) => updateField('panNumber', e.target.value.toUpperCase())}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm uppercase outline-none focus:border-primary"
                    placeholder="ABCDE1234F"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">GST Number</span>
                  <input
                    value={form.gstNumber}
                    onChange={(e) => updateField('gstNumber', e.target.value.toUpperCase())}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm uppercase outline-none focus:border-primary"
                    placeholder="Optional"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Udyam Number</span>
                  <input
                    value={form.udyamNumber}
                    onChange={(e) => updateField('udyamNumber', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="Optional"
                  />
                </label>

                <label className="space-y-1.5 sm:col-span-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Website</span>
                  <input
                    type="url"
                    value={form.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="https://"
                  />
                </label>

                <label className="space-y-1.5 sm:col-span-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Business Details / Message</span>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary resize-none"
                    placeholder="Brief about your business and membership requirement"
                  />
                </label>
              </div>

              {feedback && (
                <p
                  className={`text-xs font-semibold rounded-xl px-3 py-2 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'bg-rose-50 text-rose-700 border border-rose-100'
                  }`}
                >
                  {feedback.text}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-4 py-3 text-xs font-bold uppercase tracking-wider"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
