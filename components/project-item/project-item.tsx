import { IPost } from "@interfaces/post";
import Link from "next/link";
	
const ProjectItem = ({ title, description, slug }: IPost) => (
	<Link href={slug}>
	<div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full mb-5 hover:bg-gray-100 dark:hover:bg-gray-700">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
		<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{description}
		</p>
	</div>
	</Link>
);

export default ProjectItem;
