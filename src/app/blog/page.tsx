import { allPosts } from 'contentlayer/generated';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog',
  description: 'Writing, notes, and project deep-dives.',
};

export default function BlogIndex() {
  const posts = [...allPosts]
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <section className="hero" style={{ marginBottom: '2rem' }}>
        <h1>Writing &amp; Notes</h1>
        <p>
          Long-form breakdowns, implementation details, and technical explorations. Click into any post to
          read the full write-up.
        </p>
      </section>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <BlogCard key={post._id} post={post} priority={index < 4} />
        ))}
      </div>
    </div>
  );
}
