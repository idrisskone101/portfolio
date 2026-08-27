import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsArticle, news } from '@/data/site-content';
import {
  PageHeader,
  PageShell,
  PlaceholderFlag,
} from '@/components/page-chrome';

export function generateStaticParams() {
  return news.articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = getNewsArticle(params.slug);
  if (!article) {
    return { title: 'News — Idriss Kone' };
  }
  return { title: `${article.title} — Idriss Kone` };
}

export default function NewsArticlePage({ params }) {
  const article = getNewsArticle(params.slug);
  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      <p className="mb-6">
        <Link
          href="/news"
          className="text-sm text-copy-faint transition-colors hover:text-magenta"
        >
          Back to news
        </Link>
      </p>
      <PageHeader
        eyebrow="News"
        title={article.title}
        lede={article.excerpt}
      />
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <time dateTime={article.date} className="text-sm text-copy-faint">
          {article.date}
        </time>
        {article.placeholder ? <PlaceholderFlag /> : null}
      </div>
      <div className="max-w-[65ch] space-y-5">
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-7 text-copy-muted sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </PageShell>
  );
}
