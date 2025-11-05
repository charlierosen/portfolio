# Portfolio

A React (Next.js) portfolio with a blog powered by Contentlayer + MDX.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

## Writing Blog Posts

1. Add a new `.mdx` file to `src/content/blog`.
2. Include frontmatter with at least `title`, `date`, and `image`:

    ```mdx
    ---
    title: Building a Design System
    date: 2025-01-12
    summary: Notes on setting up tokens, components, and documentation.
    image: /images/design-system.svg
    tags: [design, react]
    published: true
    ---
    ```

3. Place accompanying images under `public/images/`. Local paths (e.g. `/images/example.svg`) are served automatically.
4. Run `npm run dev` to regenerate Contentlayer types and see the new post.

Set `published: false` to draft the post without surfacing it in listings.

## Pages

- `/` – Hero introduction plus two-column blog grid.
- `/blog` – Full blog index with cards.
- `/blog/[slug]` – Individual MDX post with hero image.
- `/cv` – Link placeholder for your résumé (`public/cv.pdf`).
- `/projects` – Projects listing seeded via MDX.

## Deployment

Deploy for free on:

1. [Vercel](https://vercel.com/) – zero-config for Next.js, Contentlayer builds work out-of-the-box.
2. [Netlify](https://www.netlify.com/) – use the Next.js adapter; free tier includes build minutes and CDN.
3. [Cloudflare Pages](https://pages.cloudflare.com/) – deploy static output via `next-on-pages` or opt into their full-stack Next.js (beta) runtime.

Each service connects directly to GitHub and redeploys on push. For Contentlayer, ensure the `public/` images and `src/content` directory are committed so they are available during builds.
