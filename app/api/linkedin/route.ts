import {NextResponse} from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

interface Post {
  id: string;
  content: string;
  date: string;
  url: string;
}

function getFallbackPosts(): Post[] {
  try {
    const filePath = path.join(process.cwd(), 'data', 'linkedin.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.posts || [];
  } catch {
    return [];
  }
}

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

async function scrapeLinkedInActivity(): Promise<Post[] | null> {
  const username = 'hidirektor';
  const url = `https://www.linkedin.com/in/${username}/recent-activity/shares/`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const html = await res.text();

    // LinkedIn sometimes embeds activity data in a JSON blob inside <code> tags
    // Pattern: {"activityFeed":...} or similar embedded data
    const codeMatches = html.matchAll(/<code[^>]*>(.*?)<\/code>/gs);
    const posts: Post[] = [];

    for (const match of codeMatches) {
      try {
        const raw = match[1].trim();
        if (!raw.startsWith('{') && !raw.startsWith('[')) continue;
        const json = JSON.parse(raw);

        // Try to find activity/share data in various LinkedIn data shapes
        const items: any[] =
          json?.data?.elements ||
          json?.elements ||
          json?.data?.activityFeed?.elements ||
          [];

        for (const item of items) {
          const commentary =
            item?.commentary?.text?.text ||
            item?.specificContent?.['com.linkedin.ugc.ShareContent']?.shareCommentary?.text ||
            item?.value?.['com.linkedin.voyager.feed.render.UpdateV2']?.commentary?.text?.text;

          if (!commentary) continue;

          const timestampMs =
            item?.createdAt ||
            item?.actor?.createdAt ||
            item?.publishedAt;

          const entityUrn = item?.updateMetadata?.urn || item?.entityUrn || '';
          const shareId = entityUrn.split(':').pop() || String(posts.length + 1);

          posts.push({
            id: shareId,
            content: commentary.substring(0, 500),
            date: timestampMs ? formatDate(timestampMs) : '',
            url: `https://www.linkedin.com/feed/update/${entityUrn}/`,
          });

          if (posts.length >= 5) break;
        }
      } catch {
        // JSON parse failed for this code block, skip
      }
      if (posts.length >= 5) break;
    }

    return posts.length > 0 ? posts : null;
  } catch {
    return null;
  }
}

export async function GET() {
  // 1. Try live scrape first
  const scraped = await scrapeLinkedInActivity();
  if (scraped && scraped.length > 0) {
    return NextResponse.json({ posts: scraped, source: 'live' });
  }

  // 2. Fall back to local JSON
  const fallback = getFallbackPosts();
  return NextResponse.json({ posts: fallback, source: 'fallback' });
}
