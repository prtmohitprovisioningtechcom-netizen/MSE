import dynamic from 'next/dynamic';
import HomeClient from '@/components/HomeClient';

const IndustriesShowcase = dynamic(() => import('@/components/IndustriesShowcase'), {
  loading: () => <div className="min-h-48 bg-slate-100 animate-pulse border-t border-slate-200" />,
});

const CoursesShowcase = dynamic(() => import('@/components/CoursesShowcase'), {
  loading: () => <div className="min-h-48 bg-slate-100 animate-pulse border-t border-slate-200" />,
});

// ============================================================================
// 🔴 ERROR TOGGLE:
// Error dikhane ke liye: true
// Error hatane ke liye : false
// ============================================================================
const SHOW_ERROR = true;

export default function Home() {
  if (SHOW_ERROR) {
    throw new Error(
      "Unhandled Runtime Error: Critical system failure! Connection to database and API services refused (ERR_CONNECTION_REFUSED)."
    );
  }

  return (
    <>
      <HomeClient />
      <IndustriesShowcase />
      <CoursesShowcase />
    </>
  );
}
