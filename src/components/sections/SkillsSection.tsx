import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import { technologies } from '@/data/content';

export default function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>Tools & Technologies</>}
          subtitle="A modern toolkit honed over 8+ years of building production applications at scale."
        />

        <Reveal className="mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <div
                key={tech}
                className="px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-ink-200 transition-all duration-300"
                style={{
                  animation: `fadeIn 0.5s ease ${i * 0.04}s both`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <GlassCard hover={false} className="p-8 sm:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '99.98%', label: 'Average Uptime' },
                { value: '<200ms', label: 'API Response' },
                { value: '94+', label: 'Lighthouse Score' },
                { value: '0', label: 'Security Breaches' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-ink-400">{item.label}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
