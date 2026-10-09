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

  // 1. Replace var(--muted) with var(--ink) in paragraphs (p, dd, and .desc div/spans if applicable).
  content = content.replace(/<p([^>]*)style=\{\{([^}]*)color:\s*["']var\(--muted\)["']([^}]*)\}\}/g, '<p$1style={{$2color: "var(--ink)"$3}}');
  content = content.replace(/<dd([^>]*)style=\{\{([^}]*)color:\s*["']var\(--muted\)["']([^}]*)\}\}/g, '<dd$1style={{$2color: "var(--ink)"$3}}');

  // Also catch lists if they had muted color. (The content lists use var(--ink) already).
  
  // Replace in other texts that might be paragraph-like. The user said "in all pages paragraph. dont apply var muted in paragraphs." 
  // Let's specifically target any <div> or <span> that is a description and uses var(--muted).
  // E.g. Works desc: <div style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
  content = content.replace(/<div([^>]*)style=\{\{([^}]*)color:\s*["']var\(--muted\)["']([^}]*)lineHeight:\s*1\.6([^}]*)\}\}/g, '<div$1style={{$2color: "var(--ink)"$3lineHeight: 1.6$4}}');

  // Let's also find paragraphs that didn't have muted, but just to be safe.
  
  // 2. Dont bold the projects list.
  // In `page.tsx` and maybe `projects/page.tsx`, projects are mapped.
  // The structure is project.title inside a span.
  // Let's look for: {project.title} inside a span with fontWeight: "bold"
  if (content.includes('project.title')) {
    content = content.replace(/<span([^>]*)style=\{\{([^}]*)fontWeight:\s*["']bold["']([^}]*)\}\}([^>]*)>\s*\{project\.title\}\s*<\/span>/g, '<span$1style={{$2$3}}$4>\n                      {project.title}\n                    </span>');
  }

  if (content !== originalContent) {
    // clean up any duplicate commas or trailing commas in styles from removing fontWeight
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/\{\{\s*,/g, '{{');
    content = content.replace(/,\s*\}\}/g, '}}');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
    filesModified++;
  }
});

console.log(`Finished updating ${filesModified} files.`);
