import { PageHeader, PageShell } from '@/components/page-chrome';

export default function Loading() {
  return (
    <PageShell>
      <PageHeader eyebrow="Blog" title="Writing" lede="Loading posts." />
      <div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="py-8 border-t border-line">
            <div className="w-24 h-4 mb-3 bg-surface-2 animate-pulse" />
            <div className="w-3/4 h-7 mb-3 bg-surface-2 animate-pulse" />
            <div className="space-y-2 max-w-[65ch]">
              <div className="w-full h-4 bg-surface-2 animate-pulse" />
              <div className="w-5/6 h-4 bg-surface-2 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
