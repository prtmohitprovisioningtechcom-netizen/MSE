'use client';

import { useState } from 'react';
import { Check, GraduationCap, Send } from 'lucide-react';
import { courses } from '@/lib/courses';
import {
  submitStudentRegistration,
  PARTICIPATION_FORM_TITLE,
  type StudentRegistrationPayload,
} from '@/lib/studentRegistrationSubmit';

const qualificationOptions = [
  '8th Pass',
  '10th Pass',
  '12th Pass',
  'ITI',
  'Diploma',
  'Graduate',
  'Post Graduate',
  'Other',
];

const batchOptions = ['Morning', 'Afternoon', 'Evening', 'Weekend'];

const emptyForm: StudentRegistrationPayload = {
  fullName: '',
  guardianName: '',
  dateOfBirth: '',
  gender: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: 'Uttar Pradesh',
  pinCode: '',
  qualification: '',
  courseInterested: '',
  preferredBatch: '',
  aadharNumber: '',
  message: '',
};

const inputClass =
  'w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10';

function Field({
  label,
  required,
  className = '',
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`space-y-1.5 ${className}`}>
      <span className="text-xs font-semibold text-slate-600">
        {label}
        {required ? <span className="text-secondary"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

export default function StudentRegistrationClient() {
  const [form, setForm] = useState(emptyForm);
  const [feedback, setFeedback] = useState<string | null>(null);

  const updateField = (field: keyof StudentRegistrationPayload, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitStudentRegistration(form);

    setFeedback('WhatsApp opened — please tap Send to submit.');
    setForm(emptyForm);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="h-1 bg-linear-to-r from-secondary via-white to-accent" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-linear-to-br from-primary via-primary to-slate-900 px-6 sm:px-8 py-5 sm:py-6 text-white">
          <div className="flex items-start gap-4 min-w-0">
            <div className="shrink-0 rounded-xl bg-white/10 p-2.5">
              <GraduationCap className="h-6 w-6 text-secondary" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-extrabold font-display leading-snug">
                {PARTICIPATION_FORM_TITLE}
              </h1>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                MSE-CCIA skill development & industry programs
              </p>
            </div>
          </div>
          <p className="text-xs text-white/75 sm:text-right shrink-0">
            Submit via WhatsApp · 9258410701
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-7">
          <div>
            <h2 className="text-sm font-bold text-primary font-display border-b border-slate-100 pb-2 mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Field label="Full Name" required className="sm:col-span-2 lg:col-span-1">
              <input
                required
                value={form.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className={inputClass}
                placeholder="Student name"
              />
            </Field>
            <Field label="Father / Guardian" required>
              <input
                required
                value={form.guardianName}
                onChange={(e) => updateField('guardianName', e.target.value)}
                className={inputClass}
                placeholder="Guardian name"
              />
            </Field>
            <Field label="Date of Birth" required>
              <input
                required
                type="date"
                value={form.dateOfBirth}
                onChange={(e) => updateField('dateOfBirth', e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Gender" required>
              <select
                required
                value={form.gender}
                onChange={(e) => updateField('gender', e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </Field>
            <Field label="Email" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={inputClass}
                placeholder="email@example.com"
              />
            </Field>
            <Field label="Mobile / WhatsApp" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={inputClass}
                placeholder="+91 92584 10701"
              />
            </Field>
            <Field label="Address" required className="sm:col-span-2 lg:col-span-3">
              <textarea
                required
                rows={2}
                value={form.address}
                onChange={(e) => updateField('address', e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder="House no., street, area"
              />
            </Field>
            <Field label="City" required>
              <input
                required
                value={form.city}
                onChange={(e) => updateField('city', e.target.value)}
                className={inputClass}
                placeholder="City"
              />
            </Field>
            <Field label="State" required>
              <input
                required
                value={form.state}
                onChange={(e) => updateField('state', e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Pin Code" required>
              <input
                required
                inputMode="numeric"
                pattern="[0-9]{6}"
                maxLength={6}
                value={form.pinCode}
                onChange={(e) => updateField('pinCode', e.target.value)}
                className={inputClass}
                placeholder="283203"
              />
            </Field>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-primary font-display border-b border-slate-100 pb-2 mb-4">
              Program Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Field label="Qualification" required>
              <select
                required
                value={form.qualification}
                onChange={(e) => updateField('qualification', e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select</option>
                {qualificationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred Batch" required>
              <select
                required
                value={form.preferredBatch}
                onChange={(e) => updateField('preferredBatch', e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select</option>
                {batchOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Course / Program" required className="sm:col-span-2 lg:col-span-1">
              <select
                required
                value={form.courseInterested}
                onChange={(e) => updateField('courseInterested', e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select program</option>
                {courses.map((course) => (
                  <option key={course.title} value={course.title}>
                    {course.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </Field>
            <Field label="Aadhar (optional)">
              <input
                inputMode="numeric"
                maxLength={12}
                value={form.aadharNumber}
                onChange={(e) => updateField('aadharNumber', e.target.value)}
                className={inputClass}
                placeholder="12 digits"
              />
            </Field>
            <Field label="Message (optional)" className="sm:col-span-2 lg:col-span-3">
              <textarea
                rows={2}
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder="Any note or requirement"
              />
            </Field>
            </div>
          </div>

          {feedback && (
            <div className="flex items-center gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs font-semibold text-emerald-800">
              <Check className="h-4 w-4 shrink-0" />
              {feedback}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 border-t border-slate-100">
            <p className="text-xs text-slate-500 sm:flex-1 leading-relaxed">
              WhatsApp: <strong className="text-primary">9258410701</strong>
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-slate-900 hover:from-primary-hover hover:to-slate-950 text-white px-6 py-3 text-sm font-bold uppercase tracking-wide shadow-md transition-all shrink-0"
            >
              <Send className="h-4 w-4" />
              Submit via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
