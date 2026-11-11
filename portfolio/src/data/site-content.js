import settings from '@/settings.json';

export const HASHNODE_HOST = 'idrisskone.hashnode.dev';

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
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
    label: 'LinkedIn',
    href: home.socialLinks.linkedin,
    icon: 'linkedin',
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

export const blog = {
  eyebrow: 'Blog',
  title: 'Writing',
  lede: 'Notes on building software, learning in public, and whatever I am tinkering with. Straight from my Hashnode blog.',
  hashnodeHost: HASHNODE_HOST,
  hashnodeUrl: `https://${HASHNODE_HOST}`,
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

export const site = {
  navigation,
  siteMetadata,
  role,
  home,
  about,
  portfolio,
  blog,
  contact,
  socials,
};
