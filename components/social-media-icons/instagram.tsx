import { InstagramIcon } from "@components/icons";
import Link from "next/link";
import { ISocialMediaIconsProp } from "./social-media-icons.d";


const Instagram = ({ href }: ISocialMediaIconsProp) => (
	<Link
		className="focusable mr-2 flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-rose-500 py-2 px-2.5 
		font-medium text-white shadow-lg shadow-rose-500/10 
		transition selection:bg-white/30 hover:bg-rose-500/80 
		hover:shadow-rose-500/5 
		focus:ring-rose-500/40 
		dark:bg-rose-400 
		dark:text-zinc-900 dark:shadow-rose-400/10 
		dark:selection:bg-zinc-900/30 
		dark:hover:bg-rose-400/80 dark:hover:shadow-blue-400/5 
		dark:focus:ring-rose-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
		href={href}
		rel="noreferrer"
		target="_blank"
	>
		<InstagramIcon />
		<span className="hidden sm:inline">Instagram</span>
	</Link>
);

export default Instagram;
