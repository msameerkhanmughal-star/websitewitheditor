import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import { services } from '@/data/services';

export default function Services() {
  return (
    <div className="pt-28 pb-10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title={<>What I can do for you</>}
          subtitle="Comprehensive development services covering the entire product lifecycle — from concept to launch and beyond."
        />
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-6">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 60}>
                <GlassCard className="p-6 sm:p-8 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-1">
                      <div className="w-14 h-14 rounded-2xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-crimson-500/20 group-hover:scale-110">
                        <Icon name={service.icon} size={26} className="text-crimson-400" />
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-crimson-400 font-medium mb-3">{service.tagline}</p>
                      <p className="text-sm text-ink-400 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="lg:col-span-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check size={15} className="text-crimson-500 shrink-0 mt-0.5" />
                            <span className="text-xs text-ink-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2 lg:text-right">
                      <div className="text-xs text-ink-500 mb-1">Starting at</div>
                      <div className="font-display text-xl font-bold text-gradient mb-4">
                        {service.startingPrice}
                      </div>
                      <Link
                        to="/hire-me"
                        className="inline-flex items-center gap-1.5 text-sm text-crimson-400 hover:text-crimson-300 transition-colors"
                      >
                        Get started
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden glass-strong p-8 sm:p-12 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-crimson-600/20 blur-[100px] -z-10" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Not sure which service fits your project?
              </h2>
              <p className="text-ink-400 max-w-xl mx-auto mb-8">
                Let's talk it through. I'll help you scope the work and recommend the best approach — no
                commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/hire-me" className="btn-primary">
                  Start a Project
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Ask a Question
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
