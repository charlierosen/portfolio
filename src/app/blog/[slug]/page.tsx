import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import MDXComponents from '@/components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Prose from '@/components/Prose';

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = allPosts.find((entry) => entry.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((entry) => entry.slug === params.slug);
  if (!post) return notFound();

  const Component = useMDXComponent(post.body.code);

  return (
    <article>
      {post.image && (
        <div className="post-hero">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            priority
          />
        </div>
      )}
      <h1>{post.title}</h1>
      <p>
        <small>
          {new Date(post.date).toLocaleDateString()}{' '}
          {post.tags?.length ? (
            <>
              ·{' '}
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </>
          ) : null}
        </small>
      </p>
      <Prose>
        <Component components={MDXComponents as any} />
      </Prose>
    </article>
  );
}
