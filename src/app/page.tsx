import Hero from '@/components/Hero';
import AboutTeaser from '@/components/AboutTeaser';
import ProjectsGrid from '@/components/ProjectsGrid';
import CtaBanner from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ProjectsGrid />
      <CtaBanner />
    </>
  );
}
