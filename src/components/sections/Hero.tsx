import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Code2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles size={16} className="text-crimson-400" />
            <span className="text-sm text-ink-200">{siteConfig.availability}</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-gradient-light">Hi, I'm </span>
            <span className="text-gradient">{siteConfig.name}</span>
          </h1>

          <p
            className="mt-6 text-xl sm:text-2xl lg:text-3xl font-display font-medium text-ink-200 animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            {siteConfig.title}
          </p>

          <p
            className="mt-6 text-base sm:text-lg text-ink-400 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {siteConfig.tagline}
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.65s' }}
          >
            <Link to="/portfolio" className="btn-primary w-full sm:w-auto">
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link to="/hire-me" className="btn-ghost w-full sm:w-auto">
              Hire Me
              <Zap size={18} />
            </Link>
          </div>

          <div
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="glass-card p-4 sm:p-6">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-ink-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-ink-500">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-crimson-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
