import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'MSE | MSE Chambers of Commerce & Industry Association',
    template: '%s | MSE',
  },
  description:
    'MSE Chamber of Commerce & Industry Association - Partners In Growth, Nation In Progress. Supporting MSMEs, vendor development, SC/ST entrepreneurship, training, and government liaison.',
  keywords: [
    'MSME Support',
    'Industrial Development',
    'Vendor Development',
    'SC/ST Entrepreneurs',
    'Government Liaison',
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
      "Empowering MSMEs, Strengthening India's Industrial Future. Connecting enterprises, industries, and government for sustainable growth.",
    url: '/',
    siteName: 'MSE Portal',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSE - Partners In Growth, Nation In Progress',
    description: 'Advocacy, Vendor Development, and Grievance Resolution for MSMEs.',
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
