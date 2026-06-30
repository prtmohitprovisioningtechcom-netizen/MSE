import { Suspense } from 'react';
import AdminLoginClient from '@/components/AdminLoginClient';

export const metadata = { title: 'Admin Login' };

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[75vh] flex items-center justify-center text-slate-400">Loading...</div>}>
      <AdminLoginClient />
    </Suspense>
  );
}
