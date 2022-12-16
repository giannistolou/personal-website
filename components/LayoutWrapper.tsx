import Link from "next/link";
import { CodeIcon } from "./icons";
import SectionContainer from "./SectionContainer";

const LayoutWrapper = ({ children }: any) => {
	return (
		<SectionContainer>
			<div className="mx-auto my-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0">
				<div className="flex flex-col justify-between">
					<header className="flex items-center justify-between py-10">
						<div>
							<Link href="/" aria-label="">
								<div className="flex items-center justify-between">
									<div className="h-6 text-2xl font-semibold sm:block">
									<CodeIcon />
									</div>
								</div>
							</Link>
						</div>
						<div className="flex items-center text-base leading-5">
							<div className="hidden sm:block">
									<Link
								
										href={"/blog"}
										className="p-1 font-medium text-900 dark:text-gray-100 sm:p-4"
									>
										Blog
									</Link>
									<Link
								
								href={"/project"}
								className="p-1 font-medium text-900 dark:text-gray-100 sm:p-4"
							>
								Project
							</Link>
							</div>
						</div>
					</header>
					<main className="mb-auto">{children}</main>
				</div>
			</div>
		</SectionContainer>
	);
};

export default LayoutWrapper;
