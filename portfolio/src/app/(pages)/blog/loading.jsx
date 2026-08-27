import { PageHeader, PageShell } from '@/components/page-chrome';

export default function Loading() {
  return (
    <PageShell>
      <PageHeader eyebrow="Blog" title="Writing" lede="Loading posts." />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="overflow-hidden border bg-surface border-line rounded-lg"
          >
            <div className="w-full h-48 bg-surface-2 animate-pulse" />
            <div className="p-6">
              <div className="w-3/4 h-6 mb-3 rounded bg-surface-2 animate-pulse" />
              <div className="w-1/4 h-4 mb-3 rounded bg-surface-2 animate-pulse" />
              <div className="space-y-2">
                <div className="w-full h-4 rounded bg-surface-2 animate-pulse" />
                <div className="w-full h-4 rounded bg-surface-2 animate-pulse" />
                <div className="w-2/3 h-4 rounded bg-surface-2 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
