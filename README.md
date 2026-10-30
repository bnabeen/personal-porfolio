# Nabeen Budha — Personal Website

Minimal, single-column personal website built with Next.js 14, React 18, and CSS design tokens. Follows system dark/light mode with zero client JavaScript.

## How to run

1. `npm install`
2. `npm run dev` and open http://localhost:3000 (or `npm run build && npm start` for production).

## How to add a post

Create a new markdown file in `content/blogs/<lowercase-slug>.md` with front matter (`title`, `slug`, `date`, `excerpt`). The post will automatically appear on the home page and at `/writing/<lowercase-slug>`.
