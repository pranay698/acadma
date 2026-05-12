const fs = require('fs');
const { allCoursesMap } = require('./data.js');

const rows = [
  ['Slug', 'Page Type', 'Redirect URL', 'Title', 'Meta Description', 'Cover Image URL', 'Video Embed URL', 'What You Will Learn Images', 'Button Text', 'Button URL', 'Is Active']
];

for (const key in allCoursesMap) {
  const course = allCoursesMap[key];
  rows.push([
    `/courses/${course.slug}`,
    'Content',
    '', // Redirect URL
    course.title,
    course.description || '', // Meta Description
    course.thumbnailImage || '', // Cover Image URL
    '', // Video Embed URL
    '', // What You Will Learn Images
    'Enroll Now', // Button Text
    course.razorpayUrl || '', // Button URL
    'TRUE' // Is Active
  ]);
}

const csvContent = rows.map(e => e.map(item => `"${(item || '').replace(/"/g, '""')}"`).join(",")).join("\n");
fs.writeFileSync('scratch/seed_data.csv', csvContent);
console.log('CSV exported to scratch/seed_data.csv');
