import { news } from '@/data/site-content';
import {
  PageCard,
  PageHeader,
  PageShell,
  PlaceholderFlag,
} from '@/components/page-chrome';

export default function NewsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={news.eyebrow} title={news.title} lede={news.lede} />
      <ol className="flex flex-col gap-4">
        {news.articles.map((article) => (
          <li key={article.slug}>
            <PageCard href={`/news/${article.slug}`} className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <time
                  dateTime={article.date}
                  className="text-sm text-copy-faint"
                >
                  {article.date}
                </time>
                {article.placeholder ? <PlaceholderFlag /> : null}
              </div>
              <h2 className="mb-2 text-2xl font-bold">{article.title}</h2>
              <p className="text-sm leading-7 text-copy-muted sm:text-base">
                {article.excerpt}
              </p>
            </PageCard>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
