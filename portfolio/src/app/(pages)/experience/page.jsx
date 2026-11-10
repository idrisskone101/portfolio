import { experience } from '@/data/site-content';
import { PageHeader, PageShell } from '@/components/page-chrome';

export const metadata = {
  title: 'Experience',
  description: experience.lede,
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={experience.eyebrow}
        title={experience.title}
        lede={experience.lede}
      />
      <ol>
        {experience.roles.map((role) => (
          <li key={role.id} className="border-t border-line py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span
                aria-hidden="true"
                className="text-sm font-semibold tracking-[0.18em] text-magenta"
              >
                {role.number}
              </span>
              <span className="text-sm text-copy-faint">{role.period}</span>
            </div>
            <h2 className="mb-1 text-2xl font-bold">
              {role.title}
              <span className="sr-only">, {role.company}</span>
            </h2>
            <p className="mb-4 text-sm text-copy-faint">
              {role.company} · {role.location}
            </p>
            {role.summary ? (
              <p className="max-w-[65ch] text-sm leading-7 text-copy-muted sm:text-base">
                {role.summary}
              </p>
            ) : null}
            {role.highlights.length > 0 ? (
              <ul className="max-w-[65ch] space-y-2 list-disc pl-5 text-sm leading-7 text-copy-muted marker:text-magenta sm:text-base">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
