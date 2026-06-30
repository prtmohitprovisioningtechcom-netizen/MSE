'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';
import { forgotPasswordAction } from '@/actions/auth';

export default function ForgotPasswordClient() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const result = await forgotPasswordAction({ email });
    setLoading(false);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(result.message || 'Check your email for reset instructions.');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-2xl font-extrabold text-primary font-display">Forgot Password</h1>
          <p className="text-sm text-slate-500">Enter your email to receive password reset instructions</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          {error && (
            <div className="mb-4 flex items-center gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs">
              <AlertCircle className="h-4 w-4 shrink-0" /> {error}
            </div>
          )}
          {success && (
            <div className="mb-4 flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 text-xs">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-500 space-y-2">
            <Link href="/admin/reset-password" className="text-primary font-bold hover:underline block">
              Already have a reset link? Reset password here
            </Link>
            <Link href="/admin/login" className="inline-flex items-center gap-1 text-slate-500 hover:text-primary">
              <ArrowLeft className="h-3 w-3" /> Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
