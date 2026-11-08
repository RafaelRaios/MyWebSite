// Single source for every string on the site. Facts come only from PLAN.md's "Fonte de verdade".

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
  status: string;
  query: string;
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
  languages: ['English', 'Portuguese', 'Spanish', 'German'],
  email: 'rrcv2@cin.ufpe.br',
  status: 'Open to remote roles',
  query: "SELECT * FROM engineers WHERE city = 'Recife';",
  links: [
    { label: 'Resume (PDF)', href: '/resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/RafaelRaios' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafael-rios-937645267/' },
    { label: 'Email', href: 'mailto:rrcv2@cin.ufpe.br' },
  ],
};

export const nav: Link[] = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const footer = '-- end of results';

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
};

export const experience: Experience[] = [
  {
    company: 'Avanzzada',
    role: 'Senior Software Engineer',
    dates: 'Aug 2025 – present',
    location: 'Remote',
    summary: 'Direct-booking platform and guest assistant for a US hotel chain.',
    stack: ['React', 'TypeScript', 'Kotlin', 'AI agents'],
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
    links: [
      { label: 'Repo', href: 'https://github.com/rafaelrlc/root-da-galera' },
      { label: 'Live', href: 'https://root-da-galera.vercel.app/' },
    ],
    featured: true,
  },
  {
    name: 'Pokédex',
    description: 'A Pokédex built with Angular, TypeScript and Tailwind, consuming the PokéAPI and deployed on Vercel.',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Repo', href: 'https://github.com/RafaelRaios/Pokedex1' },
      { label: 'Live', href: 'https://pokedex-steel-mu.vercel.app/' },
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
  heading: "Let's talk",
  text: "I'm open to remote full-stack and applied-AI roles. Email is the fastest way to reach me.",
  channels: [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Personal email', value: 'rafael.rios.victal@hotmail.com', href: 'mailto:rafael.rios.victal@hotmail.com' },
    { label: 'Phone', value: '+55 82 99113-1829', href: 'tel:+5582991131829' },
  ],
};

// Rows are computed from experience and projects, so the demo always matches the page.
const AI_TOOLS = ['AI agents', 'smolagents', 'Claude API', 'OpenAI API', 'MCP'];
const liveUrl = (p: Project) => p.links.find((l) => l.label === 'Live')?.href;
const bare = (href: string) => href.replace(/^https?:\/\//, '').replace(/\/$/, '');

export const queries: Query[] = [
  {
    label: 'Kotlin',
    question: 'Where did I use Kotlin?',
    sql: `SELECT company, role, dates
FROM experience
WHERE stack LIKE '%Kotlin%'
ORDER BY start_date DESC;`,
    columns: ['company', 'role', 'dates'],
    rows: experience.filter((e) => e.stack.includes('Kotlin')).map((e) => [e.company, e.role, e.dates]),
  },
  {
    label: 'React',
    question: 'Where did I ship React?',
    sql: `SELECT company, role, dates
FROM experience
WHERE stack LIKE '%React%'
ORDER BY start_date DESC;`,
    columns: ['company', 'role', 'dates'],
    rows: experience.filter((e) => e.stack.includes('React')).map((e) => [e.company, e.role, e.dates]),
  },
  {
    label: 'AI work',
    question: 'Where did I work with AI?',
    sql: `SELECT company, dates, ai_stack
FROM experience
WHERE ai_stack IS NOT NULL
ORDER BY start_date DESC;`,
    columns: ['company', 'dates', 'ai_stack'],
    rows: experience
      .filter((e) => e.stack.some((s) => AI_TOOLS.includes(s)))
      .map((e) => [e.company, e.dates, e.stack.filter((s) => AI_TOOLS.includes(s)).join(', ')]),
  },
  {
    label: 'Angular',
    question: 'Which projects used Angular?',
    sql: `SELECT name, description
FROM projects
WHERE stack LIKE '%Angular%';`,
    columns: ['name', 'description'],
    rows: projects.filter((p) => p.stack.includes('Angular')).map((p) => [p.name, p.description]),
  },
  {
    label: 'Live sites',
    question: 'Which projects can I open right now?',
    sql: `SELECT name, live_url
FROM projects
WHERE live_url IS NOT NULL;`,
    columns: ['name', 'live_url'],
    rows: projects.flatMap((p) => {
      const url = liveUrl(p);
      return url ? [[p.name, bare(url)]] : [];
    }),
  },
];

// Free-form demo question: matches any technology against experience, projects and skills.
export function techQuery(input: string): Query {
  const term = input.replace(/['"%;\\]/g, '').trim().slice(0, 30);
  const needle = term.toLowerCase();
  // Whole-word match, so "Java" doesn't match "JavaScript".
  const matches = (item: string) => {
    const lower = item.toLowerCase();
    return lower === needle || lower.split(/[\s,./-]+/).includes(needle);
  };
  const has = (items: string[]) => needle !== '' && items.some(matches);
  return {
    label: term,
    question: `Where did I use ${term}?`,
    sql: `SELECT 'experience' AS source, company AS name, dates
FROM experience WHERE stack LIKE '%${term}%'
UNION ALL
SELECT 'projects', name, year
FROM projects WHERE stack LIKE '%${term}%'
UNION ALL
SELECT 'skills', group_name, NULL
FROM skills WHERE items LIKE '%${term}%';`,
    columns: ['source', 'name', 'dates'],
    rows: [
      ...experience.filter((e) => has(e.stack)).map((e) => ['experience', e.company, e.dates]),
      ...projects.filter((p) => has(p.stack)).map((p) => ['projects', p.name, p.year ?? '—']),
      ...skills.filter((g) => has(g.items)).map((g) => ['skills', g.name, '—']),
    ],
  };
}

export const demoAsk = {
  label: 'Ask about any technology',
  placeholder: 'Try Python, Go, Tailwind…',
  button: 'Run',
};

export const hero = {
  timeLabel: 'local time in Recife',
  timeZone: 'America/Recife',
};

export const palette = {
  hint: ['Press', 'to explore the site'],
  placeholder: 'Type a command or search…',
  empty: 'No results. Try "email" or "projects".',
  copied: 'Email copied to clipboard',
};

// Printed in the browser console, for the people who open DevTools.
export const consoleGreeting = [
  `SELECT greeting FROM visitors WHERE opened_devtools = TRUE;`,
  `Hi! Thanks for looking under the hood. This site is Astro + a React island, source on request.`,
  `Reach me at ${profile.email}.`,
];
