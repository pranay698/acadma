import { CourseDetail, allCoursesMap } from '../data';
import { google } from 'googleapis';

// Repository Pattern for Future-Proofing (PostgreSQL ready)
// Currently uses Google Sheets API, falls back to lib/data.ts if not configured.

export async function getGoogleSheetsData() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    return null;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Fetch Pages Tab
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Pages!A2:K', // Assuming Headers are in row 1
    });

    return response.data.values;
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return null;
  }
}

export async function getAllCourses(): Promise<CourseDetail[]> {
  const sheetRows = await getGoogleSheetsData();

  if (!sheetRows || sheetRows.length === 0) {
    // Fallback to static data map
    return Object.values(allCoursesMap);
  }

  // Map sheet rows to CourseDetail objects
  return sheetRows.map((row: any) => {
    // Expected Columns: Slug, Page Type, Redirect URL, Title, Meta Description, Cover Image URL, Video Embed URL, What You Will Learn Images, Button Text, Button URL, Is Active
    return {
      slug: row[0]?.replace('/courses/', '') || '',
      title: row[3] || 'Untitled Course',
      description: row[4] || '',
      thumbnailImage: row[5] || '',
      url: `https://www.acadma.com/courses/${row[0]?.replace('/courses/', '') || ''}`,
      courseType: 'Online',
      price: 0,
      discountPrice: 0,
      highlights: [],
      modules: [],
      faq: [],
      razorpayUrl: row[9] || undefined,
      // Custom mapping for redirects / page types can be handled here or higher up
    } as CourseDetail;
  }).filter((c: CourseDetail) => c.slug);
}

export async function getCourseBySlug(slug: string): Promise<CourseDetail | null> {
  const allCourses = await getAllCourses();
  return allCourses.find(c => c.slug === slug) || null;
}
