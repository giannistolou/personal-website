import { GithubIcon } from "@components/icons";
import Link from "next/link";
import { ISocialMediaIconsProp } from "./social-media-icons.d";


const Twitter = ({ href }: ISocialMediaIconsProp) => (
	<Link
		className="focusable mr-2 flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-slate-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-slate-500/10 transition selection:bg-white/30 hover:bg-slate-500/80 hover:shadow-slate-500/5 focus:ring-slate-500/40 dark:bg-slate-400 dark:text-zinc-900 dark:shadow-slate-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-slate-400/80 dark:hover:shadow-slate-400/5 dark:focus:ring-slate-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
		href={href}
		rel="noreferrer"
		target="_blank"
	>
		<GithubIcon />
		<span className="hidden sm:inline">Github</span>
	</Link>
);

export default Twitter;
