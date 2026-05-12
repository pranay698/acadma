import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
  try {
    // Revalidate all pages under /courses to purge the cache
    revalidatePath('/courses/[slug]', 'page');
    revalidatePath('/'); // Revalidate home page as well
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ revalidated: false, message: 'Error revalidating' }, { status: 500 });
  }
}
