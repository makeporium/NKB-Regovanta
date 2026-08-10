const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

const findStr = "/brain/824d3244-b01e-4505-a26c-5a6cd125c95a/";
const replaceStr = "/assets/brain/";

let updatedCount = 0;

files.forEach(file => {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(findStr)) {
    content = content.split(findStr).join(replaceStr);
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Total files updated: ${updatedCount}`);
