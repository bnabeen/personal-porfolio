import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

export interface BlogItem {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
  topic?: string;
  readTime?: string;
  author?: string;
  content: string;
}

/**
 * Returns all blogs parsed from markdown files, sorted by date (newest first).
 */
export function getAllBlogs(): BlogItem[] {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOGS_DIR);
  const blogs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(BLOGS_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const slug = data.slug || file.replace(/\.md$/, "");

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date ? String(data.date) : "",
        excerpt: data.excerpt || "",
        category: data.category || "General",
        topic: data.topic || "",
        readTime: data.readTime || "",
        author: data.author || "Nabeen Budha",
        content,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));

  return blogs;
}

/**
 * Returns a specific blog post by its slug.
 */
export function getBlogBySlug(slug: string): BlogItem | null {
  const blogs = getAllBlogs();
  const blog = blogs.find((b) => b.slug === slug);
  return blog || null;
}
