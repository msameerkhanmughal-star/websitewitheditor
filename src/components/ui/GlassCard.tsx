import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className = '', hover = true, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass-card ${hover ? 'glass-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
