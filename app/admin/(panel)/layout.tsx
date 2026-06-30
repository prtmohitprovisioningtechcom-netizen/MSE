import AdminHeader from '@/components/AdminHeader';

export default function AdminPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
