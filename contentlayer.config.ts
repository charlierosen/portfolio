// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string' },
    image: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
    published: { type: 'boolean', default: true }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\\.mdx$/, '')
    },
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\\.mdx$/, '')}`
    }
  }
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string' },
    repo: { type: 'string' }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\\.mdx$/, '')
    },
    url: {
      type: 'string',
      resolve: (doc) => `/projects/${doc._raw.sourceFileName.replace(/\\.mdx$/, '')}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  }
})
