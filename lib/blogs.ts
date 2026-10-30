import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

export interface PostItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  topic?: string;
  author?: string;
  content: string;
}

/**
 * Returns all writing posts parsed from markdown files, sorted by date (newest first).
 */
export function getAllPosts(): PostItem[] {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOGS_DIR);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(BLOGS_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const slug = (data.slug || file.replace(/\.md$/, "")).toLowerCase();

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date ? String(data.date) : "",
        excerpt: data.excerpt || "",
        category: data.category || "",
        topic: data.topic || "",
        author: data.author || "Nabeen Budha",
        content,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));

  return posts;
}

/**
 * Returns a specific post by its slug.
 */
export function getPostBySlug(slug: string): PostItem | null {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug.toLowerCase());
  return post || null;
}

// Backward compatibility alias for any existing imports
export const getAllBlogs = getAllPosts;
export const getBlogBySlug = getPostBySlug;
