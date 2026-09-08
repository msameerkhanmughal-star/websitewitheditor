import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden glass-strong p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-crimson-600/20 blur-[100px] -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-crimson-950/20 via-transparent to-transparent" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-ink-200">{siteConfig.availability}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Let's build something
              <span className="text-gradient"> extraordinary</span> together
            </h2>

            <p className="mt-5 text-base sm:text-lg text-ink-300 max-w-xl mx-auto">
              Have a project in mind? I'm currently taking on new clients. Let's turn your idea into a
              product that scales.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/hire-me" className="btn-primary w-full sm:w-auto">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="btn-ghost w-full sm:w-auto">
                <Mail size={18} />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
