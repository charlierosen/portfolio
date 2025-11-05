import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';
import MDXComponents from '@/components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Prose from '@/components/Prose';


export async function generateStaticParams() {
return allProjects.map(p => ({ slug: p.slug }));
}


export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
const proj = allProjects.find(p => p.slug === params.slug);
if (!proj) return {};
return { title: proj.title, description: proj.summary };
}


export default function ProjectPage({ params }: { params: { slug: string } }) {
const proj = allProjects.find(p => p.slug === params.slug);
if (!proj) return notFound();
const Component = useMDXComponent(proj.body.code);
return (
<article>
<h1>{proj.title}</h1>
{proj.repo ? (<p><a href={proj.repo} target="_blank">Source</a></p>) : null}
<Prose>
<Component components={MDXComponents as any} />
</Prose>
</article>
);
}