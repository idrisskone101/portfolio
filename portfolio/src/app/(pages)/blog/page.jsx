import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { getBlogPosts } from '@/lib/blog/hashnode';
import { blog } from '@/data/site-content';
import { PageHeader, PageShell } from '@/components/page-chrome';
import { cn } from '@/lib/utils';

export const revalidate = 3600;

export const metadata = {
  title: 'Blog',
  description: blog.lede,
};

function formatDate(dateString) {
  try {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  } catch (cause) {
    console.error('blog date format failed', { dateString, cause });
    return '';
  }
}

export default async function BlogPage() {
  const result = await getBlogPosts();
  const posts = result.posts;

  return (
    <PageShell>
      <PageHeader eyebrow={blog.eyebrow} title={blog.title} lede={blog.lede} />

      {posts.length === 0 ? (
        <p
          className="border-t border-line py-8 text-sm text-copy-muted sm:text-base"
          data-blog-source={result.source}
        >
          Read my posts on{' '}
          <a
            href={blog.hashnodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-magenta hover:underline"
          >
            Hashnode
          </a>
          .
        </p>
      ) : null}

      {posts.length > 0 ? (
        <ol
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12"
          data-blog-source={result.source}
        >
          {posts.map((post, index) => (
            <li
              key={post.id}
              className={cn(
                'border-t border-line py-8',
                index === 0 && 'md:col-span-2'
              )}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
              >
                {post.coverImageUrl ? (
                  <div
                    className={cn(
                      'relative w-full mb-6 overflow-hidden border border-line rounded-lg aspect-[16/9]'
                    )}
                  >
                    <Image
                      src={post.coverImageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 576px"
                    />
                  </div>
                ) : null}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {post.publishedAt ? (
                    <p className="text-sm text-copy-faint">
                      {formatDate(post.publishedAt)}
                    </p>
                  ) : null}
                </div>
                <h2
                  className={cn(
                    'mb-3 font-semibold group-hover:text-magenta',
                    index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'
                  )}
                >
                  {post.title}
                </h2>
                <p className="mb-4 text-sm leading-6 text-copy-muted line-clamp-3">
                  {post.brief}
                </p>
                <span className="text-sm font-medium text-magenta">
                  Read more
                </span>
              </a>
            </li>
          ))}
        </ol>
      ) : null}
    </PageShell>
  );
}
