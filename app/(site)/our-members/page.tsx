import type { Metadata } from 'next';
import OurMembersPageContent from '@/components/OurMembersPageContent';
import { ourMembers } from '@/lib/ourMembersContent';

export const metadata: Metadata = {
  title: 'Our Members',
  description: ourMembers.pageTitle,
};

export default function OurMembersPage() {
  return <OurMembersPageContent />;
}
