import Link from "next/link";
import { ReactNode } from "react";

export interface IItem {
	title: string;
	icon: ReactNode;
	url: string;
	label?: string;
	subtitle?: string;
}
const Item = ({ title, icon, label, url, subtitle }: IItem) => (
	<li>
		<Link
			target={"_blank"}
			href={url}
			className="flex flex-col items-start lg:items-center lg:flex-row  p-3 justify-content-between gap-2 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
		>
			<div className="flex flex-col gap-2 flex-1">
				{icon}
				{title && <h2 className="ml-3 font-bold">{title}</h2>}
				{subtitle && <span className="flex-1 ml-3 font-medium">{subtitle}</span>}
			</div>
			{label && (
				<span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
					{label}
				</span>
			)}
		</Link>
	</li>
);

export default Item;
