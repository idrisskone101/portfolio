import { services } from '@/data/site-content';
import {
  PageCard,
  PageHeader,
  PageShell,
  PlaceholderFlag,
} from '@/components/page-chrome';

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={services.eyebrow}
        title={services.title}
        lede={services.lede}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.offerings.map((offering) => (
          <PageCard key={offering.id} className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-3 mb-6">
              <span className="text-sm font-semibold tracking-[0.18em] text-magenta">
                {offering.number}
              </span>
              {offering.placeholder ? <PlaceholderFlag /> : null}
            </div>
            <h2 className="mb-3 text-2xl font-bold">{offering.title}</h2>
            <p className="text-sm leading-7 text-copy-muted sm:text-base">
              {offering.description}
            </p>
          </PageCard>
        ))}
      </div>
    </PageShell>
  );
}
