import { Email } from "@components/social-media-icons";
import { person, socialMedia } from "@data/person";
import { website } from '@data/website';
import { IPost } from "@interfaces/post";
import moment from "moment";
import { MDXRemote } from "next-mdx-remote";
import { ArticleJsonLd } from "next-seo";

interface IPostProps {
	data: IPost;
	mdxSource: any;
}

const Post = ({ data: { title, date, tags, thumbnailUrl, description, slug }, mdxSource }: IPostProps) => {
	const presentationDate = date ? moment.unix(date).format('ll') : '';
	const showDate = presentationDate !== 'Invalid date' && date;
	return (
		<>
			<ArticleJsonLd
				type="BlogPosting"
				url={`${website.domainLink}/blog/${slug}`}
				title={title}
				images={thumbnailUrl ? [`${website.domainLink}/${thumbnailUrl}`] : []}
				datePublished={showDate ? presentationDate : ''}
				authorName={`${person.firstName} ${person.lastName}`}
				description={description}
			/>
			<article className="article">
				<h1 className="mb-5">{title}</h1>
				{showDate &&
					<p className="mb-5">{presentationDate}</p>
				}

				<div className="flex flex-row flex-wrap gap-y-2 gap-x-2 mb-5">
					{tags.map((tag: string, index: number) => (<span
						key={index}
						className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
						{tag}
					</span>))}
				</div>
				<MDXRemote {...mdxSource} />
			</article>
			{socialMedia?.email &&
				<div className="border-2 p-5 border-gray-800">
					<h2 className="mb-2 text-lg font-bold text-zinc-800 dark:text-white text-center">Any thoughts? Feel free to share them with me!</h2>
					<Email href={socialMedia.email} />
				</div>}</>
	)

}
export default Post;