import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Featured Work"
          title={<>Selected Projects</>}
          subtitle="A curated selection of SaaS products, web applications, and digital experiences I've built recently."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link to="/portfolio" className="btn-ghost inline-flex">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
