import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonLinkProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonLinkProps) {
  const classes = `${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
