import PostPreview from "@components/post-preview";
import { IPost } from '@interfaces/post';

interface IList {
	items: IPost[];
}

const List = ({ items }: IList) => (
	<div className="mt-5">
		{items.map((item: IPost, index: number) => (
			<PostPreview key={index} {...item} slug={'/blog/' + item.slug}/>
		))}
	</div>
)

export default List;