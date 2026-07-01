import dynamic from 'next/dynamic';
import HomeClient from '@/components/HomeClient';

const IndustriesShowcase = dynamic(() => import('@/components/IndustriesShowcase'), {
  loading: () => <div className="min-h-48 bg-slate-100 animate-pulse border-t border-slate-200" />,
});

const CoursesShowcase = dynamic(() => import('@/components/CoursesShowcase'), {
  loading: () => <div className="min-h-48 bg-slate-100 animate-pulse border-t border-slate-200" />,
});

export default function Home() {
  return (
    <>
      <HomeClient />
      <IndustriesShowcase />
      <CoursesShowcase />
    </>
  );
}
