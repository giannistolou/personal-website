import GroupList from "@components/group-list/group-list";
import PostPreview from "@components/post-preview";
import PrimaryLink from "@components/primary-link";
import ProjectItem from "@components/project-item";
import Section from "@components/section";
import { Email, Github, Instagram, Linkedin, Twitter } from "@components/social-media-icons";
import { person, socialMedia, work } from "@data/person";
import { IPost } from '@interfaces/post';

interface IHome {
	posts: IPost[];
	projects: IPost[];
}

const Home = ({ posts, projects }: IHome) => {
	return (
		<>
			<div className="sm:text-center lg:text-left">
				<h1 className="mb-2 text-4xl font-bold text-zinc-800 dark:text-white capitalize">
					{person.firstName} {person.lastName}
				</h1>
				<h2 className="block text-black-300 dark:white-300 text-3xl">
					{person.username}
				</h2>
				<p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
					{person.role}
				</p>
			</div>
			<section className="space-y-4 text-zinc-500 dark:text-slate-300 leading-lose">
				<p className="my-4 leading-loose">{person.bio}</p>
			</section>
			<div className="mt-8 flex flex-wrap gap-4 text-center">
				{socialMedia?.linkedin &&
					<Linkedin href={socialMedia.linkedin} />
				}
				{socialMedia?.instagram && <Instagram href={socialMedia.instagram} />}
				{socialMedia?.twitter && <Twitter href={socialMedia.twitter} />}
				{socialMedia?.email && <Email href={socialMedia.email} />}
				{socialMedia?.github && <Github href={socialMedia.github} />}
			</div>
			<section className="mt-5 mb-5">
				<GroupList title="Working Experience" data={work} />
			</section>
			<Section title="Projects">
				<>
					{projects.map((project: IPost, index: number) => (
						<ProjectItem  {...project} slug={`/project/${project.slug}`} key={index} />
					))}
					{projects && projects.length > 1 && (
						<div className="flex justify-center">
							<PrimaryLink title="See more projects" url="/project" />
						</div>)}
				</>
			</Section>
			<Section title="blog">
				<>
					{posts.map((post: IPost, index: number) => (
						<PostPreview key={index} {...post} slug={'/blog/' + post.slug} />
					))}
					{posts && posts.length > 1 && (
						<div className="flex justify-center">
							<PrimaryLink title="See more posts" url="/blog" />
						</div>)}</>
			</Section>
		</>
	);
}

export default Home;