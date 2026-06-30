import Link from 'next/link';
import Image from 'next/image';
import { Settings, LogOut, ExternalLink } from 'lucide-react';
import { getSession } from '@/lib/auth';
import { logoutAction } from '@/actions/auth';
import { redirect } from 'next/navigation';

async function LogoutButton() {
  async function handleLogout() {
    'use server';
    await logoutAction();
    redirect('/admin/login');
  }

  return (
    <form action={handleLogout}>
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
      >
        <LogOut className="h-3.5 w-3.5" /> Logout
      </button>
    </form>
  );
}

export default async function AdminHeader() {
  const session = await getSession();

  if (!session) return null;

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Image src="/mse.jpeg" alt="MSE" width={40} height={40} className="h-10 w-10 object-contain rounded-lg bg-white/10 p-0.5" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Administration</p>
            <p className="text-sm font-bold truncate">MSE Admin Panel</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline text-xs text-slate-400 truncate max-w-40">
            {String(session.name)} · {String(session.role)}
          </span>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Website
          </Link>
          <Link
            href="/admin/settings"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            <Settings className="h-3.5 w-3.5" /> Settings
          </Link>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
