import Link from "next/link";
import Header from "@/components/Header";
import Prose from "@/components/Prose";
import EntryRow from "@/components/EntryRow";
import LinkList from "@/components/LinkList";
import Footer from "@/components/Footer";
import { introParagraphs, workItems, projectItems } from "@/lib/data";
import { getAllPosts } from "@/lib/blogs";

const POSTS_LIMIT_HOMEPAGE = 5;

export default function Home() {
  const posts = getAllPosts();
  const displayedPosts = posts.slice(0, POSTS_LIMIT_HOMEPAGE);
  const hasMorePosts = posts.length > POSTS_LIMIT_HOMEPAGE;

  return (
    <>
      {/* 1. Name and short intro */}
      <Header isHome />

      <main>
        <Prose>
          {introParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Prose>

        {/* 2. Projects */}
        <section id="projects" className="section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-label">
            Projects
          </h2>
          <div className="entries-list">
            {projectItems.map((project) => (
              <EntryRow
                key={project.title}
                title={project.title}
                date={project.period}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </section>

        {/* 3. Work */}
        <section id="work" className="section" aria-labelledby="work-heading">
          <h2 id="work-heading" className="section-label">
            Work
          </h2>
          <div className="entries-list">
            {workItems.map((item) => (
              <EntryRow
                key={item.title}
                title={item.title}
                date={item.period}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </section>

        {/* 4. Writing */}
        <section id="writing" className="section" aria-labelledby="writing-heading">
          <h2 id="writing-heading" className="section-label">
            Writing
          </h2>
          <div className="entries-list">
            {displayedPosts.map((post) => (
              <EntryRow
                key={post.slug}
                title={post.title}
                date={post.date}
                description={post.excerpt}
                link={`/writing/${post.slug}`}
              />
            ))}
          </div>
          {hasMorePosts && (
            <div className="all-writing-link-wrap">
              <Link href="/writing" className="all-writing-link">
                All writing ({posts.length}){" "}
                <span className="external-arrow">→</span>
              </Link>
            </div>
          )}
        </section>

        {/* 5. Elsewhere */}
        <section id="elsewhere" className="section" aria-labelledby="elsewhere-heading">
          <h2 id="elsewhere-heading" className="section-label">
            Elsewhere
          </h2>
          <LinkList />
        </section>
      </main>

      <Footer />
    </>
  );
}
