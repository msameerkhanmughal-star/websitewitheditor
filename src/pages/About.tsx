import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, Coffee, Lightbulb, Rocket } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';
import { skills, skillCategories, journey, achievements, technologies } from '@/data/content';

export default function About() {
  return (
    <div className="pt-28 pb-10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={<>The person behind the code</>}
          subtitle="Get to know my journey, philosophy, and the experience I bring to every project."
        />
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <Reveal className="lg:col-span-2">
              <div className="relative">
                <div className="glass-card p-2 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/20604354/pexels-photo-20604354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Adrian Vance"
                    className="w-full h-[480px] object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 glass-strong rounded-2xl px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Coffee size={20} className="text-crimson-400" />
                    <div>
                      <div className="text-xs text-ink-400">Fuel</div>
                      <div className="text-sm font-semibold text-white">Coffee + Code</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-28 h-28 rounded-full bg-crimson-500/20 blur-3xl -z-10" />
              </div>
            </Reveal>

            <div className="lg:col-span-3 space-y-6">
              <Reveal>
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  Full-stack developer. Digital creator. Problem solver.
                </h3>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-ink-400 leading-relaxed">
                  I'm {siteConfig.name}, a digital product developer based in {siteConfig.location}. Over the
                  past 8+ years, I've built everything from scrappy MVPs to enterprise SaaS platforms serving
                  hundreds of thousands of users. My work spans the full stack — from pixel-perfect frontend
                  interfaces to robust, scalable backend architectures.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-ink-400 leading-relaxed">
                  What sets me apart isn't just technical skill — it's the obsession with the details that
                  make a product feel premium. The buttery-smooth animations. The sub-200ms response times.
                  The accessibility that ensures everyone can use what I build. I believe great software
                  should feel effortless, and that philosophy drives every line of code I write.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-ink-400 leading-relaxed">
                  When I'm not shipping products, you'll find me exploring new technologies, contributing to
                  open-source, or mentoring aspiring developers. I'm always learning, always improving, and
                  always looking for the next challenge worth solving.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link to="/hire-me" className="btn-primary">
                    Work With Me
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/portfolio" className="btn-ghost">
                    View Portfolio
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <SectionHeading eyebrow="Journey" title={<>My Experience</>} />
          <div className="mt-14 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-crimson-500 via-crimson-800 to-transparent -translate-x-1/2" />
            <div className="space-y-8">
              {journey.map((item, i) => (
                <Reveal key={item.year} delay={i * 100}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    <div className="hidden sm:block flex-1" />
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-crimson-500 ring-4 ring-crimson-500/20 mt-2" />
                    <div className="flex-1 pl-12 sm:pl-0">
                      <GlassCard className="p-5">
                        <div className="text-crimson-400 font-display font-semibold text-sm mb-1">
                          {item.year}
                        </div>
                        <h4 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
                      </GlassCard>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <SectionHeading eyebrow="Expertise" title={<>Skills & Proficiency</>} />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, ci) => (
              <Reveal key={category} delay={ci * 100}>
                <GlassCard hover={false} className="p-6">
                  <h4 className="font-display text-sm font-semibold text-crimson-400 uppercase tracking-wider mb-5">
                    {category}
                  </h4>
                  <div className="space-y-4">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-ink-200">{skill.name}</span>
                            <span className="text-xs text-ink-500">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-crimson transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <GlassCard hover={false} className="p-6">
              <h4 className="font-display text-sm font-semibold text-crimson-400 uppercase tracking-wider mb-4">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg glass text-sm text-ink-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <SectionHeading eyebrow="Recognition" title={<>Achievements</>} />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, i) => {
              const icons = [Award, Rocket, Briefcase, Lightbulb];
              const AchievementIcon = icons[i % icons.length];
              return (
                <Reveal key={achievement.title} delay={i * 80}>
                  <GlassCard className="p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center mx-auto mb-4">
                      <AchievementIcon size={22} className="text-crimson-400" />
                    </div>
                    <h4 className="font-display text-base font-semibold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-ink-400 leading-relaxed">{achievement.description}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <SectionHeading eyebrow="Philosophy" title={<>How I Work</>} />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Discover',
                description: 'I start by deeply understanding the problem, the users, and the business goals. No assumptions — just questions, research, and strategy.',
              },
              {
                icon: Rocket,
                title: 'Build',
                description: 'Rapid, iterative development with constant feedback loops. Clean architecture, tested code, and attention to every detail.',
              },
              {
                icon: Award,
                title: 'Deliver',
                description: 'I don\'t just ship code — I deliver products. Polished, documented, and ready to scale from day one with ongoing support.',
              },
            ].map((phase, i) => (
              <Reveal key={phase.title} delay={i * 100}>
                <GlassCard className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center">
                      <phase.icon size={22} className="text-crimson-400" />
                    </div>
                    <div className="font-display text-2xl font-bold text-ink-600">
                      0{i + 1}
                    </div>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white mb-3">{phase.title}</h4>
                  <p className="text-sm text-ink-400 leading-relaxed">{phase.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
