const fs = require('fs');
const path = require('path');

const dir = 'src';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/#FF3366/g, '#64FFDA');
  content = content.replace(/#00FFCC/g, '#CCD6F6');
  content = content.replace(/#0B0914/g, '#0A192F');
  content = content.replace(/#151226/g, '#112240');
  content = content.replace(/#1F1A38/g, '#233554');
  content = content.replace(/rgba\(255,51,102,/g, 'rgba(100,255,218,');
  content = content.replace(/rgba\(0,\s*255,\s*204,/g, 'rgba(204,214,246,');
  content = content.replace(/rgba\(255,\s*51,\s*102,/g, 'rgba(100,255,218,');
  fs.writeFileSync(file, content);
});
console.log('Theme updated successfully!');
