import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import InitiativePageContent from '@/components/InitiativePageContent';
import { getAllInitiativeSlugs, getInitiativeBySlug } from '@/lib/homeInitiatives';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllInitiativeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);
  if (!initiative) return { title: 'Initiative' };

  return {
    title: initiative.title,
    description: initiative.summary,
  };
}

export default async function InitiativePage({ params }: Props) {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);
  if (!initiative) notFound();

  return <InitiativePageContent initiative={initiative} />;
}
