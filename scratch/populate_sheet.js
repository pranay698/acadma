const fs = require('fs');
const { google } = require('googleapis');

// Parse .env.local manually
const envContent = fs.readFileSync('.env.local', 'utf-8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)="?(.*?)"?$/);
  if (match) {
    process.env[match[1]] = match[2];
  }
});

async function populateSheet() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Read the CSV file
    const csvData = fs.readFileSync('scratch/seed_data.csv', 'utf-8');
    const rows = csvData.split('\n').map(row => {
        // Basic CSV parsing
        let matches = [];
        let inQuotes = false;
        let currentString = "";
        for (let i = 0; i < row.length; i++) {
          let char = row[i];
          if (char === '"' && row[i+1] === '"') {
            currentString += '"';
            i++;
          } else if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            matches.push(currentString);
            currentString = "";
          } else {
            currentString += char;
          }
        }
        matches.push(currentString);
        return matches;
    });

    console.log(`Writing ${rows.length} rows to Google Sheet...`);

    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Pages!A1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: rows,
      },
    });

    console.log('Successfully populated Google Sheet!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

populateSheet();
