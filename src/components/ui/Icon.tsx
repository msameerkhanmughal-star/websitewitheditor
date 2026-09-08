import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Layers,
  Code2,
  Globe,
  Palette,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Layers,
  Code2,
  Globe,
  Palette,
  RefreshCw,
  Wrench,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = '', size = 24 }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
}
