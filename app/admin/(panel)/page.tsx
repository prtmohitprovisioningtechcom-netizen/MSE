import { redirect } from 'next/navigation';
import { getSession, isAdminRole, removeSessionCookie } from '@/lib/auth';
import { getAdminDashboardStats } from '@/actions/admin';
import AdminClient from '@/components/AdminClient';

export const metadata = { title: 'Admin Dashboard' };

export default async function AdminPage() {
  const session = await getSession();
  if (!session || !isAdminRole(session.role)) {
    await removeSessionCookie();
    redirect('/admin/login?redirect=/admin');
  }

  const result = await getAdminDashboardStats();
  if (result.error || !result.stats || !result.data) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-rose-600 font-bold">Failed to load admin dashboard</p>
        <p className="text-sm text-slate-500">{result.error}</p>
      </div>
    );
  }

  return (
    <AdminClient
      stats={result.stats}
      initialData={result.data}
      adminUser={session}
    />
  );
}
