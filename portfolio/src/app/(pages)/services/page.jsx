import { services } from '@/data/site-content';
import {
  PageHeader,
  PageShell,
  PlaceholderFlag,
} from '@/components/page-chrome';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={services.eyebrow}
        title={services.title}
        lede={services.lede}
      />
      <ol className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {services.offerings.map((offering, index) => (
          <li
            key={offering.id}
            className={cn(
              'border-t border-line py-8',
              (index === 0 || index === services.offerings.length - 1) &&
                'md:col-span-2'
            )}
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-sm font-semibold tracking-[0.18em] text-magenta">
                {offering.number}
              </span>
              {offering.placeholder ? <PlaceholderFlag /> : null}
            </div>
            <h2
              className={cn(
                'mb-3 font-bold',
                index === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl'
              )}
            >
              {offering.title}
            </h2>
            <p
              className={cn(
                'text-copy-muted leading-7',
                index === 0
                  ? 'max-w-[65ch] text-base sm:text-lg'
                  : 'text-sm sm:text-base'
              )}
            >
              {offering.description}
            </p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
