import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, TrendingUp, Calendar, Tag } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { projects } from '@/data/projects';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 to-transparent" />

        <div className="relative h-full container-narrow px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-crimson-400 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full glass-strong text-xs font-medium text-crimson-300">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-ink-400">
                <Calendar size={14} />
                {project.year}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg text-ink-300 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <GlassCard hover={false} className="p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-white mb-4">Project Overview</h2>
                  <p className="text-ink-400 leading-relaxed">{project.fullDescription}</p>
                </GlassCard>
              </Reveal>

              <Reveal>
                <GlassCard hover={false} className="p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-white mb-5">Key Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 size={18} className="text-crimson-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-ink-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="font-display text-xl font-semibold text-white mb-5">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative rounded-2xl overflow-hidden glass-card p-1.5 group"
                      >
                        <img
                          src={image}
                          alt={`${project.name} screenshot ${i + 1}`}
                          loading="lazy"
                          className="w-full h-56 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="space-y-6">
              <Reveal>
                <GlassCard hover={false} className="p-6">
                  <h3 className="font-display text-base font-semibold text-white mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <Button href={project.liveUrl} variant="primary" className="w-full justify-center">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    {project.sourceUrl && (
                      <Button href={project.sourceUrl} variant="ghost" className="w-full justify-center">
                        <Github size={16} />
                        Source Code
                      </Button>
                    )}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={100}>
                <GlassCard hover={false} className="p-6">
                  <h3 className="font-display text-base font-semibold text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs text-ink-200"
                      >
                        <Tag size={11} className="text-crimson-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={150}>
                <GlassCard hover={false} className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={18} className="text-crimson-400" />
                    <h3 className="font-display text-base font-semibold text-white">Results</h3>
                  </div>
                  <div className="space-y-4">
                    {project.highlights.map((highlight) => (
                      <div key={highlight.label} className="flex justify-between items-center">
                        <span className="text-sm text-ink-400">{highlight.label}</span>
                        <span className="font-display text-lg font-bold text-gradient">
                          {highlight.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-narrow">
            <h2 className="font-display text-2xl font-bold text-white mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rp, i) => (
                <Reveal key={rp.slug} delay={i * 80}>
                  <Link to={`/portfolio/${rp.slug}`} className="block group">
                    <GlassCard className="overflow-hidden">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                        <img
                          src={rp.coverImage}
                          alt={rp.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent" />
                      </div>
                      <div className="p-5">
                        <span className="text-xs text-crimson-400">{rp.category}</span>
                        <h3 className="font-display text-lg font-semibold text-white mt-1 group-hover:text-crimson-300 transition-colors">
                          {rp.name}
                        </h3>
                      </div>
                    </GlassCard>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
