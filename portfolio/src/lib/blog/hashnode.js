import { blog as blogContent } from '@/data/site-content';

const HASHNODE_ENDPOINT = 'https://gql.hashnode.com/';
const FETCH_TIMEOUT_MS = 8000;

const PUBLICATION_QUERY = `
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

function mapPlaceholderPosts() {
  return blogContent.fallbackPosts.map((post) => ({ ...post }));
}

function mapHashnodeEdges(edges) {
  return edges.map((edge) => {
    const node = edge?.node || {};
    return {
      id: node.slug || node.url || node.title,
      title: node.title || 'Untitled',
      brief: node.brief || '',
      url: node.url || blogContent.hashnodeUrl,
      publishedAt: node.publishedAt || new Date().toISOString(),
      coverImageUrl: node.coverImage?.url || null,
      placeholder: false,
      source: 'hashnode',
    };
  });
}

function fallback(error, cause) {
  console.error('hashnode posts unavailable; using placeholders', {
    operation: 'getBlogPosts',
    host: blogContent.hashnodeHost,
    error,
    cause,
  });
  return {
    ok: false,
    error,
    posts: mapPlaceholderPosts(),
  };
}

export async function getBlogPosts() {
  let response;

  try {
    response = await fetch(HASHNODE_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: PUBLICATION_QUERY,
        variables: { host: blogContent.hashnodeHost },
      }),
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
  } catch (cause) {
    return fallback('network', cause);
  }

  if (!response.ok) {
    return fallback('http', { status: response.status });
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return fallback('non-json', { contentType });
  }

  let payload;
  try {
    payload = await response.json();
  } catch (cause) {
    return fallback('parse', cause);
  }

  if (payload?.errors?.length) {
    return fallback('graphql', payload.errors);
  }

  const edges = payload?.data?.publication?.posts?.edges;
  if (!Array.isArray(edges) || edges.length === 0) {
    return fallback('empty', null);
  }

  return {
    ok: true,
    error: null,
    posts: mapHashnodeEdges(edges),
  };
}
