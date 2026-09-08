export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 98, category: 'Frontend' },
  { name: 'TypeScript', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 96, category: 'Frontend' },
  { name: 'Framer Motion', level: 88, category: 'Frontend' },
  { name: 'Three.js / WebGL', level: 78, category: 'Frontend' },
  { name: 'Node.js', level: 92, category: 'Backend' },
  { name: 'PostgreSQL', level: 90, category: 'Backend' },
  { name: 'Supabase / Firebase', level: 88, category: 'Backend' },
  { name: 'GraphQL / REST APIs', level: 90, category: 'Backend' },
  { name: 'Redis', level: 82, category: 'Backend' },
  { name: 'AWS / Vercel', level: 85, category: 'DevOps' },
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'CI/CD Pipelines', level: 84, category: 'DevOps' },
  { name: 'Figma', level: 87, category: 'Design' },
  { name: 'UI/UX Design', level: 85, category: 'Design' },
  { name: 'Stripe Integration', level: 92, category: 'Integration' },
];

export const skillCategories = ['Frontend', 'Backend', 'DevOps', 'Design', 'Integration'];

export const technologies = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL',
  'Supabase', 'Prisma', 'GraphQL', 'Redis', 'Docker', 'AWS', 'Vercel',
  'Stripe', 'Framer Motion', 'Three.js', 'Figma', 'Git', 'Vite', 'GSAP',
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'Nexora Inc.',
    avatar:
      'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    content:
      'Adrian transformed our vision into a product that exceeded every expectation. The analytics platform he built processes millions of events daily without a hiccup. His attention to detail and architectural decisions saved us months of refactoring down the line.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Co-founder',
    company: 'Veltrix',
    avatar:
      'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    content:
      'Working with Adrian was the best technical decision we made. He didn\'t just write code — he understood our business, challenged our assumptions, and delivered a CRM that our sales team actually enjoys using. The AI features alone closed the ROI gap within two months.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Creative Director',
    company: 'Lumen Studio',
    avatar:
      'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    content:
      'I\'ve worked with many developers, but Adrian is in a league of his own. He took our wildest design concepts and made them work flawlessly on the web. The animations, the performance, the accessibility — everything was perfect. We won a CSS Design Award because of his work.',
    rating: 5,
  },
  {
    name: 'James Okonkwo',
    role: 'Product Manager',
    company: 'Pulse Finance',
    avatar:
      'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    content:
      'Adrian built our fintech app from scratch and handled the Plaid integration, security requirements, and payment processing with remarkable precision. The app launched on time, passed every security audit, and hit 200K downloads in three months. Exceptional work.',
    rating: 5,
  },
  {
    name: 'Linda Park',
    role: 'Founder',
    company: 'Arcade Market',
    avatar:
      'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    content:
      'Our marketplace needed someone who understood both the technical and business sides of digital product sales. Adrian delivered a platform that handles licensing, payments, and analytics beautifully. Our sellers love it, and our revenue speaks for itself.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'CTO',
    company: 'Stride Fitness',
    avatar:
      'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    content:
      'The fitness platform Adrian built scaled from 100 to 3,200 trainers without a single major outage. His code is clean, well-documented, and a joy for our internal team to maintain. He set the standard for how we evaluate all future engineering partners.',
    rating: 5,
  },
];

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    year: '2017',
    title: 'Started as a Frontend Developer',
    description:
      'Began my career at a startup, building React interfaces and learning the fundamentals of scalable web development.',
  },
  {
    year: '2019',
    title: 'Transitioned to Full-Stack',
    description:
      'Expanded into backend engineering with Node.js and PostgreSQL, taking ownership of entire product features end-to-end.',
  },
  {
    year: '2021',
    title: 'Launched First SaaS Product',
    description:
      'Built and launched Nexora Analytics, my first full SaaS platform — a real-time analytics tool that grew to 50K+ users.',
  },
  {
    year: '2023',
    title: 'Went Independent',
    description:
      'Started my own studio, partnering with founders and companies to build premium digital products from concept to launch.',
  },
  {
    year: '2025',
    title: '120+ Projects Shipped',
    description:
      'Now serving clients across 12 countries with a focus on SaaS platforms, web apps, and high-end website experiences.',
  },
];

export interface Achievement {
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  { title: 'CSS Design Award', description: 'Won for Lumen Studio website in 2024' },
  { title: 'Top 1% GitHub', description: 'Ranked in the top 1% of contributors for React ecosystem' },
  { title: '200K+ Downloads', description: 'Pulse Finance app reached 200K downloads in 3 months' },
  { title: 'Speaker at ReactConf', description: 'Presented on real-time data visualization in 2024' },
];
