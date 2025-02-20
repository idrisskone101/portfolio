import AboutHero from './components/AboutHero';
import settings from '@/settings.json';
import AboutSkills from './components/AboutSkills';

export default function AboutPage() {
  const { about } = settings;

  return (
    <div className="flex flex-col items-start max-w-4xl">
      <AboutHero settings={settings.about} name={settings.home.name} />
      <AboutSkills settings={settings.about} />
    </div>
  );
}
