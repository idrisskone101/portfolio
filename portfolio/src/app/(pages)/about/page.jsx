import AboutHero from './components/AboutHero';
import AboutSkills from './components/AboutSkills';
import { about, home, studio } from '@/data/site-content';
import { PageShell } from '@/components/page-chrome';

export const metadata = {
  title: 'About',
  description: `${home.name} is the founder of ${studio.name}, an app studio in ${studio.city}.`,
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero settings={about} name={home.name} />
      <AboutSkills />
    </PageShell>
  );
}
