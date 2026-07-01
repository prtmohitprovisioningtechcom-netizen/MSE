import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import InitiativePageContent from '@/components/InitiativePageContent';
import PromotionOfMsmePage from '@/components/initiatives/PromotionOfMsmePage';
import ScStEntrepreneurSupportPage from '@/components/initiatives/ScStEntrepreneurSupportPage';
import SkillDevelopmentPage from '@/components/initiatives/SkillDevelopmentPage';
import IndustrialGrievanceResolutionPage from '@/components/initiatives/IndustrialGrievanceResolutionPage';
import VendorDevelopmentProgramsPage from '@/components/initiatives/VendorDevelopmentProgramsPage';
import GovernmentSchemeAwarenessPage from '@/components/initiatives/GovernmentSchemeAwarenessPage';
import TradeFairsExhibitionsPage from '@/components/initiatives/TradeFairsExhibitionsPage';
import MsmeSupportPage from '@/components/initiatives/MsmeSupportPage';
import GovernmentLicensePage from '@/components/initiatives/GovernmentLicensePage';
import IndustrialDevelopmentPage from '@/components/initiatives/IndustrialDevelopmentPage';
import TrainingAwarenessPage from '@/components/initiatives/TrainingAwarenessPage';
import GovernmentLiaisonPage from '@/components/initiatives/GovernmentLiaisonPage';
import BusinessPlanPage from '@/components/initiatives/BusinessPlanPage';
import GovernmentAwardsPage from '@/components/initiatives/GovernmentAwardsPage';
import MseCciaAwardPage from '@/components/initiatives/MseCciaAwardPage';
import IndustryAwarenessProgramPage from '@/components/initiatives/IndustryAwarenessProgramPage';
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

  if (slug === 'promotion-of-msmes') {
    return <PromotionOfMsmePage />;
  }

  if (slug === 'sc-st-entrepreneur-support') {
    return <ScStEntrepreneurSupportPage />;
  }

  if (slug === 'skill-development') {
    return <SkillDevelopmentPage />;
  }

  if (slug === 'industrial-grievance-resolution') {
    return <IndustrialGrievanceResolutionPage />;
  }

  if (slug === 'vendor-development-programs') {
    return <VendorDevelopmentProgramsPage />;
  }

  if (slug === 'government-scheme-awareness') {
    return <GovernmentSchemeAwarenessPage />;
  }

  if (slug === 'trade-fairs-exhibitions') {
    return <TradeFairsExhibitionsPage />;
  }

  if (slug === 'msme-support') {
    return <MsmeSupportPage />;
  }

  if (slug === 'government-liaison') {
    return <GovernmentLiaisonPage />;
  }

  if (slug === 'government-license') {
    return <GovernmentLicensePage />;
  }

  if (slug === 'industrial-development') {
    return <IndustrialDevelopmentPage />;
  }

  if (slug === 'training-awareness') {
    return <TrainingAwarenessPage />;
  }

  if (slug === 'vendor-development') {
    return <BusinessPlanPage />;
  }

  if (slug === 'business-plan') {
    return <BusinessPlanPage />;
  }

  if (slug === 'government-awards') {
    return <GovernmentAwardsPage />;
  }

  if (slug === 'mse-ccia') {
    return <MseCciaAwardPage />;
  }

  if (slug === 'industry-awareness-program') {
    return <IndustryAwarenessProgramPage />;
  }

  return <InitiativePageContent initiative={initiative} />;
}
