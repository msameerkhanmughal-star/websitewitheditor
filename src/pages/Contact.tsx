import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check, AlertCircle, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const socialIcons: Record<string, typeof Github> = {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
};

type Status = 'idle' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
    if (status !== 'idle') setStatus('idle');
  };

  return (
    <div className="pt-28 pb-10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Get in touch</>}
          subtitle="Have a question, a project idea, or just want to say hello? I'd love to hear from you."
        />
      </div>

      <section className="section-padding pt-12">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Reveal>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                    { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                    { icon: MapPin, label: 'Location', value: siteConfig.location, href: null },
                    { icon: Clock, label: 'Availability', value: siteConfig.availability, href: null },
                  ].map((item) => (
                    <GlassCard key={item.label} className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center shrink-0">
                          <item.icon size={20} className="text-crimson-400" />
                        </div>
                        <div>
                          <div className="text-xs text-ink-500 uppercase tracking-wider">{item.label}</div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-white hover:text-crimson-400 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-sm text-white">{item.value}</div>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <GlassCard hover={false} className="p-6">
                  <h3 className="font-display text-base font-semibold text-white mb-4">Follow Me</h3>
                  <div className="flex gap-3">
                    {siteConfig.social.map((social) => {
                      const SocialIcon = socialIcons[social.icon];
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-ink-300 hover:text-crimson-400 transition-all duration-300"
                          aria-label={social.label}
                        >
                          {SocialIcon && <SocialIcon size={18} />}
                        </a>
                      );
                    })}
                  </div>
                </GlassCard>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={150}>
                <GlassCard hover={false} className="p-6 sm:p-8">
                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-2xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center mx-auto mb-6">
                        <Check size={32} className="text-crimson-400" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-white mb-3">
                        Message sent successfully
                      </h3>
                      <p className="text-ink-400 mb-8 max-w-md mx-auto">
                        Thank you for reaching out. I'll get back to you as soon as possible — usually
                        within 24 hours.
                      </p>
                      <button onClick={() => setStatus('idle')} className="btn-ghost">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <h3 className="font-display text-lg font-semibold text-white mb-6">
                        Send a Message
                      </h3>

                      {status === 'error' && Object.keys(errors).length > 0 && (
                        <div className="mb-6 p-4 rounded-xl bg-crimson-500/10 border border-crimson-500/30 flex items-center gap-3">
                          <AlertCircle size={18} className="text-crimson-400 shrink-0" />
                          <span className="text-sm text-crimson-300">
                            Please fix the errors below and try again.
                          </span>
                        </div>
                      )}

                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm text-ink-300 mb-2">
                              Name <span className="text-crimson-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-colors ${
                                errors.name
                                  ? 'border-crimson-500/50 focus:border-crimson-500'
                                  : 'border-white/10 focus:border-crimson-500/50'
                              }`}
                              placeholder="Your name"
                            />
                            {errors.name && (
                              <p className="mt-1.5 text-xs text-crimson-400">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm text-ink-300 mb-2">
                              Email <span className="text-crimson-500">*</span>
                            </label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-colors ${
                                errors.email
                                  ? 'border-crimson-500/50 focus:border-crimson-500'
                                  : 'border-white/10 focus:border-crimson-500/50'
                              }`}
                              placeholder="you@email.com"
                            />
                            {errors.email && (
                              <p className="mt-1.5 text-xs text-crimson-400">{errors.email}</p>
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-ink-300 mb-2">
                            Subject <span className="text-crimson-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={form.subject}
                            onChange={(e) => handleChange('subject', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-colors ${
                              errors.subject
                                ? 'border-crimson-500/50 focus:border-crimson-500'
                                : 'border-white/10 focus:border-crimson-500/50'
                            }`}
                            placeholder="What's this about?"
                          />
                          {errors.subject && (
                            <p className="mt-1.5 text-xs text-crimson-400">{errors.subject}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm text-ink-300 mb-2">
                            Message <span className="text-crimson-500">*</span>
                          </label>
                          <textarea
                            rows={6}
                            value={form.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-colors resize-none ${
                              errors.message
                                ? 'border-crimson-500/50 focus:border-crimson-500'
                                : 'border-white/10 focus:border-crimson-500/50'
                            }`}
                            placeholder="Tell me about your project, question, or idea..."
                          />
                          {errors.message && (
                            <p className="mt-1.5 text-xs text-crimson-400">{errors.message}</p>
                          )}
                        </div>

                        <button type="submit" className="btn-primary w-full sm:w-auto">
                          <Send size={16} />
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
