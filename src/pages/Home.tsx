import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ServicesOverview from '@/components/sections/ServicesOverview';
import SkillsSection from '@/components/sections/SkillsSection';
import ShortAbout from '@/components/sections/ShortAbout';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <SkillsSection />
      <ShortAbout />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
