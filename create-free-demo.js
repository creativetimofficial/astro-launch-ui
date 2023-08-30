const fs = require('fs-extra');

const originalAppPath = './src/pages/';
const newAppPath = './src/pagesFree/';
const pagesToKeep = ['about', 'landing', 'index', 'login', 'signup', '404'];

// Ensure the newAppPath exists, or create it if not
fs.ensureDirSync(newAppPath);

// Copy only the wanted pages to the new app
pagesToKeep.forEach(page => {
  const sourcePagePath = `${originalAppPath}${page}.astro`;
  const destinationPagePath = `${newAppPath}${page}.astro`;

  fs.copySync(sourcePagePath, destinationPagePath);
});

console.log('Free Version is ready!');
