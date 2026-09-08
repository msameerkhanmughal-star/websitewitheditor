import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-crimson-600/10 blur-3xl" />
          </div>
          <div className="relative">
            <h1 className="font-display text-[120px] sm:text-[180px] font-bold leading-none text-gradient">
              404
            </h1>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <Compass size={16} className="text-crimson-400" />
          <span className="text-sm text-ink-200">Page not found</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
          This page wandered off
        </h2>
        <p className="text-ink-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={18} />
            Back Home
          </Link>
          <Link to="/portfolio" className="btn-ghost">
            <ArrowLeft size={18} />
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
