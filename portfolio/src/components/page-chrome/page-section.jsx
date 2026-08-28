import { cn } from '@/lib/utils';

export function PageSection({ title, children, className }) {
  return (
    <section className={cn('mt-14', className)}>
      {title ? (
        <h2 className="mb-6 text-2xl font-bold text-left">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}
