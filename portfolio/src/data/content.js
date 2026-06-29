export const personalData = {
  name: 'Sarah Smith',
  logo: 'SARAH.DEV',
  email: 'ssmith.io.v0@gmail.com',
  title: 'Software Developer',
  tagline: 'Code. Create. Conquer.',
  description:
    'Building considerate digital experiences and scalable solutions that empower people to create, grow, and lead.',
  availability: 'Available for new projects',
  socials: {
    github: 'https://github.com/ssmith-io',
    linkedin: 'https://www.linkedin.com/in/s1smith/',
    resume: '/Smith, Sarah - Resume 2026.pdf',
  },
}

export const stats = [
  { num: '50+', label: 'Projects shipped' },
  { num: '6yr', label: 'Industry experience' },
  { num: '99%', label: 'Client satisfaction' },
]

export const skills = [
  'Typescript', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML/CSS',
  'React', 'Angular', 'Next.js', 'Node.js', 'Tailwind CSS',
  'CI/CD', 'Git',
]

export const projects = [
  {
    id: 'PhishWise',
    num: '01',
    title: 'PhishWise Cyber Security Training',
    description:
      'Contributed to the development of PhishWise, creating secure and user-friendly solutions that help organizations educate users and strengthen cybersecurity awareness.',
    tags: ['Typescript', 'React', 'Next.js', 'PostgreSQL', 'Vercel'],
    type: 'Full-Stack Web Application',
    link: 'https://www.phishwise.org/',
    image: '../public/PhishWise Cover.jpg',
    details: {
      overview: `
        Developed a full-stack Security Awareness Management System that
        automates phishing simulation campaigns, contextual cybersecurity
        training, and employee performance analytics.

        Built role-based administration features enabling organizations to
        manage users, schedule phishing campaigns, monitor real-time campaign
        metrics, and measure training effectiveness through an integrated
        analytics dashboard.

        The platform integrates phishing simulations with just-in-time learning,
        allowing administrators to monitor user engagement and training
        completion through a centralized dashboard.`,
      features: [
        { title: 'Authentication',
          description: 'Role-based authentication and user management' },
        { title: 'Automation',
          description: 'Automated phishing simulation campaigns' },
        { title: 'Security',
          description: 'Interactive cybersecurity learning platform' },
        { title: 'Analytics',
          description: 'Real-time analytics dashboard with user progress tracking' },
        { title: 'Tracking',
          description: 'Achievement badges and school-wide leaderboards' },
        { title: 'Prediction',
          description: 'Predictive risk scoring for identifying high-risk users' },
        { title: 'Performance',
          description: 'Automated re-training based on simulation performance' },
        { title: 'Customization',
          description: 'Custom campaign scheduling and A/B testing framework' },
        { title: 'Reporting',
          description: 'CSV export for reporting and administrative insights' }
      ],
      highlights: [
        { title: 'Technologies',
          description: 'Developed a full-stack application using React, Next.js, TypeScript, PostgreSQL, and Prisma.' },
        { title: 'Implementation',
          description: 'Implemented secure authentication using NextAuth.js with OAuth and JWT session management.' },
        { title: 'Design',
          description: 'Designed a scalable PostgreSQL schema with optimized indexing and Prisma ORM.' },
        { title: 'Integration',
          description: 'Integrated Resend for transactional emails and phishing simulations.' },
        { title: 'Endpoints',
          description: 'Built RESTful API routes with Zod schema validation across 40+ endpoints.' },
        { title: 'UI',
          description: 'Created reusable dashboard components with responsive layouts using Tailwind CSS and shadcn/ui.' },
        { title: 'Deployment',
          description: 'Configured deployment on Vercel with pgBouncer connection pooling for serverless scalability.' }
      ]
    }
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