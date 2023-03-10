import fs from 'fs';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import path from 'path';
import List from '../../screens/list';

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('projects'))

  let projects = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      ...frontMatter,
      slug: filename.split('.')[0]
    }
  })


  return {
    props: {
      items: projects
    }
  }
}

const ListPage = ({ items }) => {
  return (
    <>
      <NextSeo
        title={"Project"}
      />
      <List items={items} path={'project'}/>
    </>
  )
}

export default ListPage;