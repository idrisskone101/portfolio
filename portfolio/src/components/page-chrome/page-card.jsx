import Link from 'next/link';
import { cn } from '@/lib/utils';

const cardClassName =
  'block w-full overflow-hidden text-left border bg-surface border-line rounded-lg transition-colors duration-page ease-page hover:border-magenta/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta';

export function PageCard({
  children,
  href,
  external = false,
  className,
  onClick,
}) {
  const classes = cn(cardClassName, onClick && 'cursor-pointer', className);

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return <article className={classes}>{children}</article>;
}
