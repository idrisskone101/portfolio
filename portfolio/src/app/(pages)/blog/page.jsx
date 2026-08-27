import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { getBlogPosts } from '@/lib/blog/hashnode';
import { blog } from '@/data/site-content';
import {
  PageCard,
  PageHeader,
  PageShell,
  PlaceholderFlag,
} from '@/components/page-chrome';

export const revalidate = 3600;

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
  const usingFallback = !result.ok;

  return (
    <PageShell>
      <PageHeader eyebrow={blog.eyebrow} title={blog.title} lede={blog.lede} />
      {usingFallback ? (
        <p className="mb-8 text-sm text-copy-faint">
          Hashnode is unavailable or empty, so placeholder posts are showing.
          Writing still lives at{' '}
          <a
            href={blog.hashnodeUrl}
            className="text-magenta hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {blog.hashnodeHost}
          </a>
          .
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PageCard
            key={post.id}
            href={post.url}
            external
            className="flex flex-col"
          >
            {post.coverImageUrl ? (
              <div className="relative w-full h-48">
                <Image
                  src={post.coverImageUrl}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-48 border-b bg-surface-2 border-line">
                <span className="text-sm text-copy-faint">No cover image</span>
              </div>
            )}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-2 mb-3">
                {post.placeholder ? <PlaceholderFlag /> : null}
                {post.publishedAt ? (
                  <p className="text-sm text-copy-faint">
                    {formatDate(post.publishedAt)}
                  </p>
                ) : null}
              </div>
              <h2 className="mb-3 text-xl font-semibold">{post.title}</h2>
              <p className="mb-6 text-sm leading-6 text-copy-muted line-clamp-3">
                {post.brief}
              </p>
              <span className="mt-auto text-sm font-medium text-magenta">
                Read more
              </span>
            </div>
          </PageCard>
        ))}
      </div>
    </PageShell>
  );
}
