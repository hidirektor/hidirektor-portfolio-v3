import {NextResponse} from 'next/server';

export async function GET() {
  try {
    const rssUrl = 'https://medium.com/feed/@hidirektor';
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium articles');
    }

    const data = await response.json();
    
    if (data.status === 'ok') {
      const articles = data.items.map((item: any) => ({
        title: item.title,
        url: item.link,
        date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        description: item.description.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...', // Strip HTML and limit length
        thumbnail: item.thumbnail
      }));
      
      return NextResponse.json({ articles });
    } else {
      throw new Error('Invalid RSS to JSON conversion');
    }
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return NextResponse.json({ articles: [] }, { status: 500 });
  }
}
