import { blog as blogContent } from '@/data/site-content';

const HASHNODE_ENDPOINT = 'https://gql.hashnode.com/';
const USER_AGENT =
  'Mozilla/5.0 (compatible; idrisskone.com/1.0; +https://idrisskone.com)';
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
      source: 'hashnode',
    };
  });
}

const NAMED_ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  mdash: '\u2014',
  ndash: '\u2013',
  hellip: '\u2026',
  lsquo: '\u2018',
  rsquo: '\u2019',
  ldquo: '\u201c',
  rdquo: '\u201d',
};

function unwrapCdata(text) {
  return text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
}

function decodeEntities(text) {
  let out = text;
  for (let pass = 0; pass < 2; pass += 1) {
    out = out
      .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
      .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
        String.fromCodePoint(parseInt(code, 16))
      )
      .replace(/&([a-z]+);/gi, (match, name) =>
        Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, name.toLowerCase())
          ? NAMED_ENTITIES[name.toLowerCase()]
          : match
      );
  }
  return out.trim();
}

function readXmlText(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? match[1] : '';
}

function readRawTag(xml, tag) {
  return unwrapCdata(readXmlText(xml, tag));
}

function readTag(xml, tag) {
  return decodeEntities(readRawTag(xml, tag));
}

function htmlToText(rawXmlText) {
  // CDATA holds literal HTML; plain XML text holds entity-escaped HTML that
  // must be unescaped once before its tags can be stripped.
  const isCdata = /^\s*<!\[CDATA\[/.test(rawXmlText);
  const html = isCdata
    ? unwrapCdata(rawXmlText)
    : rawXmlText
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&');
  const withoutTags = html.replace(/<[^>]+>/g, ' ');
  return decodeEntities(withoutTags).replace(/\s+/g, ' ').trim();
}

function toIsoDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function readCoverImage(item) {
  const enclosure = item.match(
    /<enclosure[^>]*\burl="([^"]+)"[^>]*\btype="image\/[^"]*"/
  );
  const anyEnclosure = item.match(/<enclosure[^>]*\burl="([^"]+)"/);
  return (
    decodeEntities((enclosure || anyEnclosure || [])[1] || '') ||
    readTag(item, 'cover_image') ||
    null
  );
}

export function parseRss(xml) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  return items.slice(0, 6).map((item) => {
    const url = readTag(item, 'link');
    const brief = htmlToText(readXmlText(item, 'description'));
    const pubDate = readTag(item, 'pubDate');
    return {
      id: readTag(item, 'guid') || url,
      title: readTag(item, 'title') || 'Untitled',
      brief: brief.length > 280 ? `${brief.slice(0, 277)}...` : brief,
      url: url || blogContent.hashnodeUrl,
      publishedAt: pubDate ? toIsoDate(pubDate) : null,
      coverImageUrl: readCoverImage(item),
      source: 'hashnode-rss',
    };
  });
}

async function getRssPosts() {
  try {
    const response = await fetch(`${blogContent.hashnodeUrl}/rss.xml`, {
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml',
        'User-Agent': USER_AGENT,
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!response.ok) return { error: `rss http ${response.status}` };
    const posts = parseRss(await response.text());
    return posts.length ? { posts } : { error: 'rss empty' };
  } catch (cause) {
    return { error: `rss network: ${cause?.message || cause}` };
  }
}

async function fallback(error, cause) {
  const rss = await getRssPosts();
  if (rss.posts) {
    console.warn('hashnode graphql unavailable; using rss', { error, cause });
    return { ok: true, error: null, source: 'rss', posts: rss.posts };
  }
  console.error('hashnode posts unavailable', {
    operation: 'getBlogPosts',
    host: blogContent.hashnodeHost,
    error,
    cause,
    rssError: rss.error,
  });
  return {
    ok: false,
    error: `${error}; ${rss.error}`,
    source: 'none',
    posts: [],
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
        'User-Agent': USER_AGENT,
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
    source: 'graphql',
    posts: mapHashnodeEdges(edges),
  };
}
