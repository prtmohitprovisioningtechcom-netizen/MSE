import type { Metadata } from 'next';
import MissionPageContent from '@/components/MissionPageContent';
import { mission } from '@/lib/aboutContent';

export const metadata: Metadata = {
  title: 'Mission',
  description: mission.statement,
};

export default function MissionPage() {
  return <MissionPageContent />;
}
