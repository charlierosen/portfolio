import Link from 'next/link';
import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const posts = [...allPosts]
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <section className="hero">
        <h1>Hi, I&apos;m Charlie.</h1>
        <p>
          Hello!
        </p>
        <div className="hero-media">
          <Image
            src="/images/me.jpg"
            alt="Your Name"
            width={160}
            height={160}
            priority
            className="hero-avatar"
          />
        </div>
        <div className="hero-actions">
          <a className="cta secondary" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            View CV
          </a>
          <a
            className="cta secondary"
            href="https://www.linkedin.com/in/charlie-rosen-54815424a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="cta secondary"
            href="https://github.com/charlierosen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link className="cta secondary" href="/projects">
            Projects
          </Link>
        </div>
      </section>

      <section>
        <p className="home-section-title">Latest writing</p>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <BlogCard key={post._id} post={post} priority={index < 2} />
          ))}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link className="cta secondary" href="/blog">
            Browse all posts →
          </Link>
        </div>
      </section>
    </div>
  );
}
