import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Prose from "@/components/Prose";
import { getAllPosts, getPostBySlug } from "@/lib/blogs";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = `https://nabinbudha.com.np/writing/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Nabeen Budha"],
      images: [
        {
          url: "https://nabinbudha.com.np/profile.jpeg",
          width: 800,
          height: 800,
          alt: "Nabeen Budha",
        },
      ],
    },
  };
}

export default function WritingPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();
  const backToWritingHref = allPosts.length > 5 ? "/writing" : "/#writing";

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        

        <article>
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <time className="post-date">{post.date}</time>
          </header>

          <Prose>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children, node, ...props }) => {
                  const isExternal = href?.startsWith("http");
                  return (
                    <a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      {...props}
                    >
                      {children}
                      {isExternal && <span className="external-arrow">↗</span>}
                    </a>
                  );
                },
                img: ({ src, alt, node, ...props }) => {
                  let resolvedSrc = src || "";
                  if (
                    resolvedSrc &&
                    !resolvedSrc.startsWith("http://") &&
                    !resolvedSrc.startsWith("https://") &&
                    !resolvedSrc.startsWith("data:")
                  ) {
                    if (!resolvedSrc.startsWith("/")) {
                      resolvedSrc = `/${resolvedSrc}`;
                    }
                  }

                  return (
                    <img
                      src={resolvedSrc}
                      alt={alt || post.title}
                      loading="lazy"
                      className="prose-img"
                      {...props}
                    />
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </Prose>

          <div className="post-footer">
            <p>
              Prefer email? New posts also go out on{" "}
              <a
                href="https://bnabeen.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack <span className="external-arrow">↗</span>
              </a>
            </p>
            <p>
              <Link href={backToWritingHref} className="back-link">
                ← Back to writings
              </Link>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
