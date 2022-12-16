import fs from 'fs';
import matter from 'gray-matter';
import { sortBy } from 'lodash';
import path from 'path';
import HomeScreen from "../screens/index";

export const getStaticProps = async () => {
  let files = fs.readdirSync(path.join('posts'))

  let posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      ...frontMatter,
      slug: filename.split('.')[0]
    }
  })
  files = fs.readdirSync(path.join('projects'));

  let projects = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      ...frontMatter,
      slug: filename.split('.')[0]
    }
  })
  projects = projects.splice(0,2);
  posts = sortBy(posts, ['date']).reverse().splice(0, 2);

  return {
    props: {
      projects,
      posts
    }
  }
}

export default HomeScreen