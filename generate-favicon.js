const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'public', 'profile.jpeg');
const svgPath = path.join(__dirname, 'public', 'icon.svg');

const base64Image = fs.readFileSync(imgPath).toString('base64');
const dataUri = `data:image/jpeg;base64,${base64Image}`;

const svgContent = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleView">
      <circle cx="128" cy="128" r="128" />
    </clipPath>
  </defs>
  <image href="${dataUri}" width="256" height="256" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>
`.trim();

fs.writeFileSync(svgPath, svgContent);
console.log('Successfully created public/icon.svg');
