import PostPreview from "@components/post-preview";
import { IPost } from '@interfaces/post';

interface IList {
	items: IPost[];
	path: string;
}

const List = ({ items, path }: IList) => (
	<div className="mt-5">
		{items.map((item: IPost, index: number) => (
			<PostPreview key={index} {...item} slug={`/${path}/` + item.slug}/>
		))}
	</div>
)

export default List;