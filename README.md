# Portfolio

Personal portfolio site built with Next.js, MDX, and Contentlayer.

## Running locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Other commands

```bash
# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Adding content

- **Blog posts**: Add `.mdx` files to `src/content/blog/`. Include frontmatter with `title`, `date`, and optionally `summary`, `image`, `tags`, and `published`.
- **Projects**: Add `.mdx` files to `src/content/projects/`. Include frontmatter with `title`, `date`, and optionally `summary` and `repo`.
- **CV**: Replace `public/cv.pdf` with your latest CV.
- **Images**: Place images in `public/images/` and reference them as `/images/filename.png`.

Set `published: false` in blog post frontmatter to draft without publishing.

## Deployment

Deployed on Vercel. Pushes to `main` trigger automatic redeployment.
