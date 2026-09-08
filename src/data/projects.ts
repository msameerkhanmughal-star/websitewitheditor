export interface Project {
  slug: string;
  name: string;
  category: 'SaaS' | 'Web App' | 'Website' | 'Digital Product';
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
  features: string[];
  technologies: string[];
  highlights: { label: string; value: string }[];
  liveUrl: string;
  sourceUrl: string | null;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    slug: 'nexora-analytics',
    name: 'Nexora Analytics',
    category: 'SaaS',
    shortDescription:
      'A real-time analytics platform for SaaS companies to track user behavior, conversions, and revenue with sub-second latency.',
    fullDescription:
      'Nexora Analytics is a comprehensive SaaS platform that gives product teams deep visibility into user behavior, funnel performance, and revenue metrics. Built to handle millions of events per day, Nexora processes data in real-time and surfaces insights through customizable dashboards. The platform features a powerful event tracking SDK, automated anomaly detection, and cohort analysis tools that help teams make data-driven decisions faster than ever.',
    coverImage:
      'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Real-time event tracking with sub-second latency',
      'Customizable dashboard builder with drag-and-drop widgets',
      'Funnel analysis and cohort retention tracking',
      'Automated anomaly detection with AI-powered alerts',
      'Revenue attribution and LTV calculations',
      'Multi-team workspaces with granular permissions',
      'REST and GraphQL APIs for data integration',
      'Export to CSV, PDF, and webhook destinations',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'D3.js'],
    highlights: [
      { label: 'Active Users', value: '50K+' },
      { label: 'Events / Day', value: '12M+' },
      { label: 'Uptime', value: '99.98%' },
      { label: 'Response Time', value: '<200ms' },
    ],
    liveUrl: 'https://example.com',
    sourceUrl: null,
    featured: true,
    year: '2025',
  },
  {
    slug: 'veltrix-crm',
    name: 'Veltrix CRM',
    category: 'Web App',
    shortDescription:
      'A modern CRM with AI-powered lead scoring, pipeline automation, and seamless email integration for sales teams.',
    fullDescription:
      'Veltrix CRM reimagines the sales workflow with an intelligent, automation-first approach. The platform uses machine learning to score leads based on engagement patterns, automatically assigns tasks to the right team members, and generates follow-up emails that sound human. With its intuitive pipeline board and powerful reporting suite, sales teams can close deals faster while maintaining a personal touch with every prospect.',
    coverImage:
      'https://images.pexels.com/photos/38984817/pexels-photo-38984817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4405384/pexels-photo-4405384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'AI-powered lead scoring and prioritization',
      'Visual pipeline with drag-and-drop deal management',
      'Automated email sequences with personalization',
      'Meeting scheduler with calendar sync',
      'Custom reporting and forecast predictions',
      'Team collaboration with shared inboxes',
      'Two-way email and calendar synchronization',
      'Mobile app with offline mode',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Prisma', 'PostgreSQL', 'OpenAI', 'Vercel', 'Tailwind CSS'],
    highlights: [
      { label: 'Deals Closed', value: '8,400+' },
      { label: 'Revenue Tracked', value: '$42M' },
      { label: 'Time Saved', value: '15h/wk' },
      { label: 'User Satisfaction', value: '4.9/5' },
    ],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: true,
    year: '2025',
  },
  {
    slug: 'lumen-portfolio',
    name: 'Lumen Studio',
    category: 'Website',
    shortDescription:
      'An award-winning creative agency website with immersive 3D animations, case studies, and a custom CMS.',
    fullDescription:
      'Lumen Studio is a digital agency website that pushes the boundaries of web design. Featuring immersive WebGL animations, smooth page transitions, and a custom-built content management system, the site serves as both a portfolio and a lead generation engine. The project won a CSS Design Award and has been featured in multiple design publications for its innovative use of scroll-driven storytelling.',
    coverImage:
      'https://images.pexels.com/photos/1996035/pexels-photo-1996035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/18545010/pexels-photo-18545010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17279851/pexels-photo-17279851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29751268/pexels-photo-29751268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Immersive WebGL hero animation with shader effects',
      'Scroll-driven case study storytelling',
      'Custom headless CMS for content management',
      ' buttery-smooth page transitions',
      'Accessibility-first design with reduced-motion support',
      '90+ Lighthouse performance score',
      'Multi-language support with i18n',
      'Contact form with project brief builder',
    ],
    technologies: ['React', 'Three.js', 'GSAP', 'TypeScript', 'Sanity CMS', 'Framer Motion', 'Vite'],
    highlights: [
      { label: 'Design Awards', value: '3' },
      { label: 'Page Speed', value: '94/100' },
      { label: 'Conversion Rate', value: '8.2%' },
      { label: 'Bounce Rate', value: '-34%' },
    ],
    liveUrl: 'https://example.com',
    sourceUrl: null,
    featured: true,
    year: '2024',
  },
  {
    slug: 'pulse-fintech',
    name: 'Pulse Finance',
    category: 'SaaS',
    shortDescription:
      'A personal finance dashboard that aggregates bank accounts, tracks spending, and provides AI-powered budgeting insights.',
    fullDescription:
      'Pulse Finance is a consumer fintech platform that brings all of a user\'s financial accounts into one beautifully designed dashboard. By connecting to over 12,000 financial institutions via Plaid, Pulse automatically categorizes transactions, identifies wasteful subscriptions, and generates personalized budgeting recommendations. The platform also includes goal tracking, bill reminders, and a unique "financial health score" that updates in real-time.',
    coverImage:
      'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/7109314/pexels-photo-7109314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7430452/pexels-photo-7430452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/240230/pexels-photo-240230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Bank account aggregation via Plaid API',
      'Automatic transaction categorization',
      'AI-powered budgeting recommendations',
      'Subscription detection and cancellation alerts',
      'Financial health score with trend analysis',
      'Goal tracking with progress visualization',
      'Bill reminders and payment scheduling',
      'Bank-grade 256-bit encryption',
    ],
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Plaid', 'MongoDB', 'AWS Lambda', 'Stripe'],
    highlights: [
      { label: 'Downloads', value: '200K+' },
      { label: 'Connected Accounts', value: '1.2M' },
      { label: 'Avg. Savings', value: '$340/mo' },
      { label: 'App Store Rating', value: '4.8' },
    ],
    liveUrl: 'https://example.com',
    sourceUrl: null,
    featured: true,
    year: '2024',
  },
  {
    slug: 'arcade-marketplace',
    name: 'Arcade Marketplace',
    category: 'Digital Product',
    shortDescription:
      'A digital goods marketplace for creators to sell templates, UI kits, and code components with built-in licensing.',
    fullDescription:
      'Arcade Marketplace is a curated platform where designers and developers can buy and sell premium digital assets including UI kits, website templates, icon packs, and code components. The marketplace handles licensing, payments, and delivery automatically, with a review system that ensures quality. Sellers get detailed analytics on their revenue, while buyers get a unified library for all their purchases.',
    coverImage:
      'https://images.pexels.com/photos/16675631/pexels-photo-16675631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Digital product storefront with instant delivery',
      'Flexible licensing models (single, team, extended)',
      'Stripe-powered payment splitting and payouts',
      'Seller analytics dashboard with revenue tracking',
      'Buyer library with download history and licenses',
      'Product preview with live code playground',
      'Review and rating system with moderation',
      'Coupon and promotional campaign tools',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Stripe', 'Supabase', 'Tailwind CSS', 'Vercel'],
    highlights: [
      { label: 'Active Sellers', value: '1,500+' },
      { label: 'Products Listed', value: '8,200+' },
      { label: 'Total Sales', value: '$2.1M' },
      { label: 'Avg. Review', value: '4.7/5' },
    ],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: false,
    year: '2024',
  },
  {
    slug: 'stride-fitness',
    name: 'Stride Fitness',
    category: 'Web App',
    shortDescription:
      'A fitness coaching platform with workout planning, progress tracking, and live video sessions for trainers and clients.',
    fullDescription:
      'Stride Fitness bridges the gap between personal trainers and their clients through a comprehensive coaching platform. Trainers can build custom workout plans, track client progress, and conduct live video sessions — all from a single interface. Clients get a mobile-first experience with exercise demonstrations, progress charts, and direct messaging. The platform also includes nutrition tracking and a gamified streak system to keep clients motivated.',
    coverImage:
      'https://images.pexels.com/photos/5678243/pexels-photo-5678243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/36136699/pexels-photo-36136699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12605419/pexels-photo-12605419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/833337/pexels-photo-833337.png?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Custom workout plan builder with 500+ exercises',
      'Live video coaching with screen sharing',
      'Progress tracking with body metrics and photos',
      'Nutrition logging with macro calculations',
      'Gamified streaks and achievement badges',
      'In-app messaging between trainer and client',
      'Exercise library with HD video demonstrations',
      'Payment processing for training packages',
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'WebRTC', 'Node.js', 'MongoDB', 'Stripe'],
    highlights: [
      { label: 'Active Trainers', value: '3,200+' },
      { label: 'Workouts Logged', value: '1.8M' },
      { label: 'Client Retention', value: '87%' },
      { label: 'Sessions / Month', value: '45K' },
    ],
    liveUrl: 'https://example.com',
    sourceUrl: null,
    featured: false,
    year: '2023',
  },
];

export const projectCategories = ['All', 'SaaS', 'Web App', 'Website', 'Digital Product'] as const;
