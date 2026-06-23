import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: {
  default: 'MSE | MSE Chambers of Commerce & Industry Association',
    template: '%s | MSECCIA'
  },
  description: 'MSE Chamber of Commerce & Industry Association (MSECCIA) - Partners In Growth, Nation In Progress. Supporting MSMEs, vendor development, SC/ST entrepreneurship, training, and government liaison.',
  keywords: ['MSME Support', 'Industrial Development', 'Vendor Development', 'SC/ST Entrepreneurs', 'Government Liaison', 'Trade Fairs', 'MSECCIA', 'Chamber of Commerce India'],
  authors: [{ name: 'MSECCIA Secretariat' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'MSE Chamber of Commerce & Industry Association (MSECCIA)',
    description: 'Empowering MSMEs, Strengthening India\'s Industrial Future. Connecting enterprises, industries, and government for sustainable growth.',
    url: '/',
    siteName: 'MSECCIA Portal',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSECCIA - Partners In Growth, Nation In Progress',
    description: 'Advocacy, Vendor Development, and Grievance Resolution for MSMEs.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-corp-bg text-corp-text">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
