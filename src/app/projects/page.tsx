import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';


export const metadata = { title: 'Projects' };


export default function ProjectsIndex() {
const projects = [...allProjects].sort((a,b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
return (
<div>
<h1>Projects</h1>
<ul>
{projects.map(p => (
<li key={p._id}>
<Link href={p.url}>{p.title}</Link>
{p.summary ? <p>{p.summary}</p> : null}
</li>
))}
</ul>
</div>
);
}