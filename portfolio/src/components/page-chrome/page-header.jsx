import { cn } from '@/lib/utils';

export function PageHeader({ eyebrow, title, lede, className }) {
  return (
    <header className={cn('mb-12', className)}>
      <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-copy-faint bg-white/[0.08]">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
      {lede ? (
        <p className="max-w-[65ch] mt-4 text-sm leading-7 sm:text-base text-copy-muted">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
