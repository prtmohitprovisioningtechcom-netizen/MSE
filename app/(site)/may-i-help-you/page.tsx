import type { Metadata } from 'next';
import MayIHelpYouPageContent from '@/components/MayIHelpYouPageContent';
import { mayIHelpYou } from '@/lib/aboutContent';

export const metadata: Metadata = {
  title: 'May I Help You',
  description: `MSE-CCIA help desk — ${mayIHelpYou.services.slice(0, 5).join(', ')} and more.`,
};

export default function MayIHelpYouPage() {
  return <MayIHelpYouPageContent />;
}
