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
          Software engineer at Orbis Investments, with a 1st class MPhys in Physics from
          the University of Oxford. I work across the full stack (C#/.NET, React/TypeScript,
          Python) and have a particular interest in quantitative finance, machine learning,
          and astrophysics research. Currently building data pipelines, internal tooling,
          and exploring momentum-based trading strategies on the side.
        </p>
        <div className="hero-media">
          <Image
            src="/images/rose.png"
            alt="Charlie Rosen"
            width={100}
            height={100}
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
          <a className="cta secondary" href="mailto:charlierosen29@gmail.com">
            Email
          </a>
        </div>
      </section>

      <section>
        <p className="home-section-title">Writing</p>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <BlogCard key={post._id} post={post} priority={index < 3} />
          ))}
        </div>
      </section>
    </div>
  );
}
