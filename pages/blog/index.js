import fs from 'fs';
import matter from 'gray-matter';
import { sortBy } from "lodash";
import { NextSeo } from 'next-seo';
import path from 'path';
import List from '../../screens/list';

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  let posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      ...frontMatter,
      slug: filename.split('.')[0]
    }
  })
  posts = sortBy(posts, ['date']).reverse();
  return {
    props: {
		items: posts
    }
  }
}

const ListPage = ({ items }) => {
  return(
  <>
  			<NextSeo
				title={"Blog"}
			/>
      <List items={items} path={'blog'}/>
      </>
  )
}
export default ListPage;