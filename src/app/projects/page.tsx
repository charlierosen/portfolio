import type { Route } from 'next';
import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';

export const metadata = { title: 'Projects' };

export default function ProjectsIndex() {
  const projects = [...allProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      <section className="hero" style={{ marginBottom: '2rem' }}>
        <h1>Projects</h1>
        <p>
          Selected builds, experiments, and long-lived products. Click through for write-ups, repos, and
          live demos where available.
        </p>
      </section>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <Link href={project.url as Route}>{project.title}</Link>
            {project.summary ? <p>{project.summary}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
