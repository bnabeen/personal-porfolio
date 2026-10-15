import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BackButton from "@/components/BackButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import NewsletterSection from "@/components/NewsletterSection";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: `${post.title} | Nabeen Budha`,
    description: post.excerpt,
  };
}

function formatPublishDate(dateStr?: string) {
  if (!dateStr) return "";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const monthIndex = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, monthIndex, day);
      const formatted = d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return `Published ${formatted}`;
    }
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const formatted = d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return `Published ${formatted}`;
    }
  } catch {}
  return dateStr.startsWith("Published") ? dateStr : `Published ${dateStr}`;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const allBlogs = getAllBlogs();
  const currentIndex = allBlogs.findIndex(b => b.slug === params.slug);
  const post = currentIndex !== -1 ? allBlogs[currentIndex] : null;

  if (!post) {
    notFound();
  }
  
  const prevPost = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;

  return (
    <div className="w-full bg-bg text-ink min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Navigation Back Link */}
        <BackButton href="/blogs" label="Back to Blogs" style={{ marginBottom: "32px" }} />

        {/* Clean Header & Title Block */}
        <header className="mb-10 sm:mb-12">
          <h1 className="font-bold tracking-tight text-ink leading-[1.15] mb-4" style={{ fontSize: "28px" }}>
            {post.title}
          </h1>
          {post.date && (
            <p className="text-muted text-sm sm:text-base font-normal m-0">
              {formatPublishDate(post.date)} {post.category && `· ${post.category}`}
            </p>
          )}
        </header>

        {/* Focused Single-Column Document Layout */}
        <article className="prose dark:prose-invert max-w-none space-y-6 text-ink leading-relaxed text-base sm:text-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ node, ...props }) => (
                <p className="leading-relaxed text-base sm:text-lg text-ink m-0" {...props} />
              ),
              a: ({ node, href, children, ...props }) => {
                const isExternal = href?.startsWith("http");
                return (
                  <a
                    href={href}
                    className="font-normal text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors inline-flex items-baseline gap-0.5"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    {...props}
                  >
                    <span>{children}</span>
                    {isExternal && <span className="text-xs text-muted select-none">↗</span>}
                  </a>
                );
              },
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="w-full my-8 object-cover max-w-full h-auto"
                  style={{ borderRadius: "4px", border: "1px solid var(--line)" }}
                  alt={props.alt || "Post image"}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Newsletter Section */}
        <NewsletterSection style={{ marginTop: "48px" }} />

        {/* Clean Footer Navigation */}
        <footer className="pt-8 flex justify-between items-center text-sm">
          {prevPost ? (
            <Link
              href={`/blogs/${prevPost.slug}`}
              className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors no-underline font-medium"
            >
              <ArrowLeft size={16} /> Previous
            </Link>
          ) : (
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors no-underline font-medium"
            >
              <ArrowLeft size={16} /> All Blogs
            </Link>
          )}
          
          {nextPost && (
            <Link
              href={`/blogs/${nextPost.slug}`}
              className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors no-underline font-medium"
            >
              Next <ArrowRight size={16} />
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
}
