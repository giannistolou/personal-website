import Link from "next/link";

const Footer = () => (
	<footer className="p-4 bg-white mt-10 rounded-lg shadow md:flex md:items-center justify-center md:p-6 dark:bg-gray-800 text-center">
		<span>Made with ❤️ <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500 no-underline" href="https://github.com/giannistolou">
			giannistolou
		</Link></span>

	</footer>
)

export default Footer;