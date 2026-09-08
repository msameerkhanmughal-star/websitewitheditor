import { useState } from 'react';
import { ArrowRight, Check, Clock, DollarSign, Briefcase, Send } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/data/services';

const budgetRanges = [
  '$2,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
];

const timelines = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Flexible',
];

export default function HireMe() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hire Me"
          title={<>Let's start your project</>}
          subtitle="Tell me about your project and I'll get back to you within 24 hours with a tailored proposal."
        />
      </div>

      <section className="section-padding pt-12">
        <div className="container-narrow">
          {submitted ? (
            <Reveal>
              <GlassCard hover={false} className="p-8 sm:p-12 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-crimson-400" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  Project brief received
                </h3>
                <p className="text-ink-400 leading-relaxed mb-6">
                  Thank you, {name}. I've received your project details and will review them carefully.
                  Expect a personalized response within 24 hours at {email}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedService('');
                    setBudget('');
                    setTimeline('');
                    setName('');
                    setEmail('');
                    setDescription('');
                  }}
                  className="btn-ghost"
                >
                  Submit Another Brief
                </button>
              </GlassCard>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Reveal>
                  <GlassCard hover={false} className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center">
                        <Briefcase size={20} className="text-crimson-400" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">Select a Service</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                            selectedService === service.id
                              ? 'bg-crimson-500/10 border-crimson-500/40'
                              : 'glass border-white/8 hover:border-crimson-500/20'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm text-white">{service.title}</span>
                            {selectedService === service.id && (
                              <Check size={16} className="text-crimson-400" />
                            )}
                          </div>
                          <span className="text-xs text-ink-500">From {service.startingPrice}</span>
                        </button>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={100}>
                  <GlassCard hover={false} className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center">
                        <DollarSign size={20} className="text-crimson-400" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">Budget Range</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setBudget(range)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                            budget === range
                              ? 'bg-gradient-crimson text-white'
                              : 'glass text-ink-300 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={150}>
                  <GlassCard hover={false} className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center">
                        <Clock size={20} className="text-crimson-400" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">Timeline</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                            timeline === t
                              ? 'bg-gradient-crimson text-white'
                              : 'glass text-ink-300 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={200}>
                  <GlassCard hover={false} className="p-6 sm:p-8">
                    <h3 className="font-display text-lg font-semibold text-white mb-6">Project Details</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-ink-300 mb-2">Your Name</label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-crimson-500/50 transition-colors"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-ink-300 mb-2">Email Address</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-crimson-500/50 transition-colors"
                            placeholder="jane@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-ink-300 mb-2">Project Description</label>
                        <textarea
                          required
                          rows={5}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-crimson-500/50 transition-colors resize-none"
                          placeholder="Tell me about your project, goals, and any specific requirements..."
                        />
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>

              <div className="space-y-6">
                <Reveal delay={100}>
                  <GlassCard hover={false} className="p-6 sticky top-24">
                    <h3 className="font-display text-base font-semibold text-white mb-5">Summary</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs text-ink-500 mb-1">Service</div>
                        <div className="text-sm text-white">
                          {selectedService
                            ? services.find((s) => s.id === selectedService)?.title
                            : 'Not selected'}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-ink-500 mb-1">Budget</div>
                        <div className="text-sm text-white">{budget || 'Not selected'}</div>
                      </div>
                      <div>
                        <div className="text-xs text-ink-500 mb-1">Timeline</div>
                        <div className="text-sm text-white">{timeline || 'Not selected'}</div>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send size={16} />
                      Submit Brief
                    </button>

                    <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-ink-400">
                        <Check size={14} className="text-crimson-500" />
                        Response within 24 hours
                      </div>
                      <div className="flex items-center gap-2 text-xs text-ink-400">
                        <Check size={14} className="text-crimson-500" />
                        No commitment required
                      </div>
                      <div className="flex items-center gap-2 text-xs text-ink-400">
                        <Check size={14} className="text-crimson-500" />
                        Free initial consultation
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
