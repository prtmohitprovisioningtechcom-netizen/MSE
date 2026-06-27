import HomeClient from '@/components/HomeClient';
import IndustriesShowcase from '@/components/IndustriesShowcase';
import CoursesShowcase from '@/components/CoursesShowcase';

export default function Home() {
  return (
    <>
      <HomeClient />
      <IndustriesShowcase />
      <CoursesShowcase />
    </>
  );
}
