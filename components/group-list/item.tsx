import Link from "next/link";
import { ReactNode } from "react";

export interface IItem {
	title: string;
	icon: ReactNode;
	url: string;
	label?: string;
}
const Item = ({ title, icon, label, url }: IItem) => (
	<li>
		<Link
		target={"_blank"}
			href={url}
			className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
		>
			{icon}
			<span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
			{label && (
				<span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
					{label}
				</span>
			)}
		</Link>
	</li>
);

export default Item;
