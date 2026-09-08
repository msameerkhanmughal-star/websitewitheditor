import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Client Feedback"
          title={<>What Clients Say</>}
          subtitle="Trusted by founders and teams across the globe to deliver products that exceed expectations."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 80}>
              <div className="glass-card p-6 h-full flex flex-col">
                <Quote size={28} className="text-crimson-500/30 mb-4" />
                <p className="text-sm text-ink-200 leading-relaxed flex-grow mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                  />
                  <div className="flex-grow">
                    <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-ink-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} size={12} className="fill-crimson-500 text-crimson-500" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
