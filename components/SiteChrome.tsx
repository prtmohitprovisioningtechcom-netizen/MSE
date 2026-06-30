'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocumentViewer = pathname === '/job-business-support';

  return (
    <div
      className={`flex flex-col bg-corp-bg text-corp-text ${
        isDocumentViewer ? 'h-dvh overflow-hidden' : 'min-h-screen'
      }`}
    >
      <Navbar />
      <main className={isDocumentViewer ? 'flex-1 min-h-0 overflow-y-auto' : 'grow'}>
        {children}
      </main>
      {!isDocumentViewer && <Footer />}
    </div>
  );
}
