import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-crimson-500" />
          <span className="text-sm font-medium uppercase tracking-wider text-crimson-400">{eyebrow}</span>
          <span className="h-px w-8 bg-crimson-500" />
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg text-ink-300 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
