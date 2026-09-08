export interface Service {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  startingPrice: string;
}

export const services: Service[] = [
  {
    id: 'saas-development',
    title: 'SaaS Development',
    icon: 'Layers',
    tagline: 'Build scalable, multi-tenant platforms from the ground up.',
    description:
      'From MVP to enterprise-grade, I architect and build SaaS products that handle complex business logic, scale to millions of users, and generate real revenue. Full ownership of the stack — from database design to deployment.',
    features: [
      'Multi-tenant architecture design',
      'Subscription billing with Stripe',
      'Role-based access control',
      'API design and documentation',
      'CI/CD pipeline setup',
      'Cloud infrastructure (AWS/Vercel)',
    ],
    startingPrice: '$15,000',
  },
  {
    id: 'web-app-development',
    title: 'Web App Development',
    icon: 'Code2',
    tagline: 'Interactive, data-driven applications that users love.',
    description:
      'Custom web applications built with React and modern tooling. Whether it\'s a dashboard, internal tool, or customer portal, I create fast, responsive, and accessible interfaces backed by robust APIs.',
    features: [
      'React / Next.js development',
      'Real-time features with WebSockets',
      'State management architecture',
      'Performance optimization',
      'Cross-browser compatibility',
      'End-to-end testing',
    ],
    startingPrice: '$8,000',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    icon: 'Globe',
    tagline: 'Premium marketing sites that convert visitors into clients.',
    description:
      'High-performance websites that blend stunning design with technical excellence. From landing pages to multi-page corporate sites, every project is built to rank well, load fast, and drive conversions.',
    features: [
      'Responsive design (mobile-first)',
      'SEO optimization',
      'Core Web Vitals compliance',
      'CMS integration',
      'Analytics and tracking setup',
      'Accessibility (WCAG 2.1)',
    ],
    startingPrice: '$4,000',
  },
  {
    id: 'ui-ux-implementation',
    title: 'UI/UX Implementation',
    icon: 'Palette',
    tagline: 'Pixel-perfect designs brought to life with motion and polish.',
    description:
      'I take Figma designs and turn them into living, breathing interfaces. Every animation, transition, and interaction is crafted to feel intentional and elevate the user experience.',
    features: [
      'Figma to code conversion',
      'Design system implementation',
      'Micro-interactions and animations',
      'Component library development',
      'Dark mode and theming',
      'Responsive breakpoints',
    ],
    startingPrice: '$3,000',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    icon: 'RefreshCw',
    tagline: 'Transform outdated sites into modern, high-converting experiences.',
    description:
      'A complete overhaul of your existing website — keeping what works, improving what doesn\'t, and adding the polish and performance your brand deserves. Includes audit, strategy, and execution.',
    features: [
      'UX audit and strategy',
      'Content migration',
      'Performance optimization',
      'Modern design system',
      'Conversion rate optimization',
      '301 redirect planning',
    ],
    startingPrice: '$5,000',
  },
  {
    id: 'maintenance-optimization',
    title: 'Maintenance & Optimization',
    icon: 'Wrench',
    tagline: 'Ongoing care to keep your product fast, secure, and reliable.',
    description:
      'Keep your application in top shape with regular updates, security patches, performance monitoring, and feature enhancements. A proactive approach to maintenance that prevents problems before they happen.',
    features: [
      'Security updates and patches',
      'Performance monitoring',
      'Bug fixes and troubleshooting',
      'Feature additions',
      'Database optimization',
      'Uptime monitoring',
    ],
    startingPrice: '$1,500/mo',
  },
];
