import { news } from '@/data/site-content';
import {
  PageHeader,
  PageShell,
  PlaceholderFlag,
} from '@/components/page-chrome';
import Link from 'next/link';

export const metadata = {
  title: 'News',
  description: news.lede,
};

export default function NewsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={news.eyebrow} title={news.title} lede={news.lede} />
      <ol>
        {news.articles.map((article, index) => (
          <li
            key={article.slug}
            className={
              index === 0
                ? 'border-t border-line py-10'
                : 'border-t border-line py-8'
            }
          >
            <Link
              href={`/news/${article.slug}`}
              className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <time
                  dateTime={article.date}
                  className="text-sm text-copy-faint"
                >
                  {article.date}
                </time>
                {article.placeholder ? <PlaceholderFlag /> : null}
              </div>
              <h2
                className={
                  index === 0
                    ? 'mb-3 text-2xl font-extrabold sm:text-3xl group-hover:text-magenta'
                    : 'mb-2 text-xl font-semibold group-hover:text-magenta'
                }
              >
                {article.title}
              </h2>
              <p
                className={
                  index === 0
                    ? 'text-base leading-7 text-copy-muted sm:text-lg max-w-[65ch]'
                    : 'text-sm leading-7 text-copy-muted sm:text-base max-w-[65ch]'
                }
              >
                {article.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
