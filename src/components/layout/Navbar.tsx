import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="group flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-crimson flex items-center justify-center font-display font-bold text-white text-lg glow-crimson transition-transform duration-300 group-hover:scale-110">
                A
              </div>
              <span className="font-display text-lg font-semibold text-white tracking-tight">
                {siteConfig.name.split(' ')[0]}
                <span className="text-crimson-500">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                      isActive
                        ? 'text-white'
                        : 'text-ink-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-crimson" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link to="/hire-me" className="btn-primary text-sm">
                Get Started
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-lg"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center gap-2 pt-20 animate-fade-in">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-display font-semibold transition-all duration-300 ${
                    isActive ? 'text-crimson-500' : 'text-ink-200 hover:text-white'
                  }`}
                  style={{
                    animation: `fadeUp 0.4s ease ${i * 0.08}s both`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/hire-me"
              className="btn-primary mt-6 text-base"
              style={{ animation: 'fadeUp 0.4s ease 0.5s both' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
