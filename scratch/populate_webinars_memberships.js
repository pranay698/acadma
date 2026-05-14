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

async function populateTabs() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // First, let's create the new sheets (tabs)
    console.log("Adding new tabs...");
    try {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        resource: {
          requests: [
            { addSheet: { properties: { title: "Webinars" } } },
            { addSheet: { properties: { title: "Memberships" } } }
          ]
        }
      });
      console.log("Successfully created 'Webinars' and 'Memberships' tabs.");
    } catch (e) {
      console.log("Tabs might already exist, proceeding to populate data. Error: " + e.message);
    }

    // Data for Webinars
    const webinarsData = [
      ["Title", "Image URL", "Date & Time", "Status text", "Price", "Category (upcoming/past)", "Registration/Payment URL"],
      ["test", "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80", "28 Jan 2026 04:55 PM to 05:25 PM", "Webinar lapsed", "Free", "past", ""],
      ["Republic Day Flash Sale - Courses at 26 Rs", "https://images.unsplash.com/photo-1532375810709-75b1d46d0312?auto=format&fit=crop&q=80", "26 Jan 2026 04:45 PM to 05:15 PM", "Webinar conducted", "Free", "past", ""]
    ];

    console.log("Populating Webinars tab...");
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Webinars!A1',
      valueInputOption: 'USER_ENTERED',
      resource: { values: webinarsData },
    });

    // Data for Memberships
    const membershipsData = [
      ["Plan ID", "Title", "Current Price", "Original Price", "Billing Text", "Badge", "Discount Text", "Razorpay URL"],
      ["monthly", "Monthly", 449, "", "Billed every month", "", "", ""],
      ["quarterly", "Quarterly", 999.5, 1999, "Billed quarterly - ₹999.5", "RECOMMENDED", "50% Discount", ""],
      ["yearly", "Yearly", 1925, 5500, "Billed yearly - ₹1925", "", "65% Discount", ""]
    ];

    console.log("Populating Memberships tab...");
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Memberships!A1',
      valueInputOption: 'USER_ENTERED',
      resource: { values: membershipsData },
    });

    console.log('Successfully populated all new tabs!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

populateTabs();
