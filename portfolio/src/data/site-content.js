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

export const siteMetadata = {
  title: settings.siteMetadata.title,
  titleTemplate: '%s · Idriss Kone',
  description: settings.siteMetadata.description,
  author: settings.siteMetadata.author,
};

export const studio = {
  name: 'Kode Studios',
  founder: settings.home.name,
  founded: '2026',
  email: aboutEmail,
  summary: 'Kode Studios is Idriss Kone\'s AI-first app studio.',
};

export const home = {
  ...settings.home,
  socialLinks: {
    github: 'https://github.com/idrisskone101',
    linkedin: settings.home.socialLinks.linkedin,
    email: aboutEmail,
    twitter: settings.home.socialLinks.twitter,
    instagram: settings.home.socialLinks.instagram,
  },
  products: [
    {
      id: 'pillie',
      title: 'Birth Control Reminder: Pillie',
      statusLabel: 'Live on the App Store',
      href: 'https://apps.apple.com/app/id6759352439',
      external: true,
    },
    {
      id: 'hairtrace',
      title: 'HairTrace',
      statusLabel: 'In development',
      href: '/portfolio',
      external: false,
    },
  ],
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
  eyebrow: settings.portfolio.title,
  title: 'Selected work',
  lede: settings.portfolio.description,
  projects: settings.portfolio.projects.map((project) => ({
    ...project,
    placeholder: project.placeholder === true,
  })),
};

export const services = {
  eyebrow: 'Services',
  title: 'What Kode Studios builds',
  lede: 'Kode Studios is an AI-first app studio. It ships consumer iOS apps.',
  offerings: [
    {
      id: 'consumer-ios',
      number: '01',
      title: 'Consumer iOS apps',
      description:
        'Pillie is live on the App Store. HairTrace is in development.',
      placeholder: false,
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
      title: 'Shipping a UI you can iterate',
      brief: 'A stand-in post about keeping visual decisions in tokens so a site can change without a rewrite. Replace from Hashnode.',
      url: `https://${HASHNODE_HOST}`,
      publishedAt: '2026-04-12T12:00:00.000Z',
      coverImageUrl: null,
      placeholder: true,
      source: 'placeholder',
    },
    {
      id: 'placeholder-react-notes',
      title: 'Notes on React in production',
      brief: 'Stand-in brief covering server components, client islands, and when not to add another library. Replace from Hashnode.',
      url: `https://${HASHNODE_HOST}`,
      publishedAt: '2026-02-03T12:00:00.000Z',
      coverImageUrl: null,
      placeholder: true,
      source: 'placeholder',
    },
    {
      id: 'placeholder-montreal-dev',
      title: 'Building in public',
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
      title: 'This site now has a visual canon',
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
      title: 'Open to collaborations',
      date: '2026-06-20',
      excerpt:
        'A stand-in note that the contact form is a mailto for now, and that project case studies will land in Portfolio.',
      paragraphs: [
        'This is placeholder news, not a real announcement.',
        'When real work ships, swap this article. Do not invent employers or metrics here.',
      ],
      placeholder: true,
    },
    {
      slug: 'reading-list',
      title: 'A public reading list',
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
      title: 'Contact and map',
      date: '2026-01-14',
      excerpt:
        'Stand-in note that Contact uses a frontend-only form until a backend exists.',
      paragraphs: [
        'This is placeholder news. The form opens a mail client. Nothing is stored on a server.',
        'Replace this article when there is an actual update to announce.',
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
  map: {
    lat: 45.5017,
    lng: -73.5673,
    zoom: 11,
    label: 'Map',
  },
};

export function getNewsArticle(slug) {
  return news.articles.find((article) => article.slug === slug) || null;
}

export const site = {
  navigation,
  siteMetadata,
  studio,
  home,
  about,
  portfolio,
  services,
  blog,
  news,
  contact,
  socials,
};
