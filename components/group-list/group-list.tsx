import Item, { IItem } from "./item";

interface IGroupList {
	title: string;
	data: IItem[];
}
const GroupList = ({ title, data }: IGroupList) => {
	return (
		<div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
			<h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
				{title}
			</h5>
			<ul className="my-4 space-y-3">
				{data.map((item, index) => (
					<Item
						key={index}
						title={item.title}
						icon={item.icon}
						label={item.label}
						url={item.url}
					/>
				))}
			</ul>
		</div>
	);
};

export default GroupList;
