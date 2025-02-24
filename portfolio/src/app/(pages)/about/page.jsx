import AboutHero from './components/AboutHero';
import settings from '@/settings.json';
import AboutSkills from './components/AboutSkills';

export default function AboutPage() {
  const { about } = settings;

  return (
    <div className="flex flex-col items-start xl:max-w-5xl xl:mx-auto">
      <AboutHero settings={settings.about} name={settings.home.name} />
      <AboutSkills settings={settings.about} />
    </div>
  );
}
