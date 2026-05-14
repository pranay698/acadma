import { CourseDetail, allCoursesMap } from '../data';
import { google } from 'googleapis';

// Repository Pattern for Future-Proofing (PostgreSQL ready)
// Currently uses Google Sheets API, falls back to lib/data.ts if not configured.

export async function getGoogleSheetsDataForTab(range: string) {
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
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
    });

    return response.data.values;
  } catch (error) {
    console.error(`Google Sheets API Error for range ${range}:`, error);
    return null;
  }
}

export async function getGoogleSheetsData() {
  return getGoogleSheetsDataForTab('Pages!A2:K');
}

export interface WebinarData {
  id: string | number;
  title: string;
  image: string;
  date: string;
  status: string;
  price: string;
  type: string;
  registrationUrl?: string;
}

export async function getGoogleSheetsWebinars(): Promise<WebinarData[]> {
  const sheetRows = await getGoogleSheetsDataForTab('Webinars!A2:H');
  if (!sheetRows || sheetRows.length === 0) return [];
  
  return sheetRows.map((row: any, index: number) => ({
    id: index + 1,
    title: row[0] || '',
    image: row[1] || '',
    date: row[2] || '',
    status: row[3] || '',
    price: row[4] || '',
    type: row[5] || 'past',
    registrationUrl: row[6] || undefined,
  }));
}

export interface MembershipPlan {
  id: string;
  title: string;
  price: number;
  original: number | null;
  billed: string;
  badge: string | null;
  discount: string | null;
  razorpayUrl?: string;
}

export async function getGoogleSheetsMemberships(): Promise<MembershipPlan[]> {
  const sheetRows = await getGoogleSheetsDataForTab('Memberships!A2:H');
  if (!sheetRows || sheetRows.length === 0) return [];
  
  return sheetRows.map((row: any) => ({
    id: row[0] || '',
    title: row[1] || '',
    price: parseFloat(row[2]) || 0,
    original: row[3] ? parseFloat(row[3]) : null,
    billed: row[4] || '',
    badge: row[5] || null,
    discount: row[6] || null,
    razorpayUrl: row[7] || undefined,
  }));
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
