import { IPost } from "@interfaces/post";
import Image from "next/image";

const PostPreview = ({ slug, thumbnailUrl, title, description, tags }: IPost) => (
	<a
		href={slug}
		className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5"
	>
		<>
			{thumbnailUrl &&
				<Image
					className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg md:w-48 w-full aspect-square"
					src={thumbnailUrl}
					alt={title}
					height={300}
					width={300}
				/>}

			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
				<div className="flex flex-row flex-wrap gap-y-2 gap-x-2">
					{tags?.map((tag: string, index: number) => (<span
						key={index}
						className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
						{tag}
					</span>))}
				</div>
			</div>
		</>

	</a>
)

export default PostPreview;