import * as path from 'node:path'
import createMDX from '@next/mdx'
import { withContentlayer } from 'next-contentlayer'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  }
})

const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.resolve.alias['contentlayer/generated'] = path.join(
        process.cwd(),
        '.contentlayer/generated'
      )
      return config
    },
  }

export default withContentlayer(withMDX(nextConfig))
