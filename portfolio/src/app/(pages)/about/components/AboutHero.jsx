import profileImage from '@/app/_assets/images/profile.jpg';
import { Button } from '@/components/ui/button';
import { PageHeader, PlaceholderFlag } from '@/components/page-chrome';
import { contact } from '@/data/site-content';

export default function AboutHero({ settings, name }) {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="About"
        title={settings.title}
        className="mb-8"
      />
      <div className="w-full lg:flex lg:items-center lg:gap-10">
        <div
          className="w-full aspect-[16/13] mt-2 mb-9 bg-no-repeat bg-center bg-cover bg-blend-multiply lg:max-w-md"
          style={{
            backgroundImage: `url(${profileImage.src})`,
            filter: 'grayscale(100%)',
            backgroundPosition: '50% 10%',
          }}
          role="img"
          aria-label={`${name} portrait`}
        />

        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold lg:text-5xl">{name}</h2>
          <p className="text-sm text-copy-muted pb-5 lg:text-lg">
            {settings.subtitle}
          </p>
        </div>
      </div>

      <hr className="w-full border-t border-line mb-7" />
      <div className="max-w-[65ch] space-y-5 xl:max-w-5xl">
        {settings.mainContent
          .split(/\n\n+/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean)
          .map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm text-left leading-7 text-copy-muted sm:text-base"
            >
              {paragraph}
            </p>
          ))}
      </div>
      <hr className="w-full border-t border-line mb-7 mt-8" />
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-3">
        {settings.info.map((info) => (
          <div className="flex text-sm" key={info.label}>
            <p className="w-24 font-bold text-left shrink-0">{info.label}</p>
            <p className="flex flex-wrap items-center gap-2 text-copy-muted text-left">
              {info.label === 'Email:' ? (
                <a
                  href={`mailto:${info.value}`}
                  className="hover:text-magenta"
                >
                  {info.value}
                </a>
              ) : (
                info.value
              )}
              {info.label === 'Phone:' && contact.phonePlaceholder ? (
                <PlaceholderFlag />
              ) : null}
            </p>
          </div>
        ))}
      </div>
      <hr className="w-full border-t border-line mb-7 mt-8" />

      <Button asChild variant="inverse">
        <a href="/IdrissKoneResume.pdf" target="_blank" rel="noopener noreferrer">
          View my Resume
        </a>
      </Button>
    </div>
  );
}
