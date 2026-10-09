const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        results.push(filePath);
      }
    }
  });
  return results;
};

const appFiles = walk(path.join(__dirname, 'app'));
const compFiles = walk(path.join(__dirname, 'components'));
const allFiles = [...appFiles, ...compFiles];

let filesModified = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace h1 font size (24px to 28px)
  content = content.replace(/<h1([^>]*)style=\{\{([^}]*)fontSize:\s*["']24px["']([^}]*)\}\}/g, '<h1$1style={{$2fontSize: "28px"$3}}');
  
  // Note: h2 and h3 remain 18px, titles remain 15px bold.
  
  // Replace p font size (13px to 15px)
  content = content.replace(/<p([^>]*)style=\{\{([^}]*)fontSize:\s*["']13px["']([^}]*)\}\}/g, '<p$1style={{$2fontSize: "15px"$3}}');

  // Replace dd (paragraph) font size (13px to 15px)
  content = content.replace(/<dd([^>]*)style=\{\{([^}]*)fontSize:\s*["']13px["']([^}]*)\}\}/g, '<dd$1style={{$2fontSize: "15px"$3}}');

  // Replace span/div paragraphs (13px to 15px)
  content = content.replace(/<(span|div)([^>]*)style=\{\{([^}]*)fontSize:\s*["']13px["']([^}]*)\}\}/g, '<$1$2style={{$3fontSize: "15px"$4}}');

  // Replace lists (13px to 15px)
  content = content.replace(/<ul([^>]*)style=\{\{([^}]*)fontSize:\s*["']13px["']([^}]*)\}\}/g, '<ul$1style={{$2fontSize: "15px"$3}}');
  content = content.replace(/<li([^>]*)style=\{\{([^}]*)fontSize:\s*["']13px["']([^}]*)\}\}/g, '<li$1style={{$2fontSize: "15px"$3}}');

  // Handle any other text that might have been hardcoded to 13px before
  // Some links (a tags) in the sidebar might have been 13px, wait... user said "Paragraphs (e.g., Descriptions, body text, lists, and dates) were updated to 15px".
  // The script previously changed things to 13px using broad rules, let's just reverse all occurrences of fontSize: "13px" that are not explicitly subheadings or titles. Actually wait, some small text was 13px like dates or "view all" links or "Want to get in touch?". 
  // Before my script ran, "view all" was 13px. My script didn't touch it because it wasn't a p/h1/h2/span[muted] etc.
  // Wait, my script did match `span` with `color: var(--muted)`. So dates became 13px. That's fine, we are changing them to 15px.
  // We can just find all `fontSize: "13px"` and replace it with `15px` for elements like `a`, `span`, `div`, etc.
  content = content.replace(/<a([^>]*)style=\{\{([^}]*)fontSize:\s*["']13px["']([^}]*)\}\}/g, '<a$1style={{$2fontSize: "15px"$3}}');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
    filesModified++;
  }
});

console.log(`Finished updating ${filesModified} files.`);
