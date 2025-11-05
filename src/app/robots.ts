import type { MetadataRoute } from 'next';


export default function robots(): MetadataRoute.Robots {
const indexable = process.env.NEXT_PUBLIC_INDEXABLE !== 'false';
const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
return {
rules: indexable
? { userAgent: '*', allow: '/' }
: { userAgent: '*', disallow: '/' },
sitemap: indexable ? `${site}/sitemap.xml` : undefined,
host: site
};
}