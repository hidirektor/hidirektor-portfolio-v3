import {NextResponse} from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'linkedin.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return NextResponse.json({ posts: data.posts });
  } catch (error) {
    console.error('Error reading LinkedIn data:', error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
