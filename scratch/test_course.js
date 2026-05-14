const fs = require('fs');
const envContent = fs.readFileSync('.env.local', 'utf-8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)="?(.*?)"?$/);
  if (match) {
    process.env[match[1]] = match[2];
  }
});

const { google } = require('googleapis');

async function testFetch() {
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
    range: 'Pages!A2:K',
  });
  
  const rows = response.data.values || [];
  const courses = rows.map((row) => {
    return {
      slug: row[0]?.replace('/courses/', '') || '',
      title: row[3] || 'Untitled Course',
      description: row[4] || '',
    };
  });
  
  const found = courses.find(c => c.slug === 'Basic-Advanced-Crochet-Masterclass');
  console.log("Found:", found);
}
testFetch();
