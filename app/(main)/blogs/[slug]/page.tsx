import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";

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
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Navigation Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8 no-underline"
        >
          <ArrowLeft size={16} /> Back to Blogs
        </Link>

        {/* Clean Header & Title Block */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-4">
            {post.title}
          </h1>
          {post.date && (
            <p className="text-neutral-500 text-sm sm:text-base font-normal m-0">
              {formatPublishDate(post.date)}
            </p>
          )}
        </header>

        {/* Focused Single-Column Document Layout */}
        <article className="prose prose-neutral max-w-none space-y-6 text-neutral-900 leading-relaxed text-base sm:text-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ node, ...props }) => (
                <p className="leading-relaxed text-base sm:text-lg text-neutral-800 m-0" {...props} />
              ),
              a: ({ node, href, children, ...props }) => {
                const isExternal = href?.startsWith("http");
                return (
                  <a
                    href={href}
                    className="font-normal text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors inline-flex items-baseline gap-0.5"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    {...props}
                  >
                    <span>{children}</span>
                    {isExternal && <span className="text-xs text-neutral-400 select-none">↗</span>}
                  </a>
                );
              },
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="w-full rounded-xl my-8 object-cover max-w-full h-auto"
                  alt={props.alt || "Post image"}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Clean Footer Navigation */}
        <footer className="pt-12 mt-16 border-t border-neutral-200 flex justify-between items-center text-sm">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 transition-colors no-underline font-medium"
          >
            <ArrowLeft size={16} /> All Blogs
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 transition-colors no-underline font-medium"
          >
            Get in touch →
          </Link>
        </footer>
      </div>
    </div>
  );
}
