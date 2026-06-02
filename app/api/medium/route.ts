import {NextResponse} from 'next/server';

function extractFirstImage(html: string): string | null {
  // Match first <img> tag and grab its src attribute
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (!match) return null;
  const src = match[1];
  // Filter out tracking pixels and tiny icons
  if (src.includes('stat?event') || src.includes('1x1') || src.includes('beacon') || src.includes('track')) return null;
  return src;
}

export async function GET() {
  try {
    const rssUrl = 'https://medium.com/feed/@hidirektor';
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=&count=10`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium articles');
    }

    const data = await response.json();
    
    if (data.status === 'ok') {
      const articles = data.items.map((item: any) => {
        // Best thumbnail: enclosure > thumbnail field (if not a tracker) > first img in content
        let thumbnail: string | null = null;

        if (item.enclosure?.link && !item.enclosure.link.includes('stat?event')) {
          thumbnail = item.enclosure.link;
        } else if (item.thumbnail && !item.thumbnail.includes('stat?event') && !item.thumbnail.includes('1x1')) {
          thumbnail = item.thumbnail;
        } else if (item.content) {
          thumbnail = extractFirstImage(item.content);
        } else if (item.description) {
          thumbnail = extractFirstImage(item.description);
        }

        return {
          title: item.title,
          url: item.link,
          date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          description: item.description.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...',
          thumbnail,
        };
      });
      
      return NextResponse.json({ articles });
    } else {
      throw new Error('Invalid RSS to JSON conversion');
    }
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return NextResponse.json({ articles: [] }, { status: 500 });
  }
}
