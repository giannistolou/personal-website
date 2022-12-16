import Footer from "@components/footer/Footer";
import LayoutWrapper from "@components/LayoutWrapper";
import defaultTheme from "@data/theme";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme={defaultTheme}>
			<Head>
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
			</Head>
			<LayoutWrapper>
				<Component {...pageProps} />
			</LayoutWrapper>
			<Footer />
		</ThemeProvider>
	);
}
