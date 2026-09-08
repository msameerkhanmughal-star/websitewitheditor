import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import GlassCard from '@/components/ui/GlassCard';
import { siteConfig } from '@/data/siteConfig';

export default function ShortAbout() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                <img
                  src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Workspace"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 max-w-[200px] hidden sm:block">
                <div className="font-display text-3xl font-bold text-gradient">8+</div>
                <div className="text-sm text-ink-400 mt-1">Years of experience building digital products</div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-crimson-500/20 blur-3xl -z-10" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-crimson-500" />
                <span className="text-sm font-medium uppercase tracking-wider text-crimson-400">About Me</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Building digital products that people love to use
              </h2>
              <p className="text-ink-400 leading-relaxed mb-6">
                {siteConfig.shortBio}
              </p>
              <p className="text-ink-400 leading-relaxed mb-8">
                I work with founders, startups, and established companies to turn ideas into polished,
                production-ready products. From architecture to deployment, I own the entire process.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Full-stack expertise',
                  'Design-driven approach',
                  'Performance obsessed',
                  'Clean, maintainable code',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-crimson-500 shrink-0" />
                    <span className="text-sm text-ink-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link to="/about" className="btn-primary">
                  More About Me
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
