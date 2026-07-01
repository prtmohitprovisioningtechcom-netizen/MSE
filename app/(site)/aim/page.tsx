import type { Metadata } from 'next';
import AimPageContent from '@/components/AimPageContent';
import { aim } from '@/lib/aboutContent';

export const metadata: Metadata = {
  title: 'AIM',
  description: aim.intro,
};

export default function AimPage() {
  return <AimPageContent />;
}
