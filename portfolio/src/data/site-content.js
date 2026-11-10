import settings from '@/settings.json';

export const HASHNODE_HOST = 'idrisskone.hashnode.dev';

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
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

export const role = {
  title: 'Software Developer',
  company: 'Plusgrade',
  location: 'Montreal',
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
      id: 'plusgrade',
      title: 'Software Developer · Plusgrade',
      statusLabel: 'Currently',
      href: '/experience',
      external: false,
    },
    {
      id: 'pillie',
      title: 'Pillie, an iOS app on the App Store',
      statusLabel: 'Side project',
      href: 'https://apps.apple.com/app/id6759352439',
      external: true,
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
  title: 'Projects',
  lede: settings.portfolio.description,
  projects: settings.portfolio.projects.map((project) => ({
    ...project,
    placeholder: project.placeholder === true,
  })),
};

export const experience = {
  eyebrow: 'Experience',
  title: 'Where I have worked',
  lede: 'Over five years building web products, from e-commerce storefronts to the Optimizations team at Plusgrade.',
  roles: [
    {
      id: 'plusgrade',
      number: '01',
      title: 'Software Developer',
      company: 'Plusgrade',
      period: 'Present',
      location: 'Montreal',
      summary:
        'On the Optimizations team, I work across React, Go and Salesforce Commerce Cloud, and use PostHog, Snowflake and Splunk to measure and debug what ships.',
      highlights: [],
    },
    {
      id: 'sheertex-web-developer',
      number: '02',
      title: 'Web Developer',
      company: 'Sheertex',
      period: 'Sep 2023 – Feb 2025',
      location: 'Montreal',
      summary: null,
      highlights: [
        'Built a customer accounts feature with TypeScript and the Shopify Customer API.',
        'Worked on the migration from React to Remix with server-side rendering, cutting initial page load times by 40%.',
        'Built a store locator that combined scraped inventory data with mapping services, increasing physical store visits by 30%.',
        'Shipped a wishlist with automated email notifications, increasing customer return rates by 25%.',
        'Managed an external developer through task briefs and code reviews, cutting project turnaround time by 40%.',
      ],
    },
    {
      id: 'sheertex-junior',
      number: '03',
      title: 'Junior Web Developer',
      company: 'Sheertex',
      period: 'Feb 2022 – Sep 2023',
      location: 'Montreal',
      summary: null,
      highlights: [
        'Built a Quick Add feature with React and the Shopify Storefront API, increasing monthly revenue by 10%.',
        'Ran A/B tests and user-behaviour analysis on the conversion funnel, raising conversion rates by 15%.',
        'Improved page speed and uptime across the React storefronts, and led regular code reviews.',
      ],
    },
    {
      id: 'manhattan',
      number: '04',
      title: 'Junior Web Developer',
      company: 'Manhattan International',
      period: 'Jan 2021 – Feb 2022',
      location: 'Montreal',
      summary: null,
      highlights: [
        'Built a cart upsell feature that increased monthly revenue by 15% through higher order values.',
        'Implemented third-party payment and shipping integrations to reduce cart abandonment.',
        'Developed interactive site features in HTML, CSS and JavaScript.',
      ],
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
  showPhone: false,
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
  role,
  home,
  about,
  portfolio,
  experience,
  blog,
  news,
  contact,
  socials,
};
