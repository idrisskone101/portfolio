import Link from 'next/link';
import { PageHeader, PageShell } from '@/components/page-chrome';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="404"
        title="Page not found"
        lede="That route is not on this site. Head home or use the menu to keep moving."
      />
      <Button asChild>
        <Link href="/">Back home</Link>
      </Button>
    </PageShell>
  );
}
