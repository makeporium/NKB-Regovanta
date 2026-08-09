const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let updated = content.replace(/NKB Mediservices/g, 'NKB Regovanta');
    updated = updated.replace(/nkbmediservices\.com/g, 'nkbregovanta.com');
    if (content !== updated) {
        fs.writeFileSync(file, updated, 'utf8');
        console.log('Updated ' + file);
    }
});
