import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/projects';
import GlassCard from './GlassCard';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="block group">
      <GlassCard className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
          <img
            src={project.coverImage}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full glass-strong text-xs font-medium text-crimson-300">
              {project.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-xl glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2 text-xs text-ink-400">
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-ink-600" />
            <span>{project.technologies.slice(0, 3).join(', ')}</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-crimson-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-ink-400 leading-relaxed flex-grow line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-4">
            {project.liveUrl && (
              <span className="flex items-center gap-1.5 text-xs text-ink-400 group-hover:text-crimson-400 transition-colors">
                <ExternalLink size={14} />
                Live Demo
              </span>
            )}
            {project.sourceUrl && (
              <span className="flex items-center gap-1.5 text-xs text-ink-400">
                <Github size={14} />
                Source
              </span>
            )}
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
