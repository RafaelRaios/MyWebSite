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
    'I build products end to end, from Python and Kotlin APIs to React front ends. Lately that means AI agent workflows people use at work: text-to-SQL agents and LLM chatbots with RAG over company documents.',
  location: 'Brazil · Remote, UTC−3',
  languages: ['English', 'Portuguese', 'Spanish', 'German'],
  email: 'rrcv2@cin.ufpe.br',
  status: 'Open to remote roles',
  query: "SELECT * FROM engineers WHERE country = 'Brazil';",
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
    company: 'Visagio',
    role: 'Software Engineer',
    dates: 'May 2025 – Aug 2026',
    location: 'Remote',
    summary:
      'Two projects. First, a heuristic optimization tool that plans which grid works a power distribution utility builds, affecting the daily service of millions of people: sole owner of the front end, worked on the back end and database, and the only developer by the final stage. Then, three LLM chatbots for a global industrial client (RAG over PDFs, text-to-SQL over tables) that teams relied on daily. I was the lead developer of one of them, migrating it to a smolagents agent and building its text-to-SQL layer, back end and end-to-end integration, and I co-built a unified chat front end for all three on top of Open WebUI. I worked directly with the client teams in Germany, the US, Brazil, India and France, with most meetings held entirely in English, and adjusted my hours across time zones to balance the project with a full-time degree.',
    stack: ['Python', 'smolagents', 'Claude API', 'OpenAI API', 'MCP', 'Open WebUI', 'FastAPI', 'Kotlin', 'React', 'Angular', 'Azure', 'AWS'],
  },
  {
    company: 'Centro de Informática, UFPE',
    role: 'Teaching Assistant',
    dates: 'Sep 2022 – Aug 2024',
    summary: 'Teaching assistant for algorithms, data structures and databases; wrote algorithm problems for online judges.',
    stack: [],
  },
];

export const projects: Project[] = [
  {
    name: 'Root da Galera',
    year: '2024 – present',
    description:
      'Core contributor to a match tracker and leaderboard for the board game Root. I moved users from PINs hardcoded in environment variables into the database without losing a single match record, implemented the game rules in match registration and the faction draft, and built the admin and in-person draft screens, guest players, official vs. test matches, maps, and most of the stats filters. I also prototyped a Gemini rules assistant grounded in the rulebooks and card database.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Gemini API'],
    links: [
      { label: 'Repo', href: 'https://github.com/rafaelrlc/root-da-galera' },
      { label: 'Live', href: 'https://root-da-galera.vercel.app/' },
    ],
    featured: true,
  },
  {
    name: 'Pokédex',
    description: 'A Pokédex built with Angular, TypeScript and Tailwind, consuming the PokéAPI and deployed on Vercel. Built solo, without AI assistance.',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Repo', href: 'https://github.com/RafaelRaios/Pokedex1' },
      { label: 'Live', href: 'https://pokedex-steel-mu.vercel.app/' },
    ],
    featured: true,
  },
  {
    name: 'Alagoaninho Adventures',
    description: 'A game built for a college course.',
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
      'Lead developer of one of the internal assistants for a global industrial client: migrated it to a smolagents agent and built the text-to-SQL layer, with curated schema context, parameterized Python tools for common queries and SQL errors fed back to the agent, plus the back end and end-to-end integration, so teams could query their own data in plain language.',
  },
  {
    slug: 'rag-chatbots',
    title: 'LLM chatbots over company documents',
    org: 'Visagio',
    summary:
      'Worked on three chatbots that answer safety, quality and maintenance questions from SharePoint PDFs with RAG, with access control by permission table or admin-assigned role. Co-built a unified chat front end for all of them on top of Open WebUI, giving the team full control over customization.',
  },
  {
    slug: 'heuristic-optimization',
    title: 'Infrastructure planning for a power utility',
    org: 'Visagio',
    summary:
      'Full-stack work on a heuristic optimization tool that decides which grid works a power distribution utility builds and where, affecting the daily service of millions of people. Sole owner of the front end, and the only developer by the final stage.',
  },
  {
    slug: 'root-da-galera',
    title: 'Root da Galera',
    org: 'Open source',
    summary:
      'Migrated users from hardcoded PINs to the database with no lost match records, implemented the game rules in match registration and the faction draft, and prototyped a Gemini rules assistant grounded in the rulebooks and card database.',
  },
];

export const skills: SkillGroup[] = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Kotlin', 'Go', 'Java', 'SQL'] },
  { name: 'Front-end', items: ['React', 'Redux', 'Angular', 'Tailwind CSS'] },
  { name: 'Back-end', items: ['Node.js', 'FastAPI', 'REST APIs'] },
  { name: 'AI', items: ['Claude, OpenAI and Gemini APIs', 'RAG', 'MCP', 'text-to-SQL', 'smolagents'] },
  { name: 'Cloud and tools', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'pytest', 'Git', 'Vercel'] },
];

export const about =
  "I'm finishing a Computer Science degree at UFPE (expected 2027). At Visagio I built LLM chatbots and text-to-SQL agents for a global industrial client, working in English with its teams in five countries while finishing my degree. I like owning a problem from the first conversation to production, including the parts that aren't code, like explaining trade-offs to a client. Before that, I was a teaching assistant in algorithms, data structures and databases, and took a competitive programming course. I also made two small games in college, which is why one of them is still on this page.";

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
  timeLabel: 'local time in Brazil',
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
