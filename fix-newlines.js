const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Find all instances of literal \n in the HTML
const pattern = /onclick="openModal\([^)]+\)">\\n/g;
const matches = html.match(pattern);

if (matches) {
  console.log(`Found ${matches.length} instances of literal \\n`);

  // Replace all instances
  html = html.replace(/onclick="openModal\(([^)]+)\)">\\n\s*/g, 'onclick="openModal($1)">\n            ');

  // Write back
  fs.writeFileSync('index.html', html);
  console.log('Fixed all \\n issues!');
} else {
  console.log('No literal \\n found');
}
