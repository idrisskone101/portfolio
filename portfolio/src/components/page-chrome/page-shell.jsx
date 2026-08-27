import { cn } from '@/lib/utils';

export function PageShell({ children, className }) {
  return (
    <div className={cn('w-full px-5 py-10 xl:px-12 xl:py-14', className)}>
      <div className="w-full max-w-5xl mx-auto text-left">{children}</div>
    </div>
  );
}
