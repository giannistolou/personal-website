import { ISection } from './section.d';

const Section = ({title, children}: ISection) => (
<section className="mt-5 mb-5">
	<>
	<h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white capitalize">
		{title}
	</h2>
	{children}
	</>
</section>)
export default Section;