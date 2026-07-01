import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'MSE | MSE Chambers of Commerce & Industry Association',
    template: '%s | MSE',
  },
  description:
    'MSE Chambers of Commerce & Industry Association (MSE-CCIA). Skill development, industries development, government scheme awareness, MSME support, training programs and industrial programs.',
  keywords: [
    'MSME Support',
    'Industrial Development',
    'Vendor Development',
    'SC/ST Entrepreneurs',
    'Government License',
    'Trade Fairs',
    'MSE',
    'Chamber of Commerce India',
  ],
  authors: [{ name: 'MSE Secretariat' }],
  icons: {
    icon: [{ url: '/mse.jpeg', type: 'image/jpeg' }],
    shortcut: '/mse.jpeg',
    apple: '/mse.jpeg',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'MSE Chamber of Commerce & Industry Association',
    description:
      'Upgrade Your Skills development and industries development. Seminar awareness, government scheme and skill development programs by MSE-CCIA.',
    url: '/',
    siteName: 'MSE Portal',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSE-CCIA | Skill & Industries Development',
    description: 'MSME support, skill development, government scheme awareness and training programs.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>{children}</body>
    </html>
  );
}
