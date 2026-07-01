import type { Metadata } from 'next';
import VisionPageContent from '@/components/VisionPageContent';
import { vision } from '@/lib/aboutContent';

export const metadata: Metadata = {
  title: 'Vision',
  description: vision.statement,
};

export default function VisionPage() {
  return <VisionPageContent />;
}
