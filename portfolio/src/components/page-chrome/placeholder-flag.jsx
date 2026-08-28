import { cn } from '@/lib/utils';

export function PlaceholderFlag({ className }) {
  return (
    <span
      className={cn(
        'inline-block px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-copy-faint border border-line',
        className
      )}
    >
      Placeholder
    </span>
  );
}
