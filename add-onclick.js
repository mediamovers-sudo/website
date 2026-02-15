const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Map of image filenames to member IDs (lowercase, no spaces)
const imageToId = {
  'Pratik.jpg': 'pratik',
  'Sunil.jpg': 'sunil',
  'Pratikhya.jpg': 'pratikhya',
  'Rudra.jpg': 'rudra',
  'Subham.jpg': 'subham',
  'Aniruddha.jpg': 'aniruddha',
  'Manoswini.jpg': 'manoswini',
  'Adarsh.jpg': 'adarsh',
  'Kartik.jpg': 'kartik',
  'Subhankhi.jpg': 'subhankhi',
  'Bharat.png': 'bharat',
  'Sandeep.jpg': 'sandeep',
  'Maheswar.jpg': 'maheswar',
  'Hounouvi.jpg': 'hounouvi',
  'Akhil.jpg': 'akhil',
  'Priyanka.jpg': 'priyanka',
  'Shivanshi.jpg': 'shivanshi',
  'ARPITA.jpg': 'arpita',
  'Subhransu.jpg': 'subhransu'
};

// Replace each team card that doesn't already have clickable class
Object.entries(imageToId).forEach(([filename, id]) => {
  const regex = new RegExp(`<div class="team-card">\\s*<img src="assets/${filename.replace('.', '\\.')}`, 'g');
  html = html.replace(regex, `<div class="team-card clickable" onclick="openModal('${id}')">\\n            <img src="assets/${filename}`);
});

// Write the updated HTML
fs.writeFileSync('index.html', html);
console.log('Successfully added onclick to all remaining team cards!');
