import type { Metadata } from 'next';
import DirectorMessagePageContent from '@/components/DirectorMessagePageContent';
import { directorMessage } from '@/lib/aboutContent';

export const metadata: Metadata = {
  title: 'Director Message',
  description: `Message from ${directorMessage.name}, ${directorMessage.designation} — ${directorMessage.organization}`,
};

export default function DirectorMessagePage() {
  return <DirectorMessagePageContent />;
}
