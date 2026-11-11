import AboutHero from './components/AboutHero';
import AboutSkills from './components/AboutSkills';
import { about, home, role } from '@/data/site-content';
import { PageShell } from '@/components/page-chrome';

export const metadata = {
  title: 'About',
  description: `${home.name} is a ${role.title.toLowerCase()} at ${role.company} in ${role.location}.`,
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero settings={about} name={home.name} />
      <AboutSkills />
    </PageShell>
  );
}
