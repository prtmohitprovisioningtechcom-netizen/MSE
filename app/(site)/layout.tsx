import SiteChrome from '@/components/SiteChrome';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteChrome>{children}</SiteChrome>;
}
