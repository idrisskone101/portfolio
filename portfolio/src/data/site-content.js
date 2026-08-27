import settings from '@/settings.json';

export const HASHNODE_HOST = 'idrisskone.hashnode.dev';

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

const aboutEmail =
  settings.about.info.find((row) => row.label === 'Email:')?.value ||
  settings.contact.email;

const aboutLocation =
  settings.about.info.find((row) => row.label === 'Location:')?.value ||
  settings.contact.location;

export const home = {
  ...settings.home,
  socialLinks: {
    github: 'https://github.com/idrisskone101',
    linkedin: settings.home.socialLinks.linkedin,
    email: aboutEmail,
    twitter: settings.home.socialLinks.twitter,
    instagram: settings.home.socialLinks.instagram,
  },
};

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    href: home.socialLinks.github,
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn (placeholder)',
    href: home.socialLinks.linkedin,
    icon: 'linkedin',
    placeholder: true,
  },
  {
    id: 'mail',
    label: 'Email',
    href: `mailto:${home.socialLinks.email}`,
    icon: 'mail',
  },
  {
    id: 'twitter',
    label: 'Twitter (placeholder)',
    href: home.socialLinks.twitter,
    icon: 'twitter',
    placeholder: true,
  },
  {
    id: 'instagram',
    label: 'Instagram (placeholder)',
    href: home.socialLinks.instagram,
    icon: 'instagram',
    placeholder: true,
  },
];

export const about = settings.about;

export const portfolio = {
  ...settings.portfolio,
  projects: settings.portfolio.projects.map((project) => ({
    ...project,
    placeholder: true,
  })),
};

export const services = {
  eyebrow: 'Services',
  title: 'What I can help with',
  lede: 'Offerings below are placeholders so the page can ship. Swap titles and copy in src/data/site-content.js when the real list is ready.',
  offerings: [
    {
      id: 'web-development',
      number: '01',
      title: 'Web development',
      description:
        'Placeholder. Full-stack product work: Next.js, React, and APIs that stay maintainable after launch.',
      placeholder: true,
    },
    {
      id: 'frontend-engineering',
      number: '02',
      title: 'Frontend engineering',
      description:
        'Placeholder. Interfaces that are fast, accessible, and consistent with a design system instead of a pile of one-off styles.',
      placeholder: true,
    },
    {
      id: 'ecommerce',
      number: '03',
      title: 'E-commerce',
      description:
        'Placeholder. Storefronts and merchandising flows on Shopify, headless setups, or custom checkout paths.',
      placeholder: true,
    },
    {
      id: 'design-to-code',
      number: '04',
      title: 'Design to code',
      description:
        'Placeholder. Taking Figma, Webflow, or Squarespace intent into production React without losing the look.',
      placeholder: true,
    },
    {
      id: 'performance',
      number: '05',
      title: 'Performance and polish',
      description:
        'Placeholder. Load, Core Web Vitals, and the small motion and type details that make a site feel finished.',
      placeholder: true,
    },
    {
      id: 'collaboration',
      number: '06',
      title: 'Collaboration',
      description:
        'Placeholder. Short engagements to unblock a team, review an architecture, or pair on a thorny UI.',
      placeholder: true,
    },
  ],
};

export const blog = {
  eyebrow: 'Blog',
  title: 'Writing',
  lede: 'Posts from Hashnode when the API responds. If it is empty or down, placeholder articles keep this page intact.',
  hashnodeHost: HASHNODE_HOST,
  hashnodeUrl: `https://${HASHNODE_HOST}`,
  fallbackPosts: [
    {
      id: 'placeholder-shipping-ui',
      title: 'Placeholder: shipping a UI you can iterate',
      brief: 'A stand-in post about keeping visual decisions in tokens so a site can change without a rewrite. Replace from Hashnode.',
      url: `https://${HASHNODE_HOST}`,
      publishedAt: '2026-04-12T12:00:00.000Z',
      coverImageUrl: null,
      placeholder: true,
      source: 'placeholder',
    },
    {
      id: 'placeholder-react-notes',
      title: 'Placeholder: notes on React in production',
      brief: 'Stand-in brief covering server components, client islands, and when not to add another library. Replace from Hashnode.',
      url: `https://${HASHNODE_HOST}`,
      publishedAt: '2026-02-03T12:00:00.000Z',
      coverImageUrl: null,
      placeholder: true,
      source: 'placeholder',
    },
    {
      id: 'placeholder-montreal-dev',
      title: 'Placeholder: building from Montreal',
      brief: 'Stand-in brief about remote-friendly product work and keeping a personal site honest about what is real vs. draft.',
      url: `https://${HASHNODE_HOST}`,
      publishedAt: '2025-11-18T12:00:00.000Z',
      coverImageUrl: null,
      placeholder: true,
      source: 'placeholder',
    },
  ],
};

export const news = {
  eyebrow: 'News',
  title: 'Notes and updates',
  lede: 'Short site notes. Every article here is placeholder copy until real updates exist.',
  articles: [
    {
      slug: 'site-foundation',
      title: 'Placeholder: this site now has a visual canon',
      date: '2026-08-01',
      excerpt:
        'Tokens, shared page chrome, and one route transition so later visual work is a small change instead of a restyle.',
      paragraphs: [
        'This is placeholder news. It exists so the News route has real layout, not a stub.',
        'The canon lives in DESIGN.md. Color, type, space, and motion should move there first. Pages should keep using PageHeader and PageCard.',
        'Replace this article when there is an actual update to announce.',
      ],
      placeholder: true,
    },
    {
      slug: 'open-to-collaborations',
      title: 'Placeholder: open to collaborations',
      date: '2026-06-20',
      excerpt:
        'A stand-in note that the contact form is a mailto for now, and that project case studies will land in Portfolio.',
      paragraphs: [
        'This is placeholder news, not a real announcement.',
        'When real work ships, swap this article in src/data/site-content.js. Do not invent employers or metrics here.',
      ],
      placeholder: true,
    },
    {
      slug: 'reading-list',
      title: 'Placeholder: a public reading list',
      date: '2026-03-09',
      excerpt:
        'Stand-in excerpt for a list of talks, posts, and docs worth keeping next to the Hashnode blog.',
      paragraphs: [
        'This is placeholder news. Use it as a shape for talks, roundups, or changelog-style notes.',
        'Keep News distinct from Blog: Blog is Hashnode writing. News is site-level updates.',
      ],
      placeholder: true,
    },
    {
      slug: 'map-and-contact',
      title: 'Placeholder: contact and map',
      date: '2026-01-14',
      excerpt:
        'Stand-in note that Contact uses a frontend-only form and a Montreal pin until a backend exists.',
      paragraphs: [
        'This is placeholder news. The map pin is Montreal as a location marker, not a street address.',
        'The form opens a mail client. Nothing is stored on a server.',
      ],
      placeholder: true,
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Get in touch',
  lede: 'Send a note about a role, a product, or a collaboration. The form opens your mail client. Nothing is stored on this site.',
  email: aboutEmail,
  phone: settings.contact.phone,
  phonePlaceholder: true,
  location: aboutLocation,
  map: {
    lat: 45.5017,
    lng: -73.5673,
    zoom: 11,
    label: 'Montreal, Canada (placeholder pin)',
  },
};

export function getNewsArticle(slug) {
  return news.articles.find((article) => article.slug === slug) || null;
}

export const site = {
  navigation,
  home,
  about,
  portfolio,
  services,
  blog,
  news,
  contact,
  socials,
};
