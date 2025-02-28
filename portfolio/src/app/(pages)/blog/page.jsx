import { formatDistanceToNow } from 'date-fns';

async function getBlogPosts() {
  const hashnodeHostname = 'idrisskone.hashnode.dev';

  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        posts(first: 6) {
          edges {
            node {
              title
              brief
              slug
              url
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { host: hashnodeHostname },
    }),
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  const data = await response.json();
  return data.data.publication.posts.edges;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <div className="container py-12 mx-auto">
      {/* Hero Section */}
      <div className="mb-12 text-left">
        <p className="text-[#999] py-3 px-3 bg-white/[8%] uppercase font-semibold text-xs mb-4 w-fit">
          Blog
        </p>
        <h1 className="mb-4 text-3xl font-bold">Latest Blog Posts</h1>
        <p className="max-w-2xl text-base text-left text-gray-300">
          Thoughts, ideas, and insights on software development, design, and
          technology
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="text-lg text-gray-300">
            No blog posts found. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-main rounded-lg shadow-md hover:shadow-xl hover:transform hover:scale-[1.02]"
            >
              {post.node.coverImage?.url ? (
                <img
                  src={post.node.coverImage.url}
                  alt={post.node.title}
                  className="object-cover w-full h-48"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-48 bg-gray-800">
                  <span className="text-gray-500">No cover image</span>
                </div>
              )}
              <div className="p-6 text-left">
                <h2 className="mb-3 text-xl font-semibold">
                  {post.node.title}
                </h2>
                <p className="mb-3 text-sm text-gray-400">
                  {formatDate(post.node.publishedAt)}
                </p>
                <p className="mb-4 text-gray-300 line-clamp-3">
                  {post.node.brief}
                </p>
                <a
                  href={post.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white transition-colors bg-[#111] rounded"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
