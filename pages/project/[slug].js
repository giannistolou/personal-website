import Post from '@components/post'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('projects'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('projects',
    slug + '.mdx'), {remarkPlugins: [remarkGfm]}, 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  const data = {...frontMatter, slug}
  return {
    props: {
      data,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default Post;
