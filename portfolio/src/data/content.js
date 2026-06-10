// ─── EDIT THIS FILE TO PERSONALISE YOUR PORTFOLIO ───────────────────────────

export const siteConfig = {
  name: 'Alex Mercer',
  logo: 'ALEX.DEV',
  email: 'alex@example.com',
  tagline: 'Build. Deploy. Scale.',
  description:
    'Freelance developer specializing in high-performance web experiences and cloud infrastructure. I turn complex problems into elegant, scalable solutions.',
  availability: 'Available for new projects — Q3 2025',
  location: 'Based wherever the work takes me',
  socials: {
    github: '#',
    linkedin: '#',
    twitter: '#',
    resume: '#',
  },
}

export const stats = [
  { num: '50+', label: 'Projects shipped' },
  { num: '6yr', label: 'Industry experience' },
  { num: '99%', label: 'Client satisfaction' },
]

export const skills = [
  'React', 'Next.js', 'TypeScript', 'AWS',
  'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Node.js',
]

export const projects = [
  {
    num: '01',
    title: 'CloudDash Analytics Platform',
    description:
      'Real-time infrastructure monitoring dashboard processing 2M+ events/day. Reduced incident response time by 60%.',
    tags: ['AWS', 'React', 'Terraform', 'Grafana'],
    type: 'Web App · Cloud Infrastructure',
    link: '#',
  },
  {
    num: '02',
    title: 'Nexus E-Commerce Storefront',
    description:
      'High-conversion storefront for a DTC brand doing $8M ARR. 98 Lighthouse score, sub-1s load times globally.',
    tags: ['Next.js', 'Vercel', 'Shopify', 'TypeScript'],
    type: 'E-Commerce · Frontend',
    link: '#',
  },
  {
    num: '03',
    title: 'Zero-Downtime Migration Pipeline',
    description:
      'Led a full infra migration from on-prem to AWS EKS for a 50-person SaaS startup. Zero service interruptions across 3 weeks.',
    tags: ['Kubernetes', 'Helm', 'GitHub Actions', 'RDS'],
    type: 'DevOps · Cloud Migration',
    link: '#',
  },
  {
    num: '04',
    title: 'Aria Design System',
    description:
      'Component library and documentation site used by 3 product teams. 120+ accessible components, full Figma integration.',
    tags: ['React', 'Storybook', 'Radix UI', 'CSS Modules'],
    type: 'Frontend · Design System',
    link: '#',
  },
]

export const services = [
  {
    icon: '⬡',
    title: 'Frontend Development',
    description:
      'Pixel-perfect, performant interfaces built to convert and delight. From landing pages to complex SPAs.',
    items: [
      'React / Next.js applications',
      'Performance optimization',
      'Design system implementation',
      'Animation & interactions',
    ],
  },
  {
    icon: '⬢',
    title: 'Cloud & DevOps',
    description:
      'Infrastructure that scales with your growth. Reliable, automated, and secure cloud deployments.',
    items: [
      'AWS / GCP architecture',
      'Kubernetes & container ops',
      'CI/CD pipeline setup',
      'Cost optimization',
    ],
  },
  {
    icon: '⬟',
    title: 'Technical Consulting',
    description:
      'Strategic guidance for teams navigating frontend complexity or cloud modernization challenges.',
    items: [
      'Architecture review',
      'Tech stack audits',
      'Code review & mentoring',
      'Migration planning',
    ],
  },
]

export const processSteps = [
  {
    num: '01',
    title: 'Discover',
    description:
      'Deep-dive into your goals, tech stack, and constraints. I ask hard questions before writing a line of code.',
  },
  {
    num: '02',
    title: 'Architect',
    description:
      'Design a clear technical plan. Decisions documented, trade-offs explained, timeline agreed.',
  },
  {
    num: '03',
    title: 'Build',
    description:
      'Iterative delivery with weekly check-ins. Clean, documented code you can actually maintain.',
  },
  {
    num: '04',
    title: 'Launch',
    description:
      "Smooth deployment with monitoring set up from day one. I don't disappear after handoff.",
  },
]

export const aboutMetrics = [
  {
    num: '6+',
    label: 'Years of experience',
    sublabel: 'Startups to enterprise, across multiple industries',
  },
  {
    num: '50+',
    label: 'Projects delivered',
    sublabel: 'From MVP launches to full infra migrations',
  },
  {
    num: '12',
    label: 'Happy clients',
    sublabel: 'Most come back for the next project',
  },
]

export const testimonials = [
  {
    quote:
      'Alex completely transformed our deployment process. What used to take a full day now happens automatically in 12 minutes. Worth every penny.',
    name: 'Jordan Kim',
    role: 'CTO, Fieldset Labs',
    initials: 'JK',
  },
  {
    quote:
      "The storefront Alex built for us is the best-performing site we've had. Our bounce rate dropped 40% and conversions went up within the first month.",
    name: 'Sara Rowe',
    role: 'Head of Digital, Luminary Co.',
    initials: 'SR',
  },
  {
    quote:
      "Technical skill aside — Alex communicates better than any developer I've worked with. Always knew where things stood, no surprises at launch.",
    name: 'Marcus Patel',
    role: 'Founder, Stackboard',
    initials: 'MP',
  },
]

export const marqueeItems = [
  'Frontend Development',
  'Cloud Architecture',
  'DevOps Automation',
  'Performance Optimization',
  'CI/CD Pipelines',
  'React & Next.js',
  'AWS Infrastructure',
]
