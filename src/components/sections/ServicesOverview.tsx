import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import { services } from '@/data/services';

export default function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="What I Do"
          title={<>Services Built for Scale</>}
          subtitle="From SaaS platforms to premium websites, I deliver end-to-end digital products with a focus on performance, design, and user experience."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <GlassCard className="p-6 h-full group">
                <div className="w-12 h-12 rounded-xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-crimson-500/20 group-hover:scale-110">
                  <Icon name={service.icon} size={22} className="text-crimson-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-4">{service.tagline}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-ink-500">From {service.startingPrice}</span>
                  <Link
                    to="/services"
                    className="flex items-center gap-1 text-xs text-crimson-400 hover:text-crimson-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
