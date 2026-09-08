import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import { projects, projectCategories } from '@/data/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Projects & Case Studies</>}
          subtitle="A collection of SaaS products, web applications, websites, and digital products I've designed and built."
        />
      </div>

      <section className="section-padding pt-12">
        <div className="container-narrow">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-crimson text-white shadow-lg shadow-crimson-900/30'
                      : 'glass text-ink-300 hover:text-white hover:border-crimson-500/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-400">No projects in this category yet.</p>
            </div>
          )}

          <Reveal className="mt-16 text-center">
            <div className="inline-block">
              <p className="text-ink-400 mb-4">Want to see more or discuss a custom project?</p>
              <Link to="/hire-me" className="btn-primary">
                Let's Work Together
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
