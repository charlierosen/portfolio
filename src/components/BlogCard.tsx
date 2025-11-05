import Image from 'next/image';
import Link from 'next/link';
import type { Post } from 'contentlayer/generated';

type BlogCardProps = {
  post: Post;
  priority?: boolean;
};

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  const coverImage = post.image ?? '/images/placeholder.svg';
  const formattedDate = new Date(post.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link href={post.url} className="blog-card">
      <div className="blog-card__image">
        <Image
          src={coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
        />
      </div>
      <div className="blog-card__body">
        <span className="blog-card__meta">{formattedDate}</span>
        <h3 className="blog-card__title">{post.title}</h3>
        {post.summary && <p className="blog-card__summary">{post.summary}</p>}
      </div>
    </Link>
  );
}
