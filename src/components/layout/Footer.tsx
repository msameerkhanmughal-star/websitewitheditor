import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Twitter, Dribbble, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/siteConfig';

const socialIcons: Record<string, typeof Github> = {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
};

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-crimson-950/10 pointer-events-none" />
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-crimson flex items-center justify-center font-display font-bold text-white text-lg">
                A
              </div>
              <span className="font-display text-lg font-semibold text-white">
                {siteConfig.name.split(' ')[0]}
                <span className="text-crimson-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              {siteConfig.shortBio}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-400 hover:text-crimson-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <Mail size={16} className="text-crimson-500" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <Phone size={16} className="text-crimson-500" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <MapPin size={16} className="text-crimson-500" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {siteConfig.social.map((social) => {
                const SocialIcon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-ink-300 hover:text-crimson-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {SocialIcon && <SocialIcon size={18} />}
                  </a>
                );
              })}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-ink-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {siteConfig.availability}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-ink-400 hover:text-crimson-400 transition-colors duration-300 group"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:bg-crimson-500/10 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
