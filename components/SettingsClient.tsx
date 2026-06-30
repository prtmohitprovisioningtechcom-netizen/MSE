'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  User, Mail, Lock, Settings, AlertCircle, CheckCircle2, ArrowLeft
} from 'lucide-react';
import { updateProfileAction, changePasswordAction } from '@/actions/auth';

interface SettingsClientProps {
  user: { id: string; name: string; email: string; role: string };
}

export default function SettingsClient({ user }: SettingsClientProps) {
  const router = useRouter();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMsg, setProfileMsg] = useState<{ success?: string; error?: string }>({});

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState<{ success?: string; error?: string }>({});

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileMsg({});

    const result = await updateProfileAction({ name, email });
    setProfileLoading(false);

    if (result.error) {
      setProfileMsg({ error: result.error });
    } else {
      setProfileMsg({ success: result.message });
      router.refresh();
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordMsg({});

    const result = await changePasswordAction({ currentPassword, newPassword, confirmPassword });
    setPasswordLoading(false);

    if (result.error) {
      setPasswordMsg({ error: result.error });
    } else {
      setPasswordMsg({ success: result.message });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="py-12 px-6 max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/admin"
          className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">Account</span>
          <h1 className="text-2xl font-extrabold text-primary font-display flex items-center gap-2">
            <Settings className="h-6 w-6" /> Settings
          </h1>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="p-3 bg-primary/10 text-primary rounded-xl">
            <Settings className="h-5 w-5" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-slate-900">{user.name}</p>
            <p className="text-slate-500">{user.email}</p>
            <p className="text-secondary font-bold mt-0.5">{user.role}</p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">
            Profile Information
          </h2>

          {profileMsg.error && (
            <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs">
              <AlertCircle className="h-4 w-4 shrink-0" /> {profileMsg.error}
            </div>
          )}
          {profileMsg.success && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 text-xs">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> {profileMsg.success}
            </div>
          )}

          <form onSubmit={handleProfileUpdate} className="space-y-4 text-sm">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={profileLoading}
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all disabled:opacity-60"
            >
              {profileLoading ? 'Saving...' : 'Save Profile'}
            </button>
          </form>
        </section>

        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">
            Change Password
          </h2>

          {passwordMsg.error && (
            <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs">
              <AlertCircle className="h-4 w-4 shrink-0" /> {passwordMsg.error}
            </div>
          )}
          {passwordMsg.success && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 text-xs">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> {passwordMsg.success}
            </div>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-4 text-sm">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Current Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Confirm New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={passwordLoading}
              className="px-6 py-2.5 bg-secondary hover:bg-secondary-hover text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all disabled:opacity-60"
            >
              {passwordLoading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
