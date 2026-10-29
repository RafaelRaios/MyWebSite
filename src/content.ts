// Single source for every string on the site. Facts come only from PLAN.md's "Fonte de verdade".
// Anything marked [confirm] or [email] is an open question in the plan, not final copy.

export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  location: string;
  languages: string[];
  email: string;
  links: Link[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  stack: string[];
}

export interface Project {
  name: string;
  year?: string;
  description: string;
  stack: string[];
  links: Link[];
  featured: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  org: string;
  summary: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Query {
  label: string;
  question: string;
  sql: string;
  columns: string[];
  rows: string[][];
}

export const profile: Profile = {
  name: 'Rafael Rios',
  title: 'Full-stack software engineer',
  tagline: 'Full-stack engineer who ships AI agent workflows that people use at work.',
  intro:
    'I build products end to end, from Kotlin and Python APIs to React front ends. Lately that means AI agent workflows people use at work: text-to-SQL agents, LLM chatbots, and a guest assistant that knows when to hand off to a human.',
  location: 'Recife, Brazil · Remote, UTC−3',
  languages: ['English', 'Portuguese', 'Spanish'],
  email: '[email]',
  links: [
    { label: 'Resume (PDF)', href: '/resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/RafaelRaios' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafael-rios-937645267/' },
    { label: 'Email', href: 'mailto:[email]' },
  ],
};

export const sections = {
  demo: 'Text-to-SQL demo',
  work: 'Selected work',
  experience: 'Experience',
  projects: 'Projects',
  earlier: 'Earlier work',
  skills: 'Skills',
  about: 'About',
  contact: 'Contact',
};

export const demo = {
  caption: 'A scripted replay of the text-to-SQL agents I build, with this site as the database.',
  placeholder: 'Demo slot',
};

export const experience: Experience[] = [
  {
    company: 'Avanzzada',
    role: 'Senior Software Engineer',
    dates: 'Aug 2025 – present',
    location: 'Remote',
    summary: 'Direct-booking platform and guest assistant for a US hotel chain.',
    stack: ['React', 'TypeScript', 'Kotlin'],
  },
  {
    company: 'Visagio',
    role: 'Software Engineer',
    dates: 'Sep 2024 – Jul 2025',
    location: 'Remote',
    summary:
      'LLM chatbots, text-to-SQL, and heuristic optimization for a global industrial client; worked daily in English with teams in Germany, the US, India and France.',
    stack: ['Python', 'smolagents', 'Claude API', 'OpenAI API', 'MCP', 'FastAPI', 'Kotlin', 'React', 'Angular', 'Azure', 'AWS'],
  },
  {
    company: 'Centro de Informática, UFPE',
    role: 'Software Engineer',
    dates: 'Sep 2022 – Aug 2024',
    summary: 'Wrote algorithm problems for online judges and mentored students in algorithms and databases.',
    stack: [],
  },
  {
    company: 'CITi UFPE',
    role: 'Trainee',
    dates: 'May – Aug 2022',
    summary: 'Led an agile team that delivered a platform connecting psychologists with clients.',
    stack: [],
  },
];

export const projects: Project[] = [
  {
    name: 'Root da Galera',
    year: '2024 – present',
    description: 'Core contributor to an open-source companion app for the board game Root.',
    stack: [],
    links: [{ label: 'Repo and site [confirm]', href: '' }],
    featured: true,
  },
  {
    name: 'Pokédex',
    description: 'A Pokédex built with Angular, TypeScript and Tailwind, consuming the PokéAPI and deployed on Vercel.',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Repo', href: 'https://github.com/RafaelRaios/Pokedex1' },
      { label: 'Live [confirm]', href: '' },
    ],
    featured: true,
  },
  {
    name: 'Alagoaninho Adventures',
    description: 'College game.',
    stack: [],
    links: [{ label: 'Repo', href: 'https://github.com/RafaelRaios/Alagoaninho-Adventures' }],
    featured: false,
  },
  {
    name: 'Alagoaninho Adventures 2',
    description: 'College game, built in p5.js.',
    stack: ['p5.js'],
    links: [
      { label: 'Code', href: 'https://editor.p5js.org/RafaelRaios/sketches/b5i9I5gXR' },
      { label: 'Play', href: 'https://editor.p5js.org/RafaelRaios/full/b5i9I5gXR' },
    ],
    featured: false,
  },
  {
    name: 'Splotify',
    description: 'Music player in Java Swing, using threads.',
    stack: ['Java'],
    links: [{ label: 'Repo', href: 'https://github.com/RafaelRaios/Splotify' }],
    featured: false,
  },
  {
    name: 'BD Cinema',
    description: 'Cinema database in SQL, with functions and triggers.',
    stack: ['SQL'],
    links: [{ label: 'Repo', href: 'https://github.com/RafaelRaios/BD-Cinema' }],
    featured: false,
  },
  {
    name: 'Painel Cards',
    description: 'Small Angular site.',
    stack: ['Angular'],
    links: [
      { label: 'Repo', href: 'https://github.com/RafaelRaios/painel-cards' },
      { label: 'Live', href: 'https://painel-cards.vercel.app/' },
    ],
    featured: false,
  },
  {
    name: 'Filter Project',
    description: 'Small Angular site.',
    stack: ['Angular'],
    links: [
      { label: 'Repo', href: 'https://github.com/RafaelRaios/filter-project' },
      { label: 'Live', href: 'https://filter-project-ashy.vercel.app/' },
    ],
    featured: false,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'text-to-sql-agents',
    title: 'Text-to-SQL agents for industrial chatbots',
    org: 'Visagio',
    summary:
      'Owned the text-to-SQL layer of internal assistants for a global industrial client, so teams could query their own data in plain language.',
  },
  {
    slug: 'hotel-direct-booking',
    title: 'Direct booking for a US hotel chain',
    org: 'Avanzzada',
    summary:
      'Took over nearly all engineering on a platform that moves bookings away from third-party channels, plus a guest assistant that routes requests to the right staff.',
  },
  {
    slug: 'heuristic-optimization',
    title: 'Heuristic optimization for capital spending',
    org: 'Visagio',
    summary:
      'Built and calibrated a model to allocate infrastructure projects and cut unnecessary capital expenditure, as the sole developer in key stages.',
  },
  {
    slug: 'root-da-galera',
    title: 'Root da Galera',
    org: 'Open source',
    summary: 'Core contributor to an open-source companion app for the board game Root.',
  },
];

export const skills: SkillGroup[] = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Kotlin', 'Go', 'Java', 'SQL'] },
  { name: 'Front-end', items: ['React', 'Redux', 'Angular', 'Tailwind CSS'] },
  { name: 'Back-end', items: ['Node.js', 'FastAPI', 'REST APIs'] },
  { name: 'AI', items: ['Claude, OpenAI and Gemini APIs', 'RAG', 'MCP', 'text-to-SQL', 'smolagents'] },
  { name: 'Cloud and tools', items: ['AWS', 'Azure', 'Git', 'Vercel'] },
];

export const about =
  "I'm finishing a Computer Science degree at UFPE, in Recife (expected 2027), and I've worked on software for clients in the US and Europe since 2022. I like owning a problem from the first conversation to production, including the parts that aren't code, like explaining trade-offs to a client. Before that, I mentored other students in algorithms and databases and led a junior-enterprise team. I also made two small games in college, which is why one of them is still on this page.";

export const contact = {
  text: "I'm open to remote full-stack and applied-AI roles. Email is the fastest way to reach me:",
  email: profile.email,
};

// Filled in Prompt 4; rows must match experience and projects exactly.
export const queries: Query[] = [];
