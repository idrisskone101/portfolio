import AboutHero from './components/AboutHero';
import AboutSkills from './components/AboutSkills';
import { about, home } from '@/data/site-content';
import { PageShell } from '@/components/page-chrome';

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero settings={about} name={home.name} />
      <AboutSkills />
    </PageShell>
  );
}
