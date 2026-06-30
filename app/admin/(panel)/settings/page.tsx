import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import SettingsClient from '@/components/SettingsClient';

export const metadata = { title: 'Admin Settings' };

export default async function AdminSettingsPage() {
  const session = await getSession();
  if (!session) redirect('/admin/login?redirect=/admin/settings');

  if (session.role !== 'Admin' && session.role !== 'Super Admin') {
    redirect('/admin/login');
  }

  const user = {
    id: session.id as string,
    name: session.name as string,
    email: session.email as string,
    role: session.role as string,
  };

  return <SettingsClient user={user} />;
}
