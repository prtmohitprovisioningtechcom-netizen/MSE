'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Shield, LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { adminLoginAction } from '@/actions/auth';

export default function AdminLoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/admin';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await adminLoginAction({ email, password });
    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    const target = redirectTo.startsWith('/admin') ? redirectTo : '/admin';
    router.push(target);
    router.refresh();
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-6 bg-linear-to-b from-slate-50 to-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex p-3 bg-primary/10 text-primary rounded-2xl">
            <Shield className="h-8 w-8" />
          </div>
          <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Administration</span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary font-display">Admin Login</h1>
          <p className="text-sm text-slate-500">MSE Chamber admin panel access only</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          {error && (
            <div className="mb-4 flex items-center gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs font-medium">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mse.org.in"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Link href="/admin/forgot-password" className="text-xs font-semibold text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-60"
            >
              <LogIn className="h-4 w-4" />
              {loading ? 'Signing in...' : 'Admin Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
