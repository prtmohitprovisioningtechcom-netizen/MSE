import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'MSE Admin',
    template: '%s | MSE Admin',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-slate-100 text-slate-900">{children}</div>;
}
