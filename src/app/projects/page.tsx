import { allProjects } from 'contentlayer/generated';
import BlogCard from '@/components/BlogCard';

export const metadata = { title: 'Projects' };

export default function ProjectsIndex() {
  const projects = [...allProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      <section className="hero" style={{ marginBottom: '2rem' }}>
        <h1>Projects</h1>
      </section>
      <div className="blog-grid">
        {projects.map((project, index) => (
          <BlogCard key={project._id} post={project} priority={index < 4} />
        ))}
      </div>
    </div>
  );
}
