import { redirect } from 'next/navigation';
import { getSession, isAdminRole, removeSessionCookie } from '@/lib/auth';
import SettingsClient from '@/components/SettingsClient';

export const metadata = { title: 'Admin Settings' };

export default async function AdminSettingsPage() {
  const session = await getSession();
  if (!session || !isAdminRole(session.role)) {
    await removeSessionCookie();
    redirect('/admin/login?redirect=/admin/settings');
  }

  const user = {
    id: session.id as string,
    name: session.name as string,
    email: session.email as string,
    role: session.role as string,
  };

  return <SettingsClient user={user} />;
}
